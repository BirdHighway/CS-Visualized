import Rectangle from './Rectangle';

class StackItem {
  constructor(position, label) {
    this.namespace = 'http://www.w3.org/2000/svg';
    this.label = label;
    this.x = position.x;
    this.y = position.y;
    this.rectangleWidth = 200;
    this.rectangleHeight = 50;
    this.group = document.createElementNS(this.namespace, 'g');
    this.group.setAttribute('transform', `translate(${this.x}, ${this.y})`);
    this.rectangle = new Rectangle(
      {x: 0, y: 0},
      'yellow',
      this.rectangleWidth,
      this.rectangleHeight
    );
    this.group.appendChild(this.rectangle.element);
  }

  setLabel(text) {
    const textEl = document.createElementNS(this.namespace, 'text');
    textEl.setAttribute
  }
}

export default StackItem;
