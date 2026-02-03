# Changelog

## 0.14.0 (2026-02-03)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.13.0...v0.14.0)

### Features

* **sdk:** add `qa` as an initialism ([e79b334](https://github.com/isaacus-dev/isaacus-typescript/commit/e79b3346a1e9516dc3bce6a1c5a6fe0dec4ce5f6))
* **sdk:** force ilgs v1 prefix on models ([e492a91](https://github.com/isaacus-dev/isaacus-typescript/commit/e492a9173f6943f56e8f3e2e0f29f3f207dd4d2a))
* **sdk:** modify how ILGSv1 models are cased ([5a8effe](https://github.com/isaacus-dev/isaacus-typescript/commit/5a8effedf98366d4c93f5dcfb9be1b14c72372dc))
* **sdk:** order properties as in spec ([b0706f2](https://github.com/isaacus-dev/isaacus-typescript/commit/b0706f235650a2df605ccfc886d3a6ad04201866))


### Bug Fixes

* **api:** merge duplicate components, reorder required fields ([6578eba](https://github.com/isaacus-dev/isaacus-typescript/commit/6578ebaaf302ddd0d5529a883deeb4f3022df859))

## 0.13.0 (2026-02-03)

Full Changelog: [v0.12.1...v0.13.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.12.1...v0.13.0)

### Features

* **api:** remove -preview from model name ([21ad5e0](https://github.com/isaacus-dev/isaacus-typescript/commit/21ad5e04ee04e83412dd7f7192fb7b2bf10d658e))

## 0.12.1 (2026-02-03)

Full Changelog: [v0.12.0...v0.12.1](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.12.0...v0.12.1)

### Documentation

* **api:** added examples to 200 response codes ([0b08eb6](https://github.com/isaacus-dev/isaacus-typescript/commit/0b08eb6911cf22602cc5164d2146b654d127230f))

## 0.12.0 (2026-02-03)

Full Changelog: [v0.11.1...v0.12.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.11.1...v0.12.0)

### Features

* **api:** add min max ([477c28a](https://github.com/isaacus-dev/isaacus-typescript/commit/477c28a14a411ec668b3d4acd7a3d4707bedebe4))
* **api:** switch to span objects for enrichment, note closed beta ([29af767](https://github.com/isaacus-dev/isaacus-typescript/commit/29af7672debf93bf5fcc497f5e6a2392da26028c))
* **mcp:** add detail field to docs search tool ([a4a3478](https://github.com/isaacus-dev/isaacus-typescript/commit/a4a3478307e75a7147f2bc3137677327abbeae35))
* **mcp:** add typescript check to code execution tool ([a1f8c27](https://github.com/isaacus-dev/isaacus-typescript/commit/a1f8c27ca5ec894e9d852867ea999557dfd58cd0))
* **mcp:** enable optional code execution tool on http mcp servers ([579b63d](https://github.com/isaacus-dev/isaacus-typescript/commit/579b63d0d5a3cde717ac41654d6e708673d0191c))
* **mcp:** handle code mode calls in the Stainless API ([cfe91ae](https://github.com/isaacus-dev/isaacus-typescript/commit/cfe91aef141da4f9a5696e3e7e898e05dd8f68a7))
* **mcp:** return logs on code tool errors ([f8cc9b0](https://github.com/isaacus-dev/isaacus-typescript/commit/f8cc9b0afc5365abe559f07c85883895ee2f4900))
* **sdk:** add enrichments ([2d6f927](https://github.com/isaacus-dev/isaacus-typescript/commit/2d6f9272da2993aaa9b43fcb0a0a9de7586df1a8))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([6f67d9d](https://github.com/isaacus-dev/isaacus-typescript/commit/6f67d9d53fee08dcfd5489ad5f4e963a7383ee03))
* **mcpb:** pin @anthropic-ai/mcpb version ([fc022b2](https://github.com/isaacus-dev/isaacus-typescript/commit/fc022b2a940c8c3161082faa8c4e5457bdd53957))
* **mcp:** correct code tool API endpoint ([aa8dd51](https://github.com/isaacus-dev/isaacus-typescript/commit/aa8dd51788d22ebccf5e913b83e1196d4eca63b5))
* **mcp:** return correct lines on typescript errors ([e7a6e10](https://github.com/isaacus-dev/isaacus-typescript/commit/e7a6e105f071dcded1d162a8ac68988ef3734ccf))
* **mcp:** return tool execution error on api error ([5ae2a33](https://github.com/isaacus-dev/isaacus-typescript/commit/5ae2a33f2dfe5e3f1437e48045c15be34ee9c4e5))
* **mcp:** return tool execution error on jq failure ([719a2bc](https://github.com/isaacus-dev/isaacus-typescript/commit/719a2bcb3ae336919ed9f63c04c06bf1eb5ad1fd))


### Chores

* **client:** fix logger property type ([73a6ad5](https://github.com/isaacus-dev/isaacus-typescript/commit/73a6ad5b2c1a9cd42c061401c47abc51db8510d4))
* **internal:** codegen related update ([f108ad6](https://github.com/isaacus-dev/isaacus-typescript/commit/f108ad6f4b01288158c41fd84b6c61967cbd3af8))
* **internal:** codegen related update ([4c0c9be](https://github.com/isaacus-dev/isaacus-typescript/commit/4c0c9be63e08a49d57a7d960fb7869d3530de99e))
* **internal:** codegen related update ([3203eec](https://github.com/isaacus-dev/isaacus-typescript/commit/3203eecee9d218db1190580d4f440a629b093e72))
* **internal:** codegen related update ([d58f59b](https://github.com/isaacus-dev/isaacus-typescript/commit/d58f59bc6ac418f586698a45d535a68998454cbe))
* **internal:** codegen related update ([47ef370](https://github.com/isaacus-dev/isaacus-typescript/commit/47ef37027fcc8731651c47ec72db684ae0662e54))
* **internal:** grammar fix (it's -&gt; its) ([cbeea36](https://github.com/isaacus-dev/isaacus-typescript/commit/cbeea365a8107e894cdeff0d0f7ed6ecfb1e2f2f))
* **internal:** upgrade eslint ([629c219](https://github.com/isaacus-dev/isaacus-typescript/commit/629c219de870d7d5c4ddeef0b194f86c5e116438))
* mcp code tool explicit error message when missing a run function ([45f0ec4](https://github.com/isaacus-dev/isaacus-typescript/commit/45f0ec4f7cd466097f623a9dde1a0b8e084f9fdc))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([08e1eac](https://github.com/isaacus-dev/isaacus-typescript/commit/08e1eac13c3581f7c09150de36e8948e8ee94b6e))
* **mcp:** add line numbers to code tool errors ([51fc353](https://github.com/isaacus-dev/isaacus-typescript/commit/51fc353019df5583769e087b93153d398019a639))
* **mcp:** clarify http auth error ([39fab03](https://github.com/isaacus-dev/isaacus-typescript/commit/39fab03e07a9d600b627d2146fbe231377a78577))
* **mcp:** update lockfile ([c5bfec5](https://github.com/isaacus-dev/isaacus-typescript/commit/c5bfec54da295f5d338113d35286cbaab1fde6d8))
* **mcp:** upgrade jq-web ([5f375e8](https://github.com/isaacus-dev/isaacus-typescript/commit/5f375e8eb4353218198c5edd82404e00066a1fff))
* use latest @modelcontextprotocol/sdk ([21d7cbb](https://github.com/isaacus-dev/isaacus-typescript/commit/21d7cbbc42ecd0557fbe1996eeec58bc1ee12907))
* use structured error when code execution tool errors ([bb4ba8a](https://github.com/isaacus-dev/isaacus-typescript/commit/bb4ba8a1485229cfc60ba38361520b2a9f65b7de))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([afbeeb5](https://github.com/isaacus-dev/isaacus-typescript/commit/afbeeb5b7b662f3144ef2571b7f33b1225daf5df))
* **mcp:** add a README link to add server to VS Code or Claude Code ([6042a69](https://github.com/isaacus-dev/isaacus-typescript/commit/6042a69bb085d6a0d21b982d448e540fccc6036f))
* **sdk:** specify example params ([00ec4d8](https://github.com/isaacus-dev/isaacus-typescript/commit/00ec4d8e97a35bc2de73666db6eede82bd618236))

## 0.11.1 (2025-10-14)

Full Changelog: [v0.11.0...v0.11.1](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.11.0...v0.11.1)

### ⚠ BREAKING CHANGES

* **api:** reduce max length of embeddings input
* **sdk:** add `_response` to response models to finally fix duplicated names

### Features

* **api:** added embedding endpoint ([0d8d83a](https://github.com/isaacus-dev/isaacus-typescript/commit/0d8d83a611df5252c68050071d06d3fb4685d534))
* **api:** reduce max length of embeddings input ([8dfea48](https://github.com/isaacus-dev/isaacus-typescript/commit/8dfea484dd6333868978b30e74666a8dbb85b669))
* **api:** rename embedding -&gt; embeddings ([b0f92ff](https://github.com/isaacus-dev/isaacus-typescript/commit/b0f92ff7ed78d27692e3fe380d4756074eb54d84))
* **api:** revert embedding -&gt; embeddings ([8255684](https://github.com/isaacus-dev/isaacus-typescript/commit/82556847327ac00dac205e1876b6482099fb1c31))
* **mcp:** add code execution tool ([a1cbb00](https://github.com/isaacus-dev/isaacus-typescript/commit/a1cbb008f3d7addd94730652490c4b157bd554f2))
* **mcp:** add docs search tool ([879786d](https://github.com/isaacus-dev/isaacus-typescript/commit/879786deb453dc2211105151425e5a767e8a52da))
* **mcp:** add logging when environment variable is set ([782e9fa](https://github.com/isaacus-dev/isaacus-typescript/commit/782e9fae8939787ac7f362712395d1ddc988f9db))
* **mcp:** add option for including docs tools ([d75738d](https://github.com/isaacus-dev/isaacus-typescript/commit/d75738ddec8b9f1527a3ec985e7937267c81194a))
* **mcp:** add option to infer mcp client ([5e57506](https://github.com/isaacus-dev/isaacus-typescript/commit/5e5750630aeff57d48479c8ceef76df5f9682120))
* **mcp:** add unix socket option for remote MCP ([29456e4](https://github.com/isaacus-dev/isaacus-typescript/commit/29456e482b1a330cdbf2b3bc9d8a736cde34dd39))
* **mcp:** allow setting logging level ([7c287d1](https://github.com/isaacus-dev/isaacus-typescript/commit/7c287d1650b60ee197658475558ff98c9b3ba253))
* **mcp:** enable experimental docs search tool ([0077ea5](https://github.com/isaacus-dev/isaacus-typescript/commit/0077ea5876adea43d1a9026545fda774c0ef0c02))
* **mcp:** expose client options in `streamableHTTPApp` ([e757029](https://github.com/isaacus-dev/isaacus-typescript/commit/e7570299b08070cfd932e0cf2310bd3178037377))
* **mcp:** parse query string as mcp client options in mcp server ([d57ad3c](https://github.com/isaacus-dev/isaacus-typescript/commit/d57ad3c5a57de9c28c16929e41fad2f3a68c5068))
* **mcp:** remote server with passthru auth ([98e619a](https://github.com/isaacus-dev/isaacus-typescript/commit/98e619a1edbc4adb4c30fbb7dddcd111a05893aa))
* **sdk:** add embeddings endpoint ([402f641](https://github.com/isaacus-dev/isaacus-typescript/commit/402f641b04680e4ebd24242a57a7098ca5433fef))
* **sdk:** toggle to force regen ([9c9ef78](https://github.com/isaacus-dev/isaacus-typescript/commit/9c9ef78f125a67ddb2a016d4eb57517e5b97c015))
* **sdk:** untoggle to force regen ([c4755bc](https://github.com/isaacus-dev/isaacus-typescript/commit/c4755bc35f60f6094ba6a124b42f269e273794de))


### Bug Fixes

* **api:** avoid stainless SDK `NameError` ([865bc85](https://github.com/isaacus-dev/isaacus-typescript/commit/865bc856ef06c536332b9af0de7fd50592f4f237))
* **api:** typo ([eab8690](https://github.com/isaacus-dev/isaacus-typescript/commit/eab869049c7e8f04023ece405445604de31a2985))
* **ci:** set permissions for DXT publish action ([ce5e62e](https://github.com/isaacus-dev/isaacus-typescript/commit/ce5e62ee9c698a85d3eeb6a2e998ee896f497473))
* coerce nullable values to undefined ([4afa2c2](https://github.com/isaacus-dev/isaacus-typescript/commit/4afa2c265b899d29b60c823d27d00c08d23afdc9))
* **mcp:** avoid sending `jq_filter` to base API ([850f0f6](https://github.com/isaacus-dev/isaacus-typescript/commit/850f0f6f5e4c1fb13a7159ccc6d357854992cf5f))
* **mcp:** fix bug in header handling ([27f12ba](https://github.com/isaacus-dev/isaacus-typescript/commit/27f12baeae30bf127d54f43b580291108422b555))
* **mcp:** fix query options parsing ([0ec3eb3](https://github.com/isaacus-dev/isaacus-typescript/commit/0ec3eb32004668ab9dd3d29f74ad01d546c6a323))
* **mcp:** fix uploading dxt release assets ([8c3db47](https://github.com/isaacus-dev/isaacus-typescript/commit/8c3db47ddf574faa5f2ca7b3dacb18530c75012c))
* **mcp:** reverse validJson capability option and limit scope ([6d04008](https://github.com/isaacus-dev/isaacus-typescript/commit/6d040082ad4456a697ef550d9c176cad753afb7a))
* **sdk:** add `_response` to response models to finally fix duplicated names ([14a9df4](https://github.com/isaacus-dev/isaacus-typescript/commit/14a9df456e70d8bdd152e3ff9710e519f870e463))


### Chores

* add package to package.json ([c4984c4](https://github.com/isaacus-dev/isaacus-typescript/commit/c4984c444562500d2f2f36e0090c1f415600f0a1))
* **client:** qualify global Blob ([07703e2](https://github.com/isaacus-dev/isaacus-typescript/commit/07703e2299ade5e7987c7058a90fae4b39e66038))
* **codegen:** internal codegen update ([5712a83](https://github.com/isaacus-dev/isaacus-typescript/commit/5712a833b930d92c94d2d3f0c5e426100786ddf0))
* **deps:** update dependency @types/node to v20.17.58 ([7e69826](https://github.com/isaacus-dev/isaacus-typescript/commit/7e698263849b5a53b1098792a5cdc1e27fa76c70))
* do not install brew dependencies in ./scripts/bootstrap by default ([39b5c60](https://github.com/isaacus-dev/isaacus-typescript/commit/39b5c60b0837ff81d984341f52f9a5399d83e029))
* improve example values ([14a1d22](https://github.com/isaacus-dev/isaacus-typescript/commit/14a1d226a5494f3ad876361b78de554f223c6554))
* **internal:** codegen related update ([eb7fa2d](https://github.com/isaacus-dev/isaacus-typescript/commit/eb7fa2dc18f0189867748891dee527dcd2d5d9f1))
* **internal:** codegen related update ([dd992b1](https://github.com/isaacus-dev/isaacus-typescript/commit/dd992b122975393f2d3350b9a7371e1a29f0c329))
* **internal:** codegen related update ([00165b1](https://github.com/isaacus-dev/isaacus-typescript/commit/00165b13517d9af29d038d9c9c1ad0e358732c91))
* **internal:** codegen related update ([d77461b](https://github.com/isaacus-dev/isaacus-typescript/commit/d77461b18e5fca06485b3fa4f02ff832f16faf14))
* **internal:** codegen related update ([7cd4ae0](https://github.com/isaacus-dev/isaacus-typescript/commit/7cd4ae0a330c4703cc543ad4e5cf211816cbbc4d))
* **internal:** codegen related update ([91d9f96](https://github.com/isaacus-dev/isaacus-typescript/commit/91d9f969277f809196b0e76bf69d3e2b1e734ad5))
* **internal:** formatting change ([5f7ef32](https://github.com/isaacus-dev/isaacus-typescript/commit/5f7ef32bae84995296074c99eca4e9c557b54431))
* **internal:** gitignore .mcpb files ([e541193](https://github.com/isaacus-dev/isaacus-typescript/commit/e5411936faad14e1b9417c2c6ba10f663ddb3694))
* **internal:** make mcp-server publishing public by defaut ([117c3f6](https://github.com/isaacus-dev/isaacus-typescript/commit/117c3f67f3cc2b038d8e08626ecdcd76d309788f))
* **internal:** move publish config ([3f2772e](https://github.com/isaacus-dev/isaacus-typescript/commit/3f2772efe40aa46f0d6c2fc7157d5aef4c4087f1))
* **internal:** refactor array check ([3fc9cc8](https://github.com/isaacus-dev/isaacus-typescript/commit/3fc9cc8aaecea7abe226c9dc9bdc00d971cc2732))
* **internal:** remove redundant imports config ([b44ad38](https://github.com/isaacus-dev/isaacus-typescript/commit/b44ad387603fbbc6d04af5e43788342798e28c73))
* **internal:** update comment in script ([c5c42a4](https://github.com/isaacus-dev/isaacus-typescript/commit/c5c42a4ab8d47a0d4de42df8ccacd87d88c83f0b))
* **internal:** update global Error reference ([fe4dddb](https://github.com/isaacus-dev/isaacus-typescript/commit/fe4dddb7ff5d44bf609edd23d1b97a8d10f6b33a))
* **mcp:** add cors to oauth metadata route ([736876e](https://github.com/isaacus-dev/isaacus-typescript/commit/736876e0b49b6d3c42130b161bd52ba16bd05f7b))
* **mcp:** document remote server in README.md ([fbbcc43](https://github.com/isaacus-dev/isaacus-typescript/commit/fbbcc43335cb6562ba7609bd29206ebcd35ade80))
* **mcp:** minor cleanup of types and package.json ([b2a894d](https://github.com/isaacus-dev/isaacus-typescript/commit/b2a894dc78fca32896b7f0beb29656f681c75923))
* **mcp:** refactor streamable http transport ([16e027e](https://github.com/isaacus-dev/isaacus-typescript/commit/16e027eb2536ed2d452173df0cf22686bd78c75b))
* **mcp:** rename dxt to mcpb ([2859f3c](https://github.com/isaacus-dev/isaacus-typescript/commit/2859f3c4473df3e0df28ac91df1dc393510f70a2))
* **mcp:** update package.json ([9f2e9e3](https://github.com/isaacus-dev/isaacus-typescript/commit/9f2e9e31fe589d24fce942348053c3fd3c0c239d))
* **mcp:** update README ([4eb94b3](https://github.com/isaacus-dev/isaacus-typescript/commit/4eb94b3367ad0c1071edb1c4fe215446dbe19aa9))
* **mcp:** update types ([12563a9](https://github.com/isaacus-dev/isaacus-typescript/commit/12563a9b5596bea758f319118b43748a121d4f65))
* **mcp:** upload dxt as release asset ([9ccb2af](https://github.com/isaacus-dev/isaacus-typescript/commit/9ccb2af27350bf9eca2c27045af6161bc5168cc6))
* update @stainless-api/prism-cli to v5.15.0 ([cd4e751](https://github.com/isaacus-dev/isaacus-typescript/commit/cd4e7513d64584f424ed25bd156218993acaf6b2))
* update CI script ([1674d7e](https://github.com/isaacus-dev/isaacus-typescript/commit/1674d7efca5a5e4137f9fddfa5b00ae03e7b9d86))


### Documentation

* **sdk:** make embeddings example first ([3f1e94b](https://github.com/isaacus-dev/isaacus-typescript/commit/3f1e94bef779f5b0d45eba325fdc2947c0f10728))

## 0.11.0 (2025-07-24)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.10.0...v0.11.0)

### Features

* **client:** add support for endpoint-specific base URLs ([5f69f71](https://github.com/isaacus-dev/isaacus-typescript/commit/5f69f71f60b25ce1559a244ab666042b944533b0))
* **mcp:** implement support for binary responses ([bec8bea](https://github.com/isaacus-dev/isaacus-typescript/commit/bec8beac1c9e9187aa3cbeb6ba49764763530277))
* **mcp:** set X-Stainless-MCP header ([db4bb4f](https://github.com/isaacus-dev/isaacus-typescript/commit/db4bb4f568df5883c148250104123900466b2f05))
* **mcp:** support filtering tool results by a jq expression ([8d0556f](https://github.com/isaacus-dev/isaacus-typescript/commit/8d0556f619b94473c24c362e72cbc4eaba644374))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([02f5170](https://github.com/isaacus-dev/isaacus-typescript/commit/02f5170723293eda6ae0995673136e3528c39f8c))
* **client:** explicitly copy fetch in withOptions ([0112989](https://github.com/isaacus-dev/isaacus-typescript/commit/01129895de3a6d135186e75817f75c8512084985))
* **client:** get fetchOptions type more reliably ([d2e9558](https://github.com/isaacus-dev/isaacus-typescript/commit/d2e9558832362fff02e3ffd5f5a950b609bdbd0c))
* **mcp:** include required section for top-level properties and support naming transformations ([d7e791b](https://github.com/isaacus-dev/isaacus-typescript/commit/d7e791bb7a3afbe7d8bf6a2c48a010fd091ada8d))
* **mcp:** relax input type for asTextContextResult ([1627904](https://github.com/isaacus-dev/isaacus-typescript/commit/1627904fcb3474757ba2a29f940b5a4ce067b053))
* **mcp:** support jq filtering on cloudflare workers ([391d825](https://github.com/isaacus-dev/isaacus-typescript/commit/391d8252818ab34f67f7ca02119a6660cdbe5520))
* publish script — handle NPM errors correctly ([6805e78](https://github.com/isaacus-dev/isaacus-typescript/commit/6805e78dc985503dd1f84a8de227aedd5dddf99d))


### Chores

* add docs to RequestOptions type ([16b7822](https://github.com/isaacus-dev/isaacus-typescript/commit/16b7822028f977b12a1c262e6b0a6602fb1ce8dd))
* avoid type error in certain environments ([8a16797](https://github.com/isaacus-dev/isaacus-typescript/commit/8a167970c0102371267194262318788f07dafc1d))
* **ci:** enable for pull requests ([840289e](https://github.com/isaacus-dev/isaacus-typescript/commit/840289ede6ef0e034cf1b72a4d3a324d467cf43e))
* **ci:** only run for pushes and fork pull requests ([cf544d1](https://github.com/isaacus-dev/isaacus-typescript/commit/cf544d1ae1cc37bb2cfd13189652bb2b0a2ab92e))
* **client:** improve path param validation ([0c8d6f0](https://github.com/isaacus-dev/isaacus-typescript/commit/0c8d6f0123f808d8bc950936c45fbf7dfbe7ce07))
* **client:** refactor imports ([301c341](https://github.com/isaacus-dev/isaacus-typescript/commit/301c34137a10f732d62218fedf0614a068acd997))
* **docs:** use top-level-await in example snippets ([63d8953](https://github.com/isaacus-dev/isaacus-typescript/commit/63d895384acdadbeee292f951d524df90508c9b2))
* **internal:** add pure annotations, make base APIResource abstract ([03358ec](https://github.com/isaacus-dev/isaacus-typescript/commit/03358ec382f8c487656f80e5679a73aa54e8a867))
* **internal:** codegen related update ([bda7719](https://github.com/isaacus-dev/isaacus-typescript/commit/bda771936be7dd0db83239b898a9fb8e8fd4a6ce))
* **internal:** fix readablestream types in node 20 ([604d380](https://github.com/isaacus-dev/isaacus-typescript/commit/604d380c9062489e279a76750b8cbf3707f16ecd))
* make some internal functions async ([d763165](https://github.com/isaacus-dev/isaacus-typescript/commit/d76316597b31c533754260474bee660e515fbffc))
* **mcp:** formatting ([62ef41e](https://github.com/isaacus-dev/isaacus-typescript/commit/62ef41ef9a61df100c684bb7cc694c299a84daf9))
* **mcp:** provides high-level initMcpServer function and exports known clients ([43d4446](https://github.com/isaacus-dev/isaacus-typescript/commit/43d44461cf592c7a93277cc6b939ffaf23da2342))
* **mcp:** rework imports in tools ([6d55f27](https://github.com/isaacus-dev/isaacus-typescript/commit/6d55f27f2157499c3ba7e5e137f821909269d5df))
* **readme:** update badges ([2413a0e](https://github.com/isaacus-dev/isaacus-typescript/commit/2413a0e5a09e1aff4490aef3f27eff77fb1e5c0b))
* **readme:** use better example snippet for undocumented params ([35f22a6](https://github.com/isaacus-dev/isaacus-typescript/commit/35f22a6f4288fe6736ea39e20870b59adfc91e58))
* **ts:** reorder package.json imports ([d0b6815](https://github.com/isaacus-dev/isaacus-typescript/commit/d0b6815a17366c5f67372cd44c4e43a4977cc3dc))

## 0.10.0 (2025-06-03)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.9.0...v0.10.0)

### Features

* **mcp:** include http information in tools ([114738a](https://github.com/isaacus-dev/isaacus-typescript/commit/114738ab45277fd2ac0c0eb26af526d8a51879df))


### Bug Fixes

* compat with more runtimes ([e7b9a29](https://github.com/isaacus-dev/isaacus-typescript/commit/e7b9a294e97a919cc12bf8f39c8de9d91ae43c76))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([9b8a13c](https://github.com/isaacus-dev/isaacus-typescript/commit/9b8a13c9cafb7b9590401f5d1b888997b9429124))
* **mcp:** fix cursor schema transformation issue with recursive references ([d0f747b](https://github.com/isaacus-dev/isaacus-typescript/commit/d0f747bfd026e1a69cc9e9ed5b0396b16a7d55e8))
* **mcp:** include description in dynamic tool search ([0e535ea](https://github.com/isaacus-dev/isaacus-typescript/commit/0e535eaec29b502e1067d238623d05c06d22d226))


### Chores

* adjust eslint.config.mjs ignore pattern ([9baefa0](https://github.com/isaacus-dev/isaacus-typescript/commit/9baefa0106cd8626c9e620d7f5591e6d3d824293))
* **deps:** bump eslint-plugin-prettier ([d2bf531](https://github.com/isaacus-dev/isaacus-typescript/commit/d2bf5319cf2a6edfb25a7c56241f1e4efb3f641e))
* **docs:** grammar improvements ([27ece95](https://github.com/isaacus-dev/isaacus-typescript/commit/27ece95b02af61a7a0c24e7acb0b68142e504b1c))
* improve publish-npm script --latest tag logic ([e84f18e](https://github.com/isaacus-dev/isaacus-typescript/commit/e84f18e80a28898c9880290c78e7b1fbbe260bf7))
* **internal:** codegen related update ([5dd627d](https://github.com/isaacus-dev/isaacus-typescript/commit/5dd627dfc72d274077bdedbd67f0ae15f7dcb86f))
* **internal:** codegen related update ([508b4e2](https://github.com/isaacus-dev/isaacus-typescript/commit/508b4e26db593f0adb0e9c68ba0fcf53b99ec4e8))
* **internal:** update jest config ([ac7899d](https://github.com/isaacus-dev/isaacus-typescript/commit/ac7899d70574e47c30407980ba4aa6934ab1e169))
* **mcp:** remove duplicate assignment ([a9a5105](https://github.com/isaacus-dev/isaacus-typescript/commit/a9a51059795e99f45dc5aea920b3edf4a9349dbf))
* **package:** remove engines ([fef8941](https://github.com/isaacus-dev/isaacus-typescript/commit/fef894183b0faaf70d61c5e5fbaa52f917bff672))
* **tests:** use node 22 for CI tests ([81831b6](https://github.com/isaacus-dev/isaacus-typescript/commit/81831b67684f9671baec64156495ce03a0980185))

## 0.9.0 (2025-05-10)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.8.0...v0.9.0)

### Features

* **client:** add withOptions helper ([919b90f](https://github.com/isaacus-dev/isaacus-typescript/commit/919b90f26306e822205199eaa61be8e17d4a29d6))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([db63f9c](https://github.com/isaacus-dev/isaacus-typescript/commit/db63f9cfe164f071f4e4e2acb505195759e7d843))


### Bug Fixes

* **client:** always overwrite when merging headers ([ff81f8a](https://github.com/isaacus-dev/isaacus-typescript/commit/ff81f8af0867acacb1076017e6144da123c4d53c))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([e0eebca](https://github.com/isaacus-dev/isaacus-typescript/commit/e0eebcafa6eebe5ac19f69ed1e00e8b021fd7526))


### Chores

* **build:** automatically build subpackages if present ([5068236](https://github.com/isaacus-dev/isaacus-typescript/commit/506823620cadfebe43735612bd75419dd112eaab))
* **client:** drop support for EOL node versions ([127940d](https://github.com/isaacus-dev/isaacus-typescript/commit/127940d53826bc75c61718d18b5b97499dc5a3d0))
* **internal:** codegen related update ([11b21d1](https://github.com/isaacus-dev/isaacus-typescript/commit/11b21d1d07582840d98683985bb7cbc13aef4cce))
* **internal:** share typescript helpers ([20f0218](https://github.com/isaacus-dev/isaacus-typescript/commit/20f0218a0b9b6612a2e8e67a91e8ee3eacf8a985))


### Documentation

* add examples to tsdocs ([f2f1be3](https://github.com/isaacus-dev/isaacus-typescript/commit/f2f1be3f21ef192e4a6701d6842a9174b60dc267))
* **api:** fixed incorrect description of how extraction results are ordered ([06a702a](https://github.com/isaacus-dev/isaacus-typescript/commit/06a702afa25153578c20161112918930738a3713))
* **readme:** fix typo ([d70d071](https://github.com/isaacus-dev/isaacus-typescript/commit/d70d0711bcccf134c3513ebf0a4c5d2e20c178ba))

## 0.8.0 (2025-04-30)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.7.0...v0.8.0)

### Features

* more gracefully handle $refs and work around schema limitations ([9f4e65c](https://github.com/isaacus-dev/isaacus-typescript/commit/9f4e65cf5e6d35239ba3fea7beaa73e25492c13c))


### Chores

* **ci:** add timeout thresholds for CI jobs ([61c6004](https://github.com/isaacus-dev/isaacus-typescript/commit/61c600488944a696c6a5895c0f95d78f9c5738b6))
* **ci:** only use depot for staging repos ([afd5100](https://github.com/isaacus-dev/isaacus-typescript/commit/afd51000ca1f48413b7cd79ef2f3f63a831b8f89))
* **internal:** codegen related update ([bc21b09](https://github.com/isaacus-dev/isaacus-typescript/commit/bc21b09f139eadebd6e6fa1aa724cd116483e41b))
* **internal:** refactor utils ([777d66c](https://github.com/isaacus-dev/isaacus-typescript/commit/777d66c9dbd6ee13c20ef62c165a44c96f6aa7ca))
* **perf:** faster base64 decoding ([893c735](https://github.com/isaacus-dev/isaacus-typescript/commit/893c73501b1aef055e1a079a4e0ac8b474b1c46a))

## 0.7.0 (2025-04-19)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.6.0...v0.7.0)

### ⚠ BREAKING CHANGES

* **api:** changed how end offsets are computed

### Features

* **api:** changed how end offsets are computed ([c1d9246](https://github.com/isaacus-dev/isaacus-typescript/commit/c1d924631a251f5a91b47eeb9f56a33aa105be5e))

## 0.6.0 (2025-04-19)

Full Changelog: [v0.5.1...v0.6.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.5.1...v0.6.0)

### ⚠ BREAKING CHANGES

* **api:** made universal classification endpoint multi-input only

### Features

* **api:** made universal classification endpoint multi-input only ([af242f4](https://github.com/isaacus-dev/isaacus-typescript/commit/af242f49a223c9521b713ff6f35343913a3d804f))

## 0.5.1 (2025-04-16)

Full Changelog: [v0.5.0...v0.5.1](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.5.0...v0.5.1)

### Bug Fixes

* **client:** send all configured auth headers ([50c37d7](https://github.com/isaacus-dev/isaacus-typescript/commit/50c37d755bb3c3380556ace406b56eab876afeb8))
* **internal:** fix file uploads in node 18 jest ([c7b7e21](https://github.com/isaacus-dev/isaacus-typescript/commit/c7b7e216e58d1543021380438e1d30e15c396117))
* **mcp:** fix readEnv type error ([8b4b190](https://github.com/isaacus-dev/isaacus-typescript/commit/8b4b19063b1a17a8a6c421428c6a6a82a9bd519c))
* **mcp:** include all necessary env vars in client instantiation ([19a3c7b](https://github.com/isaacus-dev/isaacus-typescript/commit/19a3c7b4b100a1ca6613e1fb7013191b606a1902))


### Chores

* **client:** minor internal fixes ([1d498c9](https://github.com/isaacus-dev/isaacus-typescript/commit/1d498c94b272c1a7f7b18257a9c88f812d34b393))
* **internal:** codegen related update ([2e3d74a](https://github.com/isaacus-dev/isaacus-typescript/commit/2e3d74a28bc40cf99a1398b1a4060584e0766504))
* **internal:** improve node 18 shims ([fb9eac1](https://github.com/isaacus-dev/isaacus-typescript/commit/fb9eac171311ab834c0391fe9f516fc5c94d0128))
* **internal:** reduce CI branch coverage ([08a7c8d](https://github.com/isaacus-dev/isaacus-typescript/commit/08a7c8ddddce2bb2c06f2aea2ec5c9eff99609b9))
* **internal:** upload builds and expand CI branch coverage ([4f0428c](https://github.com/isaacus-dev/isaacus-typescript/commit/4f0428c3546e7520ff828319d49f7539907265f6))


### Documentation

* **api:** removed description of certain objects due to Mintlify bug ([17a6ea9](https://github.com/isaacus-dev/isaacus-typescript/commit/17a6ea975aeb53ffe496e7eea3ed7c1ac802a171))

## 0.5.0 (2025-04-05)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.4.0...v0.5.0)

### Features

* **mcp:** support end-user filtering of tools, resources, and tags ([#35](https://github.com/isaacus-dev/isaacus-typescript/issues/35)) ([c3c597f](https://github.com/isaacus-dev/isaacus-typescript/commit/c3c597f21cebbb6e14e9b87fa87d543697afeb7f))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#37](https://github.com/isaacus-dev/isaacus-typescript/issues/37)) ([db9ceca](https://github.com/isaacus-dev/isaacus-typescript/commit/db9ceca29582d073446736def120d22a2d75a9c9))
* **client:** send `X-Stainless-Timeout` in seconds ([#34](https://github.com/isaacus-dev/isaacus-typescript/issues/34)) ([979c453](https://github.com/isaacus-dev/isaacus-typescript/commit/979c453293006d0f841901df8f3383f5785b00a6))
* **mcp:** remove debug logging ([#39](https://github.com/isaacus-dev/isaacus-typescript/issues/39)) ([91f4483](https://github.com/isaacus-dev/isaacus-typescript/commit/91f4483b3fef0e215ec59dfb10f557efce6fc3fe))


### Chores

* **internal:** add aliases for Record and Array ([#36](https://github.com/isaacus-dev/isaacus-typescript/issues/36)) ([f2f08fa](https://github.com/isaacus-dev/isaacus-typescript/commit/f2f08fa2f6fcec5979d6c575dbd0347b8af77123))
* **internal:** version bump ([#32](https://github.com/isaacus-dev/isaacus-typescript/issues/32)) ([e1992ce](https://github.com/isaacus-dev/isaacus-typescript/commit/e1992ce3ade04471fdd437d753af418ed80836f4))


### Documentation

* **mcp:** improve MCP readme docs ([#38](https://github.com/isaacus-dev/isaacus-typescript/issues/38)) ([2bb3f29](https://github.com/isaacus-dev/isaacus-typescript/commit/2bb3f29e9a41b834f17783cd26cce1bfb3e5c5ed))
* **mcp:** update env vars in README ([#40](https://github.com/isaacus-dev/isaacus-typescript/issues/40)) ([5cc72f4](https://github.com/isaacus-dev/isaacus-typescript/commit/5cc72f48910c6721213b17eb569d075b4d584b14))

## 0.4.0 (2025-04-01)

Full Changelog: [v0.3.1...v0.4.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.3.1...v0.4.0)

### Features

* **sdk:** added npm MCP server ([#30](https://github.com/isaacus-dev/isaacus-typescript/issues/30)) ([efe94d9](https://github.com/isaacus-dev/isaacus-typescript/commit/efe94d984a395de1c3f78db9851937e22971b6aa))

## 0.3.1 (2025-04-01)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.3.0...v0.3.1)

### Bug Fixes

* **stainless:** added missing reranking endpoint to SDK API ([#27](https://github.com/isaacus-dev/isaacus-typescript/issues/27)) ([8ee7593](https://github.com/isaacus-dev/isaacus-typescript/commit/8ee7593b4e46b5dd8dc72b3a4880e30c3af5d60c))

## 0.3.0 (2025-04-01)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** added reranking endpoint ([#24](https://github.com/isaacus-dev/isaacus-typescript/issues/24)) ([1a1f686](https://github.com/isaacus-dev/isaacus-typescript/commit/1a1f68642dfcc337354ea880b8d3cdbd47de07a1))

## 0.2.0 (2025-03-30)

Full Changelog: [v0.1.3...v0.2.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.1.3...v0.2.0)

### ⚠ BREAKING CHANGES

* **api:** started sorting chunks by score and added `index` field ([#22](https://github.com/isaacus-dev/isaacus-typescript/issues/22))

### Features

* **api:** started sorting chunks by score and added `index` field ([#22](https://github.com/isaacus-dev/isaacus-typescript/issues/22)) ([852c457](https://github.com/isaacus-dev/isaacus-typescript/commit/852c457ca288e5a5cdd8d1a433edd2b766f28a57))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#21](https://github.com/isaacus-dev/isaacus-typescript/issues/21)) ([1b58f5a](https://github.com/isaacus-dev/isaacus-typescript/commit/1b58f5a167928e49d4342f6a0f025a6e088d42b7))
* **exports:** cleaner resource index imports ([#18](https://github.com/isaacus-dev/isaacus-typescript/issues/18)) ([f749068](https://github.com/isaacus-dev/isaacus-typescript/commit/f749068b2aadf58799ec3ff76e67a22ee9d6f11e))
* **exports:** stop using path fallbacks ([#20](https://github.com/isaacus-dev/isaacus-typescript/issues/20)) ([55aed60](https://github.com/isaacus-dev/isaacus-typescript/commit/55aed60f03e8ae9bdce3dec6e7e8d6e1a9c1265d))

## 0.1.3 (2025-03-19)

Full Changelog: [v0.1.2...v0.1.3](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.1.2...v0.1.3)

### Bug Fixes

* **stainless:** ensured SDKs are published ([#16](https://github.com/isaacus-dev/isaacus-typescript/issues/16)) ([08dbe2e](https://github.com/isaacus-dev/isaacus-typescript/commit/08dbe2ebce5eb6edc37f19a4b5139da989a4cd23))


### Chores

* **internal:** minor client file refactoring ([#14](https://github.com/isaacus-dev/isaacus-typescript/issues/14)) ([82d107f](https://github.com/isaacus-dev/isaacus-typescript/commit/82d107f338b5d43271d440e02da1673958e03ff1))

## 0.1.2 (2025-03-15)

Full Changelog: [v0.1.1...v0.1.2](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.1.1...v0.1.2)

### Features

* **api:** added latest OpenAPI specification ([#11](https://github.com/isaacus-dev/isaacus-typescript/issues/11)) ([5a5f98b](https://github.com/isaacus-dev/isaacus-typescript/commit/5a5f98b0fb569234dcba58ecd9ab721c3088220c))


### Bug Fixes

* **internal:** add mts file + crypto shim types ([#9](https://github.com/isaacus-dev/isaacus-typescript/issues/9)) ([6b4d879](https://github.com/isaacus-dev/isaacus-typescript/commit/6b4d879d20c22a93337773b885da836ed48bcdd9))


### Documentation

* **stainless:** renamed Isaacus TypeScript title ([#12](https://github.com/isaacus-dev/isaacus-typescript/issues/12)) ([f6d79cd](https://github.com/isaacus-dev/isaacus-typescript/commit/f6d79cd3fedca634d9ea9a85e597ad37e11abc9b))

## 0.1.1 (2025-03-15)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.1.0...v0.1.1)

### Chores

* update SDK settings ([#6](https://github.com/isaacus-dev/isaacus-typescript/issues/6)) ([6e73685](https://github.com/isaacus-dev/isaacus-typescript/commit/6e7368579afc676fa4d84f47d80496b2ee058321))

## 0.1.0 (2025-03-15)

Full Changelog: [v0.1.0-alpha.1...v0.1.0](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.1.0-alpha.1...v0.1.0)

### Features

* **api:** added latest OpenAPI specification ([#4](https://github.com/isaacus-dev/isaacus-typescript/issues/4)) ([b1d813a](https://github.com/isaacus-dev/isaacus-typescript/commit/b1d813adcd4fce5ecae91664603f2e967addac16))

## 0.1.0-alpha.1 (2025-03-14)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/isaacus-dev/isaacus-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([30bfcce](https://github.com/isaacus-dev/isaacus-typescript/commit/30bfcce435331fd6e11c5fa253c3c2decd0bb8af))
* added latest OpenAPI specification ([94adc5f](https://github.com/isaacus-dev/isaacus-typescript/commit/94adc5f175ef1aaca55059dbfaef86efb0db787a))
* added latest OpenAPI specification ([318efbd](https://github.com/isaacus-dev/isaacus-typescript/commit/318efbd6cb9b92987328e985b6508794ad59bb4e))
* **api:** added latest OpenAPI specification ([b9e5fa3](https://github.com/isaacus-dev/isaacus-typescript/commit/b9e5fa3253f5c1aaed78379f2b7700aa514f35b1))
* **api:** added latest OpenAPI specification ([1ab5ed9](https://github.com/isaacus-dev/isaacus-typescript/commit/1ab5ed994bf29f4ac884c48ef7f3efcb795fdbeb))
* **api:** added latest OpenAPI specification ([8cc9ec8](https://github.com/isaacus-dev/isaacus-typescript/commit/8cc9ec83f852c7ebdb4d21e77c19905dc6f0dfa4))
* **api:** added latest OpenAPI specification ([f7d8108](https://github.com/isaacus-dev/isaacus-typescript/commit/f7d8108c33e6cbd36ae59af0a3668967346fdf6a))
* **api:** update via SDK Studio ([71f6b36](https://github.com/isaacus-dev/isaacus-typescript/commit/71f6b36c01544e91aa6c582f09b795ff2d8ef93d))
* **client:** improve logging ([1d9586b](https://github.com/isaacus-dev/isaacus-typescript/commit/1d9586b39d9440742680f9cb532245afa4234526))


### Bug Fixes

* **client:** fix export map for index exports, accept BunFile ([395665b](https://github.com/isaacus-dev/isaacus-typescript/commit/395665b12b3a46917b2ba2e6425e792967889cf6))
* **client:** fix TypeError with undefined File ([536b548](https://github.com/isaacus-dev/isaacus-typescript/commit/536b54835b9635766ca11640aefbc5491b4ad508))
* **exports:** ensure resource imports don't require /index ([bd73256](https://github.com/isaacus-dev/isaacus-typescript/commit/bd7325678bb6df39f44ef643dcb3ddf4e4f31fe3))
* **internal:** clean up undefined File test ([ba9b4e1](https://github.com/isaacus-dev/isaacus-typescript/commit/ba9b4e173616f24c8359385bcd6695d25af4d1ac))
* **internal:** return in castToError instead of throwing ([fbd9466](https://github.com/isaacus-dev/isaacus-typescript/commit/fbd94661ad631e21f524e38a3e0d01e902323116))
* **tests:** manually reset node:buffer File ([c8af76f](https://github.com/isaacus-dev/isaacus-typescript/commit/c8af76f16eb489c27ceba0a017ea8f1382bfad9f))


### Chores

* **client:** only accept standard types for file uploads ([7b12256](https://github.com/isaacus-dev/isaacus-typescript/commit/7b122567741f732865c506ef1aa38b0619378277))
* **docs:** improve docs for withResponse/asResponse ([d7d7d78](https://github.com/isaacus-dev/isaacus-typescript/commit/d7d7d786d158464e62d27607bfd89081d38ed33b))
* go live ([#1](https://github.com/isaacus-dev/isaacus-typescript/issues/1)) ([e85ceda](https://github.com/isaacus-dev/isaacus-typescript/commit/e85cedae33c69cc172671d79e8575f2e7c431f28))
* **internal:** codegen related update ([e09cbce](https://github.com/isaacus-dev/isaacus-typescript/commit/e09cbce67248a6921e9fb9cd11a8d34f670ff8f0))
* **internal:** constrain synckit dev dependency ([a93c3f7](https://github.com/isaacus-dev/isaacus-typescript/commit/a93c3f748a7283e5c01fe5c3f946ee0b53a4d99f))
* **internal:** fix devcontainers setup ([4f6e575](https://github.com/isaacus-dev/isaacus-typescript/commit/4f6e57552f5b2052b9b8d2e91eca2cf558c055d4))
* **internal:** fix tests failing on node v18 ([2e319fd](https://github.com/isaacus-dev/isaacus-typescript/commit/2e319fdfca3fc16ffcdffee2b1000472478fc35a))
* **internal:** fix tests not always being type checked ([729dd2c](https://github.com/isaacus-dev/isaacus-typescript/commit/729dd2c9a3fecad828b8bf1f0f018d687c86eb32))
* **internal:** migrate to eslint v9 ([98c68be](https://github.com/isaacus-dev/isaacus-typescript/commit/98c68be4ff004e39022507c90767660719ec9a62))
* **internal:** remove extra empty newlines ([b6d9340](https://github.com/isaacus-dev/isaacus-typescript/commit/b6d9340d8b21362c340b43b5396c629d6b0a7115))
* **internal:** remove unnecessary todo ([c9d6648](https://github.com/isaacus-dev/isaacus-typescript/commit/c9d66483dfae04e0be27513b00ff52aff8e24967))
* **internal:** remove unused method ([be52835](https://github.com/isaacus-dev/isaacus-typescript/commit/be52835a7481f0ac5ac69bf7bdc95c6c2e85ec3b))
* **internal:** update eslint config ([1edc67b](https://github.com/isaacus-dev/isaacus-typescript/commit/1edc67b2160cc72afbc2e3541a01ad16934de620))
* **types:** improved go to definition on fetchOptions ([db40c27](https://github.com/isaacus-dev/isaacus-typescript/commit/db40c276961be861ab088ef681afc427fbb11ad6))
* update SDK settings ([130248c](https://github.com/isaacus-dev/isaacus-typescript/commit/130248cd98f9e9f624c2fa7c8e2a75194650b8b6))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([4fc9f35](https://github.com/isaacus-dev/isaacus-typescript/commit/4fc9f35489912dca54f138c53f767091b6f6ab98))
