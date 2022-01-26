 

**What is Vue $Emit Function?**

## Introduction

While It is strongly advised that you record all events emitted by each of your components., Vue $emit is a function that lets us emit, or send, custom events from a child component to its parent. because It is used to notify the parent component that something changed, It facilitates communication not only between the child and parent components, but also between sibling components who are separated., and it is the best way to trigger certain events

## Goal

Vue $emit can be used in a variety of ways in your code. But In this article, I'm going to explain what Vue Emit is and We'll explore how to use the vue $emit() function to handle custom emitted events. with a code example as well.

## Prerequisites

This article assumes you have a basic understanding of Vue JS. But you don't need any prior experience handling custom emitted events as this tutorial will give you an in-depth explanation of what  vue $emit() function is and how to handle custom emitted events 

**This article will cover the following:**

* Brief Intro to Vue Js
* Installation and Setup
* What is Vue $Emit?
* How does Vue $Emit work?
* Handling Custom events with vue $emit function
* Conclusion

## Brief Intro to Vue Js

Vue is a user interface framework written in JavaScript. Its basic element is mostly concerned with the view layer, and it is quite simple to comprehend. 

**Installation and Setup**

The preceding approach covers how to set your project or install Vue js. since we won't be working with any library in our application, let's move on to the installation of Vue Js.

Now create your new Vue project with the following command:

vue create vue-custom-event

After that, navigate to the project in your terminal and start the Vue development server as follows:

Npm run serve

This will start the development server for our Vue project at the following port:

http://localhost:8080/

Here is the output of our application

**What is Vue $Emit?**

**Vue** $**emit** is a function that lets us **emit**, or **send**, **custom events** from a child component to its parent. In a standard ***Vue*** flow,  it is the best way to trigger certain events.

## How does Vue $Emit work?

The **$emit** function, to put it another way, allows us to send functions as props. Let's start by looking at how to create a custom event in Vue.js and then how to listen to it. In Vue.js, The following is the syntax for firing an event:

```
this.$emit('eventName')

```
We must be cautious when giving the event a name in this syntax since we will later listen to the event if the name is the same. In Vue.js, we may listen to this event similar to a click event. Consider:

 <button v-on:click="displayContent">See More</button>

 We can write any expression in the inverted commas as well as a function. So let’s try an example to better understand it.

## Example One: Creating a Blog Post

Suppose we have a Component named “BlogPage” which includes a child component in it with the name of “BlogContent” to which we are passing the blog title and content using props.
```HTML
<template>
  <section id="BlogPage">
    <BlogContent
          title="Introduction to CSS"
          content="CSS is a stylesheet language used to style the structure of our document"
        />
  </section>
</template>
```

In the BlogContent component which is the child component, we are using props to show the title, and content of our blog in the  h1 and p tag.

```HTML
<template>
  <section id="BlogPage">
    <h1 class="title-text">{{ title }}</h1>
    <p class="content-text">{{ content }}</p>
  </section>
</template>
```

```JAVASCRIPT
<script>
export default {
  name: "BlogContent",
  props: ["title", "content"],
};

</script>
```


Now after having these two components set up. Let’s display more of our content to our readers. In order to say hello back, we will first create a button, and at the click of that button, we will call the displayContent function which will show us more of the content you want to read about. After creating the button, the child component’s HTML which is the BlogContent would be like this

```HTML
<template>
  <section id="BlogPage">
    <h1 class="title-text">{{ title }}</h1>
    <p class="content-text">{{ content }}</p>
    <button v-on:click="displayContent" class="text-link">See More</button>
  </section>
</template>
```
Next, we create a function in our method object displayContent which will show more of the content the readers wants to see and then give the event a name displayData and the data we want it to display in our blog.That's all for trigering an event in Vue Js.


```JS
<script>
export default {
  name: "BlogContent",
  props: ["title", "content"],
  data() {},
  methods: {
    displayContent() {
      this.$emit("displayData", this.title);
    },
  },
};
```
Now, we have seen how to triger an event in the above code example but something  is missing we need to listen to the event.In this example we will create a function fetchData which will get the result of our data. next we will assign passed string to the variable named result

<script>
export default {
  name: "BlogPage",
  components: {
    BlogContent,
  },
  data: () => ({
    result: '',
  }),
  methods: {
    fetchData(data) {
      this.result = data;
    },
  },
};
</script>

Next, we will bind the result variable in the template somewhere to see our data.

<h4 class="result-text">Result: {{ result }}</h4>

Now, let's check out what it looks like on the browser

Output



In the output, we can see the prop is displaying the title and content of our blog.Now if we click on the button see more it displays the data which is the content title.

Check out the demo

**Conclusion**

This article includes a step-by-step example with a brief explanation to help you understand it.