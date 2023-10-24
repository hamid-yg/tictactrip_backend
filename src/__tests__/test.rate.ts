import request from 'supertest';
import app from '../../index';

describe('', () => {
    it('should return 401 if user is not authentified', async () => {
        const res = await request(app).post('/api/justify').send("Hello World");
        expect(res.status).toBe(401);
    })
})
