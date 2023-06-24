// Built In Types

// Any
// Unknown
// Never
// Tuple

let sales: number = 12345
let course: string = 'Introduction To Programming'
let is_published: boolean = true

// Type: Any
let level;
let numbers = [];

// Type: Arrays
let images: string[] = [];

// Type: Tuples
let student: [string, number] = ['Somto', 16];

// Type: Enums
const enum SIZE {
    SMALL,
    MEDIUM,
    LARGE,
    UNKWN
}

type Student = {
    readonly id: number,
    name: string,
    size: SIZE,
    enrolled: (date: Date) => void
}

// Type: Object

let student_one: Student = {
    id: 1,
    name: 'Somto Nnalue',
    size: SIZE.MEDIUM,
    enrolled(date) {
        console.log(date)
    },
};


// Advnc Types

// Type Alias


// Union Type

function kgToLbs(weight: number | string): number {

    if (typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2

}


// Methods

function calculateTax(income: number, taxYear?: number): number {
    let tax: number;

    if ((taxYear || 2023) > 2023)
        tax = income * 0.15
    else
        tax = income * 0.20

    return tax;
}

// Code

kgToLbs(10)
kgToLbs('10kg')

let student_size: SIZE = SIZE.MEDIUM
console.log(student_size)

calculateTax(10000);