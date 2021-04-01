class SvgElement {

  constructor() {
    this.namespace = 'http://www.w3.org/2000/svg';
    this.element = null;
  }

  setAttributes(attributes) {
    attributes.forEach(([name, value]) => {
      this.element.setAttribute(name, value);
    });
    return this;
  }
}

export default SvgElement;
