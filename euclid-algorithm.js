// Greatest Common Divisor
function gcd(x, y) {
	 while (x % y !== 0) {
		 var r = x % y;
		 x = y;
		 y = r;
	 }
	 return y;
}
