var vows = require("vows");
var assert = require("assert");

var mongoID = require('../src/mongodb-short-id.js');

var ObjectID = require('mongodb').ObjectID;

var suite = vows.describe("MongoDB short ID");

var ids = ['507f1f77bcf86cd799439011'];

suite.addBatch({
	'longToShort': {
		topic: ids,
		"should end up with the same id" : function(topic) {
			for (var i=0; i<topic.length; i++) {
				assert.equal(mongoID.shortToLong(mongoID.longToShort(topic[i])), topic[i]);
			}
		},
		'should be 16 chars long' : function(topic) {
			for (var i=0; i<topic.length; i++) {
				assert.equal(mongoID.longToShort(topic[i]).length, 16);
			}
		}
	},
	'shortToLong': {
		topic: function() {
			var ar = [];
			for (var i=0; i<ids.length; i++) {
				ar.push(mongoID.longToShort(ids[i]));
			}
			return ar;
		},
		"should end up with the same id": function(topic) {
			for (var i=0; i<topic.length; i++) {
				assert.equal(mongoID.longToShort(mongoID.shortToLong(topic[i])), topic[i]);
			}
		},
		'should be 24 chars long' : function(topic) {
			for (var i=0; i<topic.length; i++) {
				assert.equal(mongoID.shortToLong(topic[i]).length, 24);
			}
		}


	}
});

suite.addBatch({
	'objectIDToShort': {
		topic: function() {
			var ar = [];
			for(var i = 0; i<ids.length; i++) {
				ar.push(new ObjectID(ids[i]));
			}
			return ar;
		},
		'should result in same': function(topic) {
			for (var i=0; i<topic.length; i++) {
				assert.isTrue(topic[i].equals(mongoID.shortToObjectID(mongoID.objectIDtoShort(topic[i]))));
			}
		}

	},
	'shortToObjectID': {
		topic: function() {
			var ar = [];
			for (var i=0; i<ids.length; i++) {
				ar.push(mongoID.longToShort(ids[i]));
			}
			return ar;
		},
		'should result in same': function(topic) {
			for (var i=0; i<topic.length; i++) {
				assert.equal(mongoID.shortToObjectID(topic[i]).toHexString(), mongoID.shortToLong(topic[i]));
			}
		}
	}
});

suite.addBatch({
	's2l': {
		topic: null,
		'should be same function' : function() {
			assert.equal(mongoID.s2l, mongoID.shortToLong);
		}
	},
	'l2s': {
		topic: null,
		'should be same function': function() {
			assert.equal(mongoID.l2s, mongoID.longToShort);
		}
	},
	'o2s': {
		topic: null,
		'should be same function': function() {
			assert.equal(mongoID.o2s, mongoID.objectIDtoShort);
		}
	},
	's2o': {
		topic: null,
		'should be same function': function() {
			assert.equal(mongoID.s2o, mongoID.shortToObjectID);
		}
	}
});

suite.run();