/**
 * factory
 */

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

/**
 * product
 */

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

/**
 * test
 */
import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("abstract factory", () => {
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

  assertEquals(a.productA.value, "ProductA made in FactoryA");
  assertEquals(a.productB.value, "ProductB made in FactoryA");
  assertEquals(b.productA.value, "ProductA made in FactoryB");
  assertEquals(b.productB.value, "ProductB made in FactoryB");
});
