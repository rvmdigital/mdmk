import { Modal } from "bootstrap";

document.getElementById('reportSubmit').addEventListener('click', function () {
    const submitedModal = new Modal(document.getElementById('reoprtSubmitedModal'), {});
    submitedModal.show();
});

document.querySelector('.report-form__location').addEventListener('click',function(){
    window.location.href = './location.html'
});

