var express = require('express');
var router = express.Router();

var admissionCtrl = require('../controllers/admission-controller');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getAdmissionData', [
    admissionCtrl.fetchAll
]);

router.get('/getAdmissionData/:id', [
    admissionCtrl.fetchById
]);

router.post('/insertAdmission', [
    admissionCtrl.insert
]);

router.put('/update/:id', [
    admissionCtrl.update
]);

router.delete('/harddelete/:id', [
    admissionCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    admissionCtrl.softDelete
]);

module.exports = router;
