# Changelog

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
