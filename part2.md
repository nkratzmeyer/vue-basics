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
// app.js
increaseXP(amount){
    this.XP += amount;
}
```

Now let's add the code to call this method in our view. Under our existing code, add this:

```html
<!--  index.html -->
<label>XP: {{XP}}</label>
<!-- Handle events with custom method - Shorthand -->
<button @click="increaseXP(20)">+</button>
```

Now if you check out the rendered page, you should be able to click the buttons to maniplulate the data in our model.

## Conditional Rendering

Now let's check out how to do conditional rendering. That is, we will render certain html elements only if some condition on our model is true. Let's add a **hasShield** data property to our model:

```javascript
// app.js
data: {
  //... other properties
  hasShield: true;
}
```

Ok we now have a boolean property **hasShield** that we'll use as our condition. We use the **v-if** directive for conditional rendering as shown below:

```html
<!-- index.html -->
<!-- this <p> element will only be rendered if hasShield is true in our model -->
<p v-if="hasShield">{{ name }} has a shield!</p>
```

If you view the page now, you should see the `<p>` tag rendered. If you change **hasShield** to false in the model, you'll see that the `<p>` tag is not rendered. Cool right? Let's expand this just a little to use the **v-else** directive to display something else when **hasShield** is false. Add another `<p>` tag so that we have the following:

```html
<!-- this <p> element will only be rendered if hasShield is true in our model -->
<p v-if="hasShield">{{ name }} has a shield!</p>
<p v-else>{{ name }} does NOT have a shield!</p>
```

The first tag will be rendered if **hasShield** is true, otherwise the second will be rendered. There is also a **v-else-if** directive that functions exactly as you would expect.

## Looping

OK let's do one more thing for this part of the tutorial. Let's demonstrate how to do simple looping with Vue. First, we'll need an array to loop over in our model. Add one to our data object like this:

```javascript
// app.js
data: {
  // ... other items
  inventory: [
    "Simple Belt",
    "Simple Gloves",
    "Sword of Fire",
    "Helmet of Healing"
  ];
}
```

Now we have a simple array of "inventory" items that we can loop over and display in our view. We do so by using the **v-for** directive like so:

```html
<!-- index.html -->
<!-- Display our inventory items using v-for -->
<h2>Inventory Items</h2>
<ul>
  <li v-for="item in inventory">
    {{ item }}
  </li>
</ul>
```

In the snippet above, we are telling Vue to render a new `<li>` element for each item in our inventory array. Notice that **"item"** is the name that we are giving to each element of the array and that we use that name to refer to the element in the subsequent block of code. Our array could have just as easily been an array of objects. In this case, we would use dot notation to refer to properties on each item like so:

```html
<!-- Pretend that our data array is an array of objects -->
<li v-for="item in inventory">
  {{ item.propertyName }}
</li>
```

## Conclusion

In this post I've gone over handling events, conditional rendering, and looping using VueJS. Honestly, that pretty much covers the very, very basics of using Vue. I'm very much open to requests for further explanation/examples on the topics covered in these two articles. Barring that, I'll probably jump into components and using Vue the "right way". Hope this was informative and comments/critiques/requests are always welcome!
