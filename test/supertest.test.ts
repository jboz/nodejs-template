import request from 'supertest';
import { app } from '../src';

describe('GET / - a simple api endpoint', () => {
  it('Hello API Request', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .expect({ message: 'hello world!' });
  });
});
