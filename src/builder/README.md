```mermaid
classDiagram

Client --> Director
Director o-- Builder
Builder <|-- ConcreteBuilder
ConcreteBuilder ..> Product
```
