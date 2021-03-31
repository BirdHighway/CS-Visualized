import Shape from './Shape';

class Square extends Shape  {
  constructor(position, fill, size) {
    super(position, fill);
    this.size = size;
    this.element = document.createElementNS(this.namespace, 'rect');
    this.initialize();
  }

  initialize() {
    this.element.setAttribute('width', this.size);
    this.element.setAttribute('height', this.size);
    this.element.setAttribute('x', this.x);
    this.element.setAttribute('y', this.y);
    this.element.setAttribute('fill', this.fill);
  }

  moveTo(position) {
    this.x = position.x;
    this.y = position.y;
    this.element.setAttribute('x', this.x);
    this.element.setAttribute('y', this.y);
  }
}

export default Square;
