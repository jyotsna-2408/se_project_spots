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
