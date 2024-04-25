
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/khalil/Documents/GitHub/Personal-Portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/khalil/Documents/GitHub/Personal-Portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/khalil/Documents/GitHub/Personal-Portfolio/src/pages/index.js"))
}

