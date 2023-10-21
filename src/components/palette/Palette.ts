import Block from '../block/Block';
import Control from '../control';
import { colors } from '../../utils/colors';
import './style.scss';

class Palette extends Control {
  setColor:(color: string) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'mosaic__palette');
    const colourBlocs = colors.map((el) => {
      const block = new Block(this.node, el);
      if (el === 'grey') {
        block.node.classList.add('active');
      }
      block.node.onclick = () => {
        colourBlocs.forEach((el) => {
          el.node.classList.remove('active');
        });
        block.node.classList.add('active');
        this.setColor(el);
      };
      return block;
    });
  }
}

export default Palette;
