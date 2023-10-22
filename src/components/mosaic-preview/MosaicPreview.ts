import Control from '../control';
import './style.scss';

class MosaicPreview extends Control {
  constructor(parentNode: HTMLElement, mosaic: string[]) {
    const size = Math.sqrt(mosaic.length);
    super(parentNode, 'div', `mosaic__field grid__${size}`);
    mosaic.map((el) => {
      const block = new Control(this.node, 'div', 'mosaic__block');
      block.node.style.background = el;
      return block;
    });
  }
}

export default MosaicPreview;
