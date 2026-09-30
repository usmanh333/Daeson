// Live product sites, every "Aylinor", "Home 1.0" and "LuxeProperty AI" button points here.
export const PRODUCT_URLS = {
  aylinor: "https://aylinor.daesontechnologies.online/",
  home: "https://home1-0.daesontechnologies.online/",
  luxe: "https://luxepropertyai.daesontechnologies.online/",
} as const;

// Product sites open in a new tab so visitors keep the Daeson site open.
export const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

export const linkTargetProps = (href: string) => (href.startsWith("http") ? newTab : {});
