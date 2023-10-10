function* foo() {
  yield 1;
  yield 2;
  return 3;
}

const bar = foo();

console.log(bar.next());
