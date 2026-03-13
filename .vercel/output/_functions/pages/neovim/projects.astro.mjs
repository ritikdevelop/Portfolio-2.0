import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Cv7BTiBc.mjs';
import 'kleur/colors';
import { $ as $$Neovim } from '../../chunks/Neovim_DYHySjBt.mjs';
import { p as projects, $ as $$Icon } from '../../chunks/cv_CELfiC6V.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Neovim, { "title": "Projects", "data-astro-cid-uow5g5er": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul id="project-list" data-astro-cid-uow5g5er> ${projects && projects.map(({ url, description, highlights, name, isActive, github, stack }) => {
    return renderTemplate`<li${addAttribute([
      "mb-6 project-item leading-6 nvim-line",
      { "active": isActive, "open-source": github }
    ], "class:list")}${addAttribute(isActive ? url : github, "data-href")} data-astro-cid-uow5g5er> <div class="flex gap-2" data-astro-cid-uow5g5er> ${isActive ? renderTemplate`<a class="group flex items-center gap-1 text-lg decoration-dotted underline-offset-[5px] hover:underline transition-all duration-200 text-blue project-url"${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-uow5g5er> ${name} ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:arrow-right-s-line", "width": "24", "height": "24", "class": "text-skin-hue transition ease-linear group-hover:translate-x-1", "data-astro-cid-uow5g5er": true })} </a>` : renderTemplate`<span class="text-lg text-blue" data-astro-cid-uow5g5er>${name}</span>`} ${github && renderTemplate`<a${addAttribute(github, "href")}${addAttribute(`View ${name} in GitHub`, "title")}${addAttribute(`View ${name} in GitHub`, "aria-label")} target="_blank" rel="noopener" class="opacity-75 transition duration-200 hover:text-green decoration-dotted underline-offset-[8px] hover:underline repository-url" data-astro-cid-uow5g5er> <span data-astro-cid-uow5g5er>〔GITHUB〕</span> </a>`} </div> <div data-astro-cid-uow5g5er> ${highlights && highlights.map(
      (highlight) => renderTemplate`<span class="text-gray-600" data-astro-cid-uow5g5er>${highlight.slice(3)}. </span>`
      //Slice to remove emojis, remove if you don't use emojis
    )} </div> <p class="text-gray-500" data-astro-cid-uow5g5er> ${description} </p> <ul class="flex print:hidden flex-wrap gap-2 mt-6" aria-label="Technologies used" data-astro-cid-uow5g5er> ${stack && Object.entries(stack).map(([label], index) => renderTemplate`<li class=" cursor-default bg-transparent border-nvim-green/60 text-green flex items-center border-solid border rounded-md px-2 py-1 text-xs backdrop-blur-sm" data-astro-cid-uow5g5er> <span data-astro-cid-uow5g5er>〔${index}〕</span> <span data-astro-cid-uow5g5er>${label}</span> </li>`)} </ul> </li>`;
  })} </ul> ` })} `;
}, "F:/Portfolio/src/pages/neovim/projects.astro", void 0);

const $$file = "F:/Portfolio/src/pages/neovim/projects.astro";
const $$url = "/neovim/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
