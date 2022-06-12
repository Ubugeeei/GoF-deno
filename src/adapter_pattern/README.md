# Adapter Pattern
The Adapter Pattern allows changing the interface without modifying existing classes.

```mermaid
classDiagram
Client --> Adapter
Adapter <|..Target
Adapter <|-- Adaptee
```
