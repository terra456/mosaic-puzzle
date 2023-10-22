import Control from '../components/control';
import InputMenu from '../components/input-menu/InputMenu';
import Menu from '../components/menu/Menu';
import MosaicField from '../components/mosaic-field/MosaicField';
import MosaicNew from '../components/mosaic-new/MosaicNew';
import Palette from '../components/palette/Palette';
import ChooseGame from '../components/choose-game/ChooseGame';
import Mosaic from '../components/mosaic/Mosaic';
import './style.scss';

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
    menu.loadGame = () => {
      menu.destroy();
      this.chooseGame();
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
      mosaic.onEnd = () => {
        mosaic.destroy();
        this.load();
      }
    };
  }

  chooseGame(): void {
    const gamePrevius = new ChooseGame(this.node);
    gamePrevius.selectGame = (mosaicArr: string[]) => {
      const mosaic = new Mosaic(this.node, mosaicArr);
      mosaic.showPreview(mosaicArr);
      mosaic.onEnd = () => {
        mosaic.destroy();
        this.load();
      }
    }
  }

}

export default App;