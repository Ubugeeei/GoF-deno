The AbstractFactory pattern is a pattern for generating a set of objects that  
require consistency without error by preparing a class that specializes in instance generation.

```mermaid
classDiagram

<<interface>> AbstractFactory <|-- ConcreteFactory1
<<interface>> AbstractFactory <|-- ConcreteFactory2

<<interface>> AbstractProductA <|-- ProductA1
<<interface>> AbstractProductA <|-- ProductA2

<<interface>> AbstractProductB <|-- ProductB1
AbstractProductB <|-- ProductB2

<<interface>> ConcreteFactory1 -- ProductA1
<<interface>> ConcreteFactory1 -- ProductB1

ConcreteFactory2 -- ProductA2
ConcreteFactory2 -- ProductB2
```
