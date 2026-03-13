import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Cv7BTiBc.mjs';
import 'kleur/colors';
import { $ as $$Neovim } from '../../chunks/Neovim_DYHySjBt.mjs';
import { b as basics, w as work, $ as $$Icon } from '../../chunks/cv_CELfiC6V.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const { name, label, location, profiles, summary } = basics;
  const { city, region, address } = location;
  return renderTemplate`${renderComponent($$result, "Layout", $$Neovim, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-full mt-[8%]"> <h1 class="text-4xl font-bold mb-2 text-blue nvim-line">About</h1> <div class="text-center w-1/2 h-full"> <div class="mb-4 flex place-content-center"> <p class="nvim-line max-w-max text-xs nvim-line">version 0.0.1</p> </div> <div class="flex flex-col text-left justify-left p-10 prose-invert min-h-max"> <span class="text-xs text-skin-muted nvim-line">[me].jpg</span> <h1 class="text-2xl nvim-line">${name}</h1> <h2 class="text-sm text-green nvim-line">${label}</h2> <div class="flex items
        -center gap-2 pt-1 text-sm text-skin-muted nvim-line"> ${address}, ${city}, ${region}.
</div> <div class="mb-2"> <p class="font-mono opacity-75 font-semibold nvim-line"> ${summary} </p> </div> <footer class="flex flex-col gap-1"> ${profiles.map(({ network, url }) => {
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(url, "data-href")}${addAttribute(`Visit ${name} profile on ${network}`, "title")}${addAttribute(`Visit ${name} profile on ${network}`, "aria-label")} target="_blank" class="group nvim-line" rel="noopener noreferrer"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:arrow-right-s-line", "width": "18", "height": "18", "class": "text-blue group-hover:text-skin-hue transition ease-linear group-hover:translate-x-2 inline" })} <span>〔${network}〕</span> </a>`;
  })} </footer> <span class="mb-2">---------------------------------------------------</span> <div class="min-h-max"> ${work && work.map(({ name: name2, location: location2, location_type, summary: summary2, responsibilities }) => {
    return renderTemplate`<div class="mb-4"> <h3 class="text-lg font-bold text-blue nvim-line">${name2}</h3> ${(location2 || location_type) && renderTemplate`<div class="text-xs text-skin-muted nvim-line"> ${location2} ${location2 && location_type && "-"} ${location_type} </div>`} <div class="mt-4 flex flex-col gap-4 text-sm"> ${summary2 && renderTemplate`<div class="flex flex-col gap-2"> <h4 class="text-green nvim-line">Summary:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-decimal flex-col gap-2"> ${Array.isArray(summary2) ? summary2.map((item) => renderTemplate`<li class="nvim-line">${item}</li>`) : renderTemplate`<li class="nvim-line">${summary2}</li>`} </ul> </div>`} ${responsibilities && renderTemplate`<div class="flex flex-col gap-2"> <h4 class="text-green nvim-line">Responsibilities:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex flex-col gap-2 list-decimal"> ${responsibilities.map((responsibility) => renderTemplate`<li class="nvim-line">${responsibility}</li>`)} </ul> </div>`} </div> </div>`;
  })} </div> </div> </div> </div> ` })}`;
}, "F:/Portfolio/src/pages/neovim/about.astro", void 0);

const $$file = "F:/Portfolio/src/pages/neovim/about.astro";
const $$url = "/neovim/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
