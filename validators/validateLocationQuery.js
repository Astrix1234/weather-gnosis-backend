import Joi from "joi";

export const validateLocationQuery = (req, res, next) => {
  const schema = Joi.object({
    lat: Joi.number().min(-90).max(90).required().messages({
      "any.required": "Missing or invalid latitude or longitude",
      "number.base": "Missing or invalid latitude or longitude",
      "number.min": "Missing or invalid latitude or longitude",
      "number.max": "Missing or invalid latitude or longitude",
    }),
    lon: Joi.number().min(-180).max(180).required().messages({
      "any.required": "Missing or invalid latitude or longitude",
      "number.base": "Missing or invalid latitude or longitude",
      "number.min": "Missing or invalid latitude or longitude",
      "number.max": "Missing or invalid latitude or longitude",
    }),
  });

  const { error } = schema.validate(req.query);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: error.details[0].message,
    });
  }

  next();
};
