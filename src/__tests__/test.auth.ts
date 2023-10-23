import app from '../../index';
import request from 'supertest';

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/token');
        expect(response.status).toBe(404);
    });
});
