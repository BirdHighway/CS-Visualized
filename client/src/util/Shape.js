class Shape {

  constructor(position, fill) {
    this.namespace = 'http://www.w3.org/2000/svg';
    this.x = position.x;
    this.y = position.y;
    this.fill = fill;
  }

}

export default Shape;
