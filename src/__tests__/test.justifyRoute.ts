import request from 'supertest';
import app from '../../index';

describe('', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/justify');
        expect(response.status).toBe(404);
    });

    test('It should response the POST method', async () => {
        const response = await request(app).post('/api/justify');
        expect(response.status).toBe(401);
    });

    test('It should response the POST method', async () => {
        const response = await request(app).post('/api/justify').send("Hello World");
        expect(response.status).toBe(401);
    });
});
