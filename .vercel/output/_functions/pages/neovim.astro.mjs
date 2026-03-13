import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cv7BTiBc.mjs';
import 'kleur/colors';
import { $ as $$Neovim } from '../chunks/Neovim_DYHySjBt.mjs';
import { b as basics } from '../chunks/cv_CELfiC6V.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { name } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Neovim, { "title": `${name} - NEOVIM`, "data-astro-cid-3o77miet": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-screen" data-astro-cid-3o77miet> <h1 class="text-4xl font-bold mb-8 text-blue nvim-line" data-astro-cid-3o77miet>Welcome to my portfolio</h1> <div class="text-center w-1/3" data-astro-cid-3o77miet> <div class="mb-4 flex place-content-center" data-astro-cid-3o77miet> <p class="nvim-line max-w-max" data-astro-cid-3o77miet>Keyboard friendly</p> </div> <div class="mb-2 flex place-content-center" data-astro-cid-3o77miet> <p class="nvim-line max-w-max" data-astro-cid-3o77miet>Neovim mode</p> </div> <div class="py-8 text-green text-left hero-content flex flex-col" data-astro-cid-3o77miet> <p class="nvim-line" data-astro-cid-3o77miet> <span data-astro-cid-3o77miet>type  :about<span class="text-blue" data-astro-cid-3o77miet>&lt;Enter&gt;</span></span> <span data-astro-cid-3o77miet><span data-astro-cid-3o77miet>to view about information</span></span> </p> <p class="nvim-line" data-astro-cid-3o77miet> <span data-astro-cid-3o77miet>type  :proj<span class="text-blue" data-astro-cid-3o77miet>&lt;Enter&gt;</span></span> <span data-astro-cid-3o77miet>to view personal projects</span> </p> <p class="nvim-line" data-astro-cid-3o77miet><span data-astro-cid-3o77miet>type  :hi<span class="text-blue" data-astro-cid-3o77miet>&lt;Enter&gt;</span></span> <span data-astro-cid-3o77miet>to view contact details</span> </p> <p class="nvim-line" data-astro-cid-3o77miet> <span data-astro-cid-3o77miet>type  /<span class="text-blue" data-astro-cid-3o77miet>&lt;Search term&gt;</span></span> <span data-astro-cid-3o77miet>to search posts</span> </p> <p class="nvim-line" data-astro-cid-3o77miet> <span data-astro-cid-3o77miet>type  :h<span class="text-blue" data-astro-cid-3o77miet>&lt;Enter&gt;</span></span> <span data-astro-cid-3o77miet>to view the <a href="neovim/help" class="underline text-blue hover:text-blue-800" data-astro-cid-3o77miet>help</a> page</span> </p> <p class="nvim-line" data-astro-cid-3o77miet> <span data-astro-cid-3o77miet>type  :b<span class="text-blue" data-astro-cid-3o77miet>&lt;Enter&gt;</span></span> <span data-astro-cid-3o77miet>to toggle the <span class="text-blue" data-astro-cid-3o77miet>key-bindings</span> pop-up</span> </p> <p class="nvim-line" data-astro-cid-3o77miet> <span data-astro-cid-3o77miet>type  :q<span class="text-blue" data-astro-cid-3o77miet>&lt;Enter&gt;</span></span> <span data-astro-cid-3o77miet>to exit</span> </p> </div> </div> </div> ` })} `;
}, "F:/Portfolio/src/pages/neovim/index.astro", void 0);

const $$file = "F:/Portfolio/src/pages/neovim/index.astro";
const $$url = "/neovim";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
