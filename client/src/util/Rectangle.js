import Shape from './Shape';

class Rectangle extends Shape {
  constructor(position, fill, width, height) {
    super(position, fill);
    this.width = width;
    this.height = height;
    this.element = document.createElementNS(this.namespace, 'rect');
    this.initialize();
  }

  initialize() {
    this.element.setAttribute('width', this.width);
    this.element.setAttribute('height', this.height);
    this.element.setAttribute('x', this.x);
    this.element.setAttribute('y', this.y);
    this.element.setAttribute('fill', this.fill);
  }

  moveTo(position) {
    this.x = position.x;
    this.y = position.y;
    this.element.setAttribute('x', this.x);
    this.element.setAttribute('y', this.y);
    return this;
  }
}

export default Rectangle;
