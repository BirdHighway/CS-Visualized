import SvgElement from './SvgElement';

class Shape extends SvgElement {

  constructor(position, fill) {
    super();
    this.x = position.x;
    this.y = position.y;
    this.fill = fill;
  }

}

export default Shape;
