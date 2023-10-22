import { draws } from "../../utils/draws";
import Control from '../control';
import MosaicPreview from "../mosaic-preview/MosaicPreview";
import './style.scss';

class ChooseGame extends Control {
  selectGame: (mosaicArr: string[]) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'mosaic__list');
    Object.keys(draws).forEach((key) => {
      const prev = new MosaicPreview(this.node, draws[key]);
      prev.node.onclick = () => {
        this.selectGame(draws[key]);
        this.destroy();
      }
    })
  }
}

export default ChooseGame;
