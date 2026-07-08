const year = document.querySelector("#year");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

year.textContent = new Date().getFullYear();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" || card.dataset.category === selectedCategory;

      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
// Case image lightbox preview
const previewButtons = document.querySelectorAll(".image-preview-button");
const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.querySelector(".lightbox-close");

function openLightbox(imageSrc, imageAlt) {
  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt || "Expanded case preview";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  setTimeout(() => {
    lightboxImage.src = "";
  }, 150);
}

previewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const fullImage = button.dataset.full || image?.src;

    openLightbox(fullImage, image?.alt);
  });
});

if (lightbox) {
  lightbox.addEventListener("click", () => {
    closeLightbox();
  });
}

if (lightboxImage) {
  lightboxImage.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", () => {
    closeLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
// Schedule a Call modal
const openScheduleModal = document.getElementById("openScheduleModal");
const closeScheduleModal = document.getElementById("closeScheduleModal");
const closeScheduleBackdrop = document.getElementById("closeScheduleBackdrop");
const scheduleModal = document.getElementById("scheduleModal");
const scheduleForm = document.getElementById("scheduleForm");

function openModal() {
  if (!scheduleModal) return;
  scheduleModal.classList.add("is-open");
  scheduleModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!scheduleModal) return;
  scheduleModal.classList.remove("is-open");
  scheduleModal.setAttribute("aria-hidden", "true");
}

if (openScheduleModal) {
  openScheduleModal.addEventListener("click", openModal);
}

if (closeScheduleModal) {
  closeScheduleModal.addEventListener("click", closeModal);
}

if (closeScheduleBackdrop) {
  closeScheduleBackdrop.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

if (scheduleForm) {
  scheduleForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(scheduleForm);
    const name = formData.get("name");
    const message = formData.get("message");
    const time = formData.get("time");
    const contact = formData.get("contact");

    const subject = encodeURIComponent(`Schedule a Call Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n\n` +
      `Consultation Topic:\n${message}\n\n` +
      `Preferred Time:\n${time || "Not specified"}\n\n` +
      `Email or Phone:\n${contact}\n`
    );

    window.location.href = `mailto:cecilia212969@gmail.com?subject=${subject}&body=${body}`;
  });
}
// Smooth scroll for View Works button
const viewWorksButton = document.querySelector(".hero-work-button");
const worksSection = document.getElementById("works");

if (viewWorksButton && worksSection) {
  viewWorksButton.addEventListener("click", (event) => {
    event.preventDefault();

    worksSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}