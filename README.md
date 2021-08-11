# maths

## Euclid's Algorithm
**Goal**: Find the Greatest Common Divisor from 2 given numbers.


**Main idea**: Euclid’s great insight was that the greatest common divisor of
x and y must also be the greatest common divisor of y and the
remainder of x divided by y.

```
function gcd_euclid(x, y) {
	while (x % y !== 0) {
		var r = x % y;
		x = y;
		y = r;
	}
	 return y;
}
```

Comparision brute-force vs Euclid's Algorithm time execution:
![Euclid Time](/pics/euclid-time.png)

Nice [geometric visualization]("https://www.geogebra.org/m/ztbesvsd"):
![Euclid Time](/pics/euclid-visualization.gif)

**Code**: /algorithms/euclid-algorithm.js
