const request = require('supertest');
const connection = require('../../src/database/connection');
const app = require('../../src/app');
describe('ONG', () => {
  beforeEach( async () => {   
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    //set('Authorization', 'asd');
    .send({
      name: "APAD3",
      email: "contato@apad.com.br",
      whatsapp: "4700000001",
      city: "Rio do Sul",
      uf: "SC"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});