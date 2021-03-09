let otpInputs = document.querySelectorAll('.otp__form input');

Array.from(otpInputs).forEach(function (otpInput) {
    otpInput.addEventListener('keyup', function (e) {
        if (e.keyCode === 8 || e.keyCode === 37) {
            let prev = otpInput.previousElementSibling;
            if (prev) {
                prev.focus();
            }
        }else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39){
            let next = otpInput.nextElementSibling;
            if(next) {
				next.focus();
			}
        }
    });
});