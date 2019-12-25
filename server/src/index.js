import express from 'express'
import path from 'path'
import { port } from './config'

const app = express()

app.use(express.static(path.join(__dirname, '../../client/build')))

app.use('*', (_, res) => res.sendFile(path.join(__dirname, '../../client/build/index.html')))

app.listen(port, () => { console.log(`App is ready on port ${port}`) })