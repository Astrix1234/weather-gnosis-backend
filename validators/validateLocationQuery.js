import Joi from "joi";

export const validateLocationQuery = (req, res, next) => {
  const schema = Joi.object({
    lat: Joi.number().min(-90).max(90).required(),
    lon: Joi.number().min(-180).max(180).required(),
  });

  const { error } = schema.validate(req.query);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};
