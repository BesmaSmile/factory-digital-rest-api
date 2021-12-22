const express = require('express');

const router = express.Router();
const paymentService = require('../services/paymentService');
const validator = require('../middlewares/paymentValidator');
const authorize = require('../helpers/authorize');
const Roles = require('../helpers/roles');

function getPayments(req, res) {
  paymentService.getPayments()
    .then((result) => res.json(result))
    .catch((err) => { console.log(err); res.status(err.code).json({ error: err.error }); });
}

function addPayment(req, res) {
  paymentService.addPayment(req.body)
    .then((result) => res.json(result))
    .catch((err) => { console.log(err); res.status(err.code).json({ error: err.error }); });
}

function reimburse(req, res) {
  paymentService.reimburse(req.body)
    .then((result) => res.json(result))
    .catch((err) => { console.log(err); res.status(err.code).json({ error: err.error }); });
}

router.get('/get_all', authorize(Roles.Admin), getPayments);
router.post('/add', validator.addPayment, addPayment);
router.post('/reimburse', authorize(Roles.Admin), validator.reimburse,  reimburse);
module.exports = router;
