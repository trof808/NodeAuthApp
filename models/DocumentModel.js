const mongoose = require('mongoose');

const DocumentScheme = mongoose.Schema({
    properties: ['title', 'data', 'tags'],
    indexes: [
        'title'
    ]
});

module.exports = mongoose.model('Document', DocumentScheme);
