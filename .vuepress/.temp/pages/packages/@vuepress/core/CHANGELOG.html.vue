<template><h1 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log" aria-hidden="true">#</a> Change Log</h1>
<p>All notable changes to this project will be documented in this file.
See <a href="https://conventionalcommits.org" target="_blank" rel="noopener noreferrer">Conventional Commits<OutboundLink/></a> for commit guidelines.</p>
<h1 id="_2-0-0-beta-22-2021-07-11" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-22-2021-07-11" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.21...v2.0.0-beta.22" target="_blank" rel="noopener noreferrer">2.0.0-beta.22<OutboundLink/></a> (2021-07-11)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-beta-21-2021-07-03" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-21-2021-07-03" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.20...v2.0.0-beta.21" target="_blank" rel="noopener noreferrer">2.0.0-beta.21<OutboundLink/></a> (2021-07-03)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-beta-20-2021-06-26" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-20-2021-06-26" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.19...v2.0.0-beta.20" target="_blank" rel="noopener noreferrer">2.0.0-beta.20<OutboundLink/></a> (2021-06-26)</h1>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> invoke extendsPageOptions hook in createPage (<a href="https://github.com/vuepress/vuepress-next/commit/76292aac7000e2bf924c563ff7452624008102cd" target="_blank" rel="noopener noreferrer">76292aa<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> extendsPageOptions now accept page options as the first argument</li>
</ul>
<h1 id="_2-0-0-beta-19-2021-06-19" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-19-2021-06-19" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.18...v2.0.0-beta.19" target="_blank" rel="noopener noreferrer">2.0.0-beta.19<OutboundLink/></a> (2021-06-19)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-beta-18-2021-06-12" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-18-2021-06-12" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.17...v2.0.0-beta.18" target="_blank" rel="noopener noreferrer">2.0.0-beta.18<OutboundLink/></a> (2021-06-12)</h1>
<h3 id="code-refactoring" tabindex="-1"><a class="header-anchor" href="#code-refactoring" aria-hidden="true">#</a> Code Refactoring</h3>
<ul>
<li><strong>core:</strong> drop support for plugin nesting (<a href="https://github.com/vuepress/vuepress-next/commit/f7da97f7f0ff24984cc6a2d0926b5fdf3af274c5" target="_blank" rel="noopener noreferrer">f7da97f<OutboundLink/></a>)</li>
<li><strong>core:</strong> resolve page title from markdown env (<a href="https://github.com/vuepress/vuepress-next/commit/09d08a4b89af16fcb833774e902b4d5404181689" target="_blank" rel="noopener noreferrer">09d08a4<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes-1" tabindex="-1"><a class="header-anchor" href="#breaking-changes-1" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> a plugin cannot use other plugins anymore</li>
<li><strong>core:</strong> markdown emoji syntax is not supported in frontmatter title</li>
</ul>
<h1 id="_2-0-0-beta-17-2021-06-04" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-17-2021-06-04" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.16...v2.0.0-beta.17" target="_blank" rel="noopener noreferrer">2.0.0-beta.17<OutboundLink/></a> (2021-06-04)</h1>
<h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> support multi-level theme inheritance (<a href="https://github.com/vuepress/vuepress-next/commit/5df86621cfcd7b138e473d40dc622e6ff8e0795f" target="_blank" rel="noopener noreferrer">5df8662<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes-2" tabindex="-1"><a class="header-anchor" href="#breaking-changes-2" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> <code>app.themeApi</code> is removed</li>
</ul>
<h1 id="_2-0-0-beta-15-2021-05-27" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-15-2021-05-27" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.14...v2.0.0-beta.15" target="_blank" rel="noopener noreferrer">2.0.0-beta.15<OutboundLink/></a> (2021-05-27)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-beta-14-2021-05-12" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-14-2021-05-12" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.13...v2.0.0-beta.14" target="_blank" rel="noopener noreferrer">2.0.0-beta.14<OutboundLink/></a> (2021-05-12)</h1>
<h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> avoid mutating theme layouts array (<a href="https://github.com/vuepress/vuepress-next/commit/fe27a57c57bd92623ef4c3df6ce4282b8eda6f71" target="_blank" rel="noopener noreferrer">fe27a57<OutboundLink/></a>)</li>
</ul>
<h3 id="features-1" tabindex="-1"><a class="header-anchor" href="#features-1" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> allow alias and define hook to return a promise (<a href="https://github.com/vuepress/vuepress-next/commit/3b3d2893c58115de65606ffc508fdc7a9cf96f79" target="_blank" rel="noopener noreferrer">3b3d289<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-beta-13-2021-05-06" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-13-2021-05-06" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.12...v2.0.0-beta.13" target="_blank" rel="noopener noreferrer">2.0.0-beta.13<OutboundLink/></a> (2021-05-06)</h1>
<h3 id="bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-2" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> path of page options should have the highest priority (<a href="https://github.com/vuepress/vuepress-next/commit/0fc6fd38225816b6bfc59fb12de837634c7ffb5d" target="_blank" rel="noopener noreferrer">0fc6fd3<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-beta-12-2021-04-30" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-12-2021-04-30" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.11...v2.0.0-beta.12" target="_blank" rel="noopener noreferrer">2.0.0-beta.12<OutboundLink/></a> (2021-04-30)</h1>
<h3 id="bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#bug-fixes-3" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> avoid uri encoded filename (<a href="https://github.com/vuepress/vuepress-next/commit/4ff7f3b287936cce0f9cfe5c8689c2efbb2b52aa" target="_blank" rel="noopener noreferrer">4ff7f3b<OutboundLink/></a>)</li>
</ul>
<h3 id="features-2" tabindex="-1"><a class="header-anchor" href="#features-2" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> add deps to page object (<a href="https://github.com/vuepress/vuepress-next/commit/83c9aaedcaf531d72d70ad514b9dd8ddf2e508d1" target="_blank" rel="noopener noreferrer">83c9aae<OutboundLink/></a>)</li>
<li><strong>core:</strong> make filePath available in markdown env (<a href="https://github.com/vuepress/vuepress-next/commit/aa52549648b175626d3eafabe8629a78a8caf8e5" target="_blank" rel="noopener noreferrer">aa52549<OutboundLink/></a>)</li>
</ul>
<h3 id="performance-improvements" tabindex="-1"><a class="header-anchor" href="#performance-improvements" aria-hidden="true">#</a> Performance Improvements</h3>
<ul>
<li><strong>core:</strong> reduce page data and component file size (<a href="https://github.com/vuepress/vuepress-next/commit/4c6eea5188e804cb3f6c7648d6528d43002618ae" target="_blank" rel="noopener noreferrer">4c6eea5<OutboundLink/></a>)</li>
<li><strong>core:</strong> reduce routes file size (<a href="https://github.com/vuepress/vuepress-next/commit/d926a170ee5f384845f5b166029fbc392f51dcde" target="_blank" rel="noopener noreferrer">d926a17<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes-3" tabindex="-1"><a class="header-anchor" href="#breaking-changes-3" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> <code>pagePath</code> prop of <code>&lt;Content&gt;</code> renamed to <code>pageKey</code></li>
</ul>
<h1 id="_2-0-0-beta-11-2021-04-28" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-11-2021-04-28" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.10...v2.0.0-beta.11" target="_blank" rel="noopener noreferrer">2.0.0-beta.11<OutboundLink/></a> (2021-04-28)</h1>
<h3 id="performance-improvements-1" tabindex="-1"><a class="header-anchor" href="#performance-improvements-1" aria-hidden="true">#</a> Performance Improvements</h3>
<ul>
<li><strong>core:</strong> merge page routes to reduce requests in vite dev (<a href="https://github.com/vuepress/vuepress-next/commit/fa2a61413c70afd426f74e57e6e5d2a4900c6568" target="_blank" rel="noopener noreferrer">fa2a614<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-beta-10-2021-04-27" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-10-2021-04-27" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.9...v2.0.0-beta.10" target="_blank" rel="noopener noreferrer">2.0.0-beta.10<OutboundLink/></a> (2021-04-27)</h1>
<h3 id="bug-fixes-4" tabindex="-1"><a class="header-anchor" href="#bug-fixes-4" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> allow extendsMarkdown to return a promise (<a href="https://github.com/vuepress/vuepress-next/commit/a4be2fda5952f64da2db6ba837b94bfb4e1315ce" target="_blank" rel="noopener noreferrer">a4be2fd<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-beta-9-2021-04-21" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-9-2021-04-21" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.8...v2.0.0-beta.9" target="_blank" rel="noopener noreferrer">2.0.0-beta.9<OutboundLink/></a> (2021-04-21)</h1>
<h3 id="bug-fixes-5" tabindex="-1"><a class="header-anchor" href="#bug-fixes-5" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> allow plugin itself as an item of plugin config array (<a href="https://github.com/vuepress/vuepress-next/commit/1fa8903549d8f9eba3fc49e3117ee2018993b496" target="_blank" rel="noopener noreferrer">1fa8903<OutboundLink/></a>)</li>
<li><strong>core:</strong> ensure trailing slash of page path (close <a href="https://github.com/vuepress/vuepress-next/issues/114" target="_blank" rel="noopener noreferrer">#114<OutboundLink/></a>) (<a href="https://github.com/vuepress/vuepress-next/commit/cbcf16624602e37c17935211ac4076c72db22507" target="_blank" rel="noopener noreferrer">cbcf166<OutboundLink/></a>)</li>
</ul>
<h3 id="code-refactoring-1" tabindex="-1"><a class="header-anchor" href="#code-refactoring-1" aria-hidden="true">#</a> Code Refactoring</h3>
<ul>
<li><strong>core:</strong> move evergreen option to bundler-webpack (<a href="https://github.com/vuepress/vuepress-next/commit/58c30c1207f0f6e09e9d68096786ef189c67e9db" target="_blank" rel="noopener noreferrer">58c30c1<OutboundLink/></a>)</li>
</ul>
<h3 id="features-3" tabindex="-1"><a class="header-anchor" href="#features-3" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> make frontmatter available in markdown env (<a href="https://github.com/vuepress/vuepress-next/commit/f97719237db9d14c94716bf6b18fe52519a008cf" target="_blank" rel="noopener noreferrer">f977192<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes-4" tabindex="-1"><a class="header-anchor" href="#breaking-changes-4" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> <code>evergreen</code> option is moved to <code>bundlerConfig.evergreen</code> for bundler-webpack</li>
</ul>
<h1 id="_2-0-0-beta-8-2021-04-11" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-8-2021-04-11" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.7...v2.0.0-beta.8" target="_blank" rel="noopener noreferrer">2.0.0-beta.8<OutboundLink/></a> (2021-04-11)</h1>
<h3 id="code-refactoring-2" tabindex="-1"><a class="header-anchor" href="#code-refactoring-2" aria-hidden="true">#</a> Code Refactoring</h3>
<ul>
<li><strong>core:</strong> resolve theme when creating app (<a href="https://github.com/vuepress/vuepress-next/commit/fa683cb76e8a3bcacc08d1dfd8bea6af79fee1d2" target="_blank" rel="noopener noreferrer">fa683cb<OutboundLink/></a>)</li>
</ul>
<h3 id="features-4" tabindex="-1"><a class="header-anchor" href="#features-4" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>utils:</strong> add logger.createError method (<a href="https://github.com/vuepress/vuepress-next/commit/0c198d7f9e122828b37a2db670048cfc2ce20e81" target="_blank" rel="noopener noreferrer">0c198d7<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes-5" tabindex="-1"><a class="header-anchor" href="#breaking-changes-5" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> theme plugins could be overridden by user plugins now</li>
</ul>
<h1 id="_2-0-0-beta-7-2021-04-09" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-7-2021-04-09" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.6...v2.0.0-beta.7" target="_blank" rel="noopener noreferrer">2.0.0-beta.7<OutboundLink/></a> (2021-04-09)</h1>
<h3 id="features-5" tabindex="-1"><a class="header-anchor" href="#features-5" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> show warning when duplicate plugins are detected (<a href="https://github.com/vuepress/vuepress-next/commit/742f5811032b3a2f0687edf3f966d25517734a8d" target="_blank" rel="noopener noreferrer">742f581<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-beta-6-2021-03-26" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-6-2021-03-26" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.5...v2.0.0-beta.6" target="_blank" rel="noopener noreferrer">2.0.0-beta.6<OutboundLink/></a> (2021-03-26)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-beta-5-2021-03-26" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-5-2021-03-26" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.4...v2.0.0-beta.5" target="_blank" rel="noopener noreferrer">2.0.0-beta.5<OutboundLink/></a> (2021-03-26)</h1>
<h3 id="performance-improvements-2" tabindex="-1"><a class="header-anchor" href="#performance-improvements-2" aria-hidden="true">#</a> Performance Improvements</h3>
<ul>
<li>improve HMR support (<a href="https://github.com/vuepress/vuepress-next/commit/38f007335864db4c9125ea5905ca91850fb7103b" target="_blank" rel="noopener noreferrer">38f0073<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-beta-4-2021-03-20" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-4-2021-03-20" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.3...v2.0.0-beta.4" target="_blank" rel="noopener noreferrer">2.0.0-beta.4<OutboundLink/></a> (2021-03-20)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-beta-1-2021-03-13" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-1-2021-03-13" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-beta.0...v2.0.0-beta.1" target="_blank" rel="noopener noreferrer">2.0.0-beta.1<OutboundLink/></a> (2021-03-13)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-beta-0-2021-03-13" tabindex="-1"><a class="header-anchor" href="#_2-0-0-beta-0-2021-03-13" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.26...v2.0.0-beta.0" target="_blank" rel="noopener noreferrer">2.0.0-beta.0<OutboundLink/></a> (2021-03-13)</h1>
<h3 id="features-6" tabindex="-1"><a class="header-anchor" href="#features-6" aria-hidden="true">#</a> Features</h3>
<ul>
<li>implement vite hmr (<a href="https://github.com/vuepress/vuepress-next/commit/525c18d5a64fbdbdeb5ce1348ec1e1ead3dbd8f9" target="_blank" rel="noopener noreferrer">525c18d<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-25-2021-02-20" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-25-2021-02-20" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.24...v2.0.0-alpha.25" target="_blank" rel="noopener noreferrer">2.0.0-alpha.25<OutboundLink/></a> (2021-02-20)</h1>
<h3 id="code-refactoring-3" tabindex="-1"><a class="header-anchor" href="#code-refactoring-3" aria-hidden="true">#</a> Code Refactoring</h3>
<ul>
<li><strong>core:</strong> remove theme data from site data (<a href="https://github.com/vuepress/vuepress-next/commit/187aef36607efc62d7b2d5c773553f89685cf64c" target="_blank" rel="noopener noreferrer">187aef3<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes-6" tabindex="-1"><a class="header-anchor" href="#breaking-changes-6" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> <code>themeConfig</code> is not available in site data any more</li>
</ul>
<h1 id="_2-0-0-alpha-24-2021-02-13" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-24-2021-02-13" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.23...v2.0.0-alpha.24" target="_blank" rel="noopener noreferrer">2.0.0-alpha.24<OutboundLink/></a> (2021-02-13)</h1>
<h3 id="code-refactoring-4" tabindex="-1"><a class="header-anchor" href="#code-refactoring-4" aria-hidden="true">#</a> Code Refactoring</h3>
<ul>
<li><strong>core:</strong> change page default date to 0000-00-00 (<a href="https://github.com/vuepress/vuepress-next/commit/1ce602ef811f29f083a8d10695a7b212ed82cae5" target="_blank" rel="noopener noreferrer">1ce602e<OutboundLink/></a>)</li>
<li><strong>core:</strong> remove permalink and pattern from page options (<a href="https://github.com/vuepress/vuepress-next/commit/9534989a82e620b1c09b4a09d4cfee1e99d145fc" target="_blank" rel="noopener noreferrer">9534989<OutboundLink/></a>)</li>
</ul>
<h3 id="features-7" tabindex="-1"><a class="header-anchor" href="#features-7" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> add extendsPageOptions hook (<a href="https://github.com/vuepress/vuepress-next/commit/19b7e83cb25ec523857d34c415782d595a05d0ff" target="_blank" rel="noopener noreferrer">19b7e83<OutboundLink/></a>)</li>
<li><strong>core:</strong> add watchers parameter to onWatched hook (<a href="https://github.com/vuepress/vuepress-next/commit/0bcd594d1645fe9994d1456e86803e5619057bfb" target="_blank" rel="noopener noreferrer">0bcd594<OutboundLink/></a>)</li>
</ul>
<h3 id="breaking-changes-7" tabindex="-1"><a class="header-anchor" href="#breaking-changes-7" aria-hidden="true">#</a> BREAKING CHANGES</h3>
<ul>
<li><strong>core:</strong> remove permalink and pattern from page options</li>
<li><strong>core:</strong> change page default date from 1970-01-01 to 0000-00-00</li>
</ul>
<h1 id="_2-0-0-alpha-23-2021-02-10" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-23-2021-02-10" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.22...v2.0.0-alpha.23" target="_blank" rel="noopener noreferrer">2.0.0-alpha.23<OutboundLink/></a> (2021-02-10)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-22-2021-02-10" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-22-2021-02-10" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.21...v2.0.0-alpha.22" target="_blank" rel="noopener noreferrer">2.0.0-alpha.22<OutboundLink/></a> (2021-02-10)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-20-2021-02-04" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-20-2021-02-04" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.19...v2.0.0-alpha.20" target="_blank" rel="noopener noreferrer">2.0.0-alpha.20<OutboundLink/></a> (2021-02-04)</h1>
<h3 id="features-8" tabindex="-1"><a class="header-anchor" href="#features-8" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> create siteData in vuepress app (<a href="https://github.com/vuepress/vuepress-next/commit/05b87ddf32f32c94cc131e0074365aeba70f85f2" target="_blank" rel="noopener noreferrer">05b87dd<OutboundLink/></a>)</li>
<li><strong>core:</strong> make language available in page data (<a href="https://github.com/vuepress/vuepress-next/commit/03bb09fd51aeaff56d26820a1401b87ea8bdeb38" target="_blank" rel="noopener noreferrer">03bb09f<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-19-2021-01-24" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-19-2021-01-24" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.18...v2.0.0-alpha.19" target="_blank" rel="noopener noreferrer">2.0.0-alpha.19<OutboundLink/></a> (2021-01-24)</h1>
<h3 id="features-9" tabindex="-1"><a class="header-anchor" href="#features-9" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> add onWatched hook (<a href="https://github.com/vuepress/vuepress-next/commit/9725a101599363094a85916317109b67d365dff4" target="_blank" rel="noopener noreferrer">9725a10<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-18-2021-01-17" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-18-2021-01-17" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.17...v2.0.0-alpha.18" target="_blank" rel="noopener noreferrer">2.0.0-alpha.18<OutboundLink/></a> (2021-01-17)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-17-2021-01-13" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-17-2021-01-13" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.16...v2.0.0-alpha.17" target="_blank" rel="noopener noreferrer">2.0.0-alpha.17<OutboundLink/></a> (2021-01-13)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-16-2021-01-11" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-16-2021-01-11" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.15...v2.0.0-alpha.16" target="_blank" rel="noopener noreferrer">2.0.0-alpha.16<OutboundLink/></a> (2021-01-11)</h1>
<h3 id="bug-fixes-6" tabindex="-1"><a class="header-anchor" href="#bug-fixes-6" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> support special characters in filename and permalink (<a href="https://github.com/vuepress/vuepress-next/commit/c3e68ef6a4aa3f6722d5bc4079bafe5d3b176e5e" target="_blank" rel="noopener noreferrer">c3e68ef<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-15-2021-01-04" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-15-2021-01-04" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.14...v2.0.0-alpha.15" target="_blank" rel="noopener noreferrer">2.0.0-alpha.15<OutboundLink/></a> (2021-01-04)</h1>
<h3 id="features-10" tabindex="-1"><a class="header-anchor" href="#features-10" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> provide app in all plugin hooks (<a href="https://github.com/vuepress/vuepress-next/commit/21cc3a608e54d38de8de8f453b5e88031b4cedb1" target="_blank" rel="noopener noreferrer">21cc3a6<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-14-2021-01-03" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-14-2021-01-03" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.13...v2.0.0-alpha.14" target="_blank" rel="noopener noreferrer">2.0.0-alpha.14<OutboundLink/></a> (2021-01-03)</h1>
<h3 id="bug-fixes-7" tabindex="-1"><a class="header-anchor" href="#bug-fixes-7" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> fix page date resolving (<a href="https://github.com/vuepress/vuepress-next/commit/de6c5c8ca89347bea4ba2925e283a7b710a5b5d3" target="_blank" rel="noopener noreferrer">de6c5c8<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-13-2020-12-23" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-13-2020-12-23" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.12...v2.0.0-alpha.13" target="_blank" rel="noopener noreferrer">2.0.0-alpha.13<OutboundLink/></a> (2020-12-23)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-12-2020-12-19" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-12-2020-12-19" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.11...v2.0.0-alpha.12" target="_blank" rel="noopener noreferrer">2.0.0-alpha.12<OutboundLink/></a> (2020-12-19)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-8-2020-12-11" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-8-2020-12-11" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.7...v2.0.0-alpha.8" target="_blank" rel="noopener noreferrer">2.0.0-alpha.8<OutboundLink/></a> (2020-12-11)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-7-2020-12-09" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-7-2020-12-09" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.6...v2.0.0-alpha.7" target="_blank" rel="noopener noreferrer">2.0.0-alpha.7<OutboundLink/></a> (2020-12-09)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-6-2020-12-09" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-6-2020-12-09" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.5...v2.0.0-alpha.6" target="_blank" rel="noopener noreferrer">2.0.0-alpha.6<OutboundLink/></a> (2020-12-09)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-5-2020-12-03" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-5-2020-12-03" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.4...v2.0.0-alpha.5" target="_blank" rel="noopener noreferrer">2.0.0-alpha.5<OutboundLink/></a> (2020-12-03)</h1>
<p><strong>Note:</strong> Version bump only for package @vuepress/core</p>
<h1 id="_2-0-0-alpha-4-2020-12-02" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-4-2020-12-02" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.3...v2.0.0-alpha.4" target="_blank" rel="noopener noreferrer">2.0.0-alpha.4<OutboundLink/></a> (2020-12-02)</h1>
<h3 id="bug-fixes-8" tabindex="-1"><a class="header-anchor" href="#bug-fixes-8" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> failed to resolve local theme (<a href="https://github.com/vuepress/vuepress-next/commit/4d836e2bc3e7affe17f63df1c4ce40c464a7e6fb" target="_blank" rel="noopener noreferrer">4d836e2<OutboundLink/></a>)</li>
<li><strong>core:</strong> warn if layout directory does not exist (<a href="https://github.com/vuepress/vuepress-next/commit/3d2d4148024963521b9e1ebbc29aa19697ac3452" target="_blank" rel="noopener noreferrer">3d2d414<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-3-2020-12-01" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-3-2020-12-01" aria-hidden="true">#</a> <a href="https://github.com/vuepress/vuepress-next/compare/v2.0.0-alpha.2...v2.0.0-alpha.3" target="_blank" rel="noopener noreferrer">2.0.0-alpha.3<OutboundLink/></a> (2020-12-01)</h1>
<h3 id="bug-fixes-9" tabindex="-1"><a class="header-anchor" href="#bug-fixes-9" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> avoid runtime warning for empty template (close <a href="https://github.com/vuepress/vuepress-next/issues/10" target="_blank" rel="noopener noreferrer">#10<OutboundLink/></a>) (<a href="https://github.com/vuepress/vuepress-next/commit/bcbf703e6e449f7753697b7dfc503bd643bfd240" target="_blank" rel="noopener noreferrer">bcbf703<OutboundLink/></a>)</li>
</ul>
<h1 id="_2-0-0-alpha-1-2020-12-01" tabindex="-1"><a class="header-anchor" href="#_2-0-0-alpha-1-2020-12-01" aria-hidden="true">#</a> 2.0.0-alpha.1 (2020-12-01)</h1>
<h3 id="bug-fixes-10" tabindex="-1"><a class="header-anchor" href="#bug-fixes-10" aria-hidden="true">#</a> Bug Fixes</h3>
<ul>
<li><strong>core:</strong> default value of base and lang (<a href="https://github.com/vuepress/vuepress-next/commit/5a5df274de4691315e567e932a6cffe4a04d88c1" target="_blank" rel="noopener noreferrer">5a5df27<OutboundLink/></a>)</li>
<li><strong>core:</strong> infer page locale path correctly (<a href="https://github.com/vuepress/vuepress-next/commit/8f2b10bc8c9fa58ee4181bbfc50ade3e45e382ff" target="_blank" rel="noopener noreferrer">8f2b10b<OutboundLink/></a>)</li>
<li><strong>core:</strong> resolve page date (<a href="https://github.com/vuepress/vuepress-next/commit/bd627d79482e77c573654db699ff58f93e8d8dd5" target="_blank" rel="noopener noreferrer">bd627d7<OutboundLink/></a>)</li>
<li><strong>core:</strong> resolve page excerpt with correct markdown env (<a href="https://github.com/vuepress/vuepress-next/commit/e0f406625baf085ced29ea88328069fb0a1d0cf4" target="_blank" rel="noopener noreferrer">e0f4066<OutboundLink/></a>)</li>
<li><strong>core:</strong> resolve page title from markdown content as fallback (<a href="https://github.com/vuepress/vuepress-next/commit/b2160129b175013518b9fb7d82d034694509ae86" target="_blank" rel="noopener noreferrer">b216012<OutboundLink/></a>)</li>
<li><strong>core:</strong> resolve plugin and theme by name (<a href="https://github.com/vuepress/vuepress-next/commit/30313247958f9e1d4a7214a18ce6e17bc582bc3e" target="_blank" rel="noopener noreferrer">3031324<OutboundLink/></a>)</li>
<li><strong>core:</strong> respect page options (<a href="https://github.com/vuepress/vuepress-next/commit/d8dbbb777161130634fe5cadf0be571ed830a7ab" target="_blank" rel="noopener noreferrer">d8dbbb7<OutboundLink/></a>)</li>
</ul>
<h3 id="features-11" tabindex="-1"><a class="header-anchor" href="#features-11" aria-hidden="true">#</a> Features</h3>
<ul>
<li><strong>core:</strong> add 404 page if not exist (<a href="https://github.com/vuepress/vuepress-next/commit/0297a9ed96acb0b792dac44f72f4d549a5930841" target="_blank" rel="noopener noreferrer">0297a9e<OutboundLink/></a>)</li>
<li><strong>core:</strong> add clientAppRootComponentFiles hook (<a href="https://github.com/vuepress/vuepress-next/commit/7f640c879f53b5dff67a2c6d374360f3e19aa679" target="_blank" rel="noopener noreferrer">7f640c8<OutboundLink/></a>)</li>
<li><strong>core:</strong> add extendsPageData hook (<a href="https://github.com/vuepress/vuepress-next/commit/5a109943ed1beb3ddfd07c018e0cba33cb46fdb2" target="_blank" rel="noopener noreferrer">5a10994<OutboundLink/></a>)</li>
<li><strong>core:</strong> add pagePatterns option (<a href="https://github.com/vuepress/vuepress-next/commit/9a8855d86683e95e2dae33493d0321fa14bfee9d" target="_blank" rel="noopener noreferrer">9a8855d<OutboundLink/></a>)</li>
<li><strong>core:</strong> add public directory config (<a href="https://github.com/vuepress/vuepress-next/commit/1b52ffe89a7f87d3c6822d07b6b75f2675b8745f" target="_blank" rel="noopener noreferrer">1b52ffe<OutboundLink/></a>)</li>
<li><strong>core:</strong> add theme layouts option (<a href="https://github.com/vuepress/vuepress-next/commit/bf96cc3a2ab9133d3606231e3f9d0c46b2a2103c" target="_blank" rel="noopener noreferrer">bf96cc3<OutboundLink/></a>)</li>
<li><strong>core:</strong> allow disable prefetch and preload links (<a href="https://github.com/vuepress/vuepress-next/commit/2991b6a7025eefac21846eb520aa5ca2ea2dc594" target="_blank" rel="noopener noreferrer">2991b6a<OutboundLink/></a>)</li>
<li><strong>core:</strong> allow plugins and themes use export default (<a href="https://github.com/vuepress/vuepress-next/commit/874979d6d86e308469488c8405e6f7bbc80d1391" target="_blank" rel="noopener noreferrer">874979d<OutboundLink/></a>)</li>
<li><strong>core:</strong> enable evergreen option by default (<a href="https://github.com/vuepress/vuepress-next/commit/fa67dbb9474c27ff10e4061ac15171bc4936d274" target="_blank" rel="noopener noreferrer">fa67dbb<OutboundLink/></a>)</li>
<li><strong>core:</strong> export LocaleConfig type from shared (<a href="https://github.com/vuepress/vuepress-next/commit/04de925326ad1101702e57fd9903de808a72bb97" target="_blank" rel="noopener noreferrer">04de925<OutboundLink/></a>)</li>
<li><strong>core:</strong> inject page title into route meta (<a href="https://github.com/vuepress/vuepress-next/commit/0d9e7e3b3a0a78504fc586887cf1a777ae434846" target="_blank" rel="noopener noreferrer">0d9e7e3<OutboundLink/></a>)</li>
<li><strong>core:</strong> remove plugins from app options (<a href="https://github.com/vuepress/vuepress-next/commit/fe411e7ef8a5802876f55246a9937825e802f538" target="_blank" rel="noopener noreferrer">fe411e7<OutboundLink/></a>)</li>
<li><strong>core:</strong> remove webpack related hooks (<a href="https://github.com/vuepress/vuepress-next/commit/9613f69ace1413b3776a6012319cf7c6fe1d3469" target="_blank" rel="noopener noreferrer">9613f69<OutboundLink/></a>)</li>
</ul>
</template>
