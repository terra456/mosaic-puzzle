import Control from '../control';
import MosaicBlock from '../mosaic-block/MosaicBlock';
import './style.scss';

class MosaicField extends Control {
  blocs: MosaicBlock[];
  color: string;
  constructor(parentNode: HTMLElement, mosaic: Array<string[]>) {
    super(parentNode, 'div', `mosaic__field grid__${mosaic.length}`);
    this.blocs = mosaic.flat().map((el, i) => {
      const block = new MosaicBlock(this.node, el);
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
      console.log('win');
    } else {
      console.log(this.blocs);
    }
  }
 
}

export default MosaicField;
