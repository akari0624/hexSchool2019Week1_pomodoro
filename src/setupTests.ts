import 'jest-canvas-mock'

declare global {
  interface Window {
    HTMLElement: Function
  }
}
Object.defineProperties(window.HTMLElement.prototype, {
  offsetLeft: {
    get: function() { return  500; }
  },
  offsetTop: {
    get: function() { return  500; }
  },
  offsetHeight: {
    get: function() { return  500; }
  },
  offsetWidth: {
    get: function() { return  500; }
  }
})