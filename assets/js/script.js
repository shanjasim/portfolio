'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (!modalContainer || !overlay) return;
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    if (!modalImg || !modalTitle || !modalText) return;

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    if (select) elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const youtubeNote = document.querySelector("[data-youtube-note]");
const portfolioVideos = document.querySelectorAll(".project-item video");
const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const revealItems = document.querySelectorAll(".reveal-item");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

  for (let i = 0; i < portfolioVideos.length; i++) {
    const videoCard = portfolioVideos[i].closest(".project-item");

    if (videoCard && !videoCard.classList.contains("active")) {
      portfolioVideos[i].pause();
      videoCard.classList.remove("is-playing");
    }
  }

  if (youtubeNote) {
    youtubeNote.classList.toggle("active", selectedValue === "youtube video");
  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

const WHATSAPP_URL = "https://wa.me/919995505899";

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form && formBtn && form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      if (formBtn) formBtn.setAttribute("disabled", "");
    }

  });
}

if (formBtn) {
  formBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage = this.textContent.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      const pageName = (pages[j].dataset.page || "").toLowerCase();
      const isActive = selectedPage === pageName;

      pages[j].classList.toggle("active", isActive);
      if (navigationLinks[j]) navigationLinks[j].classList.toggle("active", isActive);
    }

    window.scrollTo(0, 0);
  });
}

for (let i = 0; i < portfolioVideos.length; i++) {
  const currentVideo = portfolioVideos[i];
  const currentCard = currentVideo.closest(".project-item");

  currentVideo.addEventListener("play", function () {
    for (let j = 0; j < portfolioVideos.length; j++) {
      const otherVideo = portfolioVideos[j];
      const otherCard = otherVideo.closest(".project-item");

      if (otherVideo !== currentVideo) {
        otherVideo.pause();
        if (otherCard) otherCard.classList.remove("is-playing");
      }
    }

    if (currentCard) currentCard.classList.add("is-playing");
  });

  currentVideo.addEventListener("pause", function () {
    if (currentCard) currentCard.classList.remove("is-playing");
  });

  currentVideo.addEventListener("ended", function () {
    if (currentCard) currentCard.classList.remove("is-playing");
  });
}

for (let i = 0; i < scrollButtons.length; i++) {
  scrollButtons[i].addEventListener("click", function () {
    const targetSelector = this.dataset.scrollTarget;
    const target = targetSelector ? document.querySelector(targetSelector) : null;

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(function (entries) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("reveal-visible");
      }
    }
  }, { threshold: 0.18 });

  for (let i = 0; i < revealItems.length; i++) {
    revealObserver.observe(revealItems[i]);
  }
} else {
  for (let i = 0; i < revealItems.length; i++) {
    revealItems[i].classList.add("reveal-visible");
  }
}

// logitrack slider
const logitrackSliders = document.querySelectorAll("[data-logitrack-slider]");

for (let i = 0; i < logitrackSliders.length; i++) {
  const slider = logitrackSliders[i];
  const slides = slider.querySelectorAll("[data-logitrack-slide]");
  const prevBtn = slider.querySelector("[data-slide-prev]");
  const nextBtn = slider.querySelector("[data-slide-next]");
  const thumbs = slider.parentElement.querySelectorAll("[data-logitrack-thumb]");
  let currentIndex = 0;

  if (!slides.length) continue;

  const showSlide = function (index) {
    currentIndex = (index + slides.length) % slides.length;

    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.toggle("active", j === currentIndex);
    }

    for (let j = 0; j < thumbs.length; j++) {
      thumbs[j].classList.toggle("active", j === currentIndex);
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });
  }

  for (let j = 0; j < thumbs.length; j++) {
    thumbs[j].addEventListener("click", function () {
      const thumbIndex = Number(this.dataset.logitrackThumb);
      showSlide(thumbIndex);
    });
  }
}
