// COUNTER
$(document).ready(function () {
  let $countdownElement = $("#countdown");
  let $anotherCountdownElement = $("#anotherCountdown");

  let count = 0;
  let thisCount = 1;

  const timer = function () {
    if (count < 155555) {
      $countdownElement.text("$" + count);
      count += Math.pow(1, 0.25);
    } else {
      clearInterval(myInterval);
    }
  };

  const myInterval = setInterval(timer, 4);

  const intervalId = setInterval(function () {
    if (thisCount < 1555) {
      $anotherCountdownElement.text(thisCount);
      thisCount += Math.pow(1, 0.25);
    } else {
      clearInterval(intervalId);
    }
  }, 900);
});

// FAQ ANIMATION
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    question.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !mobileNav) {
    console.warn("Mobile navigation elements not found");
    return;
  }

  hamburger.addEventListener("click", () => {
    console.log("shit");
    mobileNav.classList.toggle("active");
    overlay.classList.toggle("active");

    hamburger.querySelector("i").classList.toggle("fa-bars");
    hamburger.querySelector("i").classList.toggle("fa-times");
  });
});
