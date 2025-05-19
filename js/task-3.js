class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.split("").concat(str).join("");
  }

  padStart(str) {
    this.#value = [str].concat(this.#value.split("")).join("");
  }

  padBoth(str) {
    this.#value = [str].concat(this.#value.split(""), str).join("");
  }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="





