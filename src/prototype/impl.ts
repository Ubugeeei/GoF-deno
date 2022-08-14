class PrototypePatternClass {
	public name: string;
	public age: number;
	public todos: string[];
	constructor(name: string, age: number, todos: string[]) {
		this.name = name;
		this.age = age;
		this.todos = todos;
	}

	addTodo(todo: string) {
		this.todos = [...this.todos, todo];
	}

	clone(): PrototypePatternClass {
		const cp = Object.getPrototypeOf(this);
		const instance: PrototypePatternClass = Object.create(cp);
		instance.name = this.name;
		instance.age = this.age;
		instance.todos = this.todos;
		return instance;
	}
}

import { assertEquals, assertNotEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("prototype", () => {
	const instance = new PrototypePatternClass("John", 30, [
		"todo1",
		"todo2",
	]);
	const instance2 = instance.clone();
	instance2.addTodo("todo3");
	const instance3 = instance.clone();

	assertEquals(instance.name, instance2.name);
	assertEquals(instance.age, instance2.age);		
	assertNotEquals(instance.todos, instance2.todos);
	assertEquals(instance.todos, instance3.todos);
})
