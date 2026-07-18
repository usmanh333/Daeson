// Pushes every URL in the sitemap to IndexNow (Bing + Yandex) for instant re-crawl.
// Run after a deploy that changes page content: node scripts/submit-indexnow.mjs

const HOST = "daesontechnologies.online";
const KEY = "d238e18087081179bb577e2a0eb9bb54";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urls = [
  "", "about", "contact", "solutions", "industries", "real-estate", "amanah-ai",
  "products", "partnerships", "case-studies", "insights", "insights/real-estate-saas-vs-owned",
  "insights/ai-shariah-compliance", "insights/islamic-finance-technology-gap", "founder-insights",
  "research", "pr", "careers", "demo",
  "industries/real-estate", "industries/islamic-finance", "industries/fintech",
  "industries/enterprise-ai", "industries/workflow-automation", "industries/digital-transformation",
  "case-studies/sheriff-police-system",
].map((path) => `https://${HOST}/${path}`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
});

console.log(res.status, await res.text());
