let form = document.getElementsByTagName('form')[0];

let fName = document.getElementById('fName');
let fNameError = document.getElementById('fNameError');

fName.addEventListener('input', function (event) {
    if (fName.validity.valid) {
        fNameError.textContent = "";
        fNameError.className = 'error';
    } else {
        showfNameError();
    }
});

form.addEventListener('submit', function (event) {
    if (!fName.validity.valid) {
        showfNameError();
        event.preventDefault();
    }
});

function showfNameError() {
    if (fName.validity.valueMissing) {
        fNameError.textContent = 'You need to enter your first name.';
    } else if (fName.validity.patternMismatch) {
        fNameError.textContent = 'Please start with a capital letter.';
    } else if (fName.validity.tooShort) {
        fNameError.textContent = 'Please enter your full first name not an initial'
    }
    fNameError.className = 'error active';
}

let lName = document.getElementById('lName');
let lNameError = document.getElementById('lNameError');

lName.addEventListener('input', function (event) {
    if (lName.validity.valid) {
        lNameError.textContent = "";
        lNameError.className = 'error'
    } else {
        showlNameError();
    }
});

form.addEventListener('submit', function (event) {
    if (!lName.validity.valid) {
        showlNameError();
        event.preventDefault();
    }
});

function showlNameError() {
    if (lName.validity.valueMissing) {
        lNameError.textContent = 'You need to enter your last name.';
    } else if (lName.validity.patternMismatch) {
        lNameError.textContent = 'Please start with a capital letter.';
    } else if (lName.validity.tooShort) {
        lNameError.textContent = 'Please enter your full last name not just an initial';
    }
    lNameError.className = 'error active';
}

let email = document.getElementById('email');
let emailError = document.getElementById('emailError');

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = 'error'
    } else {
        showEmailError();
    }
});

form.addEventListener('submit', function (event) {
    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    }
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter your email address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    } else if (email.validity.patternMismatch) {
        emailError.textContent = 'Please enter a valid email';
    }
    emailError.className = 'error active';
}

let phone = document.getElementById('phone');
let phoneError = document.getElementById('phoneError');

phone.addEventListener('input', function (event) {
    if (phone.validity.valid) {
        phoneError.textContent = "";
        phoneError.className = 'error'
    } else {
        showPhoneError();
    }
});

form.addEventListener('submit', function (event) {
    if (!phone.validity.valid) {
        showPhoneError();
        event.preventDefault();
    }
});

function showPhoneError() {
    if (phone.validity.valueMissing) {
        phoneError.textContent = 'You need to enter your phone number.';
    } else if (phone.validity.patternMismatch) {
        phoneError.textContent = 'Please enter only numbers';
    } else if (phone.validity.tooShort) {
        phoneError.textContent = `Phone should be 10 numbers you entered ${phone.value.length}. `;
    } 
    phoneError.className = 'error active';
}

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear() - 18;

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dob").setAttribute("max", today)

let dob = document.getElementById('dob');
let dobError = document.getElementById('dobError');

dob.addEventListener('input', function (event) {
    if (dob.validity.valid) {
        dobError.textContent = "";
        dobError.className = 'error'
    } else {
        showDobError();
    }
});

form.addEventListener('submit', function (event) {
    if (!dob.validity.valid) {
        showDobError();
        event.preventDefault();
    }
});

function showDobError() {
    if (dob.validity.valueMissing) {
        dobError.textContent = 'You need to enter your date of birth.';
    } else if (dob.validity.rangeOverflow) {
        dobError.textContent = `Must be at least 18 to sign up`;
    } else if (dob.validity.typeMismatch) {
        dobError.textContent = 'Please enter only numbers';
    }
    dobError.className = 'error active';
}

let photo = document.getElementById('pic');
let photoError = document.getElementById('photoError');
let allowedExtensions = ['jpg', 'png', 'jpeg'];



photo.addEventListener('input', function (event) {
    if (photo.validity.valid) {
        photoError.textContent = "";
        photoError.className = 'error'
    } else {
        showPhotoError();
    }
});

form.addEventListener('submit', function (event) {
    if (!photo.validity.valid) {
        showPhotoError();
        event.preventDefault();
    }
});

function showPhotoError() {
    if (photo.validity.valueMissing) {
        photoError.textContent = 'You need a profile pic.';
    }
    photoError.className = 'error active';
}

function fileValidation() {
    let fileInput =
        document.getElementById('pic');

    let filePath = fileInput.value;


    let allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        photoError.textContent = 'Invalid file type';
        fileInput.value = '';
    }
    else if (fileInput.files && fileInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById(
                'imagePreview').innerHTML =
                '<img src="' + e.target.result
                + '"/>';
        };

        reader.readAsDataURL(fileInput.files[0]);
    }

}

let pass = document.getElementById('pass');
let passError = document.getElementById('passError');
let passMatch = document.getElementById('passMatch');
let passMatchError = document.getElementById('passMatchError')

function showPass() {
    let icon = document.getElementById('icon');
    let icon2 = document.getElementById("icon2");
    
    if (pass.type === "password") {
        pass.type = "text";
        icon.hidden = false;
        icon2.hidden = true;
    } else {
        pass.type = "password"
        icon.hidden = true;
        icon2.hidden = false;
    }
}

function showPass2() {
    let icon3 = document.getElementById('icon3');
    let icon4 = document.getElementById("icon4");
    
    if (passMatch.type === "password") {
        passMatch.type = "text";
        icon3.hidden = false;
        icon4.hidden = true;
    } else {
        passMatch.type = "password"
        icon3.hidden = true;
        icon4.hidden = false;
    }
}

pass.addEventListener('input', function (event) {
    if (pass.validity.valid) {
        passError.textContent = "";
        passError.className = 'error'
    } else {
        showPassError();
    }
});

form.addEventListener('submit', function (event) {
    if (!pass.validity.valid) {
        showPassError();
        event.preventDefault();
    }
    else if(pass.value !== passMatch.value) {
        passError.textContent = "Password Do Not Match"
    } else {
        passError.textContent = "Match"
        passError.style.backgroundColor = 'Green'
    }
});

function showPassError() {
    if (pass.validity.valueMissing) {
        passError.textContent = 'You need a password';
    } else if (pass.validity.tooShort) {
        passError.textContent = `Phone should be at least 8 characters you entered ${pass.value.length}. `;
    } else if (pass.validity.patternMismatch) {
        passError.textContent = `password must contain 1 number 0-9
        password must contain 1 uppercase letters
        password must contain 1 lowercase letters
        password must contain 1 non-alpha numeric number
        password is 8-16 characters with no space`;
    }
    passError.className = 'error active';
}

passMatch.addEventListener('input', function (event) {
    if (passMatch.validity.valid) {
        passMatchError.textContent = "";
        passMatchError.className = 'error'
    } else {
        showPassMatchError();
    }
});

form.addEventListener('submit', function (event) {
    if (!passMatch.validity.valid) {
        showPassMatchError();
        event.preventDefault();
    } else if(pass.value !== passMatch.value) {
        passMatchError.textContent = "Password Do Not Match"
    } else {
        passMatchError.textContent = "Match"
        passMatchError.style.backgroundColor = 'Green'
    }
});

function showPassMatchError() {
    if (passMatch.validity.valueMissing) {
        passMatchError.textContent = 'You need a password';
    } else if (passMatch.validity.tooShort) {
        passMatchError.textContent = `Phone should be at least 8 characters you entered ${passMatch.value.length}. `;
    } else if (passMatch.validity.patternMismatch) {
        passMatchError.textContent = `password must contain 1 number 0-9
        password must contain 1 uppercase letters
        password must contain 1 lowercase letters
        password must contain 1 non-alpha numeric number
        password is 8-16 characters with no space`;
    }
    passMatchError.className = 'error active';
}

let sub = document.getElementById('subscription');
let subError = document.getElementById('subError');

sub.addEventListener('input', function (event) {
    if (sub.validity.valid) {
        subError.textContent = "";
        subError.className = 'error'
    } else {
        showSubError();
    }
});

form.addEventListener('submit', function (event) {
    if (!sub.validity.valid) {
        showSubError();
        event.preventDefault();
    }
});

function showSubError() {
    if (sub.validity.valueMissing) {
        subError.textContent = 'Do you wish subscribe?';
    }
    subError.className = 'error active';
}

let agree = document.getElementById('agree');
let agreeError = document.getElementsByName('agreeError');
let submit = document.getElementById('submit')

sub.addEventListener('input', function (event) {
    if (agree.validity.valid) {
        agreeError.textContent = "";
        agreeError.className = 'error'
    } else {
        showAgreeError();
    }
});

form.addEventListener('submit', function (event) {
    if (!agree.validity.valid) {
        showAgreeError();
        event.preventDefault();
    }
});

function showAgreeError() {
    if (agree.validity.invalid) {
        agreeError.textContent = 'You must agree to the term and conditions';
    }
    agreeError.className = 'error active';
}

let hoverText = document.getElementById('hoverText');

function terms_changed(termsCheckBox) {
    if(termsCheckBox.checked){
        document.getElementById('submit').disabled = false;
        hoverText.style.display = "none";
    } else {
        document.getElementById('submit').disabled = true;
    }
}
