const express = require('express');
const router = express.Router();

const Document = require('../models/DocumentModel');

router.get('/.:format?', (req, res, next) => {
    Document.find({}).then((docs) => {
        switch(req.params.format) {
            case 'json':
                res.send(docs);
            break;

            default:
                res.render('documents/index');
        }
    }).catch(next);
});

router.post('/.:format?', (req, res, next) => {
    Document.create(req.body).then((doc) => {
        switch(req.params.format) {
            case 'json':
                res.send(doc);
            break;

            default:
                res.redirect('/');
        }
    })
});

module.exports = router;
