import Control from '../control';
import MosaicBlock from '../mosaic-block/MosaicBlock';
import PopupMenu from '../popup-menu/PopupMenu';
import './style.scss';

class MosaicField extends Control {
  blocs: MosaicBlock[];
  color: string;
  onEnd: () => void;
  constructor(parentNode: HTMLElement, mosaic: string[]) {
    super(parentNode, 'div', `mosaic__field grid__${Math.sqrt(mosaic.length)}`);
    this.blocs = mosaic.map((el, i) => {
      const block = new MosaicBlock(this.node, el);
      block.node.style.background = 'grey';
      block.node.onclick = () => {
        block.changeColor(this.color);
        this.checkWin();
      };
      return block;
    });
    this.color = 'grey';
  }

  setColor(color: string): void {
    this.color = color;
  }

  checkWin() {
    if (this.blocs.every((el) => el.isRight)) {
      const modal = new PopupMenu('Поздравляем, вы выиграли', 'Продолжить');
      modal.onAfterBtn = () => this.onEnd()
    }
  }
 
}

export default MosaicField;
