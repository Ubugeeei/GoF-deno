class Singleton {
	private static instance: Singleton;
	private constructor() {}

	static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	someMethod() {}
}

(function main() {
	// const singleton = new Singleton(); // error
	const i = Singleton.getInstance();
	const i2 = Singleton.getInstance();
	console.log(i === i2); // true
})();
