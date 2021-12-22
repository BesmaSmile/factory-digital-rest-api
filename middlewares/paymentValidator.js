const Validator = require('../helpers/validate');

const addPayment = async (req, res, next) => {
  const validationRule = {
    amount: 'required|integer',
  };

  await Validator(req.body, validationRule, {}, (errors, status) => {
    if (!status) {
      res.status(400)
        .send(errors);
    } else {
      next();
    }
  });
};

const reimburse = async (req, res, next) => {
  const validationRule = {
    amount: 'required|integer',
    paymentId: 'required|string',
  };

  await Validator(req.body, validationRule, {}, (errors, status) => {
    if (!status) {
      res.status(400)
        .send(errors);
    } else {
      next();
    }
  });
};

module.exports = {
  addPayment,
  reimburse,
};
