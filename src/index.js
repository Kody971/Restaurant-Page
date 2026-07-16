import "./styles.css";
import { menu } from "./menu.js";
import { home } from "./home.js";

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", menu);

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", home);

console.log("hello");
