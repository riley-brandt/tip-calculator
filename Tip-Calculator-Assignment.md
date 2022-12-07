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

## Limit Number of Characters

Use the `.toFixed(#)` dot notation to limit the number of characters, ie:

```
<p>Tip total: ${totalTip.toFixed(2)}</p>
```