export const menu = () => {
  const content = document.querySelector("#content");

  const jargon = document.createElement("p");
  jargon.textContent = "TONIGHT'S FIRE";
  jargon.id = "jargon";
  content.appendChild(jargon);

  const title = document.createElement("h2");
  title.textContent = "Menu";
  content.appendChild(title);

  const listMenu = [
    {
      title: "TO START",
      items: [
        {
          name: "Charred corn, whipped tofu",
          price: "Rp 38k",
        },
        {
          name: "Smokked eggplant, sambal matah",
          price: "Rp 42k",
        },
        {
          name: "Grilled prawns, kaffir lime butter",
          price: "Rp 65k",
        },
      ],
    },
    {
      title: "FROM THE COALS",
      items: [
        {
          name: "Dry-aged beef rib, 28 days",
          price: "Rp 210k",
        },
        {
          name: "Whole grilled river fish, turmeric",
          price: "Rp 95k",
        },
        {
          name: "Charcoal chicken, lengkuas glaze",
          price: "Rp 78k",
        },
      ],
    },
    {
      title: "TO FINISH",
      items: [
        {
          name: "Burnt banana, palm sugar caramel",
          price: "Rp 32k",
        },
        {
          name: "Smoked coconut sorbet",
          price: "Rp 28k",
        },
        {
          name: "Palm sugar tart, burnt cream",
          price: "Rp 35k",
        },
      ],
    },
  ];

  // make 3 article, each have 3 section, each section have 2p tag for menu name and price
  listMenu.forEach((menu) => {
    const article = document.createElement("article");

    const menuTitle = document.createElement("p");
    menuTitle.textContent = menu.title;
    menuTitle.id = "menuTitle";
    article.appendChild(menuTitle);

    menu.items.forEach((item) => {
      const section = document.createElement("section");

      const menuItems = document.createElement("p");
      menuItems.textContent = item.name;
      section.appendChild(menuItems);

      const menuPrice = document.createElement("p");
      menuPrice.textContent = item.price;
      menuPrice.id = "price";
      section.appendChild(menuPrice);

      article.appendChild(section);

      const hr = document.createElement("hr");
      article.appendChild(hr);
    });

    content.appendChild(article);
  });
};
