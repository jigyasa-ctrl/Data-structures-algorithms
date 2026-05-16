const obj = {
    dev: "bfe",
    a: function () {
      return this.dev;
    },
    b() {
      return this.dev;
    },
    c: () => {
      return this.dev;
    },
    d: function () {
      return (() => {
        return this.dev;
      })();
    },
    e: function () {
      return this.b();
    },
    f: function () {
      return this.b;
    },
    g: function () {
      return this.c();
    },
    h: function () {
      return this.c;
    },
    i: function () {
      return () => {
        return this.dev;
      };
    },
  };
  
  console.log(obj.a()); // bfe
  console.log(obj.b()); // bfe
  console.log(obj.c()); // undefined
  console.log(obj.d()); // bfe
  console.log(obj.e());// bfe
  console.log(obj.f()()); // undefined
  console.log(obj.g()); // undefined
  console.log(obj.h()()); // undefined
  console.log(obj.i()());// bfe

//microstack

  console.log(1); // 1,2,3,4,7,5,6,9,8
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);