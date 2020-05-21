/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const convert = document.querySelector('#convertButton');
const reset = document.querySelector('#resetButton');
const answer = document.querySelector('#answer');

function convertToRoman() {
        let num = document.querySelector('#input').value;
        const a = num;

        const lookup = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1,
        };
        let roman = '';
        let i;
        for (i in lookup) {
                while (num >= lookup[i]) {
                        roman += i;
                        num -= lookup[i];
                }
        }
        return (answer.textContent = `${a} in Roman numeral is ${roman}`);
}

function resetFunction() {
        window.location.reload();
}

convert.addEventListener('click', convertToRoman);
reset.addEventListener('click', resetFunction);
