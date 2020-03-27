const connecion = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = generateUniqueId();
    
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