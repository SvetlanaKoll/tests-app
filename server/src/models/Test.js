import { Schema, model } from 'mongoose'
import Topic from './Topic'

const { schema: topicSchema } = Topic

const TestSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  topic: {
    type: topicSchema,
    required: true
  },
  timeLimit: Number,
  questions: {
    withNoAnswers: [{
      itemId: String,
      content: String,
      options: [{
        optId: String,
        content: String
      }]
    }],
    answers: [{
      itemId: String,
      options: [{
        optId: String,
        isCorrect: Boolean
      }]
    }]
  }
})

const Test = model('tests', TestSchema)

export default Test
