import Component from '@ember/component';

export default Component.extend({


  actions:{
    sendTo:function(e){
      console.log("Saludos");
      console.log(e);
      this.sendAction('sentTo',e);
      debugger;
    }
  }

});
