Welcome to to the second part of my Vue Basics tutorial. In the first part, we covered how to set up a simple project, display data, use custom methods, and do simple databinding. The code from the last part is located [here](https://github.com/nkratzmeyer/vue-basics) in the **Part1** branch. In this part, we'll cover using events, conditional rendering, and looping in our view.

### Handling Events

The first way we can handle events is inline in the view. To demonstrate this, let's add some more properties to our data object that we can play with. Continuing from previous code, it looks like this:

```javascript
// app.js
    // Data properties that we can display and bind to
    data: {
        title: 'Welcome to Vue!',
        name: 'Big Boss',
        my_cool_class: 'cool',
        strength: 1,
        dexterity: 2,
        XP : 1
    }
```

We've added **strength** and **dexterity** properties that we'll display and manipulate. In index.html, let's first set those up to be displayed as we did before. We'll also set up some buttons to manipulate them. Below our existing code, add the following.

```html
<!-- index.html -->
<label>Strength: {{strength}}</label>
<!-- Handle events inline javascript -->
<button v-on:click="strength++">+</button>
<button v-on:click="strength--">-</button>
<br />
<label>Dexterity: {{dexterity}}</label>
<!-- Handle events inline javascript - shorthand -->
<button @click="dexterity++">+</button>
<button @click="dexterity--">-</button>
```

On the labels, we are just rendering the data in our model as before. The interesting bits are the buttons. Using the **v-on** directive, we are able to handle events for the button. In this case, we're handling the **click** event with some simple inline javascript. Notice also that the shorthand for **v-on** is simply the **@** symbol followed by the event that you want to handle. We can also call custom methods on our model with this same mechanism. Let's do that now. Add the following to our **methods** object in **app.js**:

```javascript
  increaseXP(amount){
            this.XP += amount;
        }
```

```html

```

## Custom Methods

## Conclusion
