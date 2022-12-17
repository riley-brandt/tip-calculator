# Tip Calculator Assignment

### Current To Do List
* center the bottom div
* add a menu/restaurant icon
* add a more details accordion button
* possible to zoom?
* add credit
* update the ReadMe File

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

## Fix Chrome Input CSS

I just discovered that ***outline: none;*** removes the default chrome based `:focus` behaviour and uses the desired css like a fallback.

```
input {
  outline: none;
}

input:active {
  border: 1px solid #00a2dd;
}

input:focus {
  border: 1px solid #00a2dd;
}
```