var ObjectID = require('mongodb').ObjectID;

function shortToLong(shortID) {
	shortID = shortID.replace(/-/g, '+').replace(/_/g, '/');
	var buffer = new Buffer(shortID, 'base64');
	return buffer.toString('hex');
}

function longToShort(longID) {
	var buffer = new Buffer(longID, 'hex');
	return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
}

function shortToObjectID(shortID) {
	return new ObjectID(shortToLong(shortID));
}

function objectIDtoShort(objectID) {
	return longToShort(objectID.toHexString());
}

module.exports = {
	shortToLong:shortToLong,
	longToShort:longToShort,
	l2s:longToShort,
	s2l:shortToLong,
	shortToObjectID:shortToObjectID,
	objectIDtoShort:objectIDtoShort,
	o2s:objectIDtoShort,
	s2o:shortToObjectID
};

