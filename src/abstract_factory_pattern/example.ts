class Employee {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	say() {
		console.log("I am employee " + this.name);
	}
}

class EmployeeFactory {
	create(name: string) {
		return new Employee(name);
	}
}

class Vendor {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	say() {
		console.log("I am vendor " + this.name);
	}
}

class VendorFactory {
	create(name: string) {
		return new Vendor(name);
	}
}

const persons = [];
const employeeFactory = new EmployeeFactory();
const vendorFactory = new VendorFactory();
persons.push(employeeFactory.create("Joan DiSilva"));
persons.push(employeeFactory.create("Tim O'Neill"));
persons.push(vendorFactory.create("Gerald Watson"));
persons.push(vendorFactory.create("Nicole McNight"));

console.log(persons);
persons.forEach((person) => {
	person.say();
});
