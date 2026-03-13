import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, l as renderScript, k as renderComponent, n as renderSlot, o as renderHead, u as unescapeHTML, h as addAttribute } from './astro/server_Cv7BTiBc.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */
import { $ as $$Icon, C as CV } from './cv_CELfiC6V.mjs';

const $$Astro$1 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${maybeRenderHead()}<div class="bg-nvim-bg text-nvim-gray w-6 flex-shrink-0 text-right pr-2 py-2"> ${renderTemplate`<div class="h-full"> ${Array(100).fill("~").map((line) => renderTemplate`<div>${line}</div>`)} </div>` } </div>`;
}, "F:/Portfolio/src/components/neovim/Sidebar.astro", void 0);

const $$StatusBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="status-bar" class="bg-nvim-statusline text-nvim-fg h-6 px-2 flex items-center justify-between text-sm" data-astro-cid-3o4bndcg> <div id="mode" class="w-20" data-astro-cid-3o4bndcg>NORMAL</div> <div id="command-line" class="flex-1 ml-2" data-astro-cid-3o4bndcg></div> <div id="file-info" class="mr-2" data-astro-cid-3o4bndcg>Last Updated: ${(/* @__PURE__ */ new Date()).toDateString()} /</div> <div id="position" data-astro-cid-3o4bndcg>1:1</div> </div> ${renderScript($$result, "F:/Portfolio/src/components/neovim/StatusBar.astro?astro&type=script&index=0&lang.ts")} `;
}, "F:/Portfolio/src/components/neovim/StatusBar.astro", void 0);

const $$KeyBindings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="key-bindings" class="fixed bottom-10 right-4 bg-gray-800 border border-green-400 p-4 rounded hidden"> <h3 class="text-lg font-bold mb-2">Key Bindings</h3> <ul> <li><kbd>j</kbd> / <kbd>k</kbd>: Navigate up/down</li> <li><kbd>u</kbd>: Go back</li> <li><kbd>g</kbd>: Go to top</li> <li><kbd>G</kbd>: Go to bottom</li> <li><kbd>/</kbd>: Focus search</li> <li><kbd>:</kbd><span class="text-blue">&lt;command&gt;</span> : Navigate to <span class="text-blue">&lt;command&gt;</span></li> <li><kbd>Esc</kbd>: Clear search / Exit</li> </ul> </div>`;
}, "F:/Portfolio/src/components/neovim/KeyBindings.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Neovim = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Neovim;
  const {
    title,
    description = "Interactive Neovim-themed portfolio interface showcasing Anmol Singh's projects and experience. A keyboard-friendly, terminal-inspired alternative view of a full-stack developer's portfolio featuring e-commerce, music streaming, and social media applications."
  } = Astro2.props;
  const { url, image, name, location } = CV.basics;
  const { city, region } = location;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${name}'s Neovim Portfolio`,
    "description": description,
    "url": `${url}/neovim`,
    "applicationCategory": "Portfolio",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": name,
      "jobTitle": CV.basics.label,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": region,
        "addressCountry": "IN"
      }
    }
  };
  const keywords = [
    "Neovim Portfolio",
    "Interactive Portfolio",
    "Keyboard Navigation",
    "Terminal Interface",
    "Developer Portfolio",
    name,
    CV.basics.label,
    "Web Development",
    "Full Stack Developer",
    city,
    region,
    "India"
  ];
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="overflow-hidden"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><meta name="keywords"', '><meta name="geo.region" content="IN-HR"><meta name="geo.placename"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/neovim.webp"><link rel="apple-touch-icon" href="/apple-touch-icon.webp"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', '><meta property="og:locale" content="en_IN"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:domain"', '><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Additional meta tags --><meta name="theme-color" content="#1a1a1a"><meta name="generator"', '><!-- Structured Data --><script type="application/ld+json">', "<\/script><title>", "</title>", '</head> <body class="bg-nvim-bg text-nvim-fg font-mono flex flex-col h-full select-none prose-invert"> <div class="flex flex-1 overflow-hidden"> ', ' <main class="flex-1 overflow-y-auto p-2"> ', " ", " </main> </div> ", " ", " ", " ", "</body></html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(name, "content"), addAttribute(keywords.join(", "), "content"), addAttribute(city, "content"), addAttribute(`${url}/neovim`, "href"), addAttribute(`${url}/neovim`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(`${name}'s Neovim Portfolio`, "content"), addAttribute(url.split("//")[1] ?? "", "content"), addAttribute(`${url}/neovim`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(Astro2.generator, "content"), unescapeHTML(JSON.stringify(structuredData)), title, renderHead(), renderComponent($$result, "Sidebar", $$Sidebar, {}), renderComponent($$result, "Icon", $$Icon, { "id": "cursor", "name": "mdi:minus", "width": 24, "height": 24, "class": `animate-pulse absolute z-50 text-lg top-[-100vh] rotate-90` }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "KeyBindings", $$KeyBindings, {}), renderComponent($$result, "StatusBar", $$StatusBar, {}), renderScript($$result, "F:/Portfolio/src/layouts/Neovim.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "F:/Portfolio/src/layouts/Neovim.astro?astro&type=script&index=1&lang.ts"));
}, "F:/Portfolio/src/layouts/Neovim.astro", void 0);

export { $$Neovim as $ };
