import Control from '../control';
import MosaicField from '../mosaic-field/MosaicField';
import Palette from '../palette/Palette';
import './style.scss';

class Mosaic extends Control {
  color: string;
  mosaic: MosaicField;
  constructor(parentNode: HTMLElement, mosaicArr: Array<string[]>) {
    super(parentNode, 'div', 'mosaic');
    const palette = new Palette(this.node);
    this.mosaic = new MosaicField(this.node, mosaicArr);
    palette.setColor = (color: string) => {
      this.color = color;
      this.mosaic.setColor(this.color);
    };
  }
}

export default Mosaic;
