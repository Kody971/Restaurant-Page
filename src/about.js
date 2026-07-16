export const about = () => {
  const explain = [
    "EMBER opened in 2024 with one rule: if it can't be cooked over coal, it doesn't go on the menu. No induction, no ovens hiding in the back.",
    "Fire doesn't forgive an over-complicated dish, so ours stay simple: three or four ingredients, chosen because they were good that morning.",
    "Head chef Rangga Prasetyo trained in Jakarta's fine-dining scene before moving back to Yogyakarta.",
  ];

  const table = [
    {
      title: "Founded",
      value: "2024",
    },
    {
      title: "Seats",
      value: "18",
    },
    {
      title: "Fuel",
      value: "Mangrove Charcoal",
    },
    {
      title: "Head chef",
      value: "Rangga Prasetyo",
    },
    {
      title: "Sourcing radius",
      value: "40km",
    },
  ];

  const content = document.querySelector("#content");
  content.replaceChildren();

  const title = document.createElement("p");
  title.id = "title";
  title.textContent = "THE KITCHEN";

  const detail = document.createElement("h1");
  detail.textContent = "Cooking with fire is cooking with less.";

  const article = document.createElement("article");
  article.classList.add("containerAbout");
  //   create explain text
  const containerExplain = document.createElement("section");
  containerExplain.classList.add("verticalLayout", "item");
  explain.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    containerExplain.appendChild(p);
  });

  //   create table text
  const containerTable = document.createElement("section");
  containerTable.classList.add("table");
  const line = document.createElement("hr");
  containerTable.appendChild(line);
  table.forEach((item) => {
    const section = document.createElement("section");
    section.className = "horizontalLayout";

    const title = document.createElement("p");
    title.textContent = item.title;

    const value = document.createElement("p");
    value.textContent = item.value;

    section.append(title, value);
    const line = document.createElement("hr");

    containerTable.append(section, line);
  });

  article.append(containerExplain, containerTable);
  content.append(title, detail, article);
};
