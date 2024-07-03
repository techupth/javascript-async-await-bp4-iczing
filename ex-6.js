// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

async function executeAsyncOperations() {
  try {
    // Execute getJohnProfile and log the result
    const johnProfile = await getJohnProfile();
    console.log(johnProfile);

    // Execute getJohnOrders and log the result
    const johnOrders = await getJohnOrders();
    console.log(johnOrders);
  } catch (error) {
    console.error('Error in executing async operations:', error);
  }
}

executeAsyncOperations();
