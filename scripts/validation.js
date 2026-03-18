const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn ",
  inactiveButtonClass: "modal__close-btn",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgElement = formElement.querySelector("#" + errorMsgID);
  errorMsgElement.textContent = errorMessage;
  inputElement.classList.add(config.inputErrorClass);
  //errorMsgElement.classList.add("modal__input-error_active");
};

const hideInputError = (formElement, inputElement, config) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgElement = formElement.querySelector("#" + errorMsgID);
  errorMsgElement.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
  // errorMsgElement.classList.remove("modal__input-error_active");
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config,
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonEl, config) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonEl);
    //add modifier class to button element to make it grey,dont forget the css
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove(".modal__submit-btn_error");
    //remove the disabled class
  }
};

const disableButton = (buttonEl) => {
  buttonEl.disabled = true;
  buttonEl.classList.add(".modal__submit-btn_error");
};

const resetValidation = (formElement, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input);
  });
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector),
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};
enableValidation(settings);
