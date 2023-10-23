import request from 'supertest';
import app from '../../index';

describe('', () => {
    it('should return 401 if user is not authentified', async () => {
        const res = await request(app).post('/api/justify').send("Hello World");
        expect(res.status).toBe(401);
    })

    it('should return 402 if user is authentified but has no credit', async () => {
        const res = await request(app).post('/api/justify').send("Hello World").set('Authorization', 'Bearer ' + process.env.TEST_TOKEN);
        expect(res.status).toBe(402);
    })
})
