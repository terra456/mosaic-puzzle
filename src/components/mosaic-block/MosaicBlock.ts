import Control from '../control';
import './style.scss';

class MosaicBlock extends Control {
  color: string;
  isRight: boolean;
  constructor(parentNode: HTMLElement, color: string) {
    super(parentNode, 'div', 'mosaic__block');
    this.node.style.background = color || 'grey';
    this.color = color;
    this.isRight = color === 'grey';
  }

  changeColor(color: string): void {
    this.color = color;
    this.node.style.background = color;
    this.isRight = color === this.color;
  }
}

export default MosaicBlock;
