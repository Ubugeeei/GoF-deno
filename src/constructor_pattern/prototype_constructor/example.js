function Person(arg) {
	this.name = arg.name;
	this.age = arg.age;
}
Person.prototype.getName = function() {
	return this.name;
};

(function main() {
	const person = new Person({
		name: "John",
		age: 30,
	});

	console.log(
		"🚀 ~ file: example.js ~ line 16 ~ Person.prototype",
		Person.prototype
	);
	console.log("getName::result ->", person.getName());
})();
