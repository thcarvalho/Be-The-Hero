const crypto = require('crypto');
const connecion = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX')

    await connecion('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({ id })
  },

  async list(req, res) {
    const ongs = await connecion('ongs').select('*');

    return res.json(ongs);
  }
}