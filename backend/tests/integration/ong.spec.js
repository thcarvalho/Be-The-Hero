const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection');

let id;
describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await request(app)
      .post('/ongs')
      .send({
        name: "APAD1",
        email: "contato@asasdsdasd.com.br",
        whatsapp: "1112412323",
        city: "Rio do Sul",
        uf: "SC"
      });
  });

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
        email: "contato@asdasd.com.br",
        whatsapp: "1112412323",
        city: "Rio do Sul",
        uf: "SC"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should be able to list all ONGs', async () => {
    const response = await request(app)
      .get('/ongs');

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "APAD1",
          email: "contato@asasdsdasd.com.br",
          whatsapp: "1112412323",
          city: "Rio do Sul",
          uf: "SC"
        })
      ])
    );
  });
});

