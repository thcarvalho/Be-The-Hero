const connecion = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connecion('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return res.status(400).json({error: `No ONG with ID ${id}`})
    }

    return res.json(ong);
  }
}