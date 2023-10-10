class Counter {
  private _value: number;

  constructor(value?: number) {
    this._value = value !== undefined ? value : 0;
  }

  get(): number {
    return this._value;
  }

  set(value: number) {
    this._value = value;
  }

  increment(): void {
    this._value++;
  }
}

const counter = new Counter(100);
console.log(counter.increment());
console.log(counter.get());
