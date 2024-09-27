function x() {
  for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
x();  // consoles 6, 5 times



function x() {
  for (var i = 1; i <= 5; i++) {
    close = (x) => {
        setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
      close(i)
  }
}
x(); // 1,2,3,4,5 -> after 1 sec, 2 sec.....
