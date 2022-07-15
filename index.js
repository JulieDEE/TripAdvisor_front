const modal = document.querySelector(".modal");
const contactButton = document.querySelector("#btn-contact");
const formButton = document.querySelector("#form-btn");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("#contact-form");

const preventScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
};

const disable = () => {
  modal.addEventListener("wheel", preventScroll);
};

const enable = () => {
  modal.removeEventListener("wheel", preventScroll);
};

contactButton.addEventListener("click", () => {
  modal.classList.add("shows");
  formContainer.classList.add("shows");
  disable();
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await axios.post("http://localhost:3000/contact", {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
    
  });
  console.log(response.data);
});

formButton.addEventListener("click", () => {
  modal.classList.remove("shows");
  formContainer.classList.remove("shows");
  enable();
});

console.log(document.querySelector("#firstname").value);

