class Group {
  constructor(position) {
    this.namespace = 'http://www.w3.org/2000/svg';
    this.x = position.x;
    this.y = position.y;
    this.el = document.createElementNS(this.namespace, 'g');
    this.el.setAttribute('fill', 'yellow');
    this.el.setAttribute('transform', 'translate(' + this.x + ', ' + this.y + ')');
  }

  addShape(shape) {
    this.el.append(shape);
  }

  addText(string) {
    this.textEl = document.createElementNS(this.namespace, 'text');
    this.textEl.setAttribute('stroke', 'black');
    this.textEl.setAttribute('x', '25');
    this.textEl.setAttribute('y', '25');
    this.textEl.setAttribute('dy', '5');
    this.textNode = document.createTextNode(string);
    this.textEl.appendChild(this.textNode);
    this.el.appendChild(this.textEl);
  }

  moveTo(position) {
    this.x = position.x;
    this.y = position.y;
    this.el.setAttribute('transform', 'translate(' + this.x + ', ' + this.y + ')');
  }
}

export default Group;
