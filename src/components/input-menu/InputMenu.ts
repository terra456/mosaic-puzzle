import Control from '../control';
import PopUp from '../pop-up/pop-up';
import './style.scss';

class InputMenu extends PopUp {
  textInput: Control<HTMLInputElement>;
  onSaveInput: (value: string) => void;
  parentNode: Control<HTMLElement>;

  constructor (type: string, name: string, title: string, btn: string) {
    super();
    const modal = new Control(this.node, 'div', 'menu__conteiner', title);
    this.textInput = new Control<HTMLInputElement>(modal.node, 'input', 'input');
    this.textInput.node.type = type;
    this.textInput.node.name = name;
    const loginBtn = new Control(modal.node, 'button', 'btn', btn);
    loginBtn.node.onclick = this.loginBtnHandler;
  }

  loginBtnHandler = (): void => {
    if (this.textInput.node.value !== undefined) {
      this.onSaveInput(this.textInput.node.value);
      this.destroy();
    }
  };
}

export default InputMenu;
