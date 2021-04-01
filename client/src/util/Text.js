import SvgElement from './SvgElement';

class Text extends SvgElement {
  constructor(string, xyValues) {
    super();
    this.element = document.createElementNS(this.namespace, 'text');
    this.string = string;
    this.x = xyValues[0];
    this.y = xyValues[1];
    this.dx = xyValues[2];
    this.dy = xyValues[3];
    this.setAttributes([
      ['stroke', 'black'],
      ['x', this.x],
      ['y', this.y],
      ['dx', this.dx],
      ['dy', this.dy]
    ]);
    this.textNode = document.createTextNode(this.string);
    this.element.appendChild(this.textNode);
  }
}

export default Text;
