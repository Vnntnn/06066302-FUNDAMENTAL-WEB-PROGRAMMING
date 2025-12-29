const body = document.getElementsByTagName('body')[0];
let lang = "Thai";
const defaultCountry = {
    Thai: {
        fname: 'ชื่อ',
        lname: 'นามสกุล',
        country: 'ประเทศ',
        disableText: 'เลือกประเทศ',
        changeLanguage: 'เปลี่ยนเป็นภาษาอังกฤษ',
        option1: 'ไทย',
        option2: 'เวียดนาม',
        option3: 'ลาว'
    },
    Eng: {
        fname: 'First Name',
        lname: 'Last Name',
        country: 'Country',
        disableText: 'Select a country',
        changeLanguage: 'Change to Thai',
        option1: 'Thai',
        option2: 'Vietnam',
        option3: 'Laos'
    }
}

function changeLanguage(language) {
    lang = language === 'Thai' ? 'Eng' : 'Thai';
    initBody();
}

/*
    This function is initialize first content when entered website.
    Default language is **Thai**
    @return body creation in first entered
*/
function initBody() {
    const div = document.createElement('div');
    div.className = 'main-section';

    const oldDiv = document.querySelector('div');
    if (oldDiv !== null) {
        oldDiv.remove();
    }

    // first name elements creation.
    const fnameArea = document.createElement('label');
    fnameArea.htmlFor = 'fname-area';
    fnameArea.id = 'fname';
    let fnameLabel = document.createTextNode(defaultCountry[lang].fname);
    fnameArea.appendChild(fnameLabel);
    const inputFName = document.createElement('input');
    inputFName.type = "text";
    inputFName.id = "fname-area";


    // last name elements creation
    const lnameArea = document.createElement('label');
    lnameArea.htmlFor = 'lname-area';
    lnameArea.id = 'lname';
    let lnameLabel = document.createTextNode(defaultCountry[lang].lname);
    lnameArea.appendChild(lnameLabel);
    const inputLName = document.createElement('input');
    inputLName.type = "text";
    inputLName.id = "lname-area";

    // country select drop-down box creation
    const countryText = document.createElement('label');
    countryText.htmlFor = "country";
    countryText.id = "country-text";
    let countryNameText = document.createTextNode(defaultCountry[lang].country);
    countryText.appendChild(countryNameText);
    // country drop-down selection elements
    const selectOptions = document.createElement('select');
    selectOptions.id = "country-select";

    // Disable option in country drop down
    const disableDesOption = document.createElement('option');
    disableDesOption.disabled = true;
    disableDesOption.selected = true;
    const disableText = document.createTextNode(defaultCountry[lang].disableText);
    disableDesOption.appendChild(disableText);
    selectOptions.appendChild(disableDesOption);

    // Countries options in drop down box
    for (let i = 1; i <= 3; i++) {
        let opt = document.createElement('option');
        let optText = document.createTextNode(defaultCountry[lang]['option' + i]);
        opt.value = defaultCountry[lang]['option' + i];
        opt.appendChild(optText);
        selectOptions.appendChild(opt);
    }

    // Change lang button
    const changeLanguageButton = document.createElement('button');
    changeLanguageButton.type = 'button';
    changeLanguageButton.id = 'language-toggle-btn';
    let changeLanguageButtonText = document.createTextNode(defaultCountry[lang].changeLanguage);
    changeLanguageButton.appendChild(changeLanguageButtonText);
    changeLanguageButton.addEventListener('click', () => changeLanguage(lang));

    div.appendChild(fnameArea);
    div.appendChild(inputFName);
    div.appendChild(lnameArea);
    div.appendChild(inputLName);
    div.appendChild(countryText);
    div.appendChild(selectOptions);
    div.appendChild(changeLanguageButton);

    body.appendChild(div);
}

initBody();