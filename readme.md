# filter-nil


<a href="https://raw.githubusercontent.com/Jaid/filter-nil/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/filter-nil?style=flat-square" alt="License"/></a>  
<a href="https://actions-badge.atrox.dev/Jaid/filter-nil/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Ffilter-nil%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Jaid/filter-nil/commits"><img src="https://img.shields.io/github/commits-since/Jaid/filter-nil/v1.0.1?style=flat-square&logo=github" alt="Commits since v1.0.1"/></a> <a href="https://github.com/Jaid/filter-nil/commits"><img src="https://img.shields.io/github/last-commit/Jaid/filter-nil?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/filter-nil/issues"><img src="https://img.shields.io/github/issues/Jaid/filter-nil?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/filter-nil"><img src="https://img.shields.io/npm/v/filter-nil?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/filter-nil/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/filter-nil?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/filter-nil"><img src="https://img.shields.io/npm/dm/filter-nil?style=flat-square&logo=npm" alt="Downloads"/></a>

**Filters array entries that are null or undefined.**















## Installation
<a href="https://npmjs.com/package/filter-nil"><img src="https://img.shields.io/badge/npm-filter--nil-C23039?style=flat-square&logo=npm" alt="filter-nil on npm"/></a>
```bash
npm install --save filter-nil@^1.0.1
```
<a href="https://yarnpkg.com/package/filter-nil"><img src="https://img.shields.io/badge/Yarn-filter--nil-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="filter-nil on Yarn"/></a>
```bash
yarn add filter-nil@^1.0.1
```
<a href="https://jsdelivr.com/package/npm/filter-nil/"><img src="https://img.shields.io/badge/jsDelivr-filter--nil-orange?style=flat-square&logo=html5&logoColor=white" alt="filter-nil on jsDelivr"/></a> <a href="https://unpkg.com/browse/filter-nil/"><img src="https://img.shields.io/badge/UNPKG-filter--nil-orange?style=flat-square&logo=html5&logoColor=white" alt="filter-nil on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/filter-nil@1.0.1/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/filter-nil@1.0.1/index.js");
document.querySelector("head").appendChild(scriptElement);
```

filter-nil is now stored in the global variable `filterNil`. The following console expression should return something other than `"undefined"`.

```javascript
typeof filterNil.default
```






## Development



Setting up:
```bash
git clone git@github.com:Jaid/filter-nil.git
cd filter-nil
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
