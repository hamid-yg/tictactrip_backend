import request from 'supertest';
import app from '../../index';

describe('', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/justify');
        expect(response.status).toBe(404);
    });
});
