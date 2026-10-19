export default function sitemap() {
  return ["", "/demo", "/case-studies", "/programmes", "/audit", "/students", "/parents", "/partners", "/about", "/contact", "/support", "/privacy-policy", "/terms-of-service"].map(path=>({url:`https://cnm-learning-website.vercel.app${path}`,changeFrequency:"monthly",priority:path===""?1:.7}));
}
