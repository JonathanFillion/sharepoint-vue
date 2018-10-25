import Vue from 'vue';
import App from './App.vue';


//Start point of the app
    var app = new Vue({
       el: '#app',
       render: h => h(App, {
       props: {
         urlAddress : String("test"),
      },
    }),
  });


