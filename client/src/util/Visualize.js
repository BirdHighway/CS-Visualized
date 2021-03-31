
class Visualizer {

  constructor() {
    this.namespace = 'http://www.w3.org/2000/svg';
  }

  square(size, color) {
    const square = document.createElementNS(this.namespace, 'rect');
    square.setAttribute('width', size);
    square.setAttribute('height', size);
    square.setAttribute('x', 10);
    square.setAttribute('y', 10);
    square.setAttribute('fill', color);
    return square;
  }

}

const Visualize = new Visualizer();
export default Visualize;
