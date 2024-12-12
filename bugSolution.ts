function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    return a + parseFloat(b);
  } else {
    return a + b;
  }
}

let result1 = addSafe(10, "20");
let result2 = addSafe(10, 20); 