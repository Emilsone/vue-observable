import Vue from "vue";

export const  numberDisplay= Vue.observable({
    count: 0
});

export const decrementCounter = () =>{
    numberDisplay.count--;
};