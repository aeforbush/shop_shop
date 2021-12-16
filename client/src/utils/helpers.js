export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + "s";
}

// The storeName—one of the three stores we created for the database—will be passed in as an argument in the idbPromise() function when we call it from a component.
export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to the database `shop-shop` with the version of 1
    const request = window.indexedDB.open("shop-shop", 1);

    // create variables to hold reference to the database, transaction (tx), and object store
    let db, tx, store;

    // if version has changed (or if this is the first time using the database), run this method and create the three object stores
    request.onupgradeneeded = function (e) {
      const db = request.result;

      // create object store for each type of data and set "primary" key index to be the `_id` of the data
      // 3 objectStores now, we'd like to provide the actual index value we want to use for looking up data. Because that index value will be the MongoDB _id property for each product or category, it makes sense to set the keyPath name to _id.
      db.createObjectStore("products", { keyPath: "_id" });
      db.createObjectStore("categories", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };

    // handle any errors with connecting
    request.onerror = function (e) {
      console.log("There was an error");
    };

    // on database open success || With this functionality in place, when the database connection opens successfully, we immediately save a reference of the database to the db variable.
    request.onsuccess = function (e) {
      // save a reference of the database to the db variable
      db = request.result;

      // open a new transaction do whatever we pass into `storeName` (must match one of the object store names)
      tx = db.transaction(storeName, "readwrite");

      // save a reference to that object store
      store = tx.objectStore(storeName);

      // if there's any errors, let us know
      db.onerror = function (e) {
        console.log("error", e);
      };

      // Above the tx.oncomplete event listener, add the following code to check which value we passed into the function as a method and perform that method on the object store:
      // Here we use a switch statement to check what the value of the method is.
      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No valid method");
          break;
      }

      // when the transaction is complete, close the connect
      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
