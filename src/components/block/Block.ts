import Control from '../control';

class Block extends Control {
  constructor(parentNode: HTMLElement, color: string) {
    super(parentNode, 'div', 'mosaic__block');
    this.node.style.background = color;
  }
}

export default Block;
