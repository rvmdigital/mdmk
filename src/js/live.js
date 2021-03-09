import { Modal } from "bootstrap";

const exitLive = new Modal(document.getElementById('exitModalbttn'), {});

// Show
document.getElementById('exitModal').addEventListener('click', function () {
    exitLive.show();
});

// Hide
document.getElementById('liveExit').addEventListener('click', function () {
    exitLive.hide();
    window.history.go(-1);
});
