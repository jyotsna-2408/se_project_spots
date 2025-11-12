const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton =
  editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const addNewPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const newPostImageUrlInput = newPostModal.querySelector("#card-image-link");
const newPostCaptionInput = newPostModal.querySelector("#caption-input");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
  //editProfileModal.classList.add("modal_is-opened");
});

function handleEditFormSubmission(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
  //editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditFormSubmission);

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
  // editProfileModal.classList.remove("modal_is-opened");
});

addNewPostButton.addEventListener("click", function () {
  openModal(newPostModal);
  //newPostModal.classList.add("modal_is-opened");
});

function handleNewPostFormSubmission(evt) {
  evt.preventDefault();
  console.log("Image input element:", newPostImageUrlInput.value);
  console.log("Caption input element:", newPostCaptionInput.value);
  closeModal(newPostModal);
  //newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleNewPostFormSubmission);

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
  //newPostModal.classList.remove("modal_is-opened");
});

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
