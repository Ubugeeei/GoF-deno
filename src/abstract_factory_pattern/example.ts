abstract class AbstractProductA {
  abstract methodA(): void;
  abstract methodB(): void;
}

abstract class AbstractProductB {
  abstract methodA(): void;
  abstract methodB(): void;
}

class ProductA extends AbstractProductA {
  constructor(value: string) {
    super();
    console.log(value);
  }

  methodA(): void {}
  methodB(): void {}
}

class ProductB extends AbstractProductB {
  constructor(value: string) {
    super();
    console.log(value);
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
    return new ProductA('ProductA made in FactoryA');
  }

  createProductB(): ProductB {
    return new ProductB('ProductB made in FactoryA');
  }
}

class FactoryB extends AbstractFactory {
  createProductA(): ProductA {
    return new ProductA('ProductA made in FactoryB');
  }

  createProductB(): ProductB {
    return new ProductB('ProductB made in FactoryB');
  }
}

(function main() {
  const factoryA = new FactoryA();
  factoryA.createProductA();
  factoryA.createProductB();

  const factoryB = new FactoryB();
  factoryB.createProductA();
  factoryB.createProductB();
})();