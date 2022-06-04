const Joi = require('joi');

const userSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2, tlds: { allow: ['com', 'net'] },
  }).required(),
  password: Joi.string().required(),
  birthDate: Joi.string().required(),
  address: Joi.string().required(),
});

module.exports = {
  userSchema,
};
