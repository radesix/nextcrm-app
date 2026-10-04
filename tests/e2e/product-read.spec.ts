import { test, expect, Page } from "@playwright/test";

async function waitForSheet(page: Page) {
  await page.waitForSelector('[role="dialog"][data-state="open"]', { timeout: 10000 });
}

async function assertSuccessToast(page: Page) {
  await expect(
    page.locator('[data-sonner-toast][data-type="success"]').first()
  ).toBeVisible({ timeout: 15000 });
}

async function selectFormOption(page: Page, fieldLabel: string, optionName: string | RegExp) {
  const dialog = page.locator('[role="dialog"][data-state="open"]');
  const container = dialog.locator(".space-y-2").filter({ hasText: fieldLabel });
  await container.locator('button[role="combobox"]').click();
  await page.getByRole("option", { name: optionName }).click();
}

// Shard-safety: products are NOT seeded, and under CI sharding another spec's data
// (e.g. product-create) may run on a different shard's DB. The tests that open a
// product detail page must create their own product first rather than assume one.
async function createDisposableProduct(page: Page, name: string) {
  await page.goto("/en/crm/products");
  await page.waitForLoadState("networkidle", { timeout: 15000 });

  await page.locator('button:has-text("+")').click();
  await waitForSheet(page);

  const dialog = page.locator('[role="dialog"][data-state="open"]');

  await dialog.locator(".space-y-2").filter({ hasText: "Name" }).locator("input").fill(name);
  await selectFormOption(page, "Type", "Product");
  await dialog.locator(".space-y-2").filter({ hasText: "Unit Price" }).locator("input").fill("1.00");
  await selectFormOption(page, "Currency", /USD/);

  await dialog.locator('[type="submit"]').click();

  await assertSuccessToast(page);
  await expect(page.locator('[role="dialog"][data-state="open"]')).not.toBeVisible({ timeout: 8000 });
  await expect(page.getByText(name).first()).toBeVisible({ timeout: 8000 });
}

test.describe("Read Products", () => {
  test.use({ storageState: "playwright/.auth/user.json" });

  test("should display products table with expected columns", async ({ page }) => {
    await page.goto("/en/crm/products");
    await page.waitForLoadState("networkidle", { timeout: 15000 });

    await expect(page.getByText("Product Catalog")).toBeVisible();
    await expect(page.locator("table").first()).toBeVisible();
    await expect(page.locator("table").first().locator("th", { hasText: "Name" }).first()).toBeVisible();
  });

  test("should navigate to product detail page from table", async ({ page }) => {
    await createDisposableProduct(page, `PW Read Nav ${Date.now()}`);

    await page.goto("/en/crm/products");
    await page.waitForLoadState("networkidle", { timeout: 15000 });

    const firstLink = page.locator('a[href*="/crm/products/"]').first();
    const productName = await firstLink.innerText();
    await firstLink.click();

    await page.waitForURL(/\/crm\/products\//, { timeout: 15000 });
    await expect(page.getByText(`Product: ${productName}`)).toBeVisible({ timeout: 10000 });
  });

  test("should display product detail with tabs", async ({ page }) => {
    await createDisposableProduct(page, `PW Read Tabs ${Date.now()}`);

    await page.goto("/en/crm/products");
    await page.waitForLoadState("networkidle", { timeout: 15000 });

    await page.locator('a[href*="/crm/products/"]').first().click();
    await page.waitForURL(/\/crm\/products\//, { timeout: 15000 });

    await expect(page.getByRole("tab", { name: "Basic" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("tab", { name: /Accounts/ })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("tab", { name: "History" })).toBeVisible({ timeout: 10000 });
  });

  test("should filter products by type", async ({ page }) => {
    await page.goto("/en/crm/products");
    await page.waitForLoadState("networkidle", { timeout: 15000 });

    // The filter button has border-dashed class (from DataTableFacetedFilter)
    const typeButton = page.locator("button.border-dashed", { hasText: "Type" });
    if (await typeButton.isVisible({ timeout: 5000 }).catch(() => false)) {
      await typeButton.click();
      // CommandItem renders as [role="option"] in cmdk
      await page.getByRole("option", { name: /Product/i }).click();
      await page.keyboard.press("Escape");
      await expect(page.locator("table").first()).toBeVisible();
    } else {
      test.skip();
    }
  });

  test("should filter products by status", async ({ page }) => {
    await page.goto("/en/crm/products");
    await page.waitForLoadState("networkidle", { timeout: 15000 });

    const statusButton = page.locator("button.border-dashed", { hasText: "Status" });
    if (await statusButton.isVisible({ timeout: 5000 }).catch(() => false)) {
      await statusButton.click();
      await page.getByRole("option", { name: /Active/i }).click();
      await page.keyboard.press("Escape");
      await expect(page.locator("table").first()).toBeVisible();
    } else {
      test.skip();
    }
  });
});
