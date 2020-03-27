const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  //Ong Validation
  ongCreate() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      })
    })
  },

  //Incidents Validation
  incidentsCreate() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown()
    })
  },
  incidentsList() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      })
    });
  },
  incidentsDelete() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown()
    });
  },

  //Profile Validation
  profileList() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown()
    });
  },

  //Session Validation
  sessionCreate() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      })
    });
  },
}