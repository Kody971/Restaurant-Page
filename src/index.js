import "./styles.css";
import { menu } from "./menu.js";

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", menu, { once: true });
console.log("hello");
