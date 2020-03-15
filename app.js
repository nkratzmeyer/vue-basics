new Vue({
    // This property tells Vue to which DOM element to render
    el: '#app',
    // Data properties that we can display and bind to
    data: {
        title: 'Welcome to Vue!',
        name: 'Big Boss',
        my_cool_class: 'cool'
    },

    // Our collection of custom methods which we can call from the view
    methods :{
        greet(){
            return `Hello ${this.name}`;
        }
    }
});