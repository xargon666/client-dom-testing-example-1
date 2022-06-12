const addInput1 = document.querySelector('#add-num1');
const addInput2 = document.querySelector('#add-num2');
const subInput1 = document.querySelector('#sub-num1');
const subInput2 = document.querySelector('#sub-num2');
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");

const functions = {
  add: (a, b) => {
    a = parseInt(a,10)
    b = parseInt(b,10)
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a + b;
    } else {
      return "Error: Non-integer value(s) entered";
    }
  },
  sub: (a,b) => {
    a = parseInt(a,10)
    b = parseInt(b,10)
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a - b;
    } else {
        return "Error: Non-integer value(s) entered"
    }
  },
};

b1.addEventListener('click',() => {
    const a = addInput1.value
    const b = addInput2.value
    a1.textContent = `Answer: ${functions.add(a,b)}`;
});
b2.addEventListener('click',() => {
    const a = subInput1.value
    const b = subInput2.value
    a2.textContent = `Answer: ${functions.sub(a,b)}`;
});

module.exports = functions;
