# Tip Calculator Assignment

### Current To Do List
* ~~center the bottom div~~
* add a menu/restaurant icon
* ~~add a more details accordion button~~
* possible to zoom?
* add credit
* update the ReadMe File
* ~~ Bug: if type=NaN, then ... ~~
* Bug: max number of characters
* Feature: add reset all values button

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

## Fix The $NaN Error

Check if the state === NaN by using the isNaN() function/method:

```
  let mathTotal = 0;

  if (isNaN(bill)) {
    mathTotal = 0;
  } else if (isNaN(tip)) {
    mathTotal = 0;
  } else if (isNaN(people)) {
    mathTotal = 0;
  } else {
    mathTotal = (bill + totalTip) / people;
  }
``` 

---

# Lessons Learned


### isNaN()
* is typeOf not a number? true or false.
* combine with if/else (or ternary operator?)

```
if (isNaN(bill)) {
    mathTotal = 0;
  } else {
    mathTotal = (bill + totalTip) / people;
  }
```

### .toFixed
* limit the number of digits

### parseInt()
* Sets to a value, not a string

```
onChange={(evt) => setTip(parseInt(evt.target.value))}
```

### States
* use state/set state

```
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
```


### Inputs

```
(evt.target.value)
```

```
     type="number"
            id="people"
            name="people"
            min="1"
            value={people}
```

### onChange Events

```
onChange={(evt) => setPeople(parseInt(evt.target.value))}
```

### Return Statement

* Above the return, can write regular JavaScript
* Below/Inside the return statement, need {JSX} 


