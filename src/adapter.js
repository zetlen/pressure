class Adapter{

  constructor(element){
    this.element = element;
    this.el = element.element;
    this.block = element.block;
    this.pressed = false;
    this.deepPressed = false;
  }

  add(event, set){
    this.el.addEventListener(event, set, false);
  }

  remove(event, set){
    this.el.removeEventListener(event, set);
  }

  setPressed(boolean){
    this.pressed = boolean;
  }

  setDeepPressed(boolean){
    this.deepPressed = boolean;
  }

  // prevent the default action of text selection, "peak & pop", and force touch special feature
  preventDefault(event){
    if(getConfig('preventDefault', this.element.options) === true){
      event.preventDefault();
      this.el.style.webkitTouchCallout = "none";
      this.el.style.userSelect = "none";
      this.el.style.webkitUserSelect = "none";
      this.el.style.MozUserSelect = "none";
    }
  }

}
