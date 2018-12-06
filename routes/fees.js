var express = require('express');
var router = express.Router();

var feesCtrl = require('../controllers/fees-controller');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getFeesData', [
    feesCtrl.fetchAll
]);

router.get('/getFeesData/:id', [
    feesCtrl.fetchById
]);

router.post('/insertFees', [
    feesCtrl.insert
]);

router.put('/updateFees/:id', [
    feesCtrl.update
]);

router.delete('/harddelete/:id', [
    feesCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    feesCtrl.softDelete
]);

module.exports = router;
