import Control from '../control';
import './style.scss';

class Menu extends Control {
  newGame: () => void;
  loadGame: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main__menu');
    const newBtn = new Control(this.node, 'button', 'btn', 'new');
    newBtn.node.onclick = () => this.newGame();
    const loadBtn = new Control(this.node, 'button', 'btn', 'load');
    loadBtn.node.onclick = () => this.loadGame();
  }
}

export default Menu;