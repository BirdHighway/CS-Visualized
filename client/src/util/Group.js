import { getTransform } from './functions';
import SvgElement from './SvgElement';
import Text from './Text';

class Group extends SvgElement {
  constructor(position, label, width, height) {
    super();
    this.label = label;
    this.x = position.x;
    this.y = position.y;
    this.width = width;
    this.height = height;
    this.element = document.createElementNS(this.namespace, 'g')
    this.setAttributes([
      ['fill', 'yellow'],
      ['transform', getTransform(this.x, this.y)]
    ]);
    this.textNode = new Text(this.label, [this.width / 2, this.height / 2, 0, 5]);
    this.element.appendChild(this.textNode.element);
    this.transitionCallbacks = [];
    this.element.addEventListener('transitionend', () => {
      while(this.transitionCallbacks.length) {
        const cb = this.transitionCallbacks.pop();
        cb();
      }
    });
  }

  addShape(shape) {
    this.element.prepend(shape);
  }

  moveTo(position, callback = () => {}) {
    this.transitionCallbacks.push(callback);
    this.x = position.hasOwnProperty('x') ? position.x : this.x;
    this.y = position.hasOwnProperty('y') ? position.y : this.y;
    this.setAttributes([
      ['transform', getTransform(this.x, this.y)]
    ]);
    return this;
  }
}

export default Group;
