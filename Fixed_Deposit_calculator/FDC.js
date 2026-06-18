// DOM Elements
const rateInput = document.getElementById('rate');
const amountInput = document.getElementById('amount');
const durationInput = document.getElementById('duration');

const rateVal = document.getElementById('rate-val');
const amountVal = document.getElementById('amount-val');
const durationVal = document.getElementById('duration-val');

const calculateBtn = document.getElementById('calculate-btn');
const resultBox = document.getElementById('result-box');

const resAmount = document.getElementById('res-amount');
const resInterest = document.getElementById('res-interest');
const resTotal = document.getElementById('res-total');

// Update UI text instantly when sliders move
rateInput.addEventListener('input', () => {
    rateVal.textContent = rateInput.value;
});

amountInput.addEventListener('input', () => {
    amountVal.textContent = amountInput.value;
});

durationInput.addEventListener('input', () => {
    const months = parseInt(durationInput.value);
    if (months >= 12) {
        const years = (months / 12).toFixed(1);
        durationVal.textContent = `${months} (${years} Yrs)`;
    } else {
        durationVal.textContent = `${months}`;
    }
});

// Calculate FD Formula on Submit Click
calculateBtn.addEventListener('click', () => {
    const P = parseFloat(amountInput.value);
    const r = parseFloat(rateInput.value) / 100;
    const months = parseInt(durationInput.value);
    const t = months / 12; // Time in years

    // Compound Interest Formula (Compounded Monthly: n = 12)
    const n = 12;
    const A = P * Math.pow((1 + r / n), (n * t));
    const interest = A - P;

    // Display Results formatted to Currency
    resAmount.textContent = '₹' + P.toFixed(2);
    resInterest.textContent = '₹' + interest.toFixed(2);
    resTotal.textContent = '₹' + A.toFixed(2);

    // Show result box
    resultBox.style.display = 'block';
});
