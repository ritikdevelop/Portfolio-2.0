import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, n as renderSlot, h as addAttribute, o as renderHead, u as unescapeHTML, p as Fragment } from '../chunks/astro/server_Cv7BTiBc.mjs';
import 'kleur/colors';
/* empty css                                 */
/* empty css                                 */
import { C as CV, w as work, $ as $$Icon, b as basics, p as projects, s as skills } from '../chunks/cv_CELfiC6V.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "F:/Portfolio/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/Portfolio/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$BackgroundArt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pointer-events-none fixed bottom-0 left-0 right-0 top-0 print:hidden" style="mask-image: radial-gradient(circle, transparent, black); -webkit-mask-image: radial-gradient(circle, transparent, black);"> <canvas id="artPlumCanvas" width="400" height="400"></canvas> </div> ${renderScript($$result, "F:/Portfolio/src/components/BackgroundArt.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/Portfolio/src/components/BackgroundArt.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _b;
const $$Astro$6 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    image = CV.basics.image,
    canonicalURL = CV.basics.url,
    keywords = [
      "Anmol Singh",
      "AJ Dev",
      "Anmol Pro",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Web Developer",
      "Software Engineer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Go Developer",
      "Panipat",
      "India",
      "Portfolio",
      "E-commerce Projects",
      "Music App",
      "Social Media App"
    ]
  } = Astro2.props;
  const { url, theme, name, location } = CV.basics;
  const { city, region } = location;
  const detailedDescription = `Anmol Singh (AJ Dev) - Full Stack Developer. Explore my portfolio, projects, and contact info. Frontend, backend, and more.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "alternateName": "AJ Dev",
    "jobTitle": CV.basics.label,
    "url": url,
    "email": CV.basics.email,
    "alumniOf": CV.education?.[0]?.institution,
    "knowsLanguage": CV.languages?.map((lang) => lang.language),
    "sameAs": CV.basics.profiles.map((profile) => profile.url),
    "image": image,
    "description": detailedDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": region,
      "addressCountry": "IN"
    },
    "knowsAbout": CV.skills.map((skill) => skill.name),
    "worksFor": CV.work?.map((work) => ({
      "@type": "Organization",
      "name": work.name,
      "position": work.position
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": `${url}#projects`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": `${url}#about`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${url}#contact`
      }
    ]
  };
  return renderTemplate(_b || (_b = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><meta name="keywords"', '><meta name="geo.region" content="IN-HR"><meta name="geo.placename"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Favicon --><link rel="icon" href="/favicon.ico" type="image/x-icon"><link rel="apple-touch-icon" href="/apple-touch-icon.webp"><!-- Preload critical assets --><link rel="preload" as="image"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', '><meta property="og:locale" content="en_IN"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:domain"', '><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:creator"', '><!-- Additional meta tags --><meta name="theme-color"', '><meta name="referrer" content="no-referrer"><meta name="generator"', '><!-- Structured Data --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>", "", '<meta name="google-site-verification" content="oi4G-5FCwNn5m9MvSyjyBxVatgwi8KT_KtVuC9Pckmg">', "</head> <body", ' class="relative bg-skin-fill font-sans" data-astro-cid-sckkx6r4> <div class="absolute top-0 -z-10 h-full w-full print:hidden" data-astro-cid-sckkx6r4> <div class="absolute bottom-auto left-[20%] right-auto top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full bg-skin-hue/10 blur-[80px] invert-0 dark:bg-white/5" data-astro-cid-sckkx6r4></div> </div> ', " ", " ", " </body></html>"])), title, addAttribute(title, "content"), addAttribute(detailedDescription, "content"), addAttribute(name, "content"), addAttribute(keywords.join(", "), "content"), addAttribute(city, "content"), addAttribute(canonicalURL, "href"), addAttribute(image, "href"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(detailedDescription, "content"), addAttribute(image, "content"), addAttribute(`${name}'s Portfolio`, "content"), addAttribute(url.split("//")[1] ?? "", "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(detailedDescription, "content"), addAttribute(image, "content"), addAttribute(CV.basics.profiles.find((p) => p.network === "X / Twitter")?.username, "content"), addAttribute("#ffffff", "content"), addAttribute(Astro2.generator, "content"), unescapeHTML(JSON.stringify(structuredData)), unescapeHTML(JSON.stringify(breadcrumbSchema)), CV?.analyticsCode, renderComponent($$result, "Analytics", $$Index$1, { "data-astro-cid-sckkx6r4": true }), renderHead(), addAttribute(theme, "data-theme"), renderSlot($$result, $$slots["default"]), renderScript($$result, "F:/Portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "BackgroundArt", $$BackgroundArt, { "data-astro-cid-sckkx6r4": true }));
}, "F:/Portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Section;
  const { className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["flex flex-col gap-4 print:gap-0", className], "class:list")}> ${title && renderTemplate`<h3 data-ccursor="lift" class="relative flex w-max items-center gap-3 pb-4 text-3xl print:gap-1 print:pb-0 print:text-xl print:font-extrabold sm:hover:text-skin-hue">${title}</h3>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "F:/Portfolio/src/components/Section.astro", void 0);

const $$Astro$4 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  const { summary } = CV.basics;
  const words = summary.split(" ");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="font-mono opacity-75 print:font-sans text-skin-hue font-semibold print:text-skin-base print:font-normal w-full select-none"> ${words.map((word) => renderTemplate`<span class="w-min sm:hover:bg-skin-button-muted transition-all duration-200 sm:hover:cursor-none">${word}</span> <span></span>`)} </p> ` })}`;
}, "F:/Portfolio/src/components/sections/About.astro", void 0);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const millisecondsInYear = 1e3 * 60 * 60 * 24 * 365;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Experience", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-col" data-astro-cid-ghubstuj> ${work.map(({ name, startDate, endDate, position, summary, responsibilities, url, skills, location, location_type }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Present";
    const timeLapse = (endDate != null ? new Date(endDate).getTime() : (/* @__PURE__ */ new Date()).getTime()) - new Date(startDate).getTime();
    const workedYears = Math.floor(+timeLapse / millisecondsInYear);
    const workedMonths = Math.floor(+timeLapse % millisecondsInYear / (millisecondsInYear / 12));
    const workedTime = `${workedYears}y : ${workedMonths}m`;
    const workedDatetime = `P${workedYears}Y${workedMonths}M`;
    return renderTemplate`<li class="relative print:py-2" data-astro-cid-ghubstuj> <div data-expanded="false" class="group relative grid pb-1 print:pb-0 transition-all print:grid-cols-1 print:gap-1 sm:grid-cols-12 sm:gap-8 md:gap-6 lg:hover:!opacity-100 expand-container" data-astro-cid-ghubstuj> <div class="relative mt-1 text-xs font-semibold sm:col-span-2" data-astro-cid-ghubstuj> <time${addAttribute(startDate, "datetime")}${addAttribute(startDate, "data-title")} data-astro-cid-ghubstuj>${startYear}</time> - <time${addAttribute(endDate, "datetime")}${addAttribute(endDate, "data-title")} data-astro-cid-ghubstuj>${endYear}</time> <time${addAttribute(workedDatetime, "datetime")}${addAttribute(workedDatetime, "data-title")} class="flex mt-1 text-skin-hue print:hidden" data-astro-cid-ghubstuj>${workedTime}</time> </div> <div class="relative flex flex-col pb-6 print:pb-0 before:-ml-6 sm:col-span-10 before:w-px print:before:hidden before:absolute before:bg-skin-muted before:h-full before:mt-2" data-astro-cid-ghubstuj> <div class="absolute w-2 h-2 bg-skin-muted rounded-full mt-2 -translate-x-[1.71rem] ring print:hidden ring-skin-fill" data-astro-cid-ghubstuj></div> <h3 data-astro-cid-ghubstuj> <span class="inline-flex items-center text-lg print:text-base leading-tight group/link focus-visible:text-amber-500" aria-label="{position} - {company}" data-astro-cid-ghubstuj> <span data-astro-cid-ghubstuj>${position} <span data-astro-cid-ghubstuj>@</span> ${url ? renderTemplate`<a data-ccursor class="text-skin-hue inline-block w-max"${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ghubstuj>${name}</a>` : renderTemplate`<span data-astro-cid-ghubstuj>${name}</span>`} ${url && renderTemplate`<span class="inline-block text-skin-hue print:[&>svg]:hidden" data-astro-cid-ghubstuj> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:arrow-up-line", "class": "inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none rotate-45", "aria-hidden": "true", "data-astro-cid-ghubstuj": true })} </span>`} </span> </span> </h3> ${(location || location_type) && renderTemplate`<div class="text-xs text-skin-muted" data-astro-cid-ghubstuj> ${location} ${location && location_type && "-"} ${location_type} </div>`} <div class="mt-4  print:gap-0 flex flex-col gap-4 print:text-xs text-sm" data-astro-cid-ghubstuj> ${summary && renderTemplate`<div class="flex flex-col gap-1" data-astro-cid-ghubstuj> <h4 class="print:font-bold" data-ccursor="lift" data-astro-cid-ghubstuj>Summary:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-disc flex-col gap-2" data-astro-cid-ghubstuj> ${Array.isArray(summary) ? summary.map((item) => ({ item })) : renderTemplate`<li data-ccursor data-astro-cid-ghubstuj>${summary}</li>`} </ul> </div>`} ${responsibilities && renderTemplate`<div class="after:from-skin-hue dark:after:to-skin-hue/0 flex relative flex-col print:!h-auto gap-4 print:gap-2 after:bg-gradient-to-t after:absolute after:bottom-0 after:w-full print:after:hidden after:h-12 after:content-[''] h-16 group-data-[expanded=true]:after:hidden group-data-[expanded=true]:h-auto overflow-hidden duration-200 ease-out" data-astro-cid-ghubstuj> ${responsibilities && renderTemplate`<div class="flex flex-col gap-1" data-astro-cid-ghubstuj> <h4 class="print:font-bold print:pt-1" data-ccursor="lift" data-astro-cid-ghubstuj>Responsibilities:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-disc flex-col gap-2" data-astro-cid-ghubstuj> ${responsibilities.map((responsibility) => renderTemplate`<li data-ccursor data-astro-cid-ghubstuj>${responsibility}</li>`)} </ul> </div>`} </div>

                <button data-ccursor="lift" class="print:hidden group/more w-fit cursor-pointer items-center justify-center gap-1.5 text-xs underline text-skin-muted transition-all hover:text-skin-inverted flex expand-button" data-astro-cid-ghubstuj> <span class="expand-text" data-astro-cid-ghubstuj>Show more</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:arrow-up-s-line", "class": "w-4 h-4 group-hover/more:translate-y-0.5 duration-200 ease-out group-data-[expanded=true]:rotate-180", "width": 24, "height": 24, "data-astro-cid-ghubstuj": true })} </button>


                <ul class="flex print:hidden flex-wrap gap-2" aria-label="Technologies used" data-astro-cid-ghubstuj> ${skills && Object.entries(skills).map(
      ([label, icon]) => renderTemplate`<li data-ccursor="lift" class="bg-skin-button-accent/20 border-skin-hue/20 text-skin-hue print:p-0 print:bg-transparent print:text-zinc-800 flex gap-1 items-center border-solid print:border-none border rounded-md px-2 py-0.5 text-xs backdrop-blur-sm select-none" data-astro-cid-ghubstuj> ${icon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "width": 16, "height": 16, "data-astro-cid-ghubstuj": true })}`} <span data-astro-cid-ghubstuj>${label}</span> </li>`
    )} </ul>`} </div> </div> </div> </li>`;
  })} </ul> ` })} ${renderScript($$result, "F:/Portfolio/src/components/sections/Experience.astro?astro&type=script&index=0&lang.ts")} `;
}, "F:/Portfolio/src/components/sections/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, animated_secondary_initial_label, animated_main_label, image, location, email } = basics;
  const { city, region, address } = location;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-w-[275px]" data-astro-cid-anhloy43> <section id="about" aria-label="About me" class="group flex gap-2 flex-col rounded-3xl bg-skin-muted sm:bg-skin-button-muted p-4 transition-all  sm:hover:bg-skin-muted print:gap-0 print:p-2" data-astro-cid-anhloy43> <div class="flex items-center text-center gap-4 print:gap-1" data-astro-cid-anhloy43> <figure class="print:hidden" data-astro-cid-anhloy43> <img data-ccursor="lift" class="scale-110 sm:grayscale sm:scale-100 transition-all sm:group-hover:scale-110 sm:group-hover:grayscale-0"${addAttribute(600, "height")}${addAttribute(600, "width")}${addAttribute(image, "src")}${addAttribute(`Profile of ${name}`, "alt")} loading="eager" data-astro-cid-anhloy43> </figure> <div class="flex flex-col items-center" data-astro-cid-anhloy43> <h1 class=" font-semibold " data-astro-cid-anhloy43>${name}</h1> <div class="overflow-hidden mt-1" data-astro-cid-anhloy43> <div class="font-roboto-condensed font-bold lowercase text-xl lg:text-[1rem] lg:leading-[1rem]" data-astro-cid-anhloy43> <div data-ccursor="noPadding" class=" p-1 group/subtitle relative flex gap-1  transition-all" data-astro-cid-anhloy43> <p class="  font-roboto-condensed font-medium lowercase text-xl lg:text-[1rem] lg:leading-[1rem]" data-astro-cid-anhloy43> ${animated_secondary_initial_label} </p> <!-- <div class="absolute inset-x-0 top-0 w-max translate-y-16 transition-all duration-450 ease-in-out group-hover/subtitle:translate-y-0">
                  <p class="font-roboto-condensed font-bold lowercase text-xl lg:text-[1rem] lg:leading-[1rem] bg-clip-text ">
                    {animated_secondary_final_label}
                  </p>
                </div> --> <p data-astro-cid-anhloy43>${animated_main_label}</p> </div> </div> </div> </div> </div> <div data-ccursor="noPadding" class="flex w-max gap-2 py-1 px-2 text-sm text-skin-muted" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", $$Icon, { "class": "print:hidden sm:group-hover:text-skin-hue", "name": "mdi:world", "width": 20, "height": 20, "data-astro-cid-anhloy43": true })} ${address}, ${city}, ${region} </div> <div class="hidden print:block" data-astro-cid-anhloy43><b data-astro-cid-anhloy43>Contact: </b>${email}</div> </section> </div> <div class="flex gap-6 print:hidden" data-astro-cid-anhloy43> <div aria-label="Social media" class="flex group/social flex-wrap justify-evenly sm:h-40 sm:w-40 w-full h-min sm:flex-col rounded-3xl p-4 transition-all rotate-0 bg-skin-muted sm:bg-skin-button-muted   sm:hover:bg-skin-muted" data-astro-cid-anhloy43> ${basics.profiles.map(({ network, url, icon, color }) => {
    return renderTemplate`<a data-ccursor class="flex flex-col sm:basis-1/2 items-center justify-center rounded-md hover:cursor-none"${addAttribute(url, "href")} target="_blank" rel="noreferrer noopener"${addAttribute(`${network} (opens in a new tab)`, "aria-label")}${addAttribute(`${network} click`, "data-umami-event")}${addAttribute(network, "id")} data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "width": 28, "height": 28, "class": "sm:grayscale sm:group-hover/social:grayscale-0 transition-all", "style": `color: ${color};`, "aria-label": network, "data-astro-cid-anhloy43": true })} </a>`;
  })} </div> <div class="footer-button flex h-40 w-40 flex-col place-items-center rounded-3xl sm:bg-skin-muted p-4 transition-all rotate-0 bg-skin-muted  sm:hover:bg-skin-button-accent text-skin-hue sm:hover:text-skin-inverted max-sm:hidden print:hidden" data-ccursor="lift" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:command-fill", "class": "flex-1 w-1/2", "data-astro-cid-anhloy43": true })} <p class="font-mono font-bold text-center" data-astro-cid-anhloy43>Open options</p> </div> </div> ` })}  ${renderScript($$result, "F:/Portfolio/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/Portfolio/src/components/sections/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Projects", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-3 md:grid-cols-2 print:flex print:flex-col" data-astro-cid-44zkpkd5> ${projects && projects.map(
    ({ url, description, highlights, name, isActive, github, stack }) => {
      return renderTemplate`<div role="contentinfo" class="grid-span-1 group relative flex min-h-80 flex-col overflow-hidden rounded-md bg-skin-button-muted/50 p-5 shadow-sm ring-1 ring-skin-muted sm:hover:ring-2 sm:hover:ring-skin-hue sm:hover:bg-skin-muted transition-all duration-250 ease-in-out" data-astro-cid-44zkpkd5> <div class="relative z-10 flex items-center justify-between space-x-[10px]" data-astro-cid-44zkpkd5> <div class="flex items-center gap-2" data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Icon", $$Icon, { "data-ccursor": "lift", "name": "mdi:folder-outline", "class": "size-4", "data-astro-cid-44zkpkd5": true })} <div class="flex items-center gap-[6px]" data-astro-cid-44zkpkd5> ${isActive ? renderTemplate`<a class="group flex items-center gap-[6px] text-lg decoration-dotted underline-offset-[5px] hover:text-skin-hue hover:underline transition-all sm:hover:cursor-none"${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-44zkpkd5> ${name} <span class="text-skin-hue transition ease-linear group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:arrow-up-line", "class": "rotate-45", "data-astro-cid-44zkpkd5": true })} </span> </a>` : renderTemplate`<span class="text-lg" data-astro-cid-44zkpkd5>${name}</span>`} </div> </div> ${github && renderTemplate`<a data-ccursor="lift"${addAttribute(github, "href")}${addAttribute(`View ${name} in GitHub`, "title")}${addAttribute(`View ${name} in GitHub`, "aria-label")} target="_blank" rel="noopener" class="opacity-75 hover:opacity-100 cursor-none" data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:github", "width": 24, "height": 24, "data-astro-cid-44zkpkd5": true })} </a>`} </div> <p data-ccursor="noPadding" class="relative z-10 py-3 text-sm text-skin-base" data-astro-cid-44zkpkd5> ${description} </p> <ul class="z-10 mt-1 text-sm" data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
        return renderTemplate`<li data-ccursor class="w-max" data-astro-cid-44zkpkd5>${highlight}</li>`;
      })} </ul> <ul class="flex print:hidden flex-wrap gap-2 mt-4" aria-label="Technologies used" data-astro-cid-44zkpkd5> ${stack && Object.entries(stack).map(([label, icon]) => renderTemplate`<li data-ccursor="lift" class="border-skin-hue/60 text-skin-hue print:p-0 print:bg-transparent print:text-zinc-800 flex gap-1 items-center border-solid print:border-none border rounded-md px-2 py-0.5 text-xs backdrop-blur-sm group/stack" data-astro-cid-44zkpkd5> ${icon && renderTemplate`<span class="flex gap-1" data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "width": 16, "height": 16, "data-astro-cid-44zkpkd5": true })} <span class="group-hover/stack:text-skin-hue transition-all duration-200" data-astro-cid-44zkpkd5>${label}</span> </span>`} </li>`)} </ul> </div>`;
    }
  )} </div> ` })} ${renderScript($$result, "F:/Portfolio/src/components/sections/Projects.astro?astro&type=script&index=0&lang.ts")} `;
}, "F:/Portfolio/src/components/sections/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Skills" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="w-100 inline-flex print:mt-4 flex-wrap gap-4 [&>li>svg]:text-skin-hue [&>li]:text-sm"> ${skills.map(({ name, icon, level }) => {
    return renderTemplate`<li class="group relative flex items-center gap-1 rounded-md border border-solid cursor-default border-skin-hue/20 bg-skin-button-accent/20 px-1 py-0.5 text-xs text-skin-hue print:border-none print:bg-transparent print:p-0 print:text-zinc-800 transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-8px] sm:hover:cursor-none"> ${icon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "width": 16, "height": 16, "title": level })}`}${" "} <span>${name}</span>  </li>`;
  })} </ul> ` })}`;
}, "F:/Portfolio/src/components/sections/Skills.astro", void 0);

const $$KeyboardManager = createComponent(($$result, $$props, $$slots) => {
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    GitHub: `<svg width="16" height="16" viewBox="0 0 24 24"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
`,
    LinkedIn: `
<svg fill="currentColor" height="16" width="16" viewBox="0 0 24 24" xml:space="preserve" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="social-linkedin"> <path d="M22.2,0H1.8C0.8,0,0,0.8,0,1.8v20.5c0,1,0.8,1.8,1.8,1.8h20.5c1,0,1.8-0.8,1.8-1.8V1.8C24,0.8,23.2,0,22.2,0z M7.2,20.4 H3.5V9h3.6V20.4z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S6.5,7.4,5.3,7.4z M20.5,20.5h-3.6v-6.3 c0-1.8-0.8-2.4-1.8-2.4c-1.1,0-2.1,0.8-2.1,2.5v6.2H9.3V9h3.5v1.6h0c0.3-0.7,1.6-1.9,3.4-1.9c2,0,4.2,1.2,4.2,4.7V20.5z"></path> </g> </g></svg>
`,
    "X / Twitter": `
<svg fill="currentColor" stroke="currentColor" height="16" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg
> `
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visit ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer id="normal-footer" class="print:hidden flex flex-col gap-2" data-astro-cid-5uazswxx> <div class="text-skin-base" data-astro-cid-5uazswxx>
Press <kbd data-astro-cid-5uazswxx>Ctrl</kbd> + <kbd data-astro-cid-5uazswxx>K</kbd> to open the command palette.
</div> </footer> <div class="footer-button print:hidden" data-astro-cid-5uazswxx> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:command-fill", "width": 20, "height": 20, "class": "text-skin-hue", "data-astro-cid-5uazswxx": true })} </div> <div id="hotkeypad" data-placeholder="Search Command"${addAttribute(JSON.stringify(profilesInfo), "data-info")} data-astro-cid-5uazswxx></div> ${renderScript($$result, "F:/Portfolio/src/components/KeyboardManager.astro?astro&type=script&index=0&lang.ts")} `;
}, "F:/Portfolio/src/components/KeyboardManager.astro", void 0);

const $$ThemeSwitch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="inline-flex items-center print:hidden" data-astro-cid-g6q3pnbr> <div class="group/theme flex cursor-pointer items-center gap-2 rounded-md bg-transparent" data-astro-cid-g6q3pnbr> <button data-ccursor="lift" id="themeSwitch" class="cursor-none" aria-label="Toggle dark mode" data-astro-cid-g6q3pnbr> <i class="flex items-center gap-1 text-sm font-medium leading-6 text-skin-base transition-transform duration-300 ease-in-out group-hover/theme:rotate-45" data-astro-cid-g6q3pnbr> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:moon-fill", "class": "hidden dark:block sm:hover:text-skin-hue", "width": 28, "height": 28, "data-astro-cid-g6q3pnbr": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:sun-fill", "class": "dark:hidden", "width": 28, "height": 28, "data-astro-cid-g6q3pnbr": true })} </i> </button> <select data-ccursor id="themeSelect" class="block w-full rounded-md border-0 bg-transparent py-1.5 pl-3 pr-10 ring-1 ring-inset ring-skin-muted focus:ring-2 focus:ring-skin-hue sm:text-sm sm:leading-6 text-skin-hue hover:cursor-none" data-astro-cid-g6q3pnbr> <option value="red" data-astro-cid-g6q3pnbr>Red</option> <option value="orange" data-astro-cid-g6q3pnbr>Orange</option> <option value="cyber" data-astro-cid-g6q3pnbr>Cyberpunk</option> <option value="green" data-astro-cid-g6q3pnbr>Green</option> <option value="blue" data-astro-cid-g6q3pnbr>Blue</option> <option value="platinum" data-astro-cid-g6q3pnbr>Platinum</option> <option value="sunset" data-astro-cid-g6q3pnbr>Sunset</option> </select> </div> </div>  ${renderScript($$result, "F:/Portfolio/src/components/ThemeSwitch.astro?astro&type=script&index=0&lang.ts")} `;
}, "F:/Portfolio/src/components/ThemeSwitch.astro", void 0);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-ccursor="lift" class="print:hidden hidden md:block w-max"> <a href="/neovim" class="group transition-all duration-300 delay-75 hover:bg-nvim-green/50 cursor-default border-nvim-green/60 flex place-content-center items-center gap-4 border-solid border px-3 py-2 backdrop-blur-sm/60 md:max-w-max hover:cursor-none"> ${renderComponent($$result, "Icon", $$Icon, { "name": "simple-icons:neovim", "width": 28, "height": 28, "class": "transition-all duration-300 group-hover:scale-75 text-nvim-green" })} <span class="font-bold text-lg text-skin-nvim font-mono group-hover:brightness-150 group-hover:text-xl transition-all duration-300 text-nvim-blue">Neovim Mode</span> </a> </div>`;
}, "F:/Portfolio/src/components/neovim/Button.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Anmol Singh | Full Stack Developer | anmol.pro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative grid h-full max-w-7xl gap-12 p-8 max-sm:py-16 md:min-h-screen md:grid-cols-6 md:p-16 xl:gap-24 text-skin-base print:gap-4"> <div class="slide-enter space-y-6 ease-in md:col-span-2 print:grid print:grid-cols-5 print:space-y-0 md:sticky top-0 self-start h-min"> ${renderComponent($$result2, "Hero", $$Hero, { "className": "col-span-2" })} ${renderComponent($$result2, "About", $$About, { "className": "col-span-3" })} ${renderComponent($$result2, "ThemeSwitch", $$ThemeSwitch, {})} ${renderComponent($$result2, "NeovimButton", $$Button, {})} </div> <div class="slide-enter-content space-y-12 md:col-span-4 print:grid print:grid-cols-5 print:grid-flow-row print:gap-2 print:space-y-0"> ${renderComponent($$result2, "Experience", $$Experience, { "className": "print:col-span-3" })} ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Projects", $$Projects, { "className": "print:hidden" })} ${renderComponent($$result3, "Skills", $$Skills, { "className": "print:col-span-full" })} ` })}`} </div> </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, {})} ` })} `;
}, "F:/Portfolio/src/pages/index.astro", void 0);

const $$file = "F:/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
