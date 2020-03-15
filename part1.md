I have recently starting learning a bit about VueJS. I’d like to share what I’ve learned in order to help others get started with Vue as well as to solidify my own understanding. This tutorial assumes familiarity with HTML, CSS, and JavaScript. You will also need some sort of local development server such as [live-server](https://www.npmjs.com/package/live-server) So without further ado, let’s get started.

### Setting up the Project

Navigate into your chosen project directory and create 2 files, **index.html** and **app.js**, with the following content.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Import VueJS from CDN. In a production app, we wouldn't do 
    it this way. Instead, we would download the libraries locally or 
    use vue-cli -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
      body {
        width: 80%;
        margin: auto;
      }
    </style>
    <title>Vue Basics</title>
  </head>

  <body>
    <!-- This will be our "root" element for Vue
    Everything that we do with Vue will be rendered inside
    this tag. 
     -->
    <div id="app">
      <!-- In app.js, we are giving the Vue engine a data object. 
      One of the properties of this object is :title. The following 
      line tells the Vue engine to output that value -->
      <h1>{{ title }}</h1>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

```javascript
// app.js

// Here we are initializing the Vue engine, telling it where 
// we want to render, and giving it some data
new Vue({
  // the "el" property tells the Vue engine where in the DOM we 
  //want to render our content. Below, we are telling Vue to use 
  // the element with id=app
  el: "#app",
  // The "data" property is where we give the Vue engine our data. 
  // In this case, we're giving a title
  data: {
    title: "Welcome to Vue!"
  }
});
```

Now fire up your dev server and navigate to the proper url in your browser. Live-server should start at http://localhost:5500/. Hopefully the comments in the code are enough show you what's going on so far. In our HTML, the double brackets `{{}}` lets us access data in our Vue instance. Now let's do something a little more interesting.

## Custom Methods

We can create custom methods for the Vue engine to use. Let's see this in action now. In app.js, let's add another data property and a method as shown below.

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Welcome to Vue!",
    name: "Big Boss"
  },

  methods: {
    greet() {
      return `Hello ${this.name}`;
    }
  }
});
```

Now let's use the method in our View like this:

```html
<!-- For brevity I'm only showing the "root" element where Vue is 
rendering -->
<div id="app">
  <h1>{{ title }}</h1>
  <h2>{{ greet() }}</h2>
</div>
```

Again, we can call methods in our Vue instance inside the double brackets. In your browser, you should see "Hello Big Boss" rendered to the page. Now let's check out simple data binding.

## Data binding with v-bind

With data-binding, we can bind our view elements to model properties such that when our model updates, our view is updated automatically. This is a one-way binding from model to view. We'll check out two-way binding shortly. For now, let's do a simple one-way binding to bind an element's class attribute to a model property. We do this with the **v-bind directive**. In **app.js**, update our data object as shown below.

```javascript
// app.js
data: {
    title: 'Welcome to Vue!',
    name: 'Big Boss',
    my_cool_class: 'cool'
}
```

In **index.html**, below our existing code (still inside our "app" div), let's make an **h1** tag and bind its class to the "my_cool_class" property.

```html
<!-- Data-binding -->
<!-- Bind our class attribute to a model property -->
<h1 v-bind:class="my_cool_class">Hi there {{ name }}</h1>
```

In our inline css, add a class selector called **.cool** and style it however you like so that you can see the effects of what we've done. If you inspect the above h1 element in the DOM after it has been rendered, you'll see that it has a class of "cool". Side note: you can use shorthand syntax for the **v-bind** directive, which is just the **:** followed by the attribute that you want to bind to as shown below:

```html
<!-- Data-binding (shorthand) -->
<h1 :class="my_cool_class">Hi there {{ name }}</h1>
```

## Two-way binding

OK so that was pretty cool. We were able to bind a view attribute to a data property, but it was only one-way. Now let's do a two-way binding on our **name** property by using the **v-model** directive. In index.html, add the following to our app div.

```html
<!-- Two-way binding with v-model -->
<input type="text" v-model:value="name" />
```

When you view in your browser, you should see that the input box already contains the value "Big Boss". When you change this value, you should see the values in our previous **h1** tags updated as well. How cool is that?! The correct answer is VERY cool. The **v-model** directive tells Vue to bind to a specific property and to update that property when we change it in the view. I encourage you to experiment further with this. Maybe create another style selector in our internal css, and play around with two-way binding to **my_cool_class**.

## Conclusion

In this post I've gone over the very basics of using VueJS. I plan to continue this series and cover at least more basic stuff like:

- Handling events
- Conditional rendering
- Looping

and possibly more so stay tuned. Hope this was helpful and comments/critiques/requests are always welcome!
