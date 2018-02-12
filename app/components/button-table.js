import Component from '@ember/component';

export default Component.extend({
  click(){
    console.log("Component aqui!");
    this.sendAction('sendTo', 1);
  }
});
