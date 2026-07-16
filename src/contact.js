export const contact = () => {
  const info = [
    {
      name: "Address",
      value: " Jl. Sudirman No. 12",
    },
    {
      name: "Phone",
      value: "+62 812 3456 7890",
    },
    {
      name: "Email",
      value: "hello@ember.id",
    },
    {
      name: "Hours",
      value: "15.00-22.00 daily",
    },
  ];

  const input = ["NAME", "EMAIL", "MESSAGE"];

  const content = document.querySelector("#content");
  content.replaceChildren();

  const title = document.createElement("p");
  title.textContent = "REACH US";

  const detail = document.createElement("h1");
  detail.textContent = "Contact";

  const article = document.createElement("article");
  article.className = "containerAbout";

  const containerInfo = document.createElement("div");
  info.forEach((item) => {
    const infoSection = document.createElement("section");
    infoSection.className = "horizontalLayout";

    const name = document.createElement("p");
    name.textContent = item.name;

    const value = document.createElement("p");
    value.textContent = item.value;

    infoSection.append(name, value);
    containerInfo.appendChild(infoSection);
  });

  const containerInput = document.createElement("div");
  input.forEach((item) => {
    const inputSection = document.createElement("section");
    const label = document.createElement("label");
    label.textContent = item;
    label.htmlFor = "name";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "name";
    input.value = "Your name";

    inputSection.append(label, input);
    containerInput.appendChild(inputSection);
  });

  article.append(containerInfo, containerInput);
  content.append(title, detail, article);
};
