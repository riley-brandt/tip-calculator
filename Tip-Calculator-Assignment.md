# Tip Calculator Assignment

### 3 Inputs

* bill total
* tip percent
* number of people

### Calculate

* total tip
* tip per person
* how much each person pays

## onChange Pattern

* `evt.target.value` captures what the user types in an input
* To capture an input's value on change:

```
onChange={(evt) => setBill(evt.target.value)}
```