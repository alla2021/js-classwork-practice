function multiple(a, b) {
  return a * b;
}

function addition(a, b) {
  return a + b;
}

function calc(a, b) {
  const mul = multiple(a, b)
  const add = addition(a, b)

  return {
    mul,
    add
  }
}


export { calc };
