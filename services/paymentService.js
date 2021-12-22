const db = require('../models');

function getPayments() {
  return db.Payment.find().sort('-createdAt').catch(() => { throw { code: (500), errors: 'internal_error' }; });
}

function addPayment(data) {
  const newPayment = new db.Payment(data);
  return newPayment.save().catch((error) => {
    console.log(error);
    throw { code: 500, error: 'internal_error' };
  });
}
function reimburse(data) {
  const { paymentId, amount} = data;
  return db.Payment.findByIdAndUpdate(
    paymentId, { $push: { reimbursements: amount } }, { new: true },
  ).catch((err) => {
    console.log(err);
    throw { code: 500, errors: 'internal_error' };
  });
}
module.exports = {
  getPayments,
  addPayment,
  reimburse,
};
