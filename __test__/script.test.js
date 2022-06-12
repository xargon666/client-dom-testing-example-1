/**
 * @jest-environment jsdom
 */ // setup testing environment

// for index.html path
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

// variable declaration for functions testing
let a, b, pass, functions;
const fail = "Error: Non-integer value(s) entered";

// ...for button testing
let addInput1, addInput2, subInput1, subInput2;
let a1, a2, b1, b2;
const clickEvt = new Event("click");

describe("script.js testing", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    body = document.querySelector("body");
    functions = require("../js/script");
  });
  describe("Test Functions", () => {
    describe("functions.add", () => {
      it("Adds two numbers", () => {
        (a = 1), (b = 1), (pass = 2);
        expect(functions.add(a, b)).toBe(pass);
      });

      it("Fails if number missing", () => {
        (a = 1), (b = "");
        expect(functions.add(a, b)).toBe(fail);
      });

      it("Fails if null entered ", () => {
        (a = 1), (b = null);
        expect(functions.add(a, b)).toBe(fail);
      });
    });

    describe("functions.sub", () => {
      it("Subtracts b from a", () => {
        (a = 2), (b = 1), (pass = 1);
        expect(functions.sub(a, b)).toBe(pass);
      });

      it("Fails if param not a number", () => {
        (a = 2), (b = "A");
        expect(functions.sub(a, b)).toBe(fail);
      });
    });
  });
  describe("Test Buttons", () => {
    beforeEach(() => {
      addInput1 = document.querySelector("#add-num1");
      addInput2 = document.querySelector("#add-num2");
      subInput1 = document.querySelector("#sub-num1");
      subInput2 = document.querySelector("#sub-num2");
      a1 = document.querySelector("#a1");
      a2 = document.querySelector("#a2");
      b1 = document.querySelector("#b1");
      b2 = document.querySelector("#b2");
      testFn = jest.fn();
    });

    describe("button 1", () => {
      it("calls add function when clicked", () => {
        const spy = jest.spyOn(functions, "add");
        b1.dispatchEvent(clickEvt);
        expect(spy).toHaveBeenCalled();
      });

      it("returns answer when clicked", () => {
        addInput1.value = 1;
        addInput2.value = 1;
        b1.dispatchEvent(clickEvt);
        expect(a1.textContent).toContain("2");
      });
    });
    describe("button 2", () => {
      it("calls sub function when clicked", () => {
        const spy = jest.spyOn(functions, "sub");
        b2.dispatchEvent(clickEvt);
        expect(spy).toHaveBeenCalled();
      });
      it("returns answer when clicked", () => {
        subInput1.value = 1;
        subInput2.value = 1;
        b2.dispatchEvent(clickEvt);
        expect(a2.textContent).toContain("0");
      });
    });
  });
});
