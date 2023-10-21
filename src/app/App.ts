import Control from '../components/control';
import InputMenu from '../components/input-menu/InputMenu';
import Menu from '../components/menu/Menu';
import MosaicField from '../components/mosaic-field/MosaicField';
import MosaicNew from '../components/mosaic-new/MosaicNew';
import Palette from '../components/palette/Palette';

class App extends Control{
  color: string;
  constructor() {
    super(document.body, 'main', 'main');
  }

  load(): void {
    const menu = new Menu(this.node);
    menu.newGame = () => {
      menu.destroy();
      this.newGame();
    }
  }

  newGame(): void {
    const newGamePopUp = new InputMenu('number', 'newGame', 'Укажите размер поля', 'начать');
    newGamePopUp.textInput.node.defaultValue = '10';
    newGamePopUp.textInput.node.min = '10';
    newGamePopUp.textInput.node.max = '20';
    newGamePopUp.textInput.node.step = '2';
    newGamePopUp.onSaveInput = (value: string) => {
      const mosaic = new MosaicNew(this.node, Number(value));
    };
  }
}

export default App;