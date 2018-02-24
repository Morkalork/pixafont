# pixafont

This library can be used to generate pixel fonts. Quite handy, under very specific circumstances...

# Installing

To install this package, simply use npm:

```
npm install --save pixafont
```

# Example usage

```javascript
const pixafont = require('pixafont');

// Get basic letter
const letterCoordinates = pixafont('a');

// Get letter starting 2 steps from the left
const leftLetterCoordinates = pixafont('b', 2);

// Get letters starting 2 steps from the top
const topLetterCoordinates = pixafont('c', 0, 2);

console.log(letterCoordinates);

/* outputs
[ [ 0, 0 ],
  [ 0, 1 ],
  [ 1, 1 ],
  [ 0, 2 ],
  [ 2, 2 ],
  [ 0, 3 ],
  [ 1, 3 ],
  [ 2, 3 ],
  [ 3, 3 ],
  [ 0, 4 ],
  [ 4, 4 ] ] */
```