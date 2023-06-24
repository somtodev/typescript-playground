"use strict";
let sales = 12345;
let course = 'Introduction To Programming';
let is_published = true;
let level;
let numbers = [];
let images = [];
let student = ['Somto', 16];
let student_one = {
    id: 1,
    name: 'Somto Nnalue',
    size: 1,
    enrolled(date) {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
function calculateTax(income, taxYear) {
    let tax;
    if ((taxYear || 2023) > 2023)
        tax = income * 0.15;
    else
        tax = income * 0.20;
    return tax;
}
kgToLbs(10);
kgToLbs('10kg');
let student_size = 1;
console.log(student_size);
calculateTax(10000);
//# sourceMappingURL=index.js.map