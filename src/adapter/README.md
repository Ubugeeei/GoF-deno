# Adapter Pattern

The Adapter Pattern allows changing the interface without modifying existing
classes.

```mermaid
classDiagram
Client --> Target

class Target {
    <<interface>>
}
Adapter ..|> Target
Adapter --|> Adaptee
```
