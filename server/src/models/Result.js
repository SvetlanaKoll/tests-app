import { Schema, model } from 'mongoose'
import Test from './Test'

const { schema: testSchema } = Test

const emailRe = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const validateEmail = re => email => re.test(email)

const ResultSchema = new Schema({
  test: {
    type: testSchema,
    required: true
  },
  responderEmail: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'Responder`s email is required!',
    validate: [validateEmail(emailRe), 'Please provide a valid email address'],
    match: [emailRe, 'Please provide a valid email address']
  },
  options: [{
    _id: {
      type: Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true
    },
    content: String,
    correct: Boolean,
    selected: Boolean
  }]
})

const Result = model('results', ResultSchema)

export default Result
