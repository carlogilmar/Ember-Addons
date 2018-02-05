import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  model: Ember.computed('data', function(){
    var data = this.get('data');
    return data;
  })
});
