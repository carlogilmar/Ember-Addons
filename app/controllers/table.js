import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteRecord (record) {
      console.log("controller");
      console.log(record);
    },
    sendTo:function(){
      console.log('controller aqui!');
    }
  }
});
