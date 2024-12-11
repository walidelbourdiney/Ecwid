"use strict";

// Nav
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");
const getStartedButtonNav = document.querySelector("nav button");

// First Section
const firstSection = document.querySelector(".first");
const firstSectionTitle = document.querySelector(".first h1");
const firstSectionButton = document.querySelector(".first button");
const noCreditInfo = document.querySelector(".noCredit span");

// Second Section
const secondSection = document.querySelector(".second");
const secondInfoGrid = document.querySelector(".secondInfo");
const secondInfoPairs = document.querySelectorAll(".secondInfo .pair");

// Third Section
const thirdSections = document.querySelectorAll(".third");
const thirdLeftContent = document.querySelectorAll(".third-left");
const thirdRightImages = document.querySelectorAll(".third-right img");
const thirdSocials = document.querySelectorAll(".third-socials");

// Fourth Section
const fourthSections = document.querySelectorAll(".fourth");
const fourthBottom = document.querySelectorAll(".fourth-bottom");

// Fifth Section
const fifthSection = document.querySelector(".fiveth");
const fifthLeftImage = document.querySelector(".fiveth-left img");
const fifthSocials = document.querySelector(".fiveth-socials");

// Global Section
const globalSection = document.querySelector(".global");
const globalLeft = document.querySelector(".global-left");
const globalRightNumbers = document.querySelectorAll(".global-right .numbers");
const globalArrow = document.querySelector("#arrow");

// Options Section
const optionsSection = document.querySelector(".options");
const optionCards = document.querySelectorAll(".option");

// Footer
const footer = document.querySelector("footer");
const searchBar = document.querySelector(".search-bar input");
const socialIcons = document.querySelectorAll(".social-icons span a");

// General Buttons
const buttons = document.querySelectorAll("button");
const learnMoreButtons = document.querySelectorAll(".learn-more");

// Utility for all links
const allLinks = document.querySelectorAll("a");

firstSectionTitle.addEventListener("click", () => {
  firstSectionTitle.style.color = "blue";
});

const footerLinks = document.querySelectorAll("footer a");
footerLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("animation");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("animation");
  });
});
allLinks.forEach((link) => {
  link.setAttribute(
    "href",
    "https://www.linkedin.com/in/walid-ezzat-a35161126"
  );
  link.setAttribute("target", "_blank");
});
