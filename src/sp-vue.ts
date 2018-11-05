import Vue from 'vue';
import App from './App.vue';

Vue.prototype.$replace = function(arg1, arg2) {}



//Start point of the app
    var app = new Vue({
       el: '#app',
       render: h => h(App, {
       props: {
         urlAddress : String("test"),
      },
    }),
  });


