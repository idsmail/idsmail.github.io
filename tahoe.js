const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: (delay = 1000) => {
    console.log(this)
    setTimeout(() => {
      console.log(this)
      console.log(this.mountains.join(", "));
    }, delay);
  }
};
console.log(this)
//tahoe.print();

let [,,third] = ["first", "second", "koń"]

let value = "wartość";
function list() {
  console.log(this.value);
}

list()

const visitor = {
  count : 0,
  visit() {
    this.count ++
  },
  getVisited() {
    console.log(this.count)
  }
}

visitor.visit()
visitor.getVisited()

var obiekt = {
  value : '2',
  list
}

obiekt.list()
console.log(third)

console.log(fetch("localhost:8080/contracts/services/payments-public-api/versions/1.19.0_078c802/capabilities/rest"))

