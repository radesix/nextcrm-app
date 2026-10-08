# Changelog

All notable changes to NextCRM are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.24.0](https://github.com/radesix/nextcrm-app/compare/v0.23.1...v0.24.0) (2026-10-08)


### Added

* 3-tier deploy automation, build-migrates model (WS3) ([2ac2ac4](https://github.com/radesix/nextcrm-app/commit/2ac2ac40d765a47470e7c10531980a0046bd5fe1))
* add CSV/Excel export to campaign targets table ([36e3299](https://github.com/radesix/nextcrm-app/commit/36e3299b42f4be267755de4e99d59def3afa0a67))
* add CSV/Excel export to target list detail page ([b6bb912](https://github.com/radesix/nextcrm-app/commit/b6bb9123a43419a391fd1d9c697dfd1a28e85531))
* add CSV/XLSX export utility for targets ([77ca5ae](https://github.com/radesix/nextcrm-app/commit/77ca5ae7069a74669f62cfbd7ec22942905a986a))
* add project skills deep-review, fix-ci, ship-phase (WS2) ([9a93de2](https://github.com/radesix/nextcrm-app/commit/9a93de208489dabbfaee9a90a61dd662c06c1e3e))
* **admin:** connect automation trigger kinds to sales stages in CRM settings ([49847ba](https://github.com/radesix/nextcrm-app/commit/49847bab3a41f5617530de09edd4e79ad3193d69))
* **admin:** homepage costs page + nav link ([ef6c9fb](https://github.com/radesix/nextcrm-app/commit/ef6c9fb5d3a1ffdd4e94973a9d12841bf174e3a1))
* **admin:** homepage generation settings actions ([e112f0d](https://github.com/radesix/nextcrm-app/commit/e112f0d8b48cdf573ca36ac46fb9462f18dc65bf))
* **admin:** homepage generation settings page ([a2c7f1a](https://github.com/radesix/nextcrm-app/commit/a2c7f1a1ee1b6e20cbdcb6f8d8e72cc99968e22d))
* **admin:** instance-grade funnel timing settings page ([e94d1da](https://github.com/radesix/nextcrm-app/commit/e94d1da373c2e84b68d72bb6104aea3f39958c2c))
* **admin:** mount Resend service card at /admin/services ([3c552db](https://github.com/radesix/nextcrm-app/commit/3c552dba846415cbaeb267474f56afa95d84cac5))
* **admin:** per-target homepage cost aggregation action ([eb2dab5](https://github.com/radesix/nextcrm-app/commit/eb2dab50ece6a3412db2c697d2ca105b8116ad34))
* **admin:** per-target homepage generation cost tracking ([902b3f4](https://github.com/radesix/nextcrm-app/commit/902b3f46f6bbba6d20fb71f384aaf84de2b7a6ff))
* AQUNAMA Phase 2 — funnel timer & task engine (kill rule, cadence, care, recycle, renewals) ([8d2a866](https://github.com/radesix/nextcrm-app/commit/8d2a866c703f950defc6517cd4411cb05de32a25))
* AQUNAMA Phase 3 — SOW/quote approval workflow + case-study flags ([43f95bf](https://github.com/radesix/nextcrm-app/commit/43f95bfdac390298c70751ff462143f4987a312d))
* **auth:** gate Google provider on env; drop client-exposed GitHub token ([d602d9a](https://github.com/radesix/nextcrm-app/commit/d602d9aa2e4b712018ab66881da28b112721228b))
* **authz:** object-level authorization on account write actions ([69edcfe](https://github.com/radesix/nextcrm-app/commit/69edcfea75ec2af1565a54424b93ac17fae72621))
* **authz:** object-level authorization on contact write actions ([c08d61b](https://github.com/radesix/nextcrm-app/commit/c08d61be5782aa452c1516facea8c98ecccc110c))
* **authz:** object-level authorization on contract write actions ([12750da](https://github.com/radesix/nextcrm-app/commit/12750dae561e15add52ef62d0bdfefd55b6288eb))
* **authz:** object-level authorization on CRM task write actions ([8be1abb](https://github.com/radesix/nextcrm-app/commit/8be1abb88516555c8779fdca0cbe4c7adaf15a36))
* **authz:** object-level authorization on lead write actions ([747d9dc](https://github.com/radesix/nextcrm-app/commit/747d9dc3c56ee97fd278758e79f6744a8fd6ebec))
* **authz:** object-level authorization on opportunity write actions ([c0c8379](https://github.com/radesix/nextcrm-app/commit/c0c837913aff65ccaede4deb36c4dc5611c564ff))
* **authz:** object-level authorization on target write actions ([522ac83](https://github.com/radesix/nextcrm-app/commit/522ac832b9bf5b8b4fcf13cbeb12685596e09e53))
* **authz:** object-level authorization on target-list write actions ([a748ef1](https://github.com/radesix/nextcrm-app/commit/a748ef1f124ebde27a5e07aeac0d65b4084d262b))
* **authz:** parent-scoped authorization on contract line-items ([cad5741](https://github.com/radesix/nextcrm-app/commit/cad57416c5cefe2a723adf7c7c74b3b296a101fc))
* **authz:** parent-scoped authorization on opportunity line-items ([a973962](https://github.com/radesix/nextcrm-app/commit/a973962deb106897e591169aa98312fd830cec15))
* **authz:** write-scope asserts for lead, opportunity, contract, target-list, crm-task, line-items ([4eead0e](https://github.com/radesix/nextcrm-app/commit/4eead0e6ee22e5112e3dcf548bc7854f02624de9))
* **calendar:** CalendarConnection + crm_CalendarEvents models for Phase 4 sync ([816a5c0](https://github.com/radesix/nextcrm-app/commit/816a5c045f876f456418a0bd28a19fee62a73784))
* **calendar:** Calendly admin settings page + org webhook subscription ([bdede85](https://github.com/radesix/nextcrm-app/commit/bdede854b6e26242f76cdd7ef16312605f293a3e))
* **calendar:** Calendly settings storage + signed webhook endpoint ([f92c728](https://github.com/radesix/nextcrm-app/commit/f92c7283359dae3cdf63f4c7c9050de64fa04131))
* **calendar:** Calendly webhook HMAC signature verification ([42d3142](https://github.com/radesix/nextcrm-app/commit/42d31424c7036187e7edd96741c7a7292306ea92))
* **calendar:** counterparty email matcher (contact &gt; target &gt; lead) ([e942991](https://github.com/radesix/nextcrm-app/commit/e9429917eeb99ac3522dab7d79944bbdf37311b1))
* **calendar:** dedicated Calendar tab on profile + OAuth result banner ([7240889](https://github.com/radesix/nextcrm-app/commit/724088999b2d139d6e09d993624df9c6441aaf94))
* **calendar:** emit outbound sync events from activity writers ([de3c34b](https://github.com/radesix/nextcrm-app/commit/de3c34b5ad903ab654930c7c5982949456737b4d))
* **calendar:** Google Calendar incremental polling sync via Inngest ([f70b663](https://github.com/radesix/nextcrm-app/commit/f70b66320de1b508f6207aa8f760496921cf4898))
* **calendar:** Google Calendar OAuth connect flow (readonly scope) ([2e8b591](https://github.com/radesix/nextcrm-app/commit/2e8b59147bde47a176dee78da272591aecbd4d0d))
* **calendar:** inngest outbound push to Google Calendar with invites ([2f9eeec](https://github.com/radesix/nextcrm-app/commit/2f9eeec3ae577edb586829d95d30bc01b6d03c2c))
* **calendar:** inngest processor for crm/calendar.event.received ([dc96cd1](https://github.com/radesix/nextcrm-app/commit/dc96cd1dcbedfe9a89c4eaf941c910ce330196bd))
* **calendar:** outbound decision, event builder, counterparty resolver ([e0ee516](https://github.com/radesix/nextcrm-app/commit/e0ee51699e97595ce9fa35371df59826f8cdc0f0))
* **calendar:** profile UI for Google Calendar connections ([ea5e7c5](https://github.com/radesix/nextcrm-app/commit/ea5e7c5dc6bfed2ed7be97f7fe2b67ebcb3a1be3))
* **calendar:** register calendar settings in admin sidebar ([7791ab2](https://github.com/radesix/nextcrm-app/commit/7791ab2d6ac62c1111a2ae1a875fdd1533b206d2))
* **calendar:** scopeLevel on CalendarConnection for write-scope upgrade ([9f6b87b](https://github.com/radesix/nextcrm-app/commit/9f6b87b04aca41b7613ad2e6845fce550df32b9f))
* **calendar:** shared idempotent calendar-event processor ([2e4aa70](https://github.com/radesix/nextcrm-app/commit/2e4aa70712cf45400544256bb0fe7a7b1160573d))
* **calendar:** two-way sync upgrade button + scope level in profile UI ([2cf2f1d](https://github.com/radesix/nextcrm-app/commit/2cf2f1d68ef5727bfd22c1213d242b9437012e66))
* **calendar:** write-scope OAuth upgrade with granted-scope detection ([f06f386](https://github.com/radesix/nextcrm-app/commit/f06f3869c8f939eda27204ba25064fa222ff443c))
* **campaigns:** add rendered email preview to template editor ([60d4933](https://github.com/radesix/nextcrm-app/commit/60d49338d2a6ebf8e6ceb19e7caf2174d60529f9))
* **campaigns:** branded email shell + per-template CTA button ([66d32be](https://github.com/radesix/nextcrm-app/commit/66d32be4aee5af1274f5c109212baa6755d6add6))
* **campaigns:** branded email shell + per-template CTA button ([c8ebd1b](https://github.com/radesix/nextcrm-app/commit/c8ebd1b30064137058a3cd209f2fcf09c9aca064))
* **campaigns:** compose target email (body placeholder + merge source) ([808d2dc](https://github.com/radesix/nextcrm-app/commit/808d2dcb79dac32b844492374858a6fe41762d00))
* **campaigns:** dedicated RESEND_CAMPAIGNS_API_KEY (segregate from transactional) ([23f8d8d](https://github.com/radesix/nextcrm-app/commit/23f8d8d5d1f2562c838acabfb27432e3d78dfc7a))
* **campaigns:** merge tags for homepage link + screenshot ([203d838](https://github.com/radesix/nextcrm-app/commit/203d8387b61f1ac98c4b831d286de86d7a1c5be7))
* **campaigns:** react.email layout for campaign emails + editor preview ([90782a7](https://github.com/radesix/nextcrm-app/commit/90782a73c73f40942bdebc16c350c6c82870afcc))
* **campaigns:** record email bounces + avoid homepage builder credits ([6c2071b](https://github.com/radesix/nextcrm-app/commit/6c2071be6f7a0c98639e770e0818aaef280738c4))
* **campaigns:** record email bounces, deactivate + suppress the target ([3292370](https://github.com/radesix/nextcrm-app/commit/329237049838a56c6badeaf107f1138cbec7c468))
* **campaigns:** SMB enrichment tuning + target-list UX + detail polish ([ad35aa2](https://github.com/radesix/nextcrm-app/commit/ad35aa22e5cf8c63371168d8105d353a5c2daa5a))
* **campaigns:** target-list Created By + clickable rows + activate/deactivate; targets active-list filter ([1488c81](https://github.com/radesix/nextcrm-app/commit/1488c81f70bdb45fc15250ff23e6e026037328a1))
* **campaigns:** wrap campaign emails in react.email layout ([57d4578](https://github.com/radesix/nextcrm-app/commit/57d457886508100ade9e39dd6481ad98a72d2d92))
* CI path-gate + project skills + 3-tier deploy automation (WS2–WS3) ([bfc6b26](https://github.com/radesix/nextcrm-app/commit/bfc6b26bb6d1cc59beb82c3baeb7df1e34ab6f9a))
* **ci:** WS4 env-doc guard + ENVIRONMENT_VARIABLES.md ([878ad96](https://github.com/radesix/nextcrm-app/commit/878ad96b68649007be08d59fe32efb7671f5290c))
* **ci:** WS4 env-doc guard + ENVIRONMENT_VARIABLES.md ([c939a37](https://github.com/radesix/nextcrm-app/commit/c939a37e1c5e2f38414d8b4a63eac8ea4e7e472c))
* **crm:** 45-day kill rule cron with inbound-email/activity clock ([aa591a1](https://github.com/radesix/nextcrm-app/commit/aa591a142ccda15e2304ecdbd62c21405cea41fa))
* **crm:** add Prompts link to Campaigns sidebar nav ([928b826](https://github.com/radesix/nextcrm-app/commit/928b8267a13878d7bceecf2df4097c8aab6bd642))
* **crm:** AI email generation from an approved target (Claude) ([5ad800b](https://github.com/radesix/nextcrm-app/commit/5ad800b8455eedf31ae9a8bcf2452858f087548f))
* **crm:** AI prompt library management page ([6f3b2ec](https://github.com/radesix/nextcrm-app/commit/6f3b2ecd1ee6e00aa2537464722be3e6c876cdf8))
* **crm:** approval-status fields on opportunities, case-study flags on accounts ([c69ca5b](https://github.com/radesix/nextcrm-app/commit/c69ca5b8fc475208e94d06815db82412d1f1db83))
* **crm:** approvals queue page and deal-page approval UI ([a726c04](https://github.com/radesix/nextcrm-app/commit/a726c0449986542b678a9d73c4c4ab661da4bc79))
* **crm:** AQUNAMA Phase 4 — calendar sync (Calendly + Google Calendar inbound) ([57fa4ec](https://github.com/radesix/nextcrm-app/commit/57fa4ec4c26b481c06a874db00a8f4f9503bfc93))
* **crm:** audit prompt-library mutations + send-path input-trim polish ([0f39e47](https://github.com/radesix/nextcrm-app/commit/0f39e47b1164a5b020196abb2f9e47c3ae5d1d54))
* **crm:** auto-task helper and 5-touch qualified follow-up cadence ([366af8a](https://github.com/radesix/nextcrm-app/commit/366af8a7d8debb1acd37d77cbac087ee5a1e4a60))
* **crm:** capture source/status/assignee on public web-lead intake ([f241396](https://github.com/radesix/nextcrm-app/commit/f241396902a1665406fe99833139d90016e77a2c))
* **crm:** capture source/status/assignee on public web-lead intake ([ddb75c1](https://github.com/radesix/nextcrm-app/commit/ddb75c1e5042a929c3926922b6943ea7ac035842))
* **crm:** care touchpoint engine (check-in, referral, quarterly) ([ab9aff8](https://github.com/radesix/nextcrm-app/commit/ab9aff8fc39061dd474a26b16a8488ebdfe3324f))
* **crm:** case-study candidate/approval flags on accounts ([50df4b4](https://github.com/radesix/nextcrm-app/commit/50df4b457956cd1cf46826a89763e0ebd37760a3))
* **crm:** configurable timer logic — business days, cadence/care schedules, kill predicate, settings loader ([cd956fc](https://github.com/radesix/nextcrm-app/commit/cd956fce0934aeb9865ae64496d6c27b0f23c6ce))
* **crm:** emit crm/opportunity.stage-changed from all stage-writing actions ([413bd48](https://github.com/radesix/nextcrm-app/commit/413bd48d558574d297e24f24d0eb0bb8323c577c))
* **crm:** hard-block unapproved deals from entering the qualified stage ([32237bb](https://github.com/radesix/nextcrm-app/commit/32237bb8c9efffb414189e98ebb2c7cc8151699a))
* **crm:** one-off direct send of a generated target email ([028b369](https://github.com/radesix/nextcrm-app/commit/028b36995eaf9b5e5de584a87a2496e9823b3039))
* **crm:** one-off outreach unsubscribe route (sets do_not_email) ([17d3355](https://github.com/radesix/nextcrm-app/commit/17d3355fb61b493d4ffa9dac2ebbea0c35167c72))
* **crm:** prompt library server actions (org + personal, per kind) ([7be8880](https://github.com/radesix/nextcrm-app/commit/7be8880d53d0c821f65c2e603a970191ed002edb))
* **crm:** quote approval request/decide actions with notifications ([c68295b](https://github.com/radesix/nextcrm-app/commit/c68295b65fab209f51158c4ff59ea97181931315))
* **crm:** render preview for a generated target email ([fbbd9d8](https://github.com/radesix/nextcrm-app/commit/fbbd9d8d2a53c57c31381d9ab16e6b2c84fe395b))
* **crm:** show originating target list + campaign on converted deals ([0d51b38](https://github.com/radesix/nextcrm-app/commit/0d51b3862f94281e80bebe73f95583d9cd7d52a9))
* **crm:** show originating target list + campaign on converted deals ([647c6b9](https://github.com/radesix/nextcrm-app/commit/647c6b95d16cc83c3ceaa2ae0bfef961d0d99291))
* **crm:** stage_kind on sales stages, task-opportunity link, stage_entered_at ([8eff98c](https://github.com/radesix/nextcrm-app/commit/8eff98c4ea8b493ff7a3847450498caa3977fbae))
* **crm:** target AI dropdown + generate-email drawer ([fe4cbd7](https://github.com/radesix/nextcrm-app/commit/fe4cbd7fca77ea9b3f3c6222ca8072288a659876))
* **crm:** target recycle cron with Recycled list and admin digest ([8c83243](https://github.com/radesix/nextcrm-app/commit/8c8324357bd011aae849daab8ec14b8930aeb3c8))
* **crm:** target triage fields, action, and MCP tools ([6bc2a0b](https://github.com/radesix/nextcrm-app/commit/6bc2a0bbf47670f45f395b1db6a983d1688c94dc))
* **crm:** target triage gate + MCP target field parity ([459f959](https://github.com/radesix/nextcrm-app/commit/459f959005d073d912524a8d3f83db5fe0e6f5b4))
* **crm:** triage UI on targets table + detail view ([272a6e2](https://github.com/radesix/nextcrm-app/commit/272a6e2977ee913847cb515632f89c88af411d47))
* **crm:** weekly renewal reminder sweep for contracts and account products ([18da8de](https://github.com/radesix/nextcrm-app/commit/18da8de91bac437ca271cf4585aa94da96d4a905))
* CSV/Excel export for campaign targets and target lists ([f1ab4dc](https://github.com/radesix/nextcrm-app/commit/f1ab4dc684feaeddaad03afefdb0b68fd06c04c1))
* **db:** add AI outreach models (prompt library, target email, homepage seam) ([c72e812](https://github.com/radesix/nextcrm-app/commit/c72e81266b6f5dde63778bb02db0764b8a5905eb))
* **db:** homepage prompt-layer kinds + target industry prompt ref ([7799cee](https://github.com/radesix/nextcrm-app/commit/7799cee16e033810d3b57fb5803aaabf5ca32cfa))
* **db:** homepage version history + current-version pointer ([51bc0af](https://github.com/radesix/nextcrm-app/commit/51bc0afb5227e11a021de00dcdf007b66d0b9fb9))
* **dev:** Inngest dev server via docker-compose.dev.yml for host development ([7596978](https://github.com/radesix/nextcrm-app/commit/7596978289202d402246f27b47c2e3c15bc786c8))
* **dev:** local pgvector Postgres service for host development ([c28e2d4](https://github.com/radesix/nextcrm-app/commit/c28e2d41394889682b56f8f8210174cfd8375c20))
* **dev:** point DATABASE_URL at local Postgres, add db:migrate ([0e9b69c](https://github.com/radesix/nextcrm-app/commit/0e9b69c1268a1081c98a7dd7c921556bf22e6485))
* **dev:** seed local database, add db:seed and db:reset ([8f4f415](https://github.com/radesix/nextcrm-app/commit/8f4f41520df2350bee74640209d8bac70be85c14))
* **docker:** add docker-compose-coolify.yml for env-configured deployments ([f13b64e](https://github.com/radesix/nextcrm-app/commit/f13b64e42baad6ef7285c2600595060d8cd1482a))
* **docker:** docker-compose-coolify.yml for env-configured deployments ([06eaeea](https://github.com/radesix/nextcrm-app/commit/06eaeea2d390df53a66bf03af58f418ca477ae0d))
* **email:** embeddable images (homepage screenshot), branded + GET-safe unsubscribe ([5cdc076](https://github.com/radesix/nextcrm-app/commit/5cdc076657703f9bb9f3cfe423147a7878c5d0a6))
* **email:** non-prod recipient redirect guard (EMAIL_REDIRECT_TO) ([4c596cd](https://github.com/radesix/nextcrm-app/commit/4c596cde505ec1da5a5b1368812509a46d7b61c6))
* **enrichment:** retarget agent to SMB owners/managers; persist name-only contacts ([3e11da1](https://github.com/radesix/nextcrm-app/commit/3e11da1f40d825e49f6a30ceb0bd2e6a5277c73a))
* **homepage:** add 'Studio editorial / quiet-luxury' style card (WIP; seed migration pending) ([8777ea5](https://github.com/radesix/nextcrm-app/commit/8777ea5f05c54f5004e62f961e707aa33171be2a))
* **homepage:** add /homepage skill for keyless in-session generation ([7729616](https://github.com/radesix/nextcrm-app/commit/7729616556c2ab62300d878a14ab77327acfbf5c))
* **homepage:** add /homepage skill for keyless in-session generation ([7124a7f](https://github.com/radesix/nextcrm-app/commit/7124a7fff1c2e4b9647b2e8c854d75a391ff5fa6))
* **homepage:** add 5 brand-adaptive art-direction style cards (10 → 15) ([#41](https://github.com/radesix/nextcrm-app/issues/41)) ([cad936e](https://github.com/radesix/nextcrm-app/commit/cad936e3a7abbd787941574c019c1ca4cd91ee25))
* **homepage:** add HOMEPAGE_BASE prompt kind + UPLOAD pass kind ([2c41b3e](https://github.com/radesix/nextcrm-app/commit/2c41b3ee7b5cc01f88593bc67dd16a3e9a5645aa))
* **homepage:** add per-pass usage columns to homepage version ([9254bc2](https://github.com/radesix/nextcrm-app/commit/9254bc2c02142bda1256326f0c710d44bf161bb1))
* **homepage:** add token pricing + per-target cost aggregation helper ([f5ae0dd](https://github.com/radesix/nextcrm-app/commit/f5ae0dd967810dc04f65edfdb6525adf2ff0cfe3))
* **homepage:** admin image controls + provider availability indicator ([7339e3a](https://github.com/radesix/nextcrm-app/commit/7339e3a1a7d1b296011858ef935579de9905af11))
* **homepage:** admin vary-design toggle (persist homepage.vary_design) ([aa47814](https://github.com/radesix/nextcrm-app/commit/aa47814b0937313232b88851614e86b997a739b7))
* **homepage:** AI homepage generation for approved targets ([b87acc1](https://github.com/radesix/nextcrm-app/commit/b87acc16e86612a802be58c38974aa96c651d81a))
* **homepage:** avoid copying website-builder credits in the footer ([bceea72](https://github.com/radesix/nextcrm-app/commit/bceea7210ec2920ef3a879a12a11546f768e5a83))
* **homepage:** configurable layered generation prompts (industry/style/avoid) ([efda81c](https://github.com/radesix/nextcrm-app/commit/efda81c1201aa59707b7596c3c842153fa0bf65c))
* **homepage:** controlled render egress allowlist (fonts + pinned GSAP 3.13.0) ([3894244](https://github.com/radesix/nextcrm-app/commit/38942440ccb6be86232641b5cc4956deb1528f8a))
* **homepage:** disable AI refine on uploaded pages; expose current pass_kind ([172153b](https://github.com/radesix/nextcrm-app/commit/172153b4acc89ac54f57740c7513fafdbdfa1b2b))
* **homepage:** finalize animations before screenshot + block WebSocket egress ([4e45077](https://github.com/radesix/nextcrm-app/commit/4e45077c7ccaaf2ce6b013aa30e606047976fbb3))
* **homepage:** generate + compose on-brand images in the flow (fail-open) ([08280e8](https://github.com/radesix/nextcrm-app/commit/08280e85571264b3d386db43e1234f9547c1e158))
* **homepage:** generate-homepage drawer + dropdown wiring ([1182a38](https://github.com/radesix/nextcrm-app/commit/1182a38cd939842621dd149b0311ea7741cff45b))
* **homepage:** generate/refine/status/revert/slug triggers ([29706a0](https://github.com/radesix/nextcrm-app/commit/29706a0c84110c79098d4a983393efe4dc296837))
* **homepage:** headless render+screenshot helper ([14a9480](https://github.com/radesix/nextcrm-app/commit/14a9480e4db6530c6942263e908d9616a8ae51a8))
* **homepage:** Higgsfield image adapter ([1161a18](https://github.com/radesix/nextcrm-app/commit/1161a18b38bc2fdc3f7dde7f8cc59f1199efba3a))
* **homepage:** image generation settings (model/count/provider) ([55b9a95](https://github.com/radesix/nextcrm-app/commit/55b9a95c28962aabd90d7da064c3820f2a5ffb49))
* **homepage:** image provider resolver + fallback ([efa11da](https://github.com/radesix/nextcrm-app/commit/efa11da8590f23a1d5452dbf15ebc3c358d2e250))
* **homepage:** image spec planning + token types ([671dd84](https://github.com/radesix/nextcrm-app/commit/671dd8481096b31bd4b38811c676b7b8458c1838))
* **homepage:** inngest generate+refine job (render→vision→refine loop) ([8ccfe1f](https://github.com/radesix/nextcrm-app/commit/8ccfe1fb4e019cb70fffa127b39d2434b401c5cd))
* **homepage:** layered prompt composition with char cap; craft-only default base ([b3a68e7](https://github.com/radesix/nextcrm-app/commit/b3a68e761fedfcaca99ecb5d2534bc4286febf03))
* **homepage:** on-brand AI imagery in generated mockups ([e855c12](https://github.com/radesix/nextcrm-app/commit/e855c123be51c3210517ff42482e08534cd95e8a))
* **homepage:** one-shot style override + prompt-library kind filter ([6409db3](https://github.com/radesix/nextcrm-app/commit/6409db3c7463834371b8961f0c69b22a80e5c9dc))
* **homepage:** one-shot style override in Generate drawer + prompt-library kind filter ([7fd2c0c](https://github.com/radesix/nextcrm-app/commit/7fd2c0c9f81fd89bca1851957bfcc42beb0bb875))
* **homepage:** OpenAI image fallback adapter ([a1e4e39](https://github.com/radesix/nextcrm-app/commit/a1e4e39e4111d5253b3d812929b826b55a520b92))
* **homepage:** persist per-pass model + token usage on version rows ([27f0c2b](https://github.com/radesix/nextcrm-app/commit/27f0c2b08311a83858f38441e32e89a868f52132))
* **homepage:** private R2 storage helpers ([3a735e8](https://github.com/radesix/nextcrm-app/commit/3a735e89c0ee289cde6bbd3c213300c2ee981964))
* **homepage:** prompt teaches image tokens + photography expectation ([e330553](https://github.com/radesix/nextcrm-app/commit/e330553e4749cc18ce870fbba12243a80df09300))
* **homepage:** prompt-layer loaders and vary_design setting ([8445efd](https://github.com/radesix/nextcrm-app/commit/8445efdf9631d6f08187d50c015d65d1a745602c))
* **homepage:** public /p/[slug] preview + screenshot routes ([f7999bb](https://github.com/radesix/nextcrm-app/commit/f7999bb641087f801095d13f049de5d8e9ea44c5))
* **homepage:** pure deterministic style selection via FNV-1a hash ([ad7b894](https://github.com/radesix/nextcrm-app/commit/ad7b894344d6fa4bba479680af26cadaf28cfd86))
* **homepage:** R2 image storage + served /p/&lt;slug&gt;/images route ([5ac4c47](https://github.com/radesix/nextcrm-app/commit/5ac4c47f43547a6917572c1a46b0d8d686b708c6))
* **homepage:** render egress allows the slug's image objects ([8b9cb2b](https://github.com/radesix/nextcrm-app/commit/8b9cb2b6e04bec00fd20ada8e29a15b268b56265))
* **homepage:** seed premium default HOMEPAGE_BASE prompt ([2529cbc](https://github.com/radesix/nextcrm-app/commit/2529cbc254acbadaa7d2965a50017f54260bef6f))
* **homepage:** seed prompt-layer library (avoid + 10 styles + 15 industries) and craft-only base ([1b4d0f9](https://github.com/radesix/nextcrm-app/commit/1b4d0f907552ac704aa20582ca2bb70af8088572))
* **homepage:** settings resolver (model/max_tokens/base prompt) ([013cf2e](https://github.com/radesix/nextcrm-app/commit/013cf2e02eb017b4e416a67fb5ea17d457b9963d))
* **homepage:** shared anthropic-json + vision generation provider ([4c55e00](https://github.com/radesix/nextcrm-app/commit/4c55e00b2fbbef3e2aca7233171b93608dfe73db))
* **homepage:** ship "Studio editorial / quiet-luxury" style via migration + document the add-a-style process ([728c668](https://github.com/radesix/nextcrm-app/commit/728c6682bb9ff01055e561480c3c74d724f107f8))
* **homepage:** slug proposal + uniqueness ([834d1d0](https://github.com/radesix/nextcrm-app/commit/834d1d0d5b73f166deff75d8b15369e3f414d9c8))
* **homepage:** split base prompt + code-owned machine contract; provider takes system/model/maxTokens ([77b72fb](https://github.com/radesix/nextcrm-app/commit/77b72fb0f68d71589d9764185ac3977f0674101f))
* **homepage:** SSRF-guarded source-site harvest ([e3d73e6](https://github.com/radesix/nextcrm-app/commit/e3d73e632366f633895b15ddd38efa8fe7fa24d3))
* **homepage:** surface Industry/Art direction/Avoid list kinds in prompt library UI ([a4f09a9](https://github.com/radesix/nextcrm-app/commit/a4f09a9571a193ed02007b5d041053ae2c4cdcf2))
* **homepage:** target industry dropdown and create-time industry pre-match ([82f7864](https://github.com/radesix/nextcrm-app/commit/82f7864ca23fff0e04a07f2af78ee7b3926f12a0))
* **homepage:** upload storage helpers ([1cf0ce9](https://github.com/radesix/nextcrm-app/commit/1cf0ce9427a3aceb1d9fcec806d95e3e8ce6bddc))
* **homepage:** upload-override action ([e23c4e5](https://github.com/radesix/nextcrm-app/commit/e23c4e52d59733e42e47fd4c0270ce1fc6d2a387))
* **homepage:** upload-override Inngest flow (UPLOAD version) ([7c32ed6](https://github.com/radesix/nextcrm-app/commit/7c32ed6f367725501239182e8522d5d1595e6650))
* **homepage:** upload-your-own-HTML in the drawer + gate refine on uploads ([74c0a4e](https://github.com/radesix/nextcrm-app/commit/74c0a4e5b12364c6d4ab4c349af50ac9a226c564))
* **homepage:** use admin model/max_tokens/base prompt in generation (+budget-safe default, contract integrity) ([bad61d3](https://github.com/radesix/nextcrm-app/commit/bad61d3cf242a04d5502acc6fe0d6c397f82b6b5))
* **homepage:** wire prompt layers into generate and refine flows ([a8301be](https://github.com/radesix/nextcrm-app/commit/a8301be3e329d97b96f2528d2e9e8008e6cf51ea))
* **mcp:** add crm_list_users and opportunity reassignment ([d2adc62](https://github.com/radesix/nextcrm-app/commit/d2adc6262086a975369cc71411e81fd166d89490))
* **mcp:** assertScopeOrNotFound adapter for object-level tool authorization ([d9e12d2](https://github.com/radesix/nextcrm-app/commit/d9e12d270a0b01477421d44a335ff52a517ce7b9))
* **mcp:** crm_create_target field parity with CSV import ([60d08f3](https://github.com/radesix/nextcrm-app/commit/60d08f37b8ec315f73a102b4a1098075165871a8))
* **mcp:** homepage generate + status tools ([610107e](https://github.com/radesix/nextcrm-app/commit/610107e4c7519955bbea6a71f9232bd34b8b94ca))
* **mcp:** object-level authorization on project board tools ([df19c69](https://github.com/radesix/nextcrm-app/commit/df19c69fc49a2829dc04baae812a4bfe5a2cde14))
* **mcp:** object-level authorization on project comment + document-link tools ([b8d967c](https://github.com/radesix/nextcrm-app/commit/b8d967cf2bc7b078e289ccb94280a300c3de9d78))
* **mcp:** object-level authorization on project section tools ([a5faf98](https://github.com/radesix/nextcrm-app/commit/a5faf98d8362f10a5f7ae2ca5877ae47bd28ff0e))
* **mcp:** object-level authorization on project task tools; drop userBoardWhere ([f36e85a](https://github.com/radesix/nextcrm-app/commit/f36e85a2dc0f96c8af19bd68cf6818fd440ee462))
* **mcp:** prompt-library CRUD + send-target-email tools ([6799b77](https://github.com/radesix/nextcrm-app/commit/6799b77d75149543e83a167e2f3a5378e313918f))
* **mcp:** read-scoped authorization on project watch_board (escalation fix) ([7f6d2f8](https://github.com/radesix/nextcrm-app/commit/7f6d2f83a2b1e6f19fc9445cdb4989141ab5e1fb))
* **mcp:** reassignment on accounts, contacts and leads; scope CRM lead tools ([0591426](https://github.com/radesix/nextcrm-app/commit/05914261d7236370237d50edde9d3474d91ea4f3))
* **mcp:** reassignment on accounts, contacts and leads; scope CRM lead tools ([2e7220a](https://github.com/radesix/nextcrm-app/commit/2e7220a50d1b98d668192299a1e42ba90099b1c9))
* **mcp:** type-aware crm_create/update_target (Individual/Company) ([a6e96b3](https://github.com/radesix/nextcrm-app/commit/a6e96b3c1c34dc70d92d270373770299062f8661))
* **net:** assertPublicHost — resolve-validate-pin guard against SSRF/DNS-rebinding ([e4f8e95](https://github.com/radesix/nextcrm-app/commit/e4f8e954248f2484341c31f5bfc8d0bb9f01ac90))
* **net:** ip-rules — refuse non-public-unicast addresses (SSRF) ([17cbb28](https://github.com/radesix/nextcrm-app/commit/17cbb28de85aa29192b4a66837372a148aaf794c))
* prod go-live checklist + gate Google provider + drop client-exposed GitHub token ([718d73a](https://github.com/radesix/nextcrm-app/commit/718d73ac8f58885b32e110dbb5bb61197e796d14))
* **prompts:** admin-gate and accept homepage layer kinds in CRUD + MCP; widen UI kind type ([cb91f11](https://github.com/radesix/nextcrm-app/commit/cb91f114234f2c84ebb35270ec926f58c18b70a7))
* **prompts:** admin-gate HOMEPAGE_BASE authoring + surface base prompts ([1c5aea9](https://github.com/radesix/nextcrm-app/commit/1c5aea952e8e96f64bd9b8fbf50491dcd6610756))
* **prospect:** repeatable /prospect skill + target-contact MCP tool ([69a65ba](https://github.com/radesix/nextcrm-app/commit/69a65bafb486e5bffff07c683b02e94014573924))
* **prospect:** skill orchestrator (params, sweep, top-up loop, report) ([d40cb3a](https://github.com/radesix/nextcrm-app/commit/d40cb3a4da0ad384af1367272bc358baa0906920))
* **prospect:** target-contact MCP tool + contact/email/social enrichment ([1f3c28b](https://github.com/radesix/nextcrm-app/commit/1f3c28b9d5a000bb0fa2cd2916a2cf2a564cc630))
* **prospect:** url dedup helper for the prospecting skill ([20a34f7](https://github.com/radesix/nextcrm-app/commit/20a34f765d36d87621e36d95b07fa066b267cda7))
* **security:** SSRF host-guard on IMAP test/discover/create sinks ([a775e0d](https://github.com/radesix/nextcrm-app/commit/a775e0d0498362b7240e82b6543cdf25e9c1249e))
* **security:** SSRF host-guard on SMTP send and background IMAP connect ([53eeac4](https://github.com/radesix/nextcrm-app/commit/53eeac43eb4ec9aa3ba57777d88a01504f6c570c))
* **targets,homepage:** list persistence, email revert-staleness, style memory, refine image replace ([#44](https://github.com/radesix/nextcrm-app/issues/44)) ([d691148](https://github.com/radesix/nextcrm-app/commit/d6911487510cd5110d29c6cf3b0121e85cab41cc))
* **targets:** add crm_Target_Type column (migration, backfill COMPANY) ([f844232](https://github.com/radesix/nextcrm-app/commit/f844232864351475e1493c29d3c010ffaaceb7b2))
* **targets:** clickable Name/Company cells, description tooltip, Industry filter ([15bfc71](https://github.com/radesix/nextcrm-app/commit/15bfc714390b5468a4bfe57c1b2246fb1c6bee14))
* **targets:** company-only targets + Company/Industry/Website list columns ([4bb15cd](https://github.com/radesix/nextcrm-app/commit/4bb15cd5cb7585efeb191033fbe9082b46782ae1))
* **targets:** company-only targets + list columns; fix(inngest): sharp serve-route crash ([2af9772](https://github.com/radesix/nextcrm-app/commit/2af9772e3ee18cc652f3ae31391eca1530e55189))
* **targets:** config-driven detail view (adaptive title, per-type fields, description) ([89587e2](https://github.com/radesix/nextcrm-app/commit/89587e287e4e72fe0eba5a537f61e7066853fc0b))
* **targets:** CSV import accepts optional type (default COMPANY) ([3fba09c](https://github.com/radesix/nextcrm-app/commit/3fba09cf333339b7cfc776d0ecd25848f361962e))
* **targets:** default Include-homepage (and its CTA link) when the target has one ([9b18b70](https://github.com/radesix/nextcrm-app/commit/9b18b70118ff54b86b69142f0b88dd0d538544b3))
* **targets:** default the prompt selection; gate homepage-default on READY+screenshot ([ce32216](https://github.com/radesix/nextcrm-app/commit/ce32216937be9ec44576472171ee682e28026a2c))
* **targets:** editable AI draft, sender reply-to, and outreach history ([10a9726](https://github.com/radesix/nextcrm-app/commit/10a972676bcb6bd21514e7935da81507f9f2a0dc))
* **targets:** editable draft, reply-to, outreach history + drawer defaults ([4e4f8f7](https://github.com/radesix/nextcrm-app/commit/4e4f8f71690599a6063cd3fe774944c8bd990786))
* **targets:** engagement status column + filter on the Targets list ([#40](https://github.com/radesix/nextcrm-app/issues/40)) ([b78079b](https://github.com/radesix/nextcrm-app/commit/b78079bf58c644402ee11ac979eaac7f388548d5))
* **targets:** fork-owned Individual/Company type config module ([7752de8](https://github.com/radesix/nextcrm-app/commit/7752de84c54be4c22ef8d581c8fa3d523d5a565a))
* **targets:** homepage email engagement + fix Resend open/click tracking (email_id match) ([#39](https://github.com/radesix/nextcrm-app/issues/39)) ([c366b37](https://github.com/radesix/nextcrm-app/commit/c366b3729aaf1fc4e097a9b03148b0437623a24f))
* **targets:** Individual vs Company target type ([4f1c5b6](https://github.com/radesix/nextcrm-app/commit/4f1c5b67d52e578f7546196f41e18ad23118e1e2))
* **targets:** list UX + account-schema crash fix + E2E/E2B fixes ([753b055](https://github.com/radesix/nextcrm-app/commit/753b055ba53911cf0d7a65c43626d4f841da06df))
* **targets:** outreach engagement tracking — unsubscribe visibility, opens/clicks, homepage views ([2dcdc98](https://github.com/radesix/nextcrm-app/commit/2dcdc98b349b1073c3395b7b65029f78441bf64b))
* **targets:** outreach engagement tracking — unsubscribe visibility, opens/clicks, homepage views ([932cce5](https://github.com/radesix/nextcrm-app/commit/932cce53a0fa5db16033a7f32fd0b4cfb404f3c0))
* **targets:** outreach improvements — email width fix, company contact name, homepage list column ([#42](https://github.com/radesix/nextcrm-app/issues/42)) ([2096b51](https://github.com/radesix/nextcrm-app/commit/2096b5174d8fcff38c39adf2c03c10856dfd53f4))
* **targets:** per-target CTA in AI outreach + recipient empty-string fix ([5dadc10](https://github.com/radesix/nextcrm-app/commit/5dadc1025f5f1ee751db90e4059af0fa6eef4f29))
* **targets:** per-target CTA in AI outreach + recipient empty-string fix ([4bd403e](https://github.com/radesix/nextcrm-app/commit/4bd403ee8dc6548fc8523e3fd70ce8bb2b1d897e))
* **targets:** type selector + conditional fields in target forms ([ba7b12a](https://github.com/radesix/nextcrm-app/commit/ba7b12ac1fee36561e0392c948bd6321ddda638c))
* **targets:** type-aware create/update actions + full field set ([12d890b](https://github.com/radesix/nextcrm-app/commit/12d890b10b92efa1cfb1a7237f7e1b3df33e0e78))
* **targets:** unified list with Type badge, adaptive Name, Type filter ([c072dd0](https://github.com/radesix/nextcrm-app/commit/c072dd065baf0f499eb8ab6bf4106857d4409b39))


### Fixed

* add calendar connection feedback ([854233f](https://github.com/radesix/nextcrm-app/commit/854233f4538264e4a9e6b4800b58051ba7b651c0))
* add calendar connection feedback ([7a7b80d](https://github.com/radesix/nextcrm-app/commit/7a7b80d680f43f8d2eb04dd362c631f957195317))
* **admin:** use a UUID entityId for homepage-settings audit (was silently dropped) ([5190340](https://github.com/radesix/nextcrm-app/commit/51903403a5f06e8055c1261da40eb977ffe35955))
* **auth:** promote first user to admin via databaseHooks (was a no-op callback) ([84a8ffd](https://github.com/radesix/nextcrm-app/commit/84a8ffd28bdbedc6e1c0871ccc61b1414549e339))
* **auth:** promote first user to admin via real better-auth hook ([aab6071](https://github.com/radesix/nextcrm-app/commit/aab607142ef55db0ead3fa26d8190292627ffad1))
* **authz:** guard directly-callable convertTarget action ([8b9f291](https://github.com/radesix/nextcrm-app/commit/8b9f291cdccdcf51c31562d8ceed072205845566))
* **authz:** use shared opportunity write-scope in setInactiveOpportunity ([30f9544](https://github.com/radesix/nextcrm-app/commit/30f95446bb825ded9105604a39c2c81b5ad86a58))
* **calendar:** classify Google auth-revocation vs rate-limit/token errors ([51cdbec](https://github.com/radesix/nextcrm-app/commit/51cdbecfbc5dbdcfcc6d4475ac2b8a51886ad345))
* **calendar:** close unrelated-connection guard gap for disconnected accounts ([1c13839](https://github.com/radesix/nextcrm-app/commit/1c138396ed6b2132509b3ca3ce6e4c3c0cb7556b))
* **calendar:** delete prior Calendly subscription on re-subscribe ([5a46f3c](https://github.com/radesix/nextcrm-app/commit/5a46f3c2039071aa79960d963ff9c3d0471bbdd7))
* **calendar:** delete prior Calendly subscription on re-subscribe ([7a57f18](https://github.com/radesix/nextcrm-app/commit/7a57f186d3832c10e5687032099bd61a925eb638)), closes [#267](https://github.com/radesix/nextcrm-app/issues/267)
* **calendar:** exception-safe Calendly subscription + shared authz in admin settings ([5a127ab](https://github.com/radesix/nextcrm-app/commit/5a127ab6db964a5d125ecd0ac366ff91e22064a9))
* **calendar:** filter soft-deleted contacts/leads in matcher ([eba5ecd](https://github.com/radesix/nextcrm-app/commit/eba5ecd39595c6fbd32c4e0aec9d9071c423e3a2))
* **calendar:** harden outbound push against guest-list wipes, false revocations, and unauthorized writes ([03e3f60](https://github.com/radesix/nextcrm-app/commit/03e3f60e75aa6d577b2c76588c0c00b06d328d9c))
* **calendar:** harden outbound sync against duplicate inserts and reschedule 404s ([8717211](https://github.com/radesix/nextcrm-app/commit/8717211915d781579108e7ebe86c5512070ce35a))
* **calendar:** harden outbound sync emit against slow sends and fix write/emit ordering ([55845a1](https://github.com/radesix/nextcrm-app/commit/55845a1a7cf32d9c268775c2328f9c234c5e5be2))
* **calendar:** keep stored scopeLevel truthful, kill race duplicates, patch back-dated meetings ([e0729cc](https://github.com/radesix/nextcrm-app/commit/e0729cc3920aa3415f5bde05140d3c14ac0a9da7))
* **calendar:** log dropped Calendly webhook events missing uri/start_time ([290f23f](https://github.com/radesix/nextcrm-app/commit/290f23f26d21672d7f5d05c29722a4674e2166a0))
* **calendar:** OAuth state (CSRF) validation + narrowed error logging ([5978f82](https://github.com/radesix/nextcrm-app/commit/5978f82b072c2b1f2c7f06f542c6217a4a343695))
* **calendar:** record lastSyncError for upsert-loop failures in google sync ([fc3dedd](https://github.com/radesix/nextcrm-app/commit/fc3deddd447c20b387755bf9f0001222d1fd7e47))
* **calendar:** scope outbound mapping lookups/updates per-row, not per-activity ([6f5d41a](https://github.com/radesix/nextcrm-app/commit/6f5d41a389f4ae2c2f967bcfbf910932b9eb0c7b))
* **calendar:** stop notes edits on past meetings from emailing customers ([9eb4344](https://github.com/radesix/nextcrm-app/commit/9eb4344a52e5e1af8c0e1dfddc64f5d2eddaeb47))
* **calendar:** transactional upsert + P2002 race handling in calendar processor ([7b8c34a](https://github.com/radesix/nextcrm-app/commit/7b8c34a6a9f07b2713132df66d02df0735df87fe))
* **campaigns:** graceful AI-template errors so OpenAI 429 no longer crashes the page ([0ff8a6f](https://github.com/radesix/nextcrm-app/commit/0ff8a6f9426e5f906c9a22d4d9929e0317b58c6e))
* **campaigns:** sanitize template HTML and escape merge-tag values ([6ab4c86](https://github.com/radesix/nextcrm-app/commit/6ab4c866a954a84572a8cb3198b3d4ecb8c93c70))
* **campaigns:** verify Resend webhooks with Svix signatures ([26d51e1](https://github.com/radesix/nextcrm-app/commit/26d51e15552a358a15422ccbf7cb65c10eeb4016))
* **campaigns:** verify Resend webhooks with Svix, not a custom HMAC ([f3a6fa4](https://github.com/radesix/nextcrm-app/commit/f3a6fa4b20169f1c5ec5517c7c84b907bdf3eaee))
* **ci:** make schema/migration guard git-based ([32ec8d8](https://github.com/radesix/nextcrm-app/commit/32ec8d81f02c9559e3af777e760d424eb55a642c))
* **ci:** report upstream drift via job summary, not a GitHub issue ([409a009](https://github.com/radesix/nextcrm-app/commit/409a00934082703192a45b629f2015fe4a46e2db))
* **ci:** report upstream drift via job summary, not a GitHub issue ([63b3999](https://github.com/radesix/nextcrm-app/commit/63b3999d1d6bc2b7c37a29ec0326eab43155948f))
* **ci:** run heavy jobs when ci.yml itself changes (self-validate) ([141ac17](https://github.com/radesix/nextcrm-app/commit/141ac17b2ae1fa147f5ffbe50c3dd4d6d1bd1353))
* **ci:** run heavy jobs when ci.yml itself changes (self-validate) ([3d06377](https://github.com/radesix/nextcrm-app/commit/3d063770086638dd3c64b609394b75b769c8effa))
* **crm:** account row-schema accepts null contact first_name ([a29270a](https://github.com/radesix/nextcrm-app/commit/a29270a7a4d6f26f9beb6e42dbe29ae328ed16d1))
* **crm:** blank-UUID + create-in-context UX; ci(e2e): pin inngest-cli ([2e75f1c](https://github.com/radesix/nextcrm-app/commit/2e75f1cd11462a30b81a3fbd42c240597605fb2d))
* **crm:** drawer state/drift + a11y + prompt bodies as props + APPROVED-gated BasicView loads ([107a758](https://github.com/radesix/nextcrm-app/commit/107a758a944fb4c80194b7b063728ff1536547f1))
* **crm:** exclude cancelled activities from the Phase 2 kill-clock query ([a2c8a2d](https://github.com/radesix/nextcrm-app/commit/a2c8a2dfdb2d01531e36116b4a37f75d6c740bb4))
* **crm:** final-review fixes — protect re-engaged targets and completed renewals ([f2a7434](https://github.com/radesix/nextcrm-app/commit/f2a743412d657a8ac99782595790ab9e8b37c937))
* **crm:** guard drawer against stale in-flight preview/generate results ([f6136a0](https://github.com/radesix/nextcrm-app/commit/f6136a0d95c7df5ba35b0bffa92638cf8fda2ae2))
* **crm:** harden outreach unsubscribe (UUID-validate, email-wide suppress, audit, headers) ([71e2161](https://github.com/radesix/nextcrm-app/commit/71e216111c52d4b853b33835904059796eda36ab))
* **crm:** harden post-send error handling to prevent duplicate outreach sends ([68eedba](https://github.com/radesix/nextcrm-app/commit/68eedba1ea10199c894d175ac9c8955fa953741e))
* **crm:** normalize blank UUID fields in createAccount ([6123855](https://github.com/radesix/nextcrm-app/commit/612385540a259868ecfe1ea81e02d7ea6da0960c))
* **crm:** normalize blank UUID inputs and auto-fill account/assignee on create ([a5b0a78](https://github.com/radesix/nextcrm-app/commit/a5b0a782f327aadb21c7ccc8faeae63e1de818fa))
* **crm:** polish account/opportunity detail (null contact name, invalid date) ([f835093](https://github.com/radesix/nextcrm-app/commit/f83509383dd3e221d6af95598d1fba1e5d94debb))
* **crm:** tolerate fenced/preambled AI JSON in email generation ([a0f206b](https://github.com/radesix/nextcrm-app/commit/a0f206b82f730de27f8b6a57fbc76c53f109d1aa))
* **crm:** unsubscribe GET-confirm/POST-mutate + one-click header; sandbox preview iframe ([0b1afb1](https://github.com/radesix/nextcrm-app/commit/0b1afb1c13dbc5daf065af5132114bb48058a55b))
* **db-guard:** block empty/unresolvable host instead of passing it ([521137f](https://github.com/radesix/nextcrm-app/commit/521137f93129f3af146b4ee2fc7faf10c6a4390d))
* **db-guard:** close query-string [@localhost](https://github.com/localhost) bypass, fix bracketed IPv6 ([8909bc3](https://github.com/radesix/nextcrm-app/commit/8909bc3f631cc007bfdd21e76c6f94a35a9aa8cf))
* **db:** route runtime pool through the transaction pooler ([e2ce4fc](https://github.com/radesix/nextcrm-app/commit/e2ce4fcb065cbf0ef733ac396b074aceb54e4dab))
* **db:** route runtime pool through the transaction pooler ([da62cee](https://github.com/radesix/nextcrm-app/commit/da62ceec5cb82c7d715bd6b1d6ed8c47b2339e72))
* **deps:** resolve all 65 Dependabot security alerts ([29efcd7](https://github.com/radesix/nextcrm-app/commit/29efcd79c6386f1510563c124bcf4a99e5c42d7d))
* **deps:** resolve all 65 Dependabot security alerts (one PR) ([2647733](https://github.com/radesix/nextcrm-app/commit/2647733eb536d807adef070b719a95c0f8d7870f))
* **deps:** resolve all 65 Dependabot security alerts via pnpm overrides ([3412d9a](https://github.com/radesix/nextcrm-app/commit/3412d9ac05963f58c6f5708f863ad45b349e2039))
* **dev:** bind local Postgres to loopback and bound db:wait retries ([989e2ed](https://github.com/radesix/nextcrm-app/commit/989e2ed9ccdf8b621147db962121b9b5a18721b0))
* **dev:** guard db scripts against remote DB and correct local Postgres docs ([3482cd0](https://github.com/radesix/nextcrm-app/commit/3482cd0936de273d6ce24cf28018ac8ff965cd7b))
* **docker:** copy pnpm-workspace.yaml before frozen install ([240a2f0](https://github.com/radesix/nextcrm-app/commit/240a2f0450610689ba9337f79207e88cb6e65e68))
* **docker:** copy pnpm-workspace.yaml before frozen install ([98a6d0d](https://github.com/radesix/nextcrm-app/commit/98a6d0d625ec451999302c5a652720e189d06062))
* **docker:** sign MinIO bucket creation with SigV4 ([2bb67c7](https://github.com/radesix/nextcrm-app/commit/2bb67c7c9937fd23bb93b9b306362a4e5d23d022))
* **docker:** sign MinIO bucket creation with SigV4 ([4325c3b](https://github.com/radesix/nextcrm-app/commit/4325c3ba2e19948e1eedca4887ca6501644e7376))
* **docker:** switch MinIO to pgsty/minio (official images are gone) ([96e068d](https://github.com/radesix/nextcrm-app/commit/96e068de554af2be604fb31b7b2b670e6e536eb8))
* **docker:** switch MinIO to pgsty/minio, pinned ([1780e5d](https://github.com/radesix/nextcrm-app/commit/1780e5d7eee78e25182991aaba260a37fb26426e))
* **e2b:** repair enrichment template build (base image + local sdk) ([df73367](https://github.com/radesix/nextcrm-app/commit/df733670c956ca59be7a5fcfcc1e57824f326d2c))
* **e2e:** make product-update/product-read shard-safe (self-seed product) ([b1df12a](https://github.com/radesix/nextcrm-app/commit/b1df12a6369a06c8e0fc0e0fb5dde58806ee21e4))
* **e2e:** make product-update/product-read shard-safe (self-seed product) ([7057bd3](https://github.com/radesix/nextcrm-app/commit/7057bd3990e32e173f7228c342adf1825627e3af))
* **homepage-settings:** avoid extra DB read in saveHomepageSettings ([75bcff5](https://github.com/radesix/nextcrm-app/commit/75bcff5a2eebd1f74a8321757bd38c41fdae1858))
* **homepage:** accept DOCTYPE-prefixed SVG logos; tighten logo-fetch cap ([bbb02e2](https://github.com/radesix/nextcrm-app/commit/bbb02e2a046b2303f7b8de393fd1bbbd87a6fc44))
* **homepage:** adopt brand palette in every generation (normalize harvested colors to hex) ([97a1b1d](https://github.com/radesix/nextcrm-app/commit/97a1b1d9c069a03523985f1fe95d5dabb29d2c0b))
* **homepage:** adopt brand palette in every generation (normalize harvested colors to hex) ([ab972a9](https://github.com/radesix/nextcrm-app/commit/ab972a9b190f735e1521edcf3ad62cf87f0958a9))
* **homepage:** apply pre-PR deep-review findings ([9262b9c](https://github.com/radesix/nextcrm-app/commit/9262b9c98fb5d27b722236a244636a434a2f36af))
* **homepage:** bump layer counts for the 16th style; drop redundant parity test; clarify runbook ([4d50ed1](https://github.com/radesix/nextcrm-app/commit/4d50ed1cccc5b8ae49007b2392d6f7efde30bff1))
* **homepage:** close image prompt injection vulnerability ([236b336](https://github.com/radesix/nextcrm-app/commit/236b33627c051a2b0aa96fa0cb3429a2eb65f26e))
* **homepage:** CSP-sandbox served preview HTML + shared slug validator ([e8f062b](https://github.com/radesix/nextcrm-app/commit/e8f062bb2875043d3f8a574245f213d88076b39c))
* **homepage:** deep-review fix wave for prompt layers ([bf0fea6](https://github.com/radesix/nextcrm-app/commit/bf0fea6d9d7e080f8a0ce88ba84659f87957db86))
* **homepage:** drop the /api/inngest memory bump — 3008 MB fails Vercel config-validation ([df6aa24](https://github.com/radesix/nextcrm-app/commit/df6aa245388f2e5645f481cbf4b48e55164f4fdb))
* **homepage:** fail fast on terminal errors thrown inside a step; max_tokens 24000 ([5e6e005](https://github.com/radesix/nextcrm-app/commit/5e6e0057a1eff1dd0b1d06246d72125e2dd49cb9))
* **homepage:** fail fast on terminal errors thrown inside an Inngest step ([01aaede](https://github.com/radesix/nextcrm-app/commit/01aaede1260972d031b6dd53eca029dfaf266c09))
* **homepage:** gate slug edits + P2002/APPROVED/audit robustness on triggers ([2dff950](https://github.com/radesix/nextcrm-app/commit/2dff950605c9550ad26fc0c4642add40f39dd772))
* **homepage:** gate slug rename on preview_url (protect published links) ([5a7cd21](https://github.com/radesix/nextcrm-app/commit/5a7cd213eafb265305bc048a38d1e98aa523b10e))
* **homepage:** guard each finalize step; drive ScrollTrigger via animation.progress ([4fa0a26](https://github.com/radesix/nextcrm-app/commit/4fa0a262b584f7d226788f430a167697c2643d9d))
* **homepage:** harvest the right logo and never serve a broken &lt;img&gt; ([205c241](https://github.com/radesix/nextcrm-app/commit/205c2419db89f0490481055f8c2b4323c9e26c9d))
* **homepage:** harvest the right logo and never serve a broken &lt;img&gt; ([5ff4c73](https://github.com/radesix/nextcrm-app/commit/5ff4c73e25d010ef1320e3456f691211863fa521))
* **homepage:** hosted-env SSRF fail-safe + harvest robustness ([2c88343](https://github.com/radesix/nextcrm-app/commit/2c8834388984cdd862ce6c42ad1babfd81eb06c9))
* **homepage:** match serverless Chromium major; resume transient render failures ([fbf2bd4](https://github.com/radesix/nextcrm-app/commit/fbf2bd4c51406b5d42df919c3759602f24da220b))
* **homepage:** match serverless Chromium major; resume transient render failures ([165410a](https://github.com/radesix/nextcrm-app/commit/165410a82ab9dbd0b9d3a8715d8286f94f2535ff))
* **homepage:** move upload to a route handler (body limit) + guard store failure ([509dd0e](https://github.com/radesix/nextcrm-app/commit/509dd0e50cb57b78a2d4ee98a74193e871af4b29))
* **homepage:** onFailure backstop + per-target concurrency on generate job ([42ddb35](https://github.com/radesix/nextcrm-app/commit/42ddb3518210e2890217c3bda6a99a7d9dc3d855))
* **homepage:** pin Higgsfield status_url to the trusted https host before polling ([4eb8838](https://github.com/radesix/nextcrm-app/commit/4eb8838229f07f43787e434842b2e51be175811a))
* **homepage:** raise default max_tokens 16000 -&gt; 24000 (16000 truncated real pages) ([7b3187e](https://github.com/radesix/nextcrm-app/commit/7b3187e64e5cf1567e5c739bd7fbd8d59970dc3b))
* **homepage:** re-check pass_kind in refineFlow to block AI-refine of uploaded pages ([57699a9](https://github.com/radesix/nextcrm-app/commit/57699a99b8d0f3ce5719d86f2d0ae70c8a351fac))
* **homepage:** serve in-render images from R2, strip unknown image tokens, guard empty image count ([68cc67c](https://github.com/radesix/nextcrm-app/commit/68cc67cc385d2448b9eb8fe244c62d2fc9c0516e))
* **homepage:** serve live preview through RUNNING/FAILED + keep screenshots out of step state ([9157820](https://github.com/radesix/nextcrm-app/commit/91578202c9530b05aeda5f47264dce8c85751a24))
* **homepage:** unstick generation — render-crash containment + SDK-independent FAILED backstop ([fc2f2c3](https://github.com/radesix/nextcrm-app/commit/fc2f2c35115011aa91544b00c0f2987216b83d0b))
* **homepage:** unstick generation — render-crash containment + SDK-independent FAILED backstop ([1bf0a18](https://github.com/radesix/nextcrm-app/commit/1bf0a1841ba6e14b03b09b00785194b153f6cae4))
* **homepage:** valid Higgsfield aspect ratio + unbreak status_url poll ([de034e0](https://github.com/radesix/nextcrm-app/commit/de034e00688aea385178b3b6f766ae90a8540c7a))
* **homepage:** valid Higgsfield aspect ratio + unbreak status_url poll ([3bb2ecc](https://github.com/radesix/nextcrm-app/commit/3bb2ecc76cdd5e63aba6f65dfbaa2c19262c287b))
* **inngest:** cap embedEmail concurrency at the plan limit (5) ([9b57404](https://github.com/radesix/nextcrm-app/commit/9b57404decd3c8d937a98cb96cfdd3238d3c411d))
* **inngest:** cap embedEmail concurrency at the plan limit (5) ([de83449](https://github.com/radesix/nextcrm-app/commit/de83449e468c543628e30be19b323419c4592ef0))
* **inngest:** lazy-load sharp so its native load can't 500 the serve route ([0e7ab3f](https://github.com/radesix/nextcrm-app/commit/0e7ab3feb2a42c28fd58c1e1143f260c62d31c0e))
* legacy /api redirect (404'd generate/enrich/unsubscribe) + graceful AI-template errors ([62d9d63](https://github.com/radesix/nextcrm-app/commit/62d9d634cfccab4200a0b9458480e97729a25c12))
* map exported 'X / Twitter' header back to social_x in import suggestions ([b457040](https://github.com/radesix/nextcrm-app/commit/b457040fa16c9ddc632ab71fecadeb67be769d82))
* **mcp:** role-aware read scoping and account/contact linking in CRM tools ([3a89d55](https://github.com/radesix/nextcrm-app/commit/3a89d5555277c1c5a1fbb83826f91c6a9ee2ce12))
* **mcp:** role-aware read scoping, FK linking, and user lookup for CRM tools ([4575e9d](https://github.com/radesix/nextcrm-app/commit/4575e9d7dec10a9f689a910ded518a0797cfe2f3))
* **prisma:** cap pg pool via DB_POOL_MAX + add Pool error handler ([834db56](https://github.com/radesix/nextcrm-app/commit/834db56b43b5371b0230f46ab6b43da2b7f02457))
* **prisma:** cap pg pool via DB_POOL_MAX + add Pool error handler ([b27a10a](https://github.com/radesix/nextcrm-app/commit/b27a10a167bf03267a818198e1eb4b61893a0447))
* **prompts:** export prompt-kind types from the plain kinds module, not "use server" list-prompts ([f3e384b](https://github.com/radesix/nextcrm-app/commit/f3e384b0c422d3f2f8a4cb12bf24b56be038d92b))
* **prospect:** name-dedup + load-gate clarifications (review findings) ([0a3dd2f](https://github.com/radesix/nextcrm-app/commit/0a3dd2f47d1f6d4be08c9cf30e3facf16f0d03ba))
* **routing:** scope legacy crm→campaigns redirects so they don't swallow /api/* ([4411553](https://github.com/radesix/nextcrm-app/commit/44115534136f66a45da3d9224e2d005a799c4c4b))
* **security:** authorize Resend key action, harden IMAP/SMTP connect surface ([648160f](https://github.com/radesix/nextcrm-app/commit/648160f0dfdaa235d45ec8b3806f4552277244f3))
* **security:** resolve all open Dependabot and CodeQL alerts ([d7145d7](https://github.com/radesix/nextcrm-app/commit/d7145d7732c457ac40a6e1fccbf1ca53e8c1188a))
* **security:** resolve all open Dependabot and CodeQL alerts ([5a0c382](https://github.com/radesix/nextcrm-app/commit/5a0c3820c65d8c36eb41a5949b2ebccfebd73dbe))
* **security:** verify TLS certificates on IMAP/SMTP connections ([41e3e6b](https://github.com/radesix/nextcrm-app/commit/41e3e6bfcebd6055f6345f4f32171b3090395df1))
* **security:** verify TLS certificates on IMAP/SMTP connections ([327d240](https://github.com/radesix/nextcrm-app/commit/327d240ab60f5d45e3066f3483e6e4585c7f92ab)), closes [#262](https://github.com/radesix/nextcrm-app/issues/262)
* show save success/error feedback on Calendly settings form ([e6791ce](https://github.com/radesix/nextcrm-app/commit/e6791cedb98d3a37c5c278b47f391c8433c4c7a6))
* show save success/error feedback on Calendly settings form ([b3e4538](https://github.com/radesix/nextcrm-app/commit/b3e45388b25f4f9801f393754866de495ebd6688)), closes [#268](https://github.com/radesix/nextcrm-app/issues/268)
* **targets:** make Name column searchable/sortable for companies and individuals ([4fe758c](https://github.com/radesix/nextcrm-app/commit/4fe758c08ad2b422d76c8a1da5e9ee8a1c92e54d))
* **targets:** render outreach-history timestamps in the viewer's timezone ([30dc6a3](https://github.com/radesix/nextcrm-app/commit/30dc6a3034dcde95bc5ae94a6fe0ee592fb63b8c))
* **targets:** type-aware detail page heading; E2E sheet-closed assertions ([faf393e](https://github.com/radesix/nextcrm-app/commit/faf393eac79369ef580445b7a4a64f8a42954999))
* **webhooks:** match Resend events by email_id, not the RFC Message-ID header ([4b57ea7](https://github.com/radesix/nextcrm-app/commit/4b57ea764b18aa326d667609b299451fe3522698))
* **webhooks:** match Resend events by email_id, not the RFC Message-ID header ([dd5ac0b](https://github.com/radesix/nextcrm-app/commit/dd5ac0bfc51043c6e9d1bdfdd0e8a6d8c625ed8a))


### Changed

* **ci:** shard Playwright E2E across 3 parallel runners ([fc90702](https://github.com/radesix/nextcrm-app/commit/fc907024517c293466bb4407ed3f606ef3c02f9c))
* **ci:** shard Playwright E2E across 3 parallel runners ([a99b754](https://github.com/radesix/nextcrm-app/commit/a99b754d005edfd6595400b0cbac1be27dc6968e))
* **crm:** deep-review fixes for target triage ([3d5ba7c](https://github.com/radesix/nextcrm-app/commit/3d5ba7c8a538d562be832804cd8efa9297a16323))
* **crm:** shared send-core + template scoping, fail-closed unsubscribe URL, input validation ([1ab3d73](https://github.com/radesix/nextcrm-app/commit/1ab3d7324845b065cd39bb040a5ed0de921adfa6))
* extract TARGET_FIELDS into shared spreadsheet module ([1b98905](https://github.com/radesix/nextcrm-app/commit/1b98905ae8e455d8da248b314e1b4b387de9e71f))
* **homepage:** compile-time guard on pricing map; drop cast in action ([b1e657c](https://github.com/radesix/nextcrm-app/commit/b1e657c662c88d5a8798f5efc8b442de997758b9))
* **mcp:** move triage tools to a fork-owned file (additive) ([60ab189](https://github.com/radesix/nextcrm-app/commit/60ab1898dd92221739eff77e7f0b3a4637de68b5))

## [0.23.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.23.0...v0.23.1) (2026-10-04)


### Fixed

* **docker:** copy pnpm-workspace.yaml before frozen install ([98a6d0d](https://github.com/pdovhomilja/nextcrm-app/commit/98a6d0d625ec451999302c5a652720e189d06062)) ([#322](https://github.com/pdovhomilja/nextcrm-app/pull/322))
* **docker:** switch MinIO to pgsty/minio, pinned ([1780e5d](https://github.com/pdovhomilja/nextcrm-app/commit/1780e5d7eee78e25182991aaba260a37fb26426e)) ([#324](https://github.com/pdovhomilja/nextcrm-app/pull/324))
* **docker:** sign MinIO bucket creation with SigV4 ([4325c3b](https://github.com/pdovhomilja/nextcrm-app/commit/4325c3ba2e19948e1eedca4887ca6501644e7376)) ([#325](https://github.com/pdovhomilja/nextcrm-app/pull/325))

## [0.23.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.22.1...v0.23.0) (2026-10-04)


### Added

* **docker:** add docker-compose-coolify.yml for env-configured deployments ([f13b64e](https://github.com/pdovhomilja/nextcrm-app/commit/f13b64e42baad6ef7285c2600595060d8cd1482a)) ([#320](https://github.com/pdovhomilja/nextcrm-app/pull/320))

## [0.22.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.22.0...v0.22.1) (2026-10-04)


### Fixed

* **calendar:** delete prior Calendly subscription on re-subscribe ([7a57f18](https://github.com/pdovhomilja/nextcrm-app/commit/7a57f186d3832c10e5687032099bd61a925eb638)), closes [#267](https://github.com/pdovhomilja/nextcrm-app/issues/267) ([#304](https://github.com/pdovhomilja/nextcrm-app/pull/304))
* show save success/error feedback on Calendly settings form ([b3e4538](https://github.com/pdovhomilja/nextcrm-app/commit/b3e45388b25f4f9801f393754866de495ebd6688)), closes [#268](https://github.com/pdovhomilja/nextcrm-app/issues/268) ([#303](https://github.com/pdovhomilja/nextcrm-app/pull/303))
* **webhooks:** match Resend events by email_id, not the RFC Message-ID header ([dd5ac0b](https://github.com/pdovhomilja/nextcrm-app/commit/dd5ac0bfc51043c6e9d1bdfdd0e8a6d8c625ed8a)) ([#314](https://github.com/pdovhomilja/nextcrm-app/pull/314))


### Dependencies

* next 16.2.11 → 16.3.6 ([#310](https://github.com/pdovhomilja/nextcrm-app/pull/310))
* sharp 0.35.3 → 0.35.4 ([#309](https://github.com/pdovhomilja/nextcrm-app/pull/309))
* nodemailer 9.0.1 → 10.0.9 ([#308](https://github.com/pdovhomilja/nextcrm-app/pull/308))
* sanitize-html 2.17.5 → 2.17.7, with a Jest transform for its ESM-only htmlparser2 dependency ([#318](https://github.com/pdovhomilja/nextcrm-app/pull/318))

## [0.22.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.21.2...v0.22.0) (2026-08-10)


### Added

* add CSV/Excel export to campaign targets table ([36e3299](https://github.com/pdovhomilja/nextcrm-app/commit/36e3299b42f4be267755de4e99d59def3afa0a67))
* add CSV/Excel export to target list detail page ([b6bb912](https://github.com/pdovhomilja/nextcrm-app/commit/b6bb9123a43419a391fd1d9c697dfd1a28e85531))
* add CSV/XLSX export utility for targets ([77ca5ae](https://github.com/pdovhomilja/nextcrm-app/commit/77ca5ae7069a74669f62cfbd7ec22942905a986a))
* CSV/Excel export for campaign targets and target lists ([f1ab4dc](https://github.com/pdovhomilja/nextcrm-app/commit/f1ab4dc684feaeddaad03afefdb0b68fd06c04c1))


### Fixed

* map exported 'X / Twitter' header back to social_x in import suggestions ([b457040](https://github.com/pdovhomilja/nextcrm-app/commit/b457040fa16c9ddc632ab71fecadeb67be769d82))
* **security:** verify TLS certificates on IMAP/SMTP connections ([41e3e6b](https://github.com/pdovhomilja/nextcrm-app/commit/41e3e6bfcebd6055f6345f4f32171b3090395df1))
* **security:** verify TLS certificates on IMAP/SMTP connections ([327d240](https://github.com/pdovhomilja/nextcrm-app/commit/327d240ab60f5d45e3066f3483e6e4585c7f92ab)), closes [#262](https://github.com/pdovhomilja/nextcrm-app/issues/262)


### Changed

* extract TARGET_FIELDS into shared spreadsheet module ([1b98905](https://github.com/pdovhomilja/nextcrm-app/commit/1b98905ae8e455d8da248b314e1b4b387de9e71f))

## [0.21.2](https://github.com/pdovhomilja/nextcrm-app/compare/v0.21.1...v0.21.2) (2026-08-01)


### Fixed

* **security:** resolve all open Dependabot and CodeQL alerts ([d7145d7](https://github.com/pdovhomilja/nextcrm-app/commit/d7145d7732c457ac40a6e1fccbf1ca53e8c1188a))
* **security:** resolve all open Dependabot and CodeQL alerts ([5a0c382](https://github.com/pdovhomilja/nextcrm-app/commit/5a0c3820c65d8c36eb41a5949b2ebccfebd73dbe))

## [0.21.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.21.0...v0.21.1) (2026-08-01)


### Fixed

* add calendar connection feedback ([854233f](https://github.com/pdovhomilja/nextcrm-app/commit/854233f4538264e4a9e6b4800b58051ba7b651c0))

## [0.21.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.20.2...v0.21.0) (2026-08-01)


### Added

* **campaigns:** add rendered email preview to template editor ([60d4933](https://github.com/pdovhomilja/nextcrm-app/commit/60d49338d2a6ebf8e6ceb19e7caf2174d60529f9))
* **campaigns:** react.email layout for campaign emails + editor preview ([90782a7](https://github.com/pdovhomilja/nextcrm-app/commit/90782a73c73f40942bdebc16c350c6c82870afcc))
* **campaigns:** wrap campaign emails in react.email layout ([57d4578](https://github.com/pdovhomilja/nextcrm-app/commit/57d457886508100ade9e39dd6481ad98a72d2d92))


### Fixed

* **campaigns:** sanitize template HTML and escape merge-tag values ([6ab4c86](https://github.com/pdovhomilja/nextcrm-app/commit/6ab4c866a954a84572a8cb3198b3d4ecb8c93c70))

## [0.20.2](https://github.com/pdovhomilja/nextcrm-app/compare/v0.20.1...v0.20.2) (2026-07-23)


### Fixed

* **deps:** resolve all 65 Dependabot security alerts ([29efcd7](https://github.com/pdovhomilja/nextcrm-app/commit/29efcd79c6386f1510563c124bcf4a99e5c42d7d))
* **deps:** resolve all 65 Dependabot security alerts (one PR) ([2647733](https://github.com/pdovhomilja/nextcrm-app/commit/2647733eb536d807adef070b719a95c0f8d7870f))
* **deps:** resolve all 65 Dependabot security alerts via pnpm overrides ([3412d9a](https://github.com/pdovhomilja/nextcrm-app/commit/3412d9ac05963f58c6f5708f863ad45b349e2039))

## [0.20.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.20.0...v0.20.1) (2026-07-23)


### Fixed

* **crm:** blank-UUID + create-in-context UX; ci(e2e): pin inngest-cli ([2e75f1c](https://github.com/pdovhomilja/nextcrm-app/commit/2e75f1cd11462a30b81a3fbd42c240597605fb2d))
* **crm:** normalize blank UUID fields in createAccount ([6123855](https://github.com/pdovhomilja/nextcrm-app/commit/612385540a259868ecfe1ea81e02d7ea6da0960c))
* **crm:** normalize blank UUID inputs and auto-fill account/assignee on create ([a5b0a78](https://github.com/pdovhomilja/nextcrm-app/commit/a5b0a782f327aadb21c7ccc8faeae63e1de818fa))

## [0.20.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.19.0...v0.20.0) (2026-07-22)


### Added

* **mcp:** reassignment on accounts, contacts and leads; scope CRM lead tools ([0591426](https://github.com/pdovhomilja/nextcrm-app/commit/05914261d7236370237d50edde9d3474d91ea4f3))
* **mcp:** reassignment on accounts, contacts and leads; scope CRM lead tools ([2e7220a](https://github.com/pdovhomilja/nextcrm-app/commit/2e7220a50d1b98d668192299a1e42ba90099b1c9))

## [0.19.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.18.0...v0.19.0) (2026-07-22)


### Added

* **mcp:** add crm_list_users and opportunity reassignment ([d2adc62](https://github.com/pdovhomilja/nextcrm-app/commit/d2adc6262086a975369cc71411e81fd166d89490))


### Fixed

* **mcp:** role-aware read scoping and account/contact linking in CRM tools ([3a89d55](https://github.com/pdovhomilja/nextcrm-app/commit/3a89d5555277c1c5a1fbb83826f91c6a9ee2ce12))
* **mcp:** role-aware read scoping, FK linking, and user lookup for CRM tools ([4575e9d](https://github.com/pdovhomilja/nextcrm-app/commit/4575e9d7dec10a9f689a910ded518a0797cfe2f3))

## [0.18.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.17.0...v0.18.0) (2026-07-22)


### Added

* **admin:** mount Resend service card at /admin/services ([3c552db](https://github.com/pdovhomilja/nextcrm-app/commit/3c552dba846415cbaeb267474f56afa95d84cac5))
* **authz:** object-level authorization on account write actions ([69edcfe](https://github.com/pdovhomilja/nextcrm-app/commit/69edcfea75ec2af1565a54424b93ac17fae72621))
* **authz:** object-level authorization on contact write actions ([c08d61b](https://github.com/pdovhomilja/nextcrm-app/commit/c08d61be5782aa452c1516facea8c98ecccc110c))
* **authz:** object-level authorization on contract write actions ([12750da](https://github.com/pdovhomilja/nextcrm-app/commit/12750dae561e15add52ef62d0bdfefd55b6288eb))
* **authz:** object-level authorization on CRM task write actions ([8be1abb](https://github.com/pdovhomilja/nextcrm-app/commit/8be1abb88516555c8779fdca0cbe4c7adaf15a36))
* **authz:** object-level authorization on lead write actions ([747d9dc](https://github.com/pdovhomilja/nextcrm-app/commit/747d9dc3c56ee97fd278758e79f6744a8fd6ebec))
* **authz:** object-level authorization on opportunity write actions ([c0c8379](https://github.com/pdovhomilja/nextcrm-app/commit/c0c837913aff65ccaede4deb36c4dc5611c564ff))
* **authz:** object-level authorization on target write actions ([522ac83](https://github.com/pdovhomilja/nextcrm-app/commit/522ac832b9bf5b8b4fcf13cbeb12685596e09e53))
* **authz:** object-level authorization on target-list write actions ([a748ef1](https://github.com/pdovhomilja/nextcrm-app/commit/a748ef1f124ebde27a5e07aeac0d65b4084d262b))
* **authz:** parent-scoped authorization on contract line-items ([cad5741](https://github.com/pdovhomilja/nextcrm-app/commit/cad57416c5cefe2a723adf7c7c74b3b296a101fc))
* **authz:** parent-scoped authorization on opportunity line-items ([a973962](https://github.com/pdovhomilja/nextcrm-app/commit/a973962deb106897e591169aa98312fd830cec15))
* **authz:** write-scope asserts for lead, opportunity, contract, target-list, crm-task, line-items ([4eead0e](https://github.com/pdovhomilja/nextcrm-app/commit/4eead0e6ee22e5112e3dcf548bc7854f02624de9))
* **dev:** Inngest dev server via docker-compose.dev.yml for host development ([7596978](https://github.com/pdovhomilja/nextcrm-app/commit/7596978289202d402246f27b47c2e3c15bc786c8))
* **dev:** local pgvector Postgres service for host development ([c28e2d4](https://github.com/pdovhomilja/nextcrm-app/commit/c28e2d41394889682b56f8f8210174cfd8375c20))
* **dev:** point DATABASE_URL at local Postgres, add db:migrate ([0e9b69c](https://github.com/pdovhomilja/nextcrm-app/commit/0e9b69c1268a1081c98a7dd7c921556bf22e6485))
* **dev:** seed local database, add db:seed and db:reset ([8f4f415](https://github.com/pdovhomilja/nextcrm-app/commit/8f4f41520df2350bee74640209d8bac70be85c14))
* **mcp:** assertScopeOrNotFound adapter for object-level tool authorization ([d9e12d2](https://github.com/pdovhomilja/nextcrm-app/commit/d9e12d270a0b01477421d44a335ff52a517ce7b9))
* **mcp:** object-level authorization on project board tools ([df19c69](https://github.com/pdovhomilja/nextcrm-app/commit/df19c69fc49a2829dc04baae812a4bfe5a2cde14))
* **mcp:** object-level authorization on project comment + document-link tools ([b8d967c](https://github.com/pdovhomilja/nextcrm-app/commit/b8d967cf2bc7b078e289ccb94280a300c3de9d78))
* **mcp:** object-level authorization on project section tools ([a5faf98](https://github.com/pdovhomilja/nextcrm-app/commit/a5faf98d8362f10a5f7ae2ca5877ae47bd28ff0e))
* **mcp:** object-level authorization on project task tools; drop userBoardWhere ([f36e85a](https://github.com/pdovhomilja/nextcrm-app/commit/f36e85a2dc0f96c8af19bd68cf6818fd440ee462))
* **mcp:** read-scoped authorization on project watch_board (escalation fix) ([7f6d2f8](https://github.com/pdovhomilja/nextcrm-app/commit/7f6d2f83a2b1e6f19fc9445cdb4989141ab5e1fb))
* **net:** assertPublicHost — resolve-validate-pin guard against SSRF/DNS-rebinding ([e4f8e95](https://github.com/pdovhomilja/nextcrm-app/commit/e4f8e954248f2484341c31f5bfc8d0bb9f01ac90))
* **net:** ip-rules — refuse non-public-unicast addresses (SSRF) ([17cbb28](https://github.com/pdovhomilja/nextcrm-app/commit/17cbb28de85aa29192b4a66837372a148aaf794c))
* **security:** SSRF host-guard on IMAP test/discover/create sinks ([a775e0d](https://github.com/pdovhomilja/nextcrm-app/commit/a775e0d0498362b7240e82b6543cdf25e9c1249e))
* **security:** SSRF host-guard on SMTP send and background IMAP connect ([53eeac4](https://github.com/pdovhomilja/nextcrm-app/commit/53eeac43eb4ec9aa3ba57777d88a01504f6c570c))


### Fixed

* **authz:** guard directly-callable convertTarget action ([8b9f291](https://github.com/pdovhomilja/nextcrm-app/commit/8b9f291cdccdcf51c31562d8ceed072205845566))
* **authz:** use shared opportunity write-scope in setInactiveOpportunity ([30f9544](https://github.com/pdovhomilja/nextcrm-app/commit/30f95446bb825ded9105604a39c2c81b5ad86a58))
* **db-guard:** block empty/unresolvable host instead of passing it ([521137f](https://github.com/pdovhomilja/nextcrm-app/commit/521137f93129f3af146b4ee2fc7faf10c6a4390d))
* **db-guard:** close query-string [@localhost](https://github.com/localhost) bypass, fix bracketed IPv6 ([8909bc3](https://github.com/pdovhomilja/nextcrm-app/commit/8909bc3f631cc007bfdd21e76c6f94a35a9aa8cf))
* **dev:** bind local Postgres to loopback and bound db:wait retries ([989e2ed](https://github.com/pdovhomilja/nextcrm-app/commit/989e2ed9ccdf8b621147db962121b9b5a18721b0))
* **dev:** guard db scripts against remote DB and correct local Postgres docs ([3482cd0](https://github.com/pdovhomilja/nextcrm-app/commit/3482cd0936de273d6ce24cf28018ac8ff965cd7b))
* **security:** authorize Resend key action, harden IMAP/SMTP connect surface ([648160f](https://github.com/pdovhomilja/nextcrm-app/commit/648160f0dfdaa235d45ec8b3806f4552277244f3))

## [0.17.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.16.0...v0.17.0) (2026-07-20)


### Added

* **calendar:** emit outbound sync events from activity writers ([de3c34b](https://github.com/pdovhomilja/nextcrm-app/commit/de3c34b5ad903ab654930c7c5982949456737b4d))
* **calendar:** two-way sync upgrade button + scope level in profile UI ([2cf2f1d](https://github.com/pdovhomilja/nextcrm-app/commit/2cf2f1d68ef5727bfd22c1213d242b9437012e66))


### Fixed

* **calendar:** close unrelated-connection guard gap for disconnected accounts ([1c13839](https://github.com/pdovhomilja/nextcrm-app/commit/1c138396ed6b2132509b3ca3ce6e4c3c0cb7556b))
* **calendar:** harden outbound push against guest-list wipes, false revocations, and unauthorized writes ([03e3f60](https://github.com/pdovhomilja/nextcrm-app/commit/03e3f60e75aa6d577b2c76588c0c00b06d328d9c))
* **calendar:** harden outbound sync emit against slow sends and fix write/emit ordering ([55845a1](https://github.com/pdovhomilja/nextcrm-app/commit/55845a1a7cf32d9c268775c2328f9c234c5e5be2))
* **calendar:** keep stored scopeLevel truthful, kill race duplicates, patch back-dated meetings ([e0729cc](https://github.com/pdovhomilja/nextcrm-app/commit/e0729cc3920aa3415f5bde05140d3c14ac0a9da7))
* **calendar:** stop notes edits on past meetings from emailing customers ([9eb4344](https://github.com/pdovhomilja/nextcrm-app/commit/9eb4344a52e5e1af8c0e1dfddc64f5d2eddaeb47))

## [0.16.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.15.0...v0.16.0) (2026-07-19)


### Added

* **calendar:** CalendarConnection + crm_CalendarEvents models for Phase 4 sync ([816a5c0](https://github.com/pdovhomilja/nextcrm-app/commit/816a5c045f876f456418a0bd28a19fee62a73784))
* **calendar:** Calendly admin settings page + org webhook subscription ([bdede85](https://github.com/pdovhomilja/nextcrm-app/commit/bdede854b6e26242f76cdd7ef16312605f293a3e))
* **calendar:** Calendly settings storage + signed webhook endpoint ([f92c728](https://github.com/pdovhomilja/nextcrm-app/commit/f92c7283359dae3cdf63f4c7c9050de64fa04131))
* **calendar:** Calendly webhook HMAC signature verification ([42d3142](https://github.com/pdovhomilja/nextcrm-app/commit/42d31424c7036187e7edd96741c7a7292306ea92))
* **calendar:** counterparty email matcher (contact &gt; target &gt; lead) ([e942991](https://github.com/pdovhomilja/nextcrm-app/commit/e9429917eeb99ac3522dab7d79944bbdf37311b1))
* **calendar:** dedicated Calendar tab on profile + OAuth result banner ([7240889](https://github.com/pdovhomilja/nextcrm-app/commit/724088999b2d139d6e09d993624df9c6441aaf94))
* **calendar:** Google Calendar incremental polling sync via Inngest ([f70b663](https://github.com/pdovhomilja/nextcrm-app/commit/f70b66320de1b508f6207aa8f760496921cf4898))
* **calendar:** Google Calendar OAuth connect flow (readonly scope) ([2e8b591](https://github.com/pdovhomilja/nextcrm-app/commit/2e8b59147bde47a176dee78da272591aecbd4d0d))
* **calendar:** inngest processor for crm/calendar.event.received ([dc96cd1](https://github.com/pdovhomilja/nextcrm-app/commit/dc96cd1dcbedfe9a89c4eaf941c910ce330196bd))
* **calendar:** profile UI for Google Calendar connections ([ea5e7c5](https://github.com/pdovhomilja/nextcrm-app/commit/ea5e7c5dc6bfed2ed7be97f7fe2b67ebcb3a1be3))
* **calendar:** register calendar settings in admin sidebar ([7791ab2](https://github.com/pdovhomilja/nextcrm-app/commit/7791ab2d6ac62c1111a2ae1a875fdd1533b206d2))
* **calendar:** shared idempotent calendar-event processor ([2e4aa70](https://github.com/pdovhomilja/nextcrm-app/commit/2e4aa70712cf45400544256bb0fe7a7b1160573d))
* **crm:** AQUNAMA Phase 4 — calendar sync (Calendly + Google Calendar inbound) ([57fa4ec](https://github.com/pdovhomilja/nextcrm-app/commit/57fa4ec4c26b481c06a874db00a8f4f9503bfc93))


### Fixed

* **calendar:** classify Google auth-revocation vs rate-limit/token errors ([51cdbec](https://github.com/pdovhomilja/nextcrm-app/commit/51cdbecfbc5dbdcfcc6d4475ac2b8a51886ad345))
* **calendar:** exception-safe Calendly subscription + shared authz in admin settings ([5a127ab](https://github.com/pdovhomilja/nextcrm-app/commit/5a127ab6db964a5d125ecd0ac366ff91e22064a9))
* **calendar:** filter soft-deleted contacts/leads in matcher ([eba5ecd](https://github.com/pdovhomilja/nextcrm-app/commit/eba5ecd39595c6fbd32c4e0aec9d9071c423e3a2))
* **calendar:** log dropped Calendly webhook events missing uri/start_time ([290f23f](https://github.com/pdovhomilja/nextcrm-app/commit/290f23f26d21672d7f5d05c29722a4674e2166a0))
* **calendar:** OAuth state (CSRF) validation + narrowed error logging ([5978f82](https://github.com/pdovhomilja/nextcrm-app/commit/5978f82b072c2b1f2c7f06f542c6217a4a343695))
* **calendar:** record lastSyncError for upsert-loop failures in google sync ([fc3dedd](https://github.com/pdovhomilja/nextcrm-app/commit/fc3deddd447c20b387755bf9f0001222d1fd7e47))
* **calendar:** transactional upsert + P2002 race handling in calendar processor ([7b8c34a](https://github.com/pdovhomilja/nextcrm-app/commit/7b8c34a6a9f07b2713132df66d02df0735df87fe))
* **crm:** exclude cancelled activities from the Phase 2 kill-clock query ([a2c8a2d](https://github.com/pdovhomilja/nextcrm-app/commit/a2c8a2dfdb2d01531e36116b4a37f75d6c740bb4))

## [0.15.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.14.0...v0.15.0) (2026-07-19)


### Added

* AQUNAMA Phase 3 — SOW/quote approval workflow + case-study flags ([43f95bf](https://github.com/pdovhomilja/nextcrm-app/commit/43f95bfdac390298c70751ff462143f4987a312d))

## [0.14.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.13.3...v0.14.0) (2026-07-19)


### Added

* **admin:** connect automation trigger kinds to sales stages in CRM settings ([49847ba](https://github.com/pdovhomilja/nextcrm-app/commit/49847bab3a41f5617530de09edd4e79ad3193d69))
* **admin:** instance-grade funnel timing settings page ([e94d1da](https://github.com/pdovhomilja/nextcrm-app/commit/e94d1da373c2e84b68d72bb6104aea3f39958c2c))
* AQUNAMA Phase 2 — funnel timer & task engine (kill rule, cadence, care, recycle, renewals) ([8d2a866](https://github.com/pdovhomilja/nextcrm-app/commit/8d2a866c703f950defc6517cd4411cb05de32a25))
* **crm:** 45-day kill rule cron with inbound-email/activity clock ([aa591a1](https://github.com/pdovhomilja/nextcrm-app/commit/aa591a142ccda15e2304ecdbd62c21405cea41fa))
* **crm:** auto-task helper and 5-touch qualified follow-up cadence ([366af8a](https://github.com/pdovhomilja/nextcrm-app/commit/366af8a7d8debb1acd37d77cbac087ee5a1e4a60))
* **crm:** care touchpoint engine (check-in, referral, quarterly) ([ab9aff8](https://github.com/pdovhomilja/nextcrm-app/commit/ab9aff8fc39061dd474a26b16a8488ebdfe3324f))
* **crm:** configurable timer logic — business days, cadence/care schedules, kill predicate, settings loader ([cd956fc](https://github.com/pdovhomilja/nextcrm-app/commit/cd956fce0934aeb9865ae64496d6c27b0f23c6ce))
* **crm:** emit crm/opportunity.stage-changed from all stage-writing actions ([413bd48](https://github.com/pdovhomilja/nextcrm-app/commit/413bd48d558574d297e24f24d0eb0bb8323c577c))
* **crm:** stage_kind on sales stages, task-opportunity link, stage_entered_at ([8eff98c](https://github.com/pdovhomilja/nextcrm-app/commit/8eff98c4ea8b493ff7a3847450498caa3977fbae))
* **crm:** target recycle cron with Recycled list and admin digest ([8c83243](https://github.com/pdovhomilja/nextcrm-app/commit/8c8324357bd011aae849daab8ec14b8930aeb3c8))
* **crm:** weekly renewal reminder sweep for contracts and account products ([18da8de](https://github.com/pdovhomilja/nextcrm-app/commit/18da8de91bac437ca271cf4585aa94da96d4a905))


### Fixed

* **crm:** final-review fixes — protect re-engaged targets and completed renewals ([f2a7434](https://github.com/pdovhomilja/nextcrm-app/commit/f2a743412d657a8ac99782595790ab9e8b37c937))

## [0.13.3](https://github.com/pdovhomilja/nextcrm-app/compare/v0.13.2...v0.13.3) (2026-07-17)


### Fixed

* **ci:** make migration chain replayable on a fresh database ([2c34ebb](https://github.com/pdovhomilja/nextcrm-app/commit/2c34ebbe203ffa620535eaf3437d2db5ed067d15))
* **crm:** drop empty currency on opportunity update; e2e round 2 ([bbac5ea](https://github.com/pdovhomilja/nextcrm-app/commit/bbac5ea7a9e57b66346101f678806a4cfc8766f1))

## [0.13.2](https://github.com/pdovhomilja/nextcrm-app/compare/v0.13.1...v0.13.2) (2026-07-17)


### Fixed

* **crm:** align lead/contract table display schemas with DB nullability ([c1c8ef4](https://github.com/pdovhomilja/nextcrm-app/commit/c1c8ef42be008c4e4951efa336a5450b9fbaeb28))
* **crm:** align table display schemas with DB nullability (close_date, leads, contracts) ([37cfbef](https://github.com/pdovhomilja/nextcrm-app/commit/37cfbefd7df79c36bfebb04cc8aaa01581002a1b))

## [0.13.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.13.0...v0.13.1) (2026-07-17)


### Fixed

* **crm:** serialize Prisma Decimals in opportunities/contracts fetches (RSC boundary error) ([48a6bb0](https://github.com/pdovhomilja/nextcrm-app/commit/48a6bb0550d9fafc174c55911e5aff7215b794e3))
* **crm:** serialize Prisma Decimals in opportunities/contracts list fetches ([ffba94a](https://github.com/pdovhomilja/nextcrm-app/commit/ffba94aebec29c2bdad101a6d6d6875073cc3583))

## [0.13.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.12.3...v0.13.0) (2026-07-17)


### Added

* add Mailtrap email provider helper ([562aeb9](https://github.com/pdovhomilja/nextcrm-app/commit/562aeb947f5f5c2038d29753176fb871562e19a7))
* add Mailtrap sandbox email testing provider ([9dd0a7d](https://github.com/pdovhomilja/nextcrm-app/commit/9dd0a7db078334d418576c5eea1ccad04e8758d9))
* add real sending capability to Mailtrap helper ([7229e90](https://github.com/pdovhomilja/nextcrm-app/commit/7229e903c494efed6aed4987066da8cbe079a0af))
* AQUNAMA Phase 1 — global email opt-out, target-to-deal conversion, delivery deadline, XLSX import ([f8dacb3](https://github.com/pdovhomilja/nextcrm-app/commit/f8dacb3b3ab3e2c6626e8d9019233785d468f792))
* **campaigns:** enforce global do_not_email across send pipeline and import ([4471454](https://github.com/pdovhomilja/nextcrm-app/commit/44714549f46acbe1f2f03ecc4b8f581180ce4887))
* **campaigns:** unsubscribe sets global do_not_email suppression on targets ([6a97c5b](https://github.com/pdovhomilja/nextcrm-app/commit/6a97c5b43da924d4961e6d0648ab154d598f5c82))
* **crm:** add delivery_deadline field to opportunities (PO-stage requirement) ([fba530b](https://github.com/pdovhomilja/nextcrm-app/commit/fba530b9354f2a3dc626300b380a6d00870902b5))
* **crm:** add global do_not_email flag on targets and delivery_deadline on opportunities ([8a7c8a6](https://github.com/pdovhomilja/nextcrm-app/commit/8a7c8a6ff525d9f04ad3d9c2ed2ef2e25b62aab6))
* **crm:** convert target to deal with campaign attribution and entry stage ([2d79035](https://github.com/pdovhomilja/nextcrm-app/commit/2d79035315263eaae9c1f009c3def7c76f74158b))
* **crm:** support XLSX target imports via shared spreadsheet parser ([4dabb29](https://github.com/pdovhomilja/nextcrm-app/commit/4dabb29b2e0a35a2f150cc45c0dd0e2e96b61180))


### Fixed

* **campaigns:** case-insensitive suppression matching and send-step last-gate guard ([f9df822](https://github.com/pdovhomilja/nextcrm-app/commit/f9df822c230c5da8b1c2dbb31a2d53301e0b9b4e))
* **campaigns:** keep unsubscribe confirmation on suppression write failure ([2bee7dc](https://github.com/pdovhomilja/nextcrm-app/commit/2bee7dc07fd15fc516592131476aa2fea561b77d))
* **crm:** make target-to-deal conversion idempotent and honor error contract ([a27cf00](https://github.com/pdovhomilja/nextcrm-app/commit/a27cf00c1740c8f69cb0474dd1f365d1ff28670c))
* **deploy:** pin pnpm 11 via packageManager so nixpacks doesn't build with pnpm 9 ([aedeab3](https://github.com/pdovhomilja/nextcrm-app/commit/aedeab33fd90f10f22e3c842daf8d59819b553b4))
* **deploy:** use current corepack in nixpacks and migrate to pnpm 11 allowBuilds ([82ccda4](https://github.com/pdovhomilja/nextcrm-app/commit/82ccda4b2b577cb46cf9f911fbac7d34ee26ff7c))
* **deps:** pin kysely 0.28 — restore main deployability (better-auth 1.6.13 adapter breakage) ([b7392ac](https://github.com/pdovhomilja/nextcrm-app/commit/b7392acc5d0e42ff0465e0db0b9a20c14deafbfd))
* **deps:** pin kysely to 0.28 line — better-auth 1.6.13 adapter incompatible with kysely 0.29 ([284a305](https://github.com/pdovhomilja/nextcrm-app/commit/284a30519f12cc95a53bb56dbc43ac70f8629478))

## [0.12.3](https://github.com/pdovhomilja/nextcrm-app/compare/v0.12.2...v0.12.3) (2026-06-13)


### Bug Fixes

* **security:** enforce manager/admin RBAC in MCP product tools (GHSA-wv63-cq38-qg58) ([02e7a22](https://github.com/pdovhomilja/nextcrm-app/commit/02e7a226e1363a060013cc16bb4d26d4c190bc27))
* **security:** enforce manager/admin RBAC in MCP product tools (GHSA-wv63-cq38-qg58) ([1c41d58](https://github.com/pdovhomilja/nextcrm-app/commit/1c41d5832629f50e658fb64a884c98e846830549))

## [0.12.2](https://github.com/pdovhomilja/nextcrm-app/compare/v0.12.1...v0.12.2) (2026-06-13)


### Bug Fixes

* **security:** enforce object-level authz in MCP campaign tools (GHSA-c9vg-c532-ppqx) ([d219b7b](https://github.com/pdovhomilja/nextcrm-app/commit/d219b7b47291e52cd200fba193f4da68c6dde75a))
* **security:** enforce object-level authz in MCP campaign tools (GHSA-c9vg-c532-ppqx) ([88258b1](https://github.com/pdovhomilja/nextcrm-app/commit/88258b1cce63f42e9399b1ce9575a72dc89b72c5))

## [0.12.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.12.0...v0.12.1) (2026-05-11)


### Bug Fixes

* **mcp:** set basePath so /api/mcp/{mcp,sse} actually route ([16fb5be](https://github.com/pdovhomilja/nextcrm-app/commit/16fb5be137fb54b5de324f659dd8b48881004aad))
* **mcp:** set basePath so /api/mcp/{mcp,sse} actually route ([3c36be2](https://github.com/pdovhomilja/nextcrm-app/commit/3c36be22658d27092606e32dea3d083fcc0b1bfd))

## [0.12.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.11.1...v0.12.0) (2026-05-08)


### Features

* **authz:** add account read-scope helpers ([6fdff66](https://github.com/pdovhomilja/nextcrm-app/commit/6fdff669fdd1db42789b106e0e4f8939a98f6ff0))
* **authz:** add account write-scope assertion helper ([fb4b8f6](https://github.com/pdovhomilja/nextcrm-app/commit/fb4b8f66052d62097bea9c66c1d0c8bf9ae4c05c))
* **authz:** add account/lead/opportunity id-filter helpers (similarity post-filter) ([98b32f1](https://github.com/pdovhomilja/nextcrm-app/commit/98b32f17eb2c11e9237f95eddc85d0bf89d8206b))
* **authz:** add activity-for-entity scope dispatch helper ([db08f51](https://github.com/pdovhomilja/nextcrm-app/commit/db08f51b8b943ffac1a755029a27c352e6ac7a6f))
* **authz:** add AuthenticationError and AuthorizationError ([47e4980](https://github.com/pdovhomilja/nextcrm-app/commit/47e49805928975b8a0932c380871c0e174c287c1))
* **authz:** add barrel export ([48a2a5e](https://github.com/pdovhomilja/nextcrm-app/commit/48a2a5e379f8a634ebd322603c139c2cf715a399))
* **authz:** add board and task read/write scope helpers ([380e6a5](https://github.com/pdovhomilja/nextcrm-app/commit/380e6a59f636416ef1650ef849b947b6edab7a4a))
* **authz:** add bulk-id authorization filters for contacts and targets ([388d29d](https://github.com/pdovhomilja/nextcrm-app/commit/388d29dcbea52c6dfcfe2e3720ed2bb3fc515cb7))
* **authz:** add campaign and template read/write scope helpers ([6af7af0](https://github.com/pdovhomilja/nextcrm-app/commit/6af7af033f6d49df1844fb07e2687401d110c7c0))
* **authz:** add canonical AppRole type and legacy role mapper ([1350ed3](https://github.com/pdovhomilja/nextcrm-app/commit/1350ed39623a61aa31ed2e9220fa66b7782796a4))
* **authz:** add document read/write scope helpers (linked-entity aware) ([f2122a2](https://github.com/pdovhomilja/nextcrm-app/commit/f2122a23eec404e431445d7645ef9c3431e5bdce))
* **authz:** add enrichment cancel permission helpers ([6acbfec](https://github.com/pdovhomilja/nextcrm-app/commit/6acbfec765d0bc68748a20f8b3df75602220bd5c))
* **authz:** add lead/contact/opportunity/contract read-scope helpers (linked-account aware) ([bfaef87](https://github.com/pdovhomilja/nextcrm-app/commit/bfaef8756686eb2c07236b1250e67032cbaafbb4))
* **authz:** add read/write assertion helpers for contacts and targets ([e0fff6b](https://github.com/pdovhomilja/nextcrm-app/commit/e0fff6b911f145fe1878de9d3969657b897bb2f9))
* **authz:** add ReportScope builder for per-role report data filtering ([0035bf0](https://github.com/pdovhomilja/nextcrm-app/commit/0035bf0cb3047a5a54c7caf7eb898b2037306d79))
* **authz:** add requireAuthenticated, requireRole, role predicates ([30c3472](https://github.com/pdovhomilja/nextcrm-app/commit/30c3472f94e6e2555ad2ca9109f793c795b7c497))
* **authz:** add route response helpers (401/403/404) ([7ad29ae](https://github.com/pdovhomilja/nextcrm-app/commit/7ad29aea1639d3c403d1283698c65c74aef164ed))
* **authz:** add scoped contact and target update helpers ([071cb2c](https://github.com/pdovhomilja/nextcrm-app/commit/071cb2ceab48858c505a3ed7e3b0ae47119e7b1e))
* **authz:** add target and target-list read-scope helpers ([45b82a8](https://github.com/pdovhomilja/nextcrm-app/commit/45b82a87538d54921cbb370b9d873cb42cc68a35))
* **authz:** align UI/action callers to canonical role names ([1dc5618](https://github.com/pdovhomilja/nextcrm-app/commit/1dc5618c6c17d3e5b96295c9c38ff2324fd91447))
* **authz:** switch Users.role to Prisma enum AppRole ([d598305](https://github.com/pdovhomilja/nextcrm-app/commit/d598305ebc97b15852f41d5cc5f1807836302cfe))
* **authz:** validate setUserRole against canonical AppRole ([77241b7](https://github.com/pdovhomilja/nextcrm-app/commit/77241b726b748a5191c5acb6c331888672eac947))
* **db:** backfill canonical roles (admin/manager/user) and sync is_admin ([f7475f5](https://github.com/pdovhomilja/nextcrm-app/commit/f7475f5d081a1cba0ae76c9af962c10f5209648b))
* **reports:** per-category functions accept ReportScope to filter data by role ([87d73e0](https://github.com/pdovhomilja/nextcrm-app/commit/87d73e0c982b11c259bbdeef298641e087fd4251))
* **security:** permission-driven authorization migration (Phases A → F.1) ([e06478f](https://github.com/pdovhomilja/nextcrm-app/commit/e06478ff16f9a7472c6d16cd0ef6e96c5c409446))


### Bug Fixes

* **account-products:** require account read scope on get-account-products ([36f2d0d](https://github.com/pdovhomilja/nextcrm-app/commit/36f2d0d073adcab04729e15395d1f1b1d0273890))
* **account-products:** require account write scope on assignment mutations ([dfa1850](https://github.com/pdovhomilja/nextcrm-app/commit/dfa18506a9d96eacb31c7014ca39d17cf46c1c56))
* **admin:** require admin role on activate/deactivate user (close audit gap) ([8215af2](https://github.com/pdovhomilja/nextcrm-app/commit/8215af27d86575b3a094e554dbe4e401810fc5e4))
* **admin:** require admin role on CRM-settings server actions ([be27db7](https://github.com/pdovhomilja/nextcrm-app/commit/be27db7b31c6e65796bed7d73d1ba8433173a561))
* **admin:** require admin role on currency server actions ([8dfc9ad](https://github.com/pdovhomilja/nextcrm-app/commit/8dfc9ad99c3c5224675f9d11046f014a98c1115c))
* **api:** filter contact bulk enrichment ids by user scope ([5014d9a](https://github.com/pdovhomilja/nextcrm-app/commit/5014d9ad747c75e0278950a361e30073d09c7c17))
* **api:** filter target bulk enrichment ids by user scope ([4af94fe](https://github.com/pdovhomilja/nextcrm-app/commit/4af94fe910f9eb3b0290fe519eae0e7efde1a72e))
* **api:** require contact write scope on enrich POST/DELETE ([b1530c0](https://github.com/pdovhomilja/nextcrm-app/commit/b1530c091ebc15e255ccce47e220b755bae8db17))
* **api:** require invoice read scope on PDF route ([a35d7d0](https://github.com/pdovhomilja/nextcrm-app/commit/a35d7d0c0c7d12a58b4567bb3fa62fe1dc324508))
* **api:** require parent target write scope on target-contact create ([28912b4](https://github.com/pdovhomilja/nextcrm-app/commit/28912b43aed27a08243c066ed644d57c195fe817))
* **api:** require target write scope and contact linkage on per-target-contact enrich ([80f9ee4](https://github.com/pdovhomilja/nextcrm-app/commit/80f9ee4dadaff611cbd4fc578e2d7048e371ca76))
* **api:** require target write scope on enrich POST/DELETE (auto-fixes campaign re-export) ([18a0b56](https://github.com/pdovhomilja/nextcrm-app/commit/18a0b562a14b36f3b6137a18a856fb8f616f3414))
* **api:** require target write scope on per-target enrich (auto-fixes campaign re-export) ([85cfe72](https://github.com/pdovhomilja/nextcrm-app/commit/85cfe720fb2281eb73d74ec737d3c7037442b37f))
* **api:** scope reports/export by role; gate users-directory report ([571fbf3](https://github.com/pdovhomilja/nextcrm-app/commit/571fbf37caf71a7a2f66980cf28c6e1a710141e7))
* **api:** scoped contact PATCH closes BOLA/IDOR (GHSA-mg5f-m89f-4gmc) ([c80d3ec](https://github.com/pdovhomilja/nextcrm-app/commit/c80d3ec564ddb5f3bf38aec54ff5fb5aa3e7e90c))
* **api:** scoped target PATCH closes BOLA/IDOR (auto-fixes campaign re-export) ([cd0ed0a](https://github.com/pdovhomilja/nextcrm-app/commit/cd0ed0a4139398cf003505c44e9bc8a91a9def76))
* **auth:** align auth-client roles with renamed manager/user ([66e0e84](https://github.com/pdovhomilja/nextcrm-app/commit/66e0e8428556c9c75da28f601ef33d38cf94a674))
* **authz:** drop readonly tuple from accountUserScopeOR for Prisma compat ([39bcebe](https://github.com/pdovhomilja/nextcrm-app/commit/39bcebe70acfe17a391b1d0ad06178c7752b0a43))
* **authz:** include deletedAt:null in target read scope (crm_Targets has soft-delete) ([7a8fc2e](https://github.com/pdovhomilja/nextcrm-app/commit/7a8fc2e620c11e3abd9c3b1456703eced05eb61d))
* **authz:** replace is_admin checks with requireRole on admin invoice routes ([a54ed98](https://github.com/pdovhomilja/nextcrm-app/commit/a54ed9836deb11b7ba8714fc15a0248d36824ab3))
* **authz:** use lowercase prismadb.documents accessor ([a816361](https://github.com/pdovhomilja/nextcrm-app/commit/a816361a0029165294d1e201423a10fdc4e570d8))
* **campaign-templates:** scope template reads/mutations by role and ownership ([417ae5a](https://github.com/pdovhomilja/nextcrm-app/commit/417ae5a8e7ad6049397af2a03997d27b81cc2bfe))
* **campaigns:** narrow createCampaign result before using campaign.id ([1794a88](https://github.com/pdovhomilja/nextcrm-app/commit/1794a88ebde37b491a532865229c78175e5f65f4))
* **campaigns:** require auth + ownership on create/update/delete/pause ([6f2b02e](https://github.com/pdovhomilja/nextcrm-app/commit/6f2b02e1b35823c87a5a9d6a15e751bc90064c23))
* **campaigns:** require manager/admin role on schedule and send-now ([7361442](https://github.com/pdovhomilja/nextcrm-app/commit/7361442c5226030125ede66cb45ba6ea5c4a9aab))
* **campaigns:** scope campaign reads by role ([146d5b4](https://github.com/pdovhomilja/nextcrm-app/commit/146d5b4b224bd887dacb50e69b954ea7bdbb8795))
* **crm:** require account read scope on getAccountById ([edb9b9b](https://github.com/pdovhomilja/nextcrm-app/commit/edb9b9b821b10cc5271560b73caf8efaba02c59c))
* **crm:** require entity-scoped read access on activity feed ([568a7cc](https://github.com/pdovhomilja/nextcrm-app/commit/568a7cc8c56e0eb10f97442bb43ea3206978a4d6))
* **crm:** scope account list by user/manager/admin role ([a9f9a6f](https://github.com/pdovhomilja/nextcrm-app/commit/a9f9a6fa3755e561678361d91af6bae8e239fa2e))
* **crm:** scope account search by user/manager/admin role ([3fd6673](https://github.com/pdovhomilja/nextcrm-app/commit/3fd6673879f88ffff8c50dd5801d02b141cecc89))
* **crm:** scope audit-log-by-entity and normalize audit-log-admin to canonical helper ([ea45503](https://github.com/pdovhomilja/nextcrm-app/commit/ea45503d576a6fc3181f742adaff58e58b735936))
* **crm:** scope contact reads by role and linked-account/opportunity access ([be7e186](https://github.com/pdovhomilja/nextcrm-app/commit/be7e186236b2eef48b0915428cc75eca1c6f0667))
* **crm:** scope contract reads by role and linked-account access ([9b39448](https://github.com/pdovhomilja/nextcrm-app/commit/9b39448178c3d6ed241aadf60894ea1fd9479a9f))
* **crm:** scope lead reads by role and linked-account access ([b5d088b](https://github.com/pdovhomilja/nextcrm-app/commit/b5d088bbb63d69e5bc79fd62c32f37edf46eabbc))
* **crm:** scope opportunity reads by role; cache key respects user scope ([16c64fb](https://github.com/pdovhomilja/nextcrm-app/commit/16c64fbfb063ae0ea41678fa059e74357e296561))
* **crm:** scope pgvector similarity results by user/manager/admin ([a1fb3a8](https://github.com/pdovhomilja/nextcrm-app/commit/a1fb3a84a6aab9913929d61d1b5b1bc54420e276))
* **crm:** scope remaining opportunity read actions (by-account, by-contact, user-opps) ([e8bcfc9](https://github.com/pdovhomilja/nextcrm-app/commit/e8bcfc91192d6929c046d91456393c1b82f0d6b7))
* **crm:** scope target and target-list reads by role ([9e326eb](https://github.com/pdovhomilja/nextcrm-app/commit/9e326ebf35c6596af27779a3faa3b366856f9101))
* **documents:** filter bulk document operations by user scope (fail-closed) ([61132fe](https://github.com/pdovhomilja/nextcrm-app/commit/61132fee767cffbd9b4d81d9dc7b052bb969d3c0))
* **documents:** require ownership/account scope on document mutations ([5bb9035](https://github.com/pdovhomilja/nextcrm-app/commit/5bb9035052326065cab5d5c56c57d959d60fce07))
* **documents:** scope document reads by role and linked-entity access ([220cf23](https://github.com/pdovhomilja/nextcrm-app/commit/220cf231c5ddcda9905e556f92aefa4268d6015b))
* **invoices:** require account read scope on get-invoices-by-accountId ([c8cbf66](https://github.com/pdovhomilja/nextcrm-app/commit/c8cbf669e34e651eb65e9799f25491480eef52f2))
* **invoices:** require account write scope on create and on accountId reassignment ([f8282e5](https://github.com/pdovhomilja/nextcrm-app/commit/f8282e5ec64f7f469502173d1d28af34b81f7bae))
* **invoices:** require read scope on source and write scope on accountId for duplicateInvoice ([eb792a7](https://github.com/pdovhomilja/nextcrm-app/commit/eb792a76dd05dfba7bf9db855e27f6d293db5ce9))
* **migration:** scrub orphan creator FK refs before adding new FK constraint ([7fa5196](https://github.com/pdovhomilja/nextcrm-app/commit/7fa5196b04d594386ce17bd23049207a556e581e))
* **products:** require authentication on product read actions ([b2a860f](https://github.com/pdovhomilja/nextcrm-app/commit/b2a860fcbff5cd84bbd73faf574c1f3079653ce2))
* **products:** require manager/admin role on product mutations ([61ed918](https://github.com/pdovhomilja/nextcrm-app/commit/61ed918e65629661f9818ca2a4dcf6bc3f46a4cb))
* **projects:** require board write/read scope on board mutations ([522ca13](https://github.com/pdovhomilja/nextcrm-app/commit/522ca1323f45b38f5c78fdd64116d5c6c8f07206))
* **projects:** require parent board write scope on section mutations ([65e208f](https://github.com/pdovhomilja/nextcrm-app/commit/65e208fcff948eca80e3380fb599dc585f63b0e7))
* **projects:** scope project read actions by board access ([5ddaa97](https://github.com/pdovhomilja/nextcrm-app/commit/5ddaa976f853b88b526c129e0787939aa4567a9b))
* **projects:** scope task mutations (board strict + assignee soft) ([27f0cf8](https://github.com/pdovhomilja/nextcrm-app/commit/27f0cf8dfd7999599397d4f65a7f9d082900c848))
* **reports:** gate users-directory report behind manager/admin ([20aeeaf](https://github.com/pdovhomilja/nextcrm-app/commit/20aeeafec24b3d6f02ad3f69e1d0d2d68c88f4f8))
* **reports:** scope config and schedule reads/mutations by role and ownership ([932de36](https://github.com/pdovhomilja/nextcrm-app/commit/932de36cd3dd84c20fae20d49f72badd76a970e0))
* **reports:** scope dashboard tasks count and unified search by role ([d17a880](https://github.com/pdovhomilja/nextcrm-app/commit/d17a880eb6b8ac06097756d6006fcf11b44b1138))
* **reports:** scope scheduled-report data by schedule owner role ([7f7c7b6](https://github.com/pdovhomilja/nextcrm-app/commit/7f7c7b63f1cf6fd550454b3040981f1bbef13b5d))
* **security:** admin server action lockdown (Phase C) ([5a555fe](https://github.com/pdovhomilja/nextcrm-app/commit/5a555febe929bb3d477704914756737a04f3d3fd))
* **security:** authz cleanup — drop is_admin, role enum (Phase F) ([c22bf83](https://github.com/pdovhomilja/nextcrm-app/commit/c22bf837e83b10487641fcfc458629fa0fedf5d6))
* **security:** close enrichment BOLA/IDOR (Phase B1) ([726be4c](https://github.com/pdovhomilja/nextcrm-app/commit/726be4cb48c60620a15c3a3a850e8bde379a6e54))
* **security:** close GHSA-mg5f-m89f-4gmc + permission-driven authz foundation ([e6987aa](https://github.com/pdovhomilja/nextcrm-app/commit/e6987aa049dc6816a25c45436556960893c9c15d))
* **security:** close invoice IDOR (Phase B2) ([88d488b](https://github.com/pdovhomilja/nextcrm-app/commit/88d488b939057f4769d22f6ce00442738d73792b))
* **security:** scope campaigns + templates (Phase E2) ([99effa9](https://github.com/pdovhomilja/nextcrm-app/commit/99effa90d2154a930933b58bf64105fd70e0f52a))
* **security:** scope CRM account reads by role (Phase D1) ([cbc3a30](https://github.com/pdovhomilja/nextcrm-app/commit/cbc3a30a9b16ef3bd3e85ea7cc5bec234eba17f6))
* **security:** scope CRM accounts list by user authz read scope ([08c0ec7](https://github.com/pdovhomilja/nextcrm-app/commit/08c0ec7c521d44c02e7978aaf1744d9229e049df))
* **security:** scope CRM accounts list by user authz read scope ([8e86e03](https://github.com/pdovhomilja/nextcrm-app/commit/8e86e03894e4cb4b9d9c5d2265a915fd9ce775bb))
* **security:** scope CRM lead/contact/opportunity/contract reads by role (Phase D2) ([d795b00](https://github.com/pdovhomilja/nextcrm-app/commit/d795b00f6558777f3019a830069561fccb4de4f5))
* **security:** scope documents + bulk ops (Phase E3) ([12ac3df](https://github.com/pdovhomilja/nextcrm-app/commit/12ac3df7218d9512a5b6f0cf33cc750cc9ffe4d1))
* **security:** scope products + account-products + invoice list (Phase E1) ([4ecfc56](https://github.com/pdovhomilja/nextcrm-app/commit/4ecfc565c7b40c2b038f418971fc292a2c596663))
* **security:** scope projects (boards/sections/tasks) (Phase E4) ([bc2a72a](https://github.com/pdovhomilja/nextcrm-app/commit/bc2a72a23c6ae4895c7c9cdf74f45ccaeb915bf2))
* **security:** scope reports + dashboard + unified search by role (Phase B3) ([477dcf6](https://github.com/pdovhomilja/nextcrm-app/commit/477dcf6b31db740bfb3e875f972c63ba2cd19bba))
* **security:** scope targets, activities, audit log, similarity (Phase D3) ([07a03f9](https://github.com/pdovhomilja/nextcrm-app/commit/07a03f9f23b09b29994c1ccacd16fb3e520308c6))
* **tests:** merge duplicate prismadb.documents mock keys after lowercase fix ([3446bc9](https://github.com/pdovhomilja/nextcrm-app/commit/3446bc96e08d28457dee09d014297ef42370e91a))

## [0.11.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.11.0...v0.11.1) (2026-04-24)


### Bug Fixes

* **deps:** patch Dependabot advisories via pnpm overrides ([42eba8e](https://github.com/pdovhomilja/nextcrm-app/commit/42eba8e1b83cbe87b7f3a21f5d7df096f051e3d1))
* **deps:** patch Dependabot security advisories ([6002241](https://github.com/pdovhomilja/nextcrm-app/commit/60022410b56eab12abd4b10615e1602ade8c159f))
* **deps:** patch Dependabot security advisories via pnpm overrides ([22b2ecf](https://github.com/pdovhomilja/nextcrm-app/commit/22b2ecf2f09528a3219e740df36b7399ad967298))

## [0.11.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.10.3...v0.11.0) (2026-04-23)


### Features

* **crm:** show invoices on account detail page ([a207314](https://github.com/pdovhomilja/nextcrm-app/commit/a207314aded4b706b6fca9b537a603cbb55a9972))

## [0.10.3](https://github.com/pdovhomilja/nextcrm-app/compare/v0.10.2...v0.10.3) (2026-04-21)


### Bug Fixes

* **invoices:** add supplier company details, PDF regeneration, admin route guard ([31e2b29](https://github.com/pdovhomilja/nextcrm-app/commit/31e2b29c0d99d5a86429eeb5b03de38c45586cd2))
* **invoices:** supplier company details, PDF regeneration, admin route guard ([4c45b8e](https://github.com/pdovhomilja/nextcrm-app/commit/4c45b8e48ca60741c39d54ff2744a93242e1fabe))

## [0.10.2](https://github.com/pdovhomilja/nextcrm-app/compare/v0.10.1...v0.10.2) (2026-04-20)


### Bug Fixes

* **crm-settings:** allow creating industry, opportunity type, and sales stage values ([dc111f0](https://github.com/pdovhomilja/nextcrm-app/commit/dc111f03541e3724e1483e832f39dbc0411b58fd))
* **invoices:** consolidate Invoice_Currencies into shared Currency table ([43f3814](https://github.com/pdovhomilja/nextcrm-app/commit/43f3814a57973d18a7d687ee153a7b108231f68b))
* **invoices:** consolidate Invoice_Currencies into shared Currency table ([2c6820d](https://github.com/pdovhomilja/nextcrm-app/commit/2c6820d65e440906472f498b490f7c9fbdd73ea3))

## [0.10.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.10.0...v0.10.1) (2026-04-19)


### Bug Fixes

* **prisma:** add missing crm_Target_Contact migration ([7d76537](https://github.com/pdovhomilja/nextcrm-app/commit/7d76537f9ae994430fd782b6c7a789eb4dac69a8))
* **prisma:** add missing migration for crm_Target_Contact table ([792b8c3](https://github.com/pdovhomilja/nextcrm-app/commit/792b8c3ec24efeea963afdcbc71d4b2bf003bc72))

## [0.10.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.9.0...v0.10.0) (2026-04-18)


### Features

* **dashboard:** add Invoices, Campaigns, Targets cards; remove Employee card ([df13534](https://github.com/pdovhomilja/nextcrm-app/commit/df1353496e128f0f6c7035a28391e9ec8c786b76))
* **invoices:** add FKs, indexes, line-item trigger, money CHECK ([1496266](https://github.com/pdovhomilja/nextcrm-app/commit/1496266419db40292f2b0829eacafbc2c9457c4d))
* **invoices:** add numbering format template + counter consumer ([e533aeb](https://github.com/pdovhomilja/nextcrm-app/commit/e533aeb4e7bbe55c1b5a4a5e77c8a6872ef2bc6f))
* **invoices:** add PDF i18n string bundles (EN/CZ) ([02bcd7d](https://github.com/pdovhomilja/nextcrm-app/commit/02bcd7d04f3ffda004f8b2297038314ea0564dbd))
* **invoices:** add permission guards ([cb12109](https://github.com/pdovhomilja/nextcrm-app/commit/cb121093ed0f49895fa079a8158ed02ba74810ef))
* **invoices:** add Prisma schema, migration, tsvector trigger ([6b9f7f3](https://github.com/pdovhomilja/nextcrm-app/commit/6b9f7f366e8592a07d0ac534d0cc6b216762379c))
* **invoices:** add search filter builder ([a37c5fb](https://github.com/pdovhomilja/nextcrm-app/commit/a37c5fb894101a9f1d30ab91651f3ece0707d109))
* **invoices:** add totals computation with mixed VAT support ([cced002](https://github.com/pdovhomilja/nextcrm-app/commit/cced002054d70f3b6ccb26d6fca20d31bcf70584))
* **invoices:** admin pages — tax rates, series, currencies, settings ([9ed05dc](https://github.com/pdovhomilja/nextcrm-app/commit/9ed05dc5f6518784e72f697e5ef0595d04eea5b9))
* **invoices:** API routes for invoices CRUD, lifecycle, payments, search, admin config ([dcd47d0](https://github.com/pdovhomilja/nextcrm-app/commit/dcd47d09b367006c3fd467d817b7ef98969cc68c))
* **invoices:** fetch FX rates via frankfurter.app ([04c4e0e](https://github.com/pdovhomilja/nextcrm-app/commit/04c4e0e208aba5eb5ad849736357fbca4223f708))
* **invoices:** full invoicing module ([2b420ff](https://github.com/pdovhomilja/nextcrm-app/commit/2b420ff085211e321572a55e02a400662380fbc7))
* **invoices:** invoice email template ([788252b](https://github.com/pdovhomilja/nextcrm-app/commit/788252b5f3e31692f90a965f4132c1147619d8db))
* **invoices:** invoice UI — list, new, detail, edit pages ([40a09a6](https://github.com/pdovhomilja/nextcrm-app/commit/40a09a6e3e62da41d9b01bca8cbfab1bf687c4df))
* **invoices:** MinIO storage wrapper for invoice PDFs ([028d4c2](https://github.com/pdovhomilja/nextcrm-app/commit/028d4c2ed35b1cc0a945d317263cf76f82d18bc2))
* **invoices:** PDF render entry ([b9112c4](https://github.com/pdovhomilja/nextcrm-app/commit/b9112c426ad86b810d28a62a1faf723c4b7271ce))
* **invoices:** PDF template (@react-pdf/renderer) ([11109f6](https://github.com/pdovhomilja/nextcrm-app/commit/11109f62c5fdc5754446862b1beffb285a476127))
* **invoices:** seed currencies, default series, tax rates, settings ([68a8b80](https://github.com/pdovhomilja/nextcrm-app/commit/68a8b80793a5f989bd5ea031522e8e467d7459c0))
* **invoices:** server actions for invoice lifecycle ([e698e71](https://github.com/pdovhomilja/nextcrm-app/commit/e698e716141f4dcd0d48e2bea7a0bb9ec7217e7e))
* **invoices:** sidebar nav entry + i18n (EN/CZ) ([8c5f1d6](https://github.com/pdovhomilja/nextcrm-app/commit/8c5f1d609961e870b5823990695f75edbcd6a839))
* **invoices:** Zod schemas + shared types ([103b2c8](https://github.com/pdovhomilja/nextcrm-app/commit/103b2c81517ae23eed2e01f7361c0b1d8acc7273))


### Bug Fixes

* **invoices:** add PROFORMA to Zod invoice type enum ([18d6e40](https://github.com/pdovhomilja/nextcrm-app/commit/18d6e40281ab8fb726f21c6c4b99ddb92ea79ff6))
* **invoices:** fix Set type annotation in permissions for strict tsc ([1132616](https://github.com/pdovhomilja/nextcrm-app/commit/1132616272afd08368884862a2ef436bf24dfb12))
* **invoices:** hydration mismatches, decimal serialization, server action refactor ([75368f4](https://github.com/pdovhomilja/nextcrm-app/commit/75368f409bf61792ca0997492448b30ab4a3cd36))
* **invoices:** redirect to /invoices after creating new invoice ([2dd2d5e](https://github.com/pdovhomilja/nextcrm-app/commit/2dd2d5ecbee40f515a1f5d77153acffcea519600))
* **invoices:** redirect to invoice detail page after create/edit ([d58c35d](https://github.com/pdovhomilja/nextcrm-app/commit/d58c35db10e4ab03d88aec9fa0be7297d915db58))
* **invoices:** remove unused imports and prefix unused params ([b3e4ccc](https://github.com/pdovhomilja/nextcrm-app/commit/b3e4cccdabf580dedd4329afd3d2133eba38a436))
* **invoices:** remove unused React import from PDF template ([b851ece](https://github.com/pdovhomilja/nextcrm-app/commit/b851ece3b534acfbc4d628ad6fb10227679ee7c1))
* **invoices:** replace Account select with searchable combobox ([08e9b3d](https://github.com/pdovhomilja/nextcrm-app/commit/08e9b3d61f87113e6254fae2f48da15f6c2b42b5))
* **invoices:** review fixes — balanceDue, FX outside tx, permissions, search column, email template ([dde9dfa](https://github.com/pdovhomilja/nextcrm-app/commit/dde9dfaba15274c910329a71ad299585407c47f8))

## [0.9.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.8.0...v0.9.0) (2026-04-12)


### Features

* **crm:** add assign/disconnect document server actions for CRM tasks ([26f234a](https://github.com/pdovhomilja/nextcrm-app/commit/26f234a4837014b6ce8d8d3ae2f128367a7ec6c2))


### Bug Fixes

* **crm:** expand getCrMTask document select and clean up junction on delete ([b6d2f6b](https://github.com/pdovhomilja/nextcrm-app/commit/b6d2f6b4197999af116ae2165d80c7feb4cefd42))
* **crm:** remove task-specific filters from document table toolbar ([5cca3d1](https://github.com/pdovhomilja/nextcrm-app/commit/5cca3d1e4e25caef5b6b09056575495ec77c9a64))
* **crm:** switch CRM task document actions from broken axios calls to server actions ([efae73e](https://github.com/pdovhomilja/nextcrm-app/commit/efae73e56c78d80fcfa7b1358a3bf78df32e8f43))
* **crm:** uncomment assigned_to_user in task document schema and remove ts-ignore ([46c2868](https://github.com/pdovhomilja/nextcrm-app/commit/46c2868b34779d0924f578ae94dc3eb9cd303d7b))
* **crm:** wire CRM task documents to correct junction table + cleanup ([d4c503c](https://github.com/pdovhomilja/nextcrm-app/commit/d4c503c598a6905b6be826d311beb3fac2218bfa))
* **crm:** wire task comments to correct FK column (assigned_crm_account_task) ([c60ea57](https://github.com/pdovhomilja/nextcrm-app/commit/c60ea57dd2f45d800ead11466a32a5696d1c3754))
* **deps:** patch 2 Dependabot vulnerabilities ([0e2746c](https://github.com/pdovhomilja/nextcrm-app/commit/0e2746c2dd504e7e6a8c0d5e86ef9186e5b3c8f7))

## [0.8.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.7.1...v0.8.0) (2026-04-10)


### Features

* add Docker entrypoint script for auto-initialization ([1acba0a](https://github.com/pdovhomilja/nextcrm-app/commit/1acba0a5311dc99181075e61da92d59b099aff1c))
* add docker-compose.yml with all services ([c045ebb](https://github.com/pdovhomilja/nextcrm-app/commit/c045ebbfb0d07c25fa3e5c09c44b4ace7467b067))
* add multi-stage Dockerfile for NextCRM ([70a1b45](https://github.com/pdovhomilja/nextcrm-app/commit/70a1b45937af818df1a6b1c99f7d774f49af2796))
* Docker self-hosting setup with full automation ([bff363e](https://github.com/pdovhomilja/nextcrm-app/commit/bff363e646f0bfa55178922f4af05234515a0920))
* enable Next.js standalone output for Docker ([d8d1056](https://github.com/pdovhomilja/nextcrm-app/commit/d8d10565fb0fbb425f5d9bb2a41c3fe06a24cf83))


### Bug Fixes

* Docker e2e verification fixes ([e1ae699](https://github.com/pdovhomilja/nextcrm-app/commit/e1ae699cf8ce0e767bacdd3034f14bf3b4bf304b))
* **docker:** make admin email configurable via ADMIN_EMAIL ([7427b0a](https://github.com/pdovhomilja/nextcrm-app/commit/7427b0a3277b8fff83635cd1cf339eab92d442f1))
* **docker:** replace hardcoded credentials with env-driven placeholders ([255b11e](https://github.com/pdovhomilja/nextcrm-app/commit/255b11e882d4e6bdcb4172f8905bd65556ee22df))

## [0.7.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.7.0...v0.7.1) (2026-04-08)


### Bug Fixes

* merge dependabot vulnerability patches to main ([db6975a](https://github.com/pdovhomilja/nextcrm-app/commit/db6975a43a23fded9abb53bbdf6e9c45aa6c165d))
* patch 9 open dependabot vulnerabilities ([4c659fa](https://github.com/pdovhomilja/nextcrm-app/commit/4c659fa89d180933ef6ddc4df161e12e025d35a4))

## [0.7.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.6.1...v0.7.0) (2026-04-08)


### Features

* add SKILL.md download to Developer tab ([b1f528d](https://github.com/pdovhomilja/nextcrm-app/commit/b1f528d03b26ca4332f4d673c60cf51a8f303cab))
* add SKILL.md for Claude Code MCP integration ([b3a57b8](https://github.com/pdovhomilja/nextcrm-app/commit/b3a57b870403285efb883fafd1a4306db19fc5c2))

## [0.6.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.6.0...v0.6.1) (2026-04-07)


### Bug Fixes

* allow null description in opportunities table schema ([662e6bd](https://github.com/pdovhomilja/nextcrm-app/commit/662e6bd7992537a3f7c31e708f1b89d1d4399e96))
* allow null description in opportunities table schema ([8b414ac](https://github.com/pdovhomilja/nextcrm-app/commit/8b414acbe81bc327ffa7ff6a23fbc21436b817b0))

## [0.6.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.5.1...v0.6.0) (2026-04-07)


### Features

* align activity actions with deletedAt soft delete ([95de688](https://github.com/pdovhomilja/nextcrm-app/commit/95de688b97f712271e4ae771423aaadea627d104))
* align board/project actions with deletedAt soft delete ([df3fe1e](https://github.com/pdovhomilja/nextcrm-app/commit/df3fe1eb1a222cec130c1abd92918cfdbcc76c09))
* align campaign template actions with deletedAt soft delete ([a95ac24](https://github.com/pdovhomilja/nextcrm-app/commit/a95ac246e784cb3748a676126beefbd6b7e20d37))
* align crm-data and target-list actions with deletedAt soft delete ([eaa6a15](https://github.com/pdovhomilja/nextcrm-app/commit/eaa6a15ab8d76867100bb28bc84892180e583434))
* align target actions with deletedAt soft delete ([bbdad13](https://github.com/pdovhomilja/nextcrm-app/commit/bbdad13defcf45a9756cf055ea977cf156d66fab))
* MCP full parity (104 tools) + universal deletedAt soft-delete ([a164dcb](https://github.com/pdovhomilja/nextcrm-app/commit/a164dcb458a99a423a30357111c2068136973dc1))
* **mcp:** accounts delete uses deletedAt instead of status ([f565523](https://github.com/pdovhomilja/nextcrm-app/commit/f5655230775e703c0390811c0f9e7a4b77c2af25))
* **mcp:** add activities tools (5 tools, with entity links) ([7298d63](https://github.com/pdovhomilja/nextcrm-app/commit/7298d632b1ed1f87e32a911b216bbbae60f93425))
* **mcp:** add barrel export and update route handler with new error codes ([bec7bbd](https://github.com/pdovhomilja/nextcrm-app/commit/bec7bbd4a3eb832795c0485df508a1c88085cb4b))
* **mcp:** add campaigns tools (19 tools, full lifecycle + templates + steps + stats) ([7155053](https://github.com/pdovhomilja/nextcrm-app/commit/7155053f44598eb5db45b5f4460a370578ee2bf7))
* **mcp:** add contracts tools (5 tools, with line items) ([79c3013](https://github.com/pdovhomilja/nextcrm-app/commit/79c301311e0c1873941bb40d4af231aeec56e19a))
* **mcp:** add documents tools (8 tools, presigned URLs, entity linking) ([756d2be](https://github.com/pdovhomilja/nextcrm-app/commit/756d2bea8630cbd1196df6e14884139fe22fa465))
* **mcp:** add enrichment tools (4 tools, single + bulk for contacts and targets) ([2067f21](https://github.com/pdovhomilja/nextcrm-app/commit/2067f21ba57c61594cffa0ace229e3843a8bf9c4))
* **mcp:** add products tools (5 tools, org-wide catalog) ([7038bf2](https://github.com/pdovhomilja/nextcrm-app/commit/7038bf2dac23b7a12ad23cc0213f2aeb49ba56f1))
* **mcp:** add projects tools (18 tools, boards/sections/tasks/comments/watchers) ([b40f3ae](https://github.com/pdovhomilja/nextcrm-app/commit/b40f3ae572c61ad62de8b8c2ce0477535f2c6849))
* **mcp:** add reports tools (2) and email accounts tool (1) ([efe9cc7](https://github.com/pdovhomilja/nextcrm-app/commit/efe9cc719ac15ed1f3d99f8496eee9e5bb39adf4))
* **mcp:** add shared helpers for pagination, search, soft-delete, errors ([a8a0eb0](https://github.com/pdovhomilja/nextcrm-app/commit/a8a0eb0dd40375242c167c4f1a7f398286cfd683))
* **mcp:** add target lists tools (7 tools, membership management) ([4cdd748](https://github.com/pdovhomilja/nextcrm-app/commit/4cdd748582733be4f63f7382a6717cfb70a0cf62))
* **mcp:** campaigns use deletedAt instead of status for soft-delete ([0fac95e](https://github.com/pdovhomilja/nextcrm-app/commit/0fac95e803ff1bcd07a22e0af68e1da4ad76b8bd))
* **mcp:** documents use deletedAt instead of status for soft-delete ([440c629](https://github.com/pdovhomilja/nextcrm-app/commit/440c629f31a4af548640fd18ba66fc36ea9b2eb3))
* **mcp:** enable board soft-delete, add deletedAt filters to board queries ([8973d34](https://github.com/pdovhomilja/nextcrm-app/commit/8973d343ef5bc2bd7828f36b90fcf65f8cd2fabe))
* **mcp:** enable opportunities soft-delete, add deletedAt filters ([3805ab2](https://github.com/pdovhomilja/nextcrm-app/commit/3805ab298afb1f0c14848af12c503025ce472ad5))
* **mcp:** enable soft-delete for contacts, leads, targets, activities ([75217e4](https://github.com/pdovhomilja/nextcrm-app/commit/75217e431146a4a6871f17445a67c178c0e01405))
* **mcp:** rename account tools with crm_ prefix, add soft-delete, use helpers ([288204b](https://github.com/pdovhomilja/nextcrm-app/commit/288204bf7e870a7cc2b560c3994f7823ad311eb2))
* **mcp:** rename contacts/leads/opportunities/targets with crm_ prefix, add delete stubs ([24bfdcd](https://github.com/pdovhomilja/nextcrm-app/commit/24bfdcd7bbebdb164a25305438f566557995bb9e))
* **mcp:** target lists use deletedAt instead of boolean status ([1e917ed](https://github.com/pdovhomilja/nextcrm-app/commit/1e917edf1ba029648bee72cd9aa9c81aba907450))
* **mcp:** update helpers to use deletedAt-based soft delete ([41433ce](https://github.com/pdovhomilja/nextcrm-app/commit/41433ce7d26ac6b2ae6a31b7865b3da9007539db))


### Bug Fixes

* **mcp:** add explicit ReportFilters type annotation to fix date type mismatch ([68414eb](https://github.com/pdovhomilja/nextcrm-app/commit/68414eb4001ce2e0c35ea1e690db58c99960f510))
* **mcp:** fix campaign status filter collision and document unlink auth ([fc6f8a9](https://github.com/pdovhomilja/nextcrm-app/commit/fc6f8a91a24098a21b1f1a9ad454fa7c14d6c0e4))
* **mcp:** fix remaining status:true in target lists, update soft-delete report ([3037daf](https://github.com/pdovhomilja/nextcrm-app/commit/3037daf3dbc6a06360096f5934efab835a7401cb))
* **mcp:** prefix unused entity param in notFound helper ([e76305f](https://github.com/pdovhomilja/nextcrm-app/commit/e76305f4ff439c27c76f1cfedff31ae1296ef405))
* **mcp:** remove isNotDeleted from opportunities (enum type mismatch), fix unused import in products ([3792d51](https://github.com/pdovhomilja/nextcrm-app/commit/3792d515a0c05f97ea6f2c37749adcdafda8c3bc))

## [0.5.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.5.0...v0.5.1) (2026-04-06)


### Bug Fixes

* close pg pool on seed completion ([8193219](https://github.com/pdovhomilja/nextcrm-app/commit/81932196b5988495e329313b01c2f2e8a50b3ca6))

## [0.5.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.4.2...v0.5.0) (2026-04-05)


### Features

* **line-items:** add line items section to Contract detail page with copy-from-opportunity ([e3235fe](https://github.com/pdovhomilja/nextcrm-app/commit/e3235fe0f8c4c1e468ed239668dcb1d60a46a1ac))
* **line-items:** add line items section to Opportunity detail page ([24436e1](https://github.com/pdovhomilja/nextcrm-app/commit/24436e17a3d043ac1cefed2269cb6bebcf008323))
* **line-items:** add Prisma schema for Opportunity and Contract line items ([f3b1f30](https://github.com/pdovhomilja/nextcrm-app/commit/f3b1f301e464760780dea6402192e71cbfb90de8))
* **line-items:** add server actions for Contract line items with copy-from-opportunity ([baa83d1](https://github.com/pdovhomilja/nextcrm-app/commit/baa83d1b2bcc8401dd895f54c98402727ad8568b))
* **line-items:** add server actions for Opportunity line items ([680fa93](https://github.com/pdovhomilja/nextcrm-app/commit/680fa93ef4d2631b7f71d035804f954966b629a9))
* **line-items:** add shared calculation helper ([825c733](https://github.com/pdovhomilja/nextcrm-app/commit/825c7339302d995094ef595722f5c4f0718e6383))
* **line-items:** add shared LineItemsTable, AddLineItemForm, and EditLineItemForm components ([e839227](https://github.com/pdovhomilja/nextcrm-app/commit/e839227a731660b4c1bd32d9c6206f6ac03c6543))
* Products module, Line Items, and E2E test coverage ([cdb4498](https://github.com/pdovhomilja/nextcrm-app/commit/cdb4498460b2081c8609370a79e19ae7e9d4f6fc))
* **products:** add create and update product form components ([98c4e60](https://github.com/pdovhomilja/nextcrm-app/commit/98c4e60128ce5c983e48056197d6c69615d4ad56))
* **products:** add CSV bulk import server action ([3ed188a](https://github.com/pdovhomilja/nextcrm-app/commit/3ed188aee12bc9d9b98b00b1c0481a0acb569888))
* **products:** add CSV import dialog with preview and template download ([c9b7388](https://github.com/pdovhomilja/nextcrm-app/commit/c9b7388e0319c425716489a28a4a71bb1638a6dc))
* **products:** add Prisma schema for Products, ProductCategories, AccountProducts ([2c51b70](https://github.com/pdovhomilja/nextcrm-app/commit/2c51b70350dcede4e3ef2ec4e64993477916f79c))
* **products:** add product categories to CRM data fetching ([eba0ea6](https://github.com/pdovhomilja/nextcrm-app/commit/eba0ea653b3872c1288b8c1c40f83f7198e18d74))
* **products:** add product detail page with basic view, accounts tab, and history ([53d0d1f](https://github.com/pdovhomilja/nextcrm-app/commit/53d0d1f3fb6be30b08b5487e8c5996e74893dbc6))
* **products:** add products list page and view component ([9b33aa7](https://github.com/pdovhomilja/nextcrm-app/commit/9b33aa7440a4f7acb3a5eaba6d47f38b66d0a0fd))
* **products:** add server actions for Account-Product assignments ([ea3bc87](https://github.com/pdovhomilja/nextcrm-app/commit/ea3bc8746f4fa3bd3225ed47818d345a8f8e4d4c))
* **products:** add server actions for Product CRUD and data fetching ([e84ea83](https://github.com/pdovhomilja/nextcrm-app/commit/e84ea835663c59cef8021b86f3fd3afb9b64655b))
* **products:** add sidebar nav, account detail products tab with assign form ([3c1ab8b](https://github.com/pdovhomilja/nextcrm-app/commit/3c1ab8b1ceec1616362676b1cf6de7968d5aeb22))
* **products:** add table components with columns, filters, and row actions ([7fe5c4c](https://github.com/pdovhomilja/nextcrm-app/commit/7fe5c4ce5e1dfbfe196a55d2245e473952162ee4))


### Bug Fixes

* add currency field to contracts table schema ([ed6a675](https://github.com/pdovhomilja/nextcrm-app/commit/ed6a675648110d30aaf57920d9439c0f4c3f88fb))
* add line items migration and resolve migration drift ([1b6f483](https://github.com/pdovhomilja/nextcrm-app/commit/1b6f48392cf3801551ed918fd7b379aefe6b4513))
* default accounts prop to empty array in UpdateContractForm ([3e21eac](https://github.com/pdovhomilja/nextcrm-app/commit/3e21eac5fba06aed2e718964995a0b06f7f3ef50))
* guard FormSelect against undefined data and pass safe defaults ([91f1a45](https://github.com/pdovhomilja/nextcrm-app/commit/91f1a457083794e2301dda4863376acbc37e7584))
* **line-items:** resolve build and type issues ([211ab7c](https://github.com/pdovhomilja/nextcrm-app/commit/211ab7cf3cc496d08cc522c123323d9159426ecf))
* make FormSelect fully controlled to show defaultValue correctly ([0c926fc](https://github.com/pdovhomilja/nextcrm-app/commit/0c926fc80a7851d780dd62611b3f63e3596d8d3f))
* **products:** resolve audit log type errors and build issues ([784c444](https://github.com/pdovhomilja/nextcrm-app/commit/784c444267f635594402f0528be6679e3e9d37d2))
* refactor UpdateContractForm to self-fetch accounts and currencies ([23e1dab](https://github.com/pdovhomilja/nextcrm-app/commit/23e1dabcc8185deb0f93c161d08aa6347a972636))
* remove conflicting defaultValue from controlled FormDatePicker input ([326f995](https://github.com/pdovhomilja/nextcrm-app/commit/326f995857da1294a86ebb45420c9affc0d579b5))
* replace getEnabledCurrencies with proper server action ([614162d](https://github.com/pdovhomilja/nextcrm-app/commit/614162d9a2a70941cf6d338e5ad6c85243d04caf))
* serialize Decimal fields in getAllCrmData for client components ([8451299](https://github.com/pdovhomilja/nextcrm-app/commit/845129965078a0260c7cdc2a82a5a326104e38f4))
* serialize opportunity Decimal fields before passing to client component ([bed1604](https://github.com/pdovhomilja/nextcrm-app/commit/bed16042018525b18b9e2c59ace7f74568e1e574))
* stabilize flaky e2e tests across CRM modules ([dbb88b6](https://github.com/pdovhomilja/nextcrm-app/commit/dbb88b69fbe5dd013d7ea61d0da0c72036fbe3b2))

## [0.4.2](https://github.com/pdovhomilja/nextcrm-app/compare/v0.4.1...v0.4.2) (2026-04-04)


### Bug Fixes

* **security:** override defu&lt;=6.1.4 to 6.1.5 for prototype pollution CVE-2026-35209 ([507a866](https://github.com/pdovhomilja/nextcrm-app/commit/507a866326a3920e04e38afefdc60bd4140f9de7))
* **security:** patch defu prototype pollution CVE-2026-35209 ([29d187d](https://github.com/pdovhomilja/nextcrm-app/commit/29d187d2ab56fc7ec78913563864c2f7093c9c1b))

## [0.4.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.4.0...v0.4.1) (2026-04-04)


### Bug Fixes

* **build:** resolve failed migration before deploy ([d063791](https://github.com/pdovhomilja/nextcrm-app/commit/d0637914f2f296e079afd3fd280be204540c8b60))
* **migration:** rename and make idempotent for failed deploy recovery ([3393859](https://github.com/pdovhomilja/nextcrm-app/commit/339385928a7005ff36fbc6a3df64eaf678fa600b))
* **migration:** seed currencies and clean data before VARCHAR cast ([6ca3dcc](https://github.com/pdovhomilja/nextcrm-app/commit/6ca3dccf08960b8cf6c2d1e83c8a8a2632acb75a))

## [0.4.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.3.1...v0.4.0) (2026-04-04)


### Features

* add currency conversion library with unit tests ([b2eb41c](https://github.com/pdovhomilja/nextcrm-app/commit/b2eb41cdea7381c3aa513b785ef22a4410b8de90))
* add CurrencyProvider context and header CurrencySwitcher ([4851c56](https://github.com/pdovhomilja/nextcrm-app/commit/4851c562ee47116890bd414448ee2ecfa55f0b7f))
* **admin:** add currencies management page with table, rates, and ECB toggle ([6011159](https://github.com/pdovhomilja/nextcrm-app/commit/60111591311e525f2d5857f73ce40cd9e7aca231))
* **contracts:** add currency and snapshot rate to create/update actions ([1a6a4c8](https://github.com/pdovhomilja/nextcrm-app/commit/1a6a4c8010f7561985e2b865c20bae5d77e81082))
* **contracts:** add currency dropdown to create/update forms ([f0e961d](https://github.com/pdovhomilja/nextcrm-app/commit/f0e961d184c98acb39b4edb2d598e2e78ea651d7))
* **contracts:** display contract value with dynamic currency formatting ([d2c7308](https://github.com/pdovhomilja/nextcrm-app/commit/d2c7308d76ae70d6f5838bf33474d2bfb1f59b38))
* convert opportunity detail budget to display currency ([aa82933](https://github.com/pdovhomilja/nextcrm-app/commit/aa82933d27d3b5a960232c679f98fe451947786a))
* convert opportunity table budget to display currency ([030ca11](https://github.com/pdovhomilja/nextcrm-app/commit/030ca11feb1427455d33d1143b8ab1bf7cbb1e36))
* convert reports dashboard KPIs to display currency ([a564588](https://github.com/pdovhomilja/nextcrm-app/commit/a5645887b2f4ec14ee4db19a62bde43c25a85295))
* **dashboard:** display expected revenue in selected display currency ([7a2fa8f](https://github.com/pdovhomilja/nextcrm-app/commit/7a2fa8fece3fc5a10b35eabc1ebcf5b4dce2a9ff))
* **inngest:** add daily ECB exchange rate sync function ([61e0819](https://github.com/pdovhomilja/nextcrm-app/commit/61e08199f0bf783f7ebbb5230e298b8feafb0c56))
* **migration:** add currency support migration ([86b7663](https://github.com/pdovhomilja/nextcrm-app/commit/86b76636742c8bc4860de078f3731ac0e36886f9))
* multi-currency support for Sales module ([19848b0](https://github.com/pdovhomilja/nextcrm-app/commit/19848b0b050cf7f76e1694cc1a608c1f7a558eb2))
* **opportunities:** add currency dropdown to create/update forms ([49cb1b7](https://github.com/pdovhomilja/nextcrm-app/commit/49cb1b78e2595ee86651fe5ab6c0471856034d50))
* **opportunities:** add snapshot rate lookup on create/update ([f0f8380](https://github.com/pdovhomilja/nextcrm-app/commit/f0f8380a2cc72cac4ede8304a737129ec4f93313))
* **opportunities:** display budget and revenue with currency formatting ([664c096](https://github.com/pdovhomilja/nextcrm-app/commit/664c09645f9f161499e1e3486afda7b6700eeced))
* **reports:** convert sales report values to display currency ([3784f7d](https://github.com/pdovhomilja/nextcrm-app/commit/3784f7df9df29567cfe4a443f2fc9fdfefadd1d2))
* **schema:** add Currency, ExchangeRate, SystemSettings models and migrate money fields to Decimal ([bf3f16d](https://github.com/pdovhomilja/nextcrm-app/commit/bf3f16d29532af16e8cd9dae46bb2d570fa6d0fd))
* **seed:** add currency and exchange rate seed data ([3da4975](https://github.com/pdovhomilja/nextcrm-app/commit/3da4975b75029a1b7134c875e8f6656849cd73df))


### Bug Fixes

* add currency to Opportunity schema type and fix implicit any ([a7ab752](https://github.com/pdovhomilja/nextcrm-app/commit/a7ab752aa9c5879ee13600e7565852e0d251f2c6))
* add explicit types to currency map callbacks ([7d4d5a4](https://github.com/pdovhomilja/nextcrm-app/commit/7d4d5a4912b285c7f84974fd08fadef3855c3aa1))
* add explicit types to currency map callbacks in layout ([33e74f4](https://github.com/pdovhomilja/nextcrm-app/commit/33e74f44d2bf16a28a880986803e1247034e294d))
* remove any casts from serializeDecimalsList call sites ([10a5fe9](https://github.com/pdovhomilja/nextcrm-app/commit/10a5fe9e8d0530d8993d080cf5b78555840b4709))
* resolve build errors - type casts and Inngest function signature ([0e3bf0f](https://github.com/pdovhomilja/nextcrm-app/commit/0e3bf0f0ae5abed134d9319d460985c4dae7c782))
* resolve type issues in ECB sync function ([79b2663](https://github.com/pdovhomilja/nextcrm-app/commit/79b266346fada836cb16c971224bc4a9ee502b9b))
* **schema:** add [@db](https://github.com/db).VarChar(3) to crm_Opportunities.currency field ([0ef0b8b](https://github.com/pdovhomilja/nextcrm-app/commit/0ef0b8ba54251aed2900f8dc03558c315025869e))
* serialize Decimal fields before passing to client components ([ff68db2](https://github.com/pdovhomilja/nextcrm-app/commit/ff68db28f40b01111cf56ccd4b6d822f3e69cf24))
* split currency lib into client-safe and server-only modules ([1a61be3](https://github.com/pdovhomilja/nextcrm-app/commit/1a61be3b404ce10b85e50769b76dba1a8037477c))
* **tests:** update sales report tests for currency-aware aggregation ([c02d752](https://github.com/pdovhomilja/nextcrm-app/commit/c02d7524a9636eb1ea2f2e81f27cb303833db81e))
* wire currencies prop through opportunity and contract components ([dba0036](https://github.com/pdovhomilja/nextcrm-app/commit/dba0036335819f598ec430f165cad8edf55b8213))

## [0.3.1](https://github.com/pdovhomilja/nextcrm-app/compare/v0.3.0...v0.3.1) (2026-04-04)


### Bug Fixes

* **auth:** resolve Google OAuth user creation failures ([844389a](https://github.com/pdovhomilja/nextcrm-app/commit/844389a689c0f20ab8d75bdf10648beeb829c5e3))
* **auth:** resolve Google OAuth user creation failures ([094e7ee](https://github.com/pdovhomilja/nextcrm-app/commit/094e7ee715c034b7c023a574241871690cee68ad))

## [0.3.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.2.0...v0.3.0) (2026-04-04)


### Features

* **documents:** add batch actions bar for bulk delete, type change, and account linking ([7ed7cfa](https://github.com/pdovhomilja/nextcrm-app/commit/7ed7cfa0ef97bd7281605a390a7b212fc3aa1324))
* **documents:** add bulk actions, versioning, and account linking server actions ([6a8908a](https://github.com/pdovhomilja/nextcrm-app/commit/6a8908a39580f20e99e232fc03f944d381b1265f))
* **documents:** add document detail panel with summary, metadata, and version history ([9fd00f1](https://github.com/pdovhomilja/nextcrm-app/commit/9fd00f1a0785e7715aaf4e4e6c70457e7256efee))
* **documents:** add enrichment fields, chunks table, and embeddings model ([c58a1e6](https://github.com/pdovhomilja/nextcrm-app/commit/c58a1e657b23795504cdc9708682ab6e5d69178c))
* **documents:** add Inngest enrichment orchestrator with text extraction, embedding, summary, classification ([a7216cb](https://github.com/pdovhomilja/nextcrm-app/commit/a7216cbb1a0a5370096560a5a513ec0e732b1743))
* **documents:** add name/content search toggle on documents page ([8043818](https://github.com/pdovhomilja/nextcrm-app/commit/8043818bc1c2756ceb4cf7d3dd19f0fabe8de461))
* **documents:** add processing status badge component ([514fa69](https://github.com/pdovhomilja/nextcrm-app/commit/514fa6963c9c4c7946bd4f08ac4d634110f68dc2))
* **documents:** add thumbnail generator and register Inngest functions ([b0b406e](https://github.com/pdovhomilja/nextcrm-app/commit/b0b406ea4be6e75d865b0f85f1f21ccb5a693365))
* **documents:** add upload-from-account-context with auto-linking ([cb3a096](https://github.com/pdovhomilja/nextcrm-app/commit/cb3a0963573e6ca5d38e4bb2d731b639dce09ee0))
* **documents:** redesign columns with type badges, summaries, status, and filters ([9ecd298](https://github.com/pdovhomilja/nextcrm-app/commit/9ecd2984127f91fdcbe50616a5ae21afcf8eb64d))
* **documents:** replace 3 upload buttons with single bulk upload modal ([dde3a47](https://github.com/pdovhomilja/nextcrm-app/commit/dde3a477e01ded54ba52953ed80da2baa8099e4e))
* **documents:** update createDocument with Inngest event, add checkDuplicate action ([90c2bbc](https://github.com/pdovhomilja/nextcrm-app/commit/90c2bbc3021ba54eb3133a89fe6df9c9c8ecdfef))
* **documents:** update Zod schema and static filter data for enrichment fields ([4ce71b3](https://github.com/pdovhomilja/nextcrm-app/commit/4ce71b37a63ab09999ba4d7283a8d1a4850fb6bc))
* **search:** add document search to command palette ([a0a5bbe](https://github.com/pdovhomilja/nextcrm-app/commit/a0a5bbe064b358933f33fa8ad1b43c039c64659d))
* **search:** add documents to unified search with keyword + vector similarity ([299736f](https://github.com/pdovhomilja/nextcrm-app/commit/299736fd74c539b65472db021cc8cfe0f1335abd))


### Bug Fixes

* **documents:** check upload response status in bulk upload modal ([d71dbf5](https://github.com/pdovhomilja/nextcrm-app/commit/d71dbf52edb03144ba89f3b20e2dc5b4ef9deca1))
* **documents:** exclude pdf-parse and pdfjs-dist from Turbopack server bundle ([6ea7e4b](https://github.com/pdovhomilja/nextcrm-app/commit/6ea7e4bec671046ea396e29930d132dcbe10d6f0))
* **documents:** replace next/image with img tag in DocumentViewModal ([3d2dafd](https://github.com/pdovhomilja/nextcrm-app/commit/3d2dafdae168a2dccc6826d0b897a99351d0c901))
* **documents:** use pdf-parse v2 class-based API for text extraction ([2825f90](https://github.com/pdovhomilja/nextcrm-app/commit/2825f90efc4f2cf97c65901f7c1f7d9f4125db25))
* **documents:** use row.original directly instead of Zod parse in row actions ([20a6016](https://github.com/pdovhomilja/nextcrm-app/commit/20a601665e0e7b24b6a9555eeb298460c4468505))
* update @vercel/mcp-adapter to v1.0.0 and add to trusted builds ([e1583c2](https://github.com/pdovhomilja/nextcrm-app/commit/e1583c2a7d87f6fc1790f0e0432d4812308988a7))

## [0.2.0](https://github.com/pdovhomilja/nextcrm-app/compare/v0.1.0...v0.2.0) (2026-04-03)


### Features

* **footer:** read app version from package.json ([0052e17](https://github.com/pdovhomilja/nextcrm-app/commit/0052e17aadf5283299da88bc695c4b4124fa48fd))
* **footer:** read app version from package.json instead of env var ([003a728](https://github.com/pdovhomilja/nextcrm-app/commit/003a728b56429230d40058622e7d0f6fb925e150))

## [0.1.0] - 2026-04-03

This release is a major milestone — it replaces the entire authentication system, adds a full reporting module, CRM activity tracking, audit logging, soft delete, configurable CRM settings, and AI-powered contact enrichment via E2B sandboxes.

### Added

#### Authentication (better-auth)
- Replaced next-auth with better-auth (Google OAuth + Email OTP login)
- Role-based access control (RBAC) — admin / member / viewer roles
- Server-side `getSession` helper and admin plugins
- Email OTP authentication flow with magic link support
- Admin UI for role management (replaces activate/deactivate toggles)
- Idempotent role backfill migration script
- better-auth session, account, and verification tables in database

#### Reports Module
- Full reporting dashboard with KPI cards (sales, leads, accounts, activity, campaigns, users)
- Sub-pages: Sales, Leads, Accounts, Activity, Campaigns, Users
- Date range picker and filter bar
- CSV export via API route
- PDF export with Inngest-scheduled email delivery
- Save report configurations and schedule recurring reports
- shadcn/ui chart components replacing Tremor

#### CRM Activities
- Activity tracking on all 5 CRM entity detail pages (accounts, contacts, leads, opportunities, contracts)
- `ActivityForm` sheet for creating/editing activities
- `ActivitiesView` paginated feed with compound cursor pagination
- `crm_Activities` and `crm_ActivityLinks` database models

#### CRM Audit Log & Soft Delete
- Soft delete on accounts, contacts, leads, opportunities, contracts
- `crm_AuditLog` model tracking all field changes with before/after diffs
- History tab on all CRM entity detail pages
- Admin audit log page with global filterable table and restore actions

#### CRM Settings (Admin)
- Admin page with 7-tab configuration UI for CRM field values
- Configurable: Contact Types, Lead Sources, Lead Statuses, Lead Types
- CRUD dialogs for each config category
- CRM Settings link in admin sidebar

#### AI Enrichment (E2B Agent)
- E2B sandbox agent enrichment for campaign targets
- Multi-field enrichment with preset selector
- Company-name-only enrichment path (no email required)
- Bulk enrichment modal with field selector
- `crm_Target_Contact` model for multi-contact per target
- 8 new enrichment fields: personal email, LinkedIn, Twitter, phone, title, department, location, bio
- Skip-list cache (5-min TTL) to avoid re-enriching recently processed targets

#### Target Enrichment & Conversion
- Convert Target → Account/Contact flow
- Conversion tracking fields in `crm_Targets`
- Gmail quick-connect with App Password guide and folder discovery
- `TargetContactsTable` with add-contact and enrich actions

#### Contracts
- Contracts detail page with BasicView
- Contracts listed in admin audit log

### Fixed

- Auth: Critical authorization bypass patched
- Auth: Operator precedence bugs in session checks
- Auth: Redirect to sign-in after sign-out
- Auth: better-auth schema compatibility and modelName mapping for Users table
- Reports: Chart colors using `hsl()` wrapper and purple palette
- Reports: Prisma field names aligned across all report actions
- Reports: `created_on` vs `createdAt` field name in campaigns action
- CRM: `assigned_to_user` null guard in account BasicView
- CRM: UUID constraints in update forms (`z.uuid()` replacing `max(30)`)
- CRM: Operator precedence in leads name column cell
- CRM: Soft-delete columns migration made idempotent
- Campaigns: Targets import validation relaxed (last_name or company required)
- Enrichment: Company domain discovery before agent runs
- Enrichment: Personal email vs company domain routing
- Enrichment: Null upsert key guard and DB updates wrapped in `step.run`
- Inngest: `gen_random_uuid()` added to embedding INSERT statements
- Inngest: v4 API compatibility fixes
- Build: All TypeScript errors resolved (operator precedence, missing imports, type safety)

### Changed

- Login page rewritten — credentials/register flow removed, Google OAuth + Email OTP only
- All server actions migrated from next-auth to better-auth session
- All API routes migrated to better-auth session
- Admin `isAdmin`/`is_admin` checks replaced with role-based RBAC
- CRM lead/contact forms now use DB-backed FK select values
- Reports page replaced static view with live KPI dashboard
- Tremor chart library removed — replaced with shadcn/ui charts

### Security

- Critical authorization bypass fixed in auth middleware
- Password removed from invite email template
- Session token strategy updated to better-auth cookie-based auth

### Removed

- next-auth package and all type definitions
- Register page and password reset flow
- Credentials-based login
- Tremor (`@tremor/react`) dependency

---

## [0.0.3-beta] - 2024

- Initial beta releases with MongoDB → PostgreSQL migration
- Basic CRM modules: Accounts, Contacts, Leads, Opportunities
- Campaign management with target lists
- AI document processing (OCR, PDF, DOCX)
- Vector embeddings with pgvector

[0.1.0]: https://github.com/pdovhomilja/nextcrm-app/compare/v0.0.3-beta...v0.1.0
[0.0.3-beta]: https://github.com/pdovhomilja/nextcrm-app/releases/tag/v0.0.3-beta
