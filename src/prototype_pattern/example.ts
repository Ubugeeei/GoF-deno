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

(function main() {
	const instance = new PrototypePatternClass("John", 30, [
		"todo1",
		"todo2",
	]);

	const instance2 = instance.clone();
	instance2.addTodo("todo3");

	const instance3 = instance.clone();

	console.table({ instance, instance2, instance3 });
	/*
	┌───────────┬────────┬─────┬───────────────────────────────┐
	│ (idx)      │ name    │ age │ todos                            │
	├───────────┼────────┼─────┼───────────────────────────────┤
	│ instance   │ "John"  │  30 │ [ "todo1", "todo2" ]             │
	│ instance2  │ "John"  │  30 │ [ "todo1", "todo2", "todo3" ]    │
	│ instance3  │ "John"  │  30 │ [ "todo1", "todo2" ]             │
	└───────────┴────────┴─────┴───────────────────────────────┘
	*/
})();
