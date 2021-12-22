const Validator = require('../helpers/validate');
const Roles = require('../helpers/roles');

const register = async (req, res, next) => {
  const validationRule = {
    firstname: 'required|string',
    lastname: 'required|string',
    username: 'required|string|exist:User,username',
    role: `required|string|in:${Object.keys(Roles).join(',')}`,
    password: 'required|string',
  };

  await Validator(req.body, validationRule, {}, (errors, status) => {
    if (!status) {
      res.status(400)
        .send(errors);
    } else {
      next();
    }
  });// .then().catch(error=>console.log(error))
};

const login = async (req, res, next) => {
  const validationRule = {
    password: 'required|string',
    username : 'required|string',
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
  register,
  login,
};
