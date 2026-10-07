(() => {
  "use strict";
  const data = window.homepageContent;
  if (!data) return;
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  const safeLink = (label, value) => {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, document.baseURI);
      if (!["https:", "http:", "mailto:"].includes(url.protocol)) return null;
      const link = el("a", "", label);
      link.href = url.href;
      return link;
    } catch { return null; }
  };
  document.getElementById("name").textContent = data.name;
  document.getElementById("chinese-name").textContent = data.chineseName || "";
  document.getElementById("role").textContent = data.role || "";
  document.getElementById("footer-name").textContent = data.name;
  document.title = `${data.name} | Publications & Preprints`;
  document.getElementById("updates").hidden = data.showUpdates !== true;
  document.getElementById("updates-nav").hidden = data.showUpdates !== true;
  data.introduction.forEach(content => {
    const paragraph = el("p", "");
    const segments = Array.isArray(content) ? content : [{ text: content }];
    segments.forEach(segment => paragraph.append(safeLink(segment.text, segment.url) || document.createTextNode(segment.text)));
    document.getElementById("introduction").append(paragraph);
  });
  if (data.photo) {
    const image = el("img", "portrait-image");
    image.src = data.photo;
    image.alt = data.photoAlt || `Portrait of ${data.name}`;
    document.getElementById("portrait").replaceWith(image);
  }
  const profileLinks = document.getElementById("profile-links");
  data.links.filter(item => item.hidden !== true).forEach((item, index) => {
    if (index) profileLinks.append(el("span", "separator", "/"));
    profileLinks.append(safeLink(item.label, item.url) || el("span", "pending-link", item.label));
  });
  const paperCard = paper => {
    const article = el("article", "research-item");
    const image = el("img", "research-image");
    image.src = paper.image;
    image.alt = paper.imageAlt || paper.title;
    image.loading = "lazy";
    image.width = 520;
    image.height = 325;
    const copy = el("div", "research-copy");
    const title = el("h3", "");
    title.append(safeLink(paper.title, paper.url) || document.createTextNode(paper.title));
    const authors = el("p", "authors");
    paper.authors.split(data.name).forEach((part, index) => {
      if (index) authors.append(el("strong", "", data.name));
      authors.append(document.createTextNode(part));
    });
    copy.append(title, authors, el("p", "venue", paper.venue), el("p", "project-description", paper.description));
    const projectLinks = el("div", "project-links");
    (paper.links || []).forEach(item => {
      const link = safeLink(item.label, item.url);
      if (link) projectLinks.append(link);
    });
    if (projectLinks.childElementCount) copy.append(projectLinks);
    if (paper.placeholder) copy.append(el("div", "placeholder-note", "Placeholder · 待替换为真实论文"));
    article.append(image, copy);
    return article;
  };
  const renderPapers = (papers, sectionId) => {
    document.getElementById(sectionId).hidden = papers.length === 0;
    document.getElementById(`${sectionId}-nav`).hidden = papers.length === 0;
    document.getElementById(`${sectionId}-contribution-note`).hidden = !papers.some(paper => paper.equalContribution);
    const list = document.getElementById(`${sectionId}-list`);
    papers.forEach(paper => list.append(paperCard(paper)));
  };
  renderPapers(data.publications || [], "publications");
  renderPapers(data.preprints || [], "preprints");
  data.updates.forEach(update => {
    const item = el("li", "update");
    item.append(el("span", "update-date", update.date));
    const copy = el("span", "");
    copy.append(safeLink(update.text, update.url) || document.createTextNode(update.text));
    item.append(copy);
    document.getElementById("updates-list").append(item);
  });
  const navLinks = Array.from(document.querySelectorAll("nav a")).filter(link => !link.hidden);
  const setActive = id => navLinks.forEach(link => {
    if (link.hash === `#${id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  navLinks.forEach(link => link.addEventListener("click", () => setActive(link.hash.slice(1))));
  const syncNavigation = () => {
    const hash = window.location.hash;
    const current = navLinks.find(link => link.hash === hash);
    setActive(current ? current.hash.slice(1) : "home");
  };
  window.addEventListener("hashchange", syncNavigation);
  syncNavigation();
})();
