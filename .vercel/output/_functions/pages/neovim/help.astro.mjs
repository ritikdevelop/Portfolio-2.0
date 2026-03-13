import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cv7BTiBc.mjs';
import 'kleur/colors';
import { $ as $$Neovim } from '../../chunks/Neovim_DYHySjBt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Help = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Neovim, { "title": "Help" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-full"> <h1 class="text-4xl font-bold mb-8 text-blue">Help</h1> <div class="text-center"> <p class="mb-4">version 0.0.1</p> <div class="flex flex-col text-left justify-left p-10"> <p class="p-4">
This page contains basic instructions to use this page. Some Vim key bindings are enabled and can be used within the 
            page itself, but some of them don't work in all the pages.
</p> <h2 class="p-4 text-2xl font-bold text-blue">Instructions</h2> <p class="ml-4"><a class="font-bold">u</a>: Undo the last change, in this case, it navigates backwards.</p> <p class="ml-4"><a class="font-bold">j</a>: Move the cursor down one line.</p> <p class="ml-4"><a class="font-bold">k</a>: Move the cursor up one line.</p> <p class="ml-4"><a class="font-bold">g</a>: Move the cursor to the first line of the file, in this case, page.</p> <p class="ml-4"><a class="font-bold">G</a>: Move the cursor to the last line of the file, in this case, page.</p> </div> </div> </div> ` })}`;
}, "F:/Portfolio/src/pages/neovim/help.astro", void 0);

const $$file = "F:/Portfolio/src/pages/neovim/help.astro";
const $$url = "/neovim/help";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Help,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
