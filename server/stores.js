var db = require('./pghelper'),
    winston = require('winston');

/**
 * Get a list of stores
 * @param req
 * @param res
 * @param next
 */

/** Delete this comment line for the Store page to work (1/2)

function findAll(req, res, next) {
    db.query("SELECT id, name, location__latitude__s AS latitude, location__longitude__s AS longitude FROM salesforce.store__c ORDER BY lastmodifieddate DESC")
        .then(function (stores) {
            return res.send(JSON.stringify(stores));
        })
        .catch(next);
};


exports.findAll = findAll;

Delete this comment for the Store page to work (2/2) */

