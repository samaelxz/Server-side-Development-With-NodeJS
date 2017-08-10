
module.exports = (x,y,callback) => {
	try {
		if (x < 0 || y < 0) {
			throw new Error("Rectangle dimensions should be greater than zero: l = " + x + ", and b = " + y);			
		}
		else
			callback(null, {
				perimeter: () => 2*(x+y),
				area: () => x*y 
			});
	}
	catch (error) {
		callback(error, null);
	}
}