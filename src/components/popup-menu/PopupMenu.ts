import Control from '../control';
import PopUp from '../pop-up/pop-up';
import './style.scss';

class PopupMenu extends PopUp {
  onAfterBtn: () => void;

  constructor (title: string, btn: string) {
    super();
    const modal = new Control(this.node, 'div', 'menu__conteiner', title);
    const afterBtn = new Control(modal.node, 'button', 'btn', btn);
    afterBtn.node.onclick = this.btnHandler;
  }

  btnHandler = (): void => {
    this.onAfterBtn();
    this.destroy();
  };
}

export default PopupMenu;