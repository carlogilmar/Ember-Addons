import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var e1= { id:1, name:"carlogilmar", score:10 };
    var e2= { id:2, name:"carlogilmar", score:10 };
    var e3= { id:3, name:"carlogilmar", score:10 };
    var e4= { id:4, name:"carlogilmar", score:10 };
    var e5= { id:5, name:"carlogilmar", score:10 };
    var e6= { id:6, name:"carlogilmar", score:10 };
    var e7= { id:7, name:"carlogilmar", score:10 };
    return [e1, e2, e3, e4, e5, e6, e7];
  }
});
