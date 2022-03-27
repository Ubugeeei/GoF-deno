function _constructor(c) {
	Object.assign(this, c);
}

function Person(arg) {
	this.name = arg.name;
	this.age = arg.age;
	this.married = arg.married;
	this.address = arg.address;
}

(function main() {
	const instance = new _constructor({
		name: "John",
		age: 30,
		married: true,
		address: {
			city: "New York",
			street: "Wall Street",
		},
	});
	console.log(
		"🚀 ~ file: example.js ~ line 23 ~ instance\n",
		instance,
		"\n"
	);

	const person = new Person({
		name: "John",
		age: 30,
		married: true,
		address: {
			city: "New York",
			street: "Wall Street",
		},
	});
	console.log(
		"🚀 ~ file: example.js ~ line 38 ~ person\n",
		person,
		"\n"
	);
})();
