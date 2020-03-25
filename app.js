new Vue({
    // This property tells Vue to which DOM element to render
    el: '#app',
    // Data properties that we can display and bind to
    data: {
        title: 'Welcome to Vue!',
        name: 'Big Boss',
        my_cool_class: 'cool',
        strength: 1,
        dexterity: 1,
        XP: 1,
        hasShield : true,
        inventory : ['Simple Belt', 'Simple Gloves', 'Sword of Fire', 'Helmet of Healing']
    },

    // Our collection of custom methods which we can call from the view
    methods :{
        greet(){
            return `Hello ${this.name}`;
        },
        increaseXP(amount){
            this.XP += amount;
        }
    }
});