// Named Function
function greet(name?: string): string {
    if (name) return `Hello, ${name}`;
    else return "Hi!";
}

// IIFE (Immediately Invoked Function)
(function () {
    console.log("I ran without being invoked");
})();

// Optional Params Function
function sum(foo: number, bar: number, foobar?: number): void {
    let result = foo + bar;

    if (foobar !== undefined) result += foobar;

    console.log(result);

    // or

    // return foo + bar + foobar !== undefined ? foobar : 0;
}

// Function With Default Parameters
function sum_2(foo: number, bar: number, foobar: number = 0): number {
    return foo + bar + foobar;
}

// Function With Rest Params
function add(...foo: Array<number>): number {
    let result: number = 0;

    for (let index = 0; index < foo.length; index++) {
        result += foo[index];
    }

    return result;
}

// Function Overloading
//
// function test(name: string): string {
//     return name;
// }

// function test(age: number): string {
//     return String(age);
// }

function test(value: string | number | boolean) : string {
    switch (typeof value) {
        case "string":
            return `My name is ${value}`
        case "number":
            return `My age: ${value}`
        case "boolean":
            return value ? 'Single' : 'Taken'
        default:
            return 'Ops'
    }
}
