import express from 'express'
const router = express.Router()

router.get('/', (req, res) => res.send('Hello'))
router.get('/about', (req, res) => res.send('About'))
router.get('/*', (req, res) => res.send('404 Not Found'))

export default router
