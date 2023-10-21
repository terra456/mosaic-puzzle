import Control from '../control';
import InputMenu from '../input-menu/InputMenu';
import MosaicField from '../mosaic-field/MosaicField';
import Mosaic from '../mosaic/Mosaic';

class MosaicNew extends Mosaic {
  colorArr: string[];
  constructor(parentNode: HTMLElement, fieldSize: number) {
    const mosaicArr = new Array(fieldSize);
    mosaicArr.fill(new Array(fieldSize));
    mosaicArr.forEach((el) => {
      el.fill('transparent');
    });
    
    super(parentNode, mosaicArr);
    
    const saveBtn = new Control<HTMLButtonElement>(this.node, 'button', 'btn', 'save');
    saveBtn.node.disabled = true;

    this.mosaic.checkWin = () => {
      if (this.mosaic.blocs.every((el) => el.color !== 'transparent')) {
        this.colorArr = this.mosaic.blocs.map((el) => el.color);
        saveBtn.node.disabled = false;
      }
    };
    
    saveBtn.node.onclick = () => {
      const newGamePopUp = new InputMenu('text', 'name', 'Укажите имя игры', 'сохранить');
      newGamePopUp.textInput.node.defaultValue = 'newGame';
      newGamePopUp.onSaveInput = (value: string) => {
        localStorage.setItem(value, JSON.stringify(this.colorArr));
      };
    }
  }
}

export default MosaicNew;