class Singleton {
	private static instance: Singleton;
	private constructor() { }

	static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	someMethod() { }
}

import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("singleton", () => {
	// const singleton = new Singleton(); // error
	const i = Singleton.getInstance();
	const i2 = Singleton.getInstance();
	assertEquals(i, i2); // true
})

