import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "jest-localstorage-mock";

global.MutationObserver = class {
  disconnect() {}
  observe(element, initObject) {}
};

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document
  }
});
