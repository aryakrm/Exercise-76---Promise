let p = new Promise((resolve, reject) => {
  let number = 15;
  if (number > 10) {
    resolve(number);
  } else {
    reject("Error");
  }
});

p.then((message) => {
  console.log(message);
}).catch((err) => {
  console.log(err);
});
