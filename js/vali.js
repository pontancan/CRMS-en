console.log('hello world');


let input_name = document.getElementById('name');
let name_message = document.getElementById('name_message');


input_name.addEventListener('focusout', () => {
    if (input_name.value.trim() === '') {
        name_message.innerText = '入力は必須です';
    } else if (input_name.value.trim().length < 3) {
        name_message.innerText = '3文字以上必要です';
    } else {
        name_message.innerText = '';
    }
});

let input_kana = document.getElementById('kana');
let kana_message = document.getElementById('kana_message');

input_kana.addEventListener('focusout', () => {
    if (input_kana.value.trim() === '') {
        kana_message.innerText = '入力は必須です';
    } else if (input_kana.value.trim().length < 3) {
        kana_message.innerText = '3文字以上必要です';
    } else {
        kana_message.innerText = '';
    }
});

let input_email = document.getElementById('email');
let email_message = document.getElementById('email_message');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

input_email.addEventListener('focusout', () => {
    if (input_email.value.trim() === '') {
        email_message.innerText = '入力は必須です';
    } else if (!validateEmail(input_email.value.trim())) {
        email_message.innerText = '有効なメールアドレスではありません';
    } else {
        email_message.innerText = '';
    }
});

let input_phone = document.getElementById('phone');
let phone_message = document.getElementById('phone_message');

function validatePhone(phone) {
    const re = /^\d{9,10}$/;
    return re.test(phone);
}

input_phone.addEventListener('focusout', () => {
    if (input_phone.value.trim() === '') {
        phone_message.innerText = '入力は必須です';
    } else if (!validatePhone(input_phone.value.trim())) {
        phone_message.innerText = '有効な電話番号ではありません';
    } else {
        phone_message.innerText = '';
    }
});


let input_gender = document.getElementById('gender');
let gender_message = document.getElementById('gender_message');



input_gender.addEventListener('focusout', () => {
    if (input_gender.value.trim() === '') {
        gender_message.innerText = '選択は必須です';
    } else {
        gender_message.innerText = '';
    }
});

let input_dob = document.getElementById('dob');
let dob_message = document.getElementById('dob_message');



input_dob.addEventListener('focusout', () => {
    if (input_dob.value.trim() === '') {
        dob_message.innerText = '入力は必須です';
    } else {
        dob_message.innerText = '';
    }
});


let input_company = document.getElementById('company');
let company_message = document.getElementById('company_message');



input_company.addEventListener('focusout', () => {
    if (input_company.value.trim() === '') {
        company_message.innerText = '選択は必須です';
    } else {
        company_message.innerText = '';
    }
});













