interface State {
	method1(): void
	method2(): void
}

class State1 implements State {
	private static instance: State1;
	private constructor() { }
	static getInstance() {
		if (!State1.instance) {
			State1.instance = new State1();
		}
		return State1.instance;
	}

	method1() {
		console.log('method1 on State1');
	}

	method2() {
		console.log('method2 on State1');
	}
}

class State2 implements State {
	private static instance: State2;
	private constructor() { }
	static getInstance() {
		if (!State2.instance) {
			State2.instance = new State2();
		}
		return State2.instance;
	}

	method1() {
		console.log('method1 on State2');
	}

	method2() {
		console.log('method2 on State2');
	}
}


class Context {
	state: State1 | State2;
	constructor() {
		this.state = State1.getInstance();
	}

	setState(state: State1 | State2) {
		this.state = state;
	}
	getState() {
		return this.state;
	}
}

// import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("state", () => {
	const context = new Context();
	context.state.method1();
	context.setState(State2.getInstance())
	context.state.method1();
	context.state.method2();
})

