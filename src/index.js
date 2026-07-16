import "./styles.css";
import { menu } from "./menu.js";
import { home } from "./home.js";
import { about } from "./about.js";
import { contact } from "./contact.js";

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", menu);

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", home);

const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", about);

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", contact);

console.log("hello");
