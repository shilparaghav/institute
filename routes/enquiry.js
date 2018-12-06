var express = require('express');
var router = express.Router();

var enquiryCtrl = require('../controllers/enquiry-controller');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getEnquiryData', [
    enquiryCtrl.fetchAll
]);

router.get('/getEnquiryData/:id', [
    enquiryCtrl.fetchById
]);

router.post('/insertEnquiry', [
    enquiryCtrl.insert
]);

router.put('/updateEnquiry/:id', [
    enquiryCtrl.update
]);

router.delete('/harddelete/:id', [
    enquiryCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    enquiryCtrl.softDelete
]);

module.exports = router;
