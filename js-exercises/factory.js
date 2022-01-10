// Instead of using 'new' to create an object, we can use factory functions 
// Factory functions simply set it up and return the new object when the function is called 

const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return {name, age, sayHello};
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); 

jeff.sayHello(); 