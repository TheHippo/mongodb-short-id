function shortToLong(shortID) {
	shortID = shortID.replace('-', '+').replace('_', '/');
	var buffer = new Buffer(shortID, 'base64');
	return buffer.toString('hex');
}

function longToShort(longID) {
	var buffer = new Buffer(longID, 'hex');
	return buffer.toString('base64').replace('+', '-').replace('/', '_');
}

module.exports = {
	shortToLong:shortToLong,
	longToShort:longToShort,
	l2s:longToShort,
	s2l:shortToLong
};

