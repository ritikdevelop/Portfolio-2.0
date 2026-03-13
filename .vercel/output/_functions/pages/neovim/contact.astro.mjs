import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Cv7BTiBc.mjs';
import 'kleur/colors';
import { $ as $$Neovim } from '../../chunks/Neovim_DYHySjBt.mjs';
import { b as basics } from '../../chunks/cv_CELfiC6V.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const { email: rawEmail, profiles } = basics;
  const emailBody = rawEmail.split("@")[0];
  const emailDomain = rawEmail.split("@")[1].split(".")[0];
  const emailExtension = rawEmail.split("@")[1].split(".")[1];
  const parsedProfiles = profiles.map(({ url }) => {
    const rawUrl = url;
    if (url.includes("https://")) {
      url = url.split("https://")[1];
    }
    if (url.includes("www.")) {
      url = url.split("www.")[1];
    }
    const domain = url.split(".")[0];
    const extension = url.split(".")[1].split("/")[0];
    const params = url.split(".")[1].split("/").slice(1);
    return { url: rawUrl, domain, extension, params };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Neovim, { "title": "Contact", "data-astro-cid-4qkdbejm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-[100vh]" data-astro-cid-4qkdbejm> <h1 class="text-4xl font-bold mb-4 text-blue nvim-line" data-astro-cid-4qkdbejm>Get in touch!</h1> <div class="text-center" data-astro-cid-4qkdbejm> <p class="mb-3 nvim-line" data-astro-cid-4qkdbejm>I would like to meet you too, please use the contact information below:</p> <!-- Email render --> <div class="flex place-content-center" data-astro-cid-4qkdbejm> <a${addAttribute(`mailto:${rawEmail}`, "href")}${addAttribute(`mailto:${rawEmail}`, "data-href")} class="max-w-max nvim-line" data-astro-cid-4qkdbejm> ${emailBody}<span class="symbol" data-astro-cid-4qkdbejm>[at]</span>${emailDomain}<span class="symbol" data-astro-cid-4qkdbejm>[dot]</span>${emailExtension} </a> </div> <!-- Contacts render --> ${parsedProfiles && parsedProfiles.map(({ url, domain, extension, params }) => renderTemplate`<div class="flex place-content-center" data-astro-cid-4qkdbejm> <a${addAttribute(url, "href")}${addAttribute(url, "data-href")} class="max-w-max nvim-line" data-astro-cid-4qkdbejm> ${domain}<span class="symbol" data-astro-cid-4qkdbejm>[dot]</span>${extension}<span class="symbol" data-astro-cid-4qkdbejm>[slash]</span>${params.map((param, index) => renderTemplate`<span data-astro-cid-4qkdbejm>${param}${index < params.length - 1 ? renderTemplate`<span class="symbol" data-astro-cid-4qkdbejm>[slash]</span>` : ""}</span>`)} </a> </div>`)} </div> </div> ` })} `;
}, "F:/Portfolio/src/pages/neovim/contact.astro", void 0);

const $$file = "F:/Portfolio/src/pages/neovim/contact.astro";
const $$url = "/neovim/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
