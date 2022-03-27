abstract class AbstractProductA {
	abstract methodA(): void;
	abstract methodB(): void;
}

abstract class AbstractProductB {
	abstract methodA(): void;
	abstract methodB(): void;
}

class ProductA extends AbstractProductA {
	value!: string;
	constructor(value: string) {
		super();
		this.value = value;
	}

	methodA(): void {}
	methodB(): void {}
}

class ProductB extends AbstractProductB {
	value!: string;
	constructor(value: string) {
		super();
		this.value = value;
	}

	methodA(): void {}
	methodB(): void {}
}

abstract class AbstractFactory {
	abstract createProductA(): AbstractProductA;
	abstract createProductB(): AbstractProductA;
}

class FactoryA extends AbstractFactory {
	createProductA(): ProductA {
		return new ProductA("ProductA made in FactoryA");
	}

	createProductB(): ProductB {
		return new ProductB("ProductB made in FactoryA");
	}
}

class FactoryB extends AbstractFactory {
	createProductA(): ProductA {
		return new ProductA("ProductA made in FactoryB");
	}

	createProductB(): ProductB {
		return new ProductB("ProductB made in FactoryB");
	}
}

(function main() {
	class A {
		productA!: ProductA;
		productB!: ProductB;
		constructor() {}
		setA(productA: ProductA): void {
			this.productA = productA;
		}
		setB(productB: ProductB): void {
			this.productB = productB;
		}
	}
	const a = new A();
	const factoryA = new FactoryA();
	a.setA(factoryA.createProductA());
	a.setB(factoryA.createProductB());
	console.log("🚀 ~ file: example.ts ~ line 74 ~ main ~ a", a);

	class B {
		productA!: ProductA;
		productB!: ProductB;
		setA(productA: ProductA): void {
			this.productA = productA;
		}
		setB(productB: ProductB): void {
			this.productB = productB;
		}
		constructor() {}
	}
	const b = new B();
	const factoryB = new FactoryB();
	b.setA(factoryB.createProductA());
	b.setB(factoryB.createProductB());
	console.log("🚀 ~ file: example.ts ~ line 91 ~ main ~ b", b);
})();
