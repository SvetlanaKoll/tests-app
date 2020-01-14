import { Schema, model } from 'mongoose'
import Test from './Test'

const { schema: testSchema } = Test

const emailRe = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const validateEmail = re => email => re.test(email)

const AnswersListSchema = new Schema({
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
  answers: [{
    _id: Schema.ObjectId,
    option: Number
  }]
})

const AnswerList = model('answerList', AnswersListSchema)

export default AnswerList
