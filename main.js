// Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }

// const circle = createCircle(1);

// Condtructor function
// function Circle(radius) {
//   console.log('this', this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }

// console.log(Circle.name);

// const another = new Circle(1);

// Primitive type
let number = 10;

function increase(number) {
  number++;
}
increase(number);
console.log(number);

// Reference type
let obj = { value: 10 };

function increment(obj) {
  obj.value++;
}
increment(obj);
console.log(obj);
