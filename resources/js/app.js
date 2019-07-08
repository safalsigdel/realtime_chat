
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vuex from 'vuex'

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('/components/ExampleComponent.vue').default);
Vue.component('chat-messages', require('./components/ChatMessages.vue').default);
Vue.component('chat-form', require('./components/ChatForm.vue').default);
Vue.component('message-count', require('./components/MessageCount.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(Vuex);

const app = new Vue({
    el: '#app',

    data: {
        messages: []
    },

    created() {
        this.fetchMessages();

			Echo.private('chat')
			  .listen('MessageSent', (e) => {
			    this.messages.unshift({
			      message: e.message.message,
			      user: e.user
			    });


                  if (! ('Notification' in window)) {
                      alert('Web Notification is not supported');
                      return;
                  }

                  Notification.requestPermission( permission => {
                      let notification = new Notification('New post alert!', {
                          body: e.message.message, // content for the alert
                          icon: "https://pusher.com/static_logos/320x320.png" // optional image url
                      });

                      // link to page on clicking the notification
                      notification.onclick = () => {
                          window.open(window.location.href);
                      };
                  });

			  });
    },

    methods: {
        fetchMessages() {
            axios.get('/messages').then(response => {
                this.messages = response.data;
            });
        },

        addMessage(message) {
            this.messages.unshift(message);

            axios.post('/messages', message).then(response => {
              console.log(response.data);
            });
        }
    }
});
