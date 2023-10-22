import Control from '../control';
import MosaicField from '../mosaic-field/MosaicField';
import MosaicPreview from '../mosaic-preview/MosaicPreview';
import Palette from '../palette/Palette';
import './style.scss';

class Mosaic extends Control {
  color: string;
  mosaic: MosaicField;
  onEnd: () => void;
  constructor(parentNode: HTMLElement, mosaicArr: string[]) {
    super(parentNode, 'div', 'mosaic');
    const palette = new Palette(this.node);
    this.mosaic = new MosaicField(this.node, mosaicArr);
    this.mosaic.onEnd = () => this.onEnd();
    palette.setColor = (color: string) => {
      this.color = color;
      this.mosaic.setColor(this.color);
    };
  }

  showPreview(mosaicArr: string[]) {
    const preview = new MosaicPreview(this.node, mosaicArr);
    preview.node.classList.add('preview');
  }
}

export default Mosaic;
