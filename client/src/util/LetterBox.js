import Square from './Square';

class LetterBox {
  constructor(position) {
    this.size = 50;
    this.namespace = 'http://www.w3.org/2000/svg';
    this.x = position.x;
    this.y = position.y;
    this.group = document.createElementNS(this.namespace, 'g');
    this.group.setAttribute('transform', 'translate(' + this.x + ', ' + this.y + ')');
    this.square = new Square(
      {x: 0, y: 0},
      'yellow',
      this.size
    );
    this.group.appendChild(this.square.element);
  }

  setLabel(text) {
    const textEl = document.createElementNS(this.namespace, 'text');
    textEl.setAttribute('stroke', 'black');
    textEl.setAttribute('x', this.size / 2);
    textEl.setAttribute('y', this.size / 2);
    textEl.setAttribute('dy', 5);
    const textString = document.createTextNode(text);
    textEl.appendChild(textString);
    this.group.appendChild(textEl);
    return this;
  }

  moveTo(position) {
    console.log('moving');
    this.x = position.x;
    this.y = position.y;
    this.group.setAttribute('transform', 'translate(' + this.x + ', ' + this.y + ')');
    return this;
  }

  moveLeft() {
    this.x = this.x - 100;
    this.y = this.y;
    this.group.setAttribute('transform', 'translate(' + this.x + ', ' + this.y + ')');
    return this;
  }

}

export default LetterBox;
