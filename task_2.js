function checkObjectKey (str, obj) {
   return str in obj
}

const obj = {
    city: 'Moscow',
    age: 35,
    name: 'Ivan'
};

console.log(checkObjectKey('age', obj))
