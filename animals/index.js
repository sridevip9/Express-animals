var router = require('express').Router();
var birds = require('./birds');

router.get('/animals', function(req, res) {
    res.status(200).send('welcome to animals world!')
});

router.use('/animals/birds', birds);
//app.use('/', birds);
module.exports = router;
