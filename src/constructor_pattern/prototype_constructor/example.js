function Person(arg) {
	this.name = arg.name;
	this.age = arg.age;
}
Person.prototype.getName = function() {
	return this.name;
};

const person = new Person({
	name: "John",
	age: 30,
});

console.log(
	"🚀 ~ file: example.js ~ line 6 ~ prototype",
	Person.prototype
);
console.log("getName::result ->", person.getName());
