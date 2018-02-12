import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){

    var columns =[
      {propertyName: 'firstName'},
      {propertyName: 'lastName'},
      {propertyName: 'age'},
      {propertyName: 'city'},
      {
        "title": "Componente",
        "component": "button-table"
      }
    ]

    var data = [
      {id:1, firstName:'aberlado1', lastName:'bucanas1', age:20, city:'cdmx'},
      {id:2, firstName:'aberlado2', lastName:'bucanas2', age:22, city:'df'},
      {id:3, firstName:'aberlado3', lastName:'bucanas3', age:23, city:'cdmx'},
      {id:4, firstName:'aberlado4', lastName:'bucanas4', age:20, city:'cdmx'},
      {id:5, firstName:'aberlado5', lastName:'bucanas5', age:22, city:'df'},
      {id:6, firstName:'aberlado6', lastName:'bucanas6', age:23, city:'cdmx'},
      {id:7, firstName:'aberlado7', lastName:'bucanas7', age:20, city:'cdmx'},
      {id:8, firstName:'aberlado8', lastName:'bucanas8', age:22, city:'df'}
    ]

    return RSVP.hash({
      data:data,
      columns:columns
    });
  },
  actions:{
    sendTo:function(){
      console.log("Hola! Recibi el component en el rpoute :D");
    }
  }
});
