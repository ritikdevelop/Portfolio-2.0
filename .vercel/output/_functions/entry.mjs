import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_gW0BHOHD.mjs';
import { manifest } from './manifest_bwtEIm-4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/neovim/about.astro.mjs');
const _page2 = () => import('./pages/neovim/contact.astro.mjs');
const _page3 = () => import('./pages/neovim/help.astro.mjs');
const _page4 = () => import('./pages/neovim/projects.astro.mjs');
const _page5 = () => import('./pages/neovim.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/neovim/about.astro", _page1],
    ["src/pages/neovim/contact.astro", _page2],
    ["src/pages/neovim/help.astro", _page3],
    ["src/pages/neovim/projects.astro", _page4],
    ["src/pages/neovim/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a629ead3-4729-4816-a46f-d1b784443a94",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
