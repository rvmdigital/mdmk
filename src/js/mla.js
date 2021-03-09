import { Modal } from "bootstrap";
import hamburger from "./hamburger";
import mlaSlider from './mla-detail'

mlaSlider;

const submitedModalimg = new Modal(document.getElementById("uploadimgbttn"), {});
const submitedModalvid = new Modal(document.getElementById("uploadvidbttn"), {});

document.getElementById("uploadimg").addEventListener("click", function () {
  submitedModalimg.show();
});

document.getElementById("uploadvid").addEventListener("click", function () {
  submitedModalvid.show();
});

document.getElementById("modal-closeimg").addEventListener("click", function () {
  submitedModalimg.hide();
});

document.getElementById("modal-closevid").addEventListener("click", function () {
  submitedModalvid.hide();
});


// Navigaion toggler

hamburger;
