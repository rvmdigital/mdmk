import { Modal } from "bootstrap";
import hamburger from "./hamburger";
import { homeSliders } from "./common";


homeSliders;

hamburger;


// home 2 page
const submitedModal = new Modal(document.getElementById('votenowSubmitedModal'), {});
const otpModal = new Modal(document.getElementById('otpModal'), {});
const successModal = new Modal(document.getElementById('sucessModal'), {});

document.getElementById('votenow').addEventListener('click', function () {
  submitedModal.show();
});


document.getElementById('voteNow').addEventListener('click', function () {
  submitedModal.hide();
  setTimeout(function () {
    otpModal.show();
  }, 1000);
});


document.getElementById('getOtp').addEventListener('click', function () {
  otpModal.hide();
  setTimeout(function () {
    successModal.show();
  }, 1000);
});