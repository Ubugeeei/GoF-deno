class People {
	private name!: string;
	private age!: number;
	private hobby!: string;

	// getter,setter...
	hello(): string {
		return "hello";
	}
	setName(name: string) {
		this.name = name;
	}
	setAge(age: number) {
		this.age = age;
	}
	setHobby(hobby: string) {
		this.hobby = hobby;
	}
}

class Director {
	private builder!: Builder;
	constructor(builder: Builder) {
		this.builder = builder;
	}

	construct(): void {
		this.builder.name("Ubugeeei");
		this.builder.age(21);
		this.builder.hobby("coding");
	}
}

interface Builder {
	name: (name: string) => void;
	age: (age: number) => void;
	hobby: (hobby: string) => void;

	getPeople: () => People;
}

class PeopleBuilder implements Builder {
	private people!: People;
	constructor() {
		this.people = new People();
	}
	name(name: string): void {
		this.people.setName(name);
	}
	age(age: number): void {
		this.people.setAge(age);
	}
	hobby(hobby: string): void {
		this.people.setHobby(hobby);
	}

	getPeople(): People {
		return this.people;
	}
}

(function main() {
	const builder = new PeopleBuilder();
	const director = new Director(builder);
	director.construct();
	const people = builder.getPeople();
	console.log(
		"🚀 ~ file: example.ts ~ line 68 ~ main ~ people",
		people
	);
})();
