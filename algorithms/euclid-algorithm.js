// Greatest Common Divisor

function gcd_brute_force(x, y) {
	var guess = x;
	while (x % guess !== 0 || y % guess !== 0) {
	 	guess--;
	}
	return guess;
}

function gcd_euclid(x, y) {
	while (x % y !== 0) {
		var r = x % y;
		x = y;
		y = r;
	}
	 return y;
}

// Time Results Comparision

console.log("BRUTE FORCE")
console.time('gcd_brute_force')
gcd_brute_force(10000,10005)
console.timeEnd('gcd_brute_force')

console.log("EUCLID ALGORITHM")
console.time('gcd_euclid')
gcd_euclid(10000,10005)
console.timeEnd('gcd_euclid')