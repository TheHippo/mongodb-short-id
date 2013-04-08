# MongoDB short id

Create shorter string from MongoDB objectIDs and reverse

## Api Examples

	var shortID = require('mongodb-short-id');

	shortID.longToShort('507f1f77bcf86cd799439011');
	// => 'UH8fd7z4bNeZQ5AR'

	shortID.shortToLong('UH8fd7z4bNeZQ5AR');
	// => '507f1f77bcf86cd799439011'

	shortID.shortToObjectID('UH8fd7z4bNeZQ5AR');
	// => 507f1f77bcf86cd799439011
	typeof shortID.shortToObjectID('UH8fd7z4bNeZQ5AR');
	// => 'object'

	var objectID = shortID.shortToObjectID('UH8fd7z4bNeZQ5AR');
	shortID.objectIDToShort(objectID)
	// => 'UH8fd7z4bNeZQ5AR'

### Shortcuts

* `l2s` => `longToShort`
* `s2l` => `shortToLong`
* `o2s` => `objectIDtoShort`
* `s2o` => `shortToObjectID`

### Build status

* master: [![Build Status](https://travis-ci.org/TheHippo/mongodb-short-id.png?branch=master)](https://travis-ci.org/TheHippo/mongodb-short-id)
* develop: [![Build Status](https://travis-ci.org/TheHippo/mongodb-short-id.png?branch=develop)](https://travis-ci.org/TheHippo/mongodb-short-id)
