var express = require('express');
var router = express.Router();

var courseCtrl = require('../controllers/course-controller');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getCourseData', [
    courseCtrl.fetchAll
]);

router.get('/getCourseData/:id', [
    courseCtrl.fetchById
]);

router.post('/insertCourse', [
    courseCtrl.insert
]);

router.put('/updateCourse/:id', [
    courseCtrl.update
]);

router.delete('/harddelete/:id', [
    courseCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    courseCtrl.softDelete
]);

module.exports = router;
