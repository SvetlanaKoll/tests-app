import app from './app'
import { mongoURI, port } from './config'
import { connect } from 'mongoose'

connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`App is ready on ${port}`))
  })
  .catch(err => {
    console.log(err)
  })
