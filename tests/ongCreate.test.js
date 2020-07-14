const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)


it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/api/ongs')

    // ...
    done()
})