
const thisYear = document.querySelector("#thisYear").textContent = new Date().getFullYear();

/*
const phoneNumber = document.querySelector(`#phone-number`);

phoneNumber.addEventListener('click', copyTextContent);
phoneNumber.addEventListener('mouseover', showSignifier);

function showSignifier() {
    const tooltip = document.querySelector('#myTooltip');
    tooltip.textContent = "Kopieren";
}

function copyTextContent() {
    const tooltip = document.querySelector('#myTooltip');
    tooltip.textContent = "Kopiert";
    navigator.clipboard.writeText(phoneNumber.textContent.replace(/\s/g, ''));
}
*/