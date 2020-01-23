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
  pts: {
    type: Number,
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
  validatedSelections: [{
    itemId: String,
    content: String,
    options: [{
      optId: String,
      content: String,
      isCorrect: Boolean,
      isChecked: Boolean
    }]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Result = model('results', ResultSchema)

export default Result
