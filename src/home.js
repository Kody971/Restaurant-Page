export const home = () => {
  const spec = [
    {
      type: "Wood",
      detail: "Only hardwood coals",
      explain:
        "Mangrove and tamarind charcoal, burned to embers before touching the grill.",
    },
    {
      type: "Sourcing",
      detail: "Within 40km",
      explain:
        "Produce and livestock sourced from farms across the Kulon Progo region.",
    },
    {
      type: "Table",
      detail: "18 seats only",
      explain:
        "One seating, one fire. We don't take more covers than the grill can hold.",
    },
  ];

  const content = document.querySelector("#content");
  content.replaceChildren();

  const hero = document.createElement("article");
  hero.className = "hero";

  const title = document.createElement("p");
  title.id = "title";
  title.textContent = "Open-flame kitchen — Yogyakarta";

  const heroText = document.createElement("h1");
  heroText.textContent = "Everything we cook meets ";
  const span = document.createElement("span");
  span.textContent = "fire";
  heroText.append(span, ".");

  const context = document.createElement("p");
  context.textContent =
    "No gas lines, no shortcuts. Every dish at EMBER passes through live charcoal — from the vegetables to the dry-aged beef.";

  // create detail open and address
  const container = document.createElement("div");

  container.id = "container";

  const containerTime = document.createElement("section");
  containerTime.className = "containerTime";
  const time = document.createElement("p");
  time.textContent = "15.00-22.00";
  const timeDetail = document.createElement("p");
  timeDetail.textContent = "Open daily";
  containerTime.append(time, timeDetail);

  const containerAddress = document.createElement("section");
  containerAddress.className = "containerAddress";
  const address = document.createElement("p");
  address.textContent = "Jl. Sudirman No. 12";
  const addressDetail = document.createElement("p");
  addressDetail.textContent = "Kulon Progo, Yogyakarta";
  containerAddress.append(address, addressDetail);

  container.append(containerTime, containerAddress);
  hero.append(title, heroText, context, container);
  //
  const line = document.createElement("hr");

  // create article
  const article = document.createElement("article");
  article.className = "horizontalLayout";

  spec.forEach((item) => {
    const section = document.createElement("section");

    const titleArticle = document.createElement("p");
    titleArticle.id = "title";
    titleArticle.textContent = item.type;

    const detailArticle = document.createElement("h3");
    detailArticle.textContent = item.detail;

    const explainArticle = document.createElement("p");
    explainArticle.textContent = item.explain;

    section.append(titleArticle, detailArticle, explainArticle);
    article.appendChild(section);
  });

  content.append(hero, line, article);
};
