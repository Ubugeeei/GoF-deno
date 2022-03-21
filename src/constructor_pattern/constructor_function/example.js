function _constructor(c) {
	Object.assign(this, c);
}

const instance = new _constructor({
	name: "John",
	age: 30,
	married: true,
	address: {
		city: "New York",
		street: "Wall Street",
	},
});
console.log("🚀 ~ file: example.js ~ line 6 ~ instance\n", instance, "\n");

// strictly
function Person(arg) {
	this.name = arg.name;
	this.age = arg.age;
	this.married = arg.married;
	this.address = arg.address;
}
const person = new Person({
	name: "John",
	age: 30,
	married: true,
	address: {
		city: "New York",
		street: "Wall Street",
	},
})
console.log("🚀 ~ file: example.js ~ line 32 ~ person\n", person, "\n")
