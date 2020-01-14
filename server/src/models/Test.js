import { Schema, model } from 'mongoose'
import Topic from './Topic'

const { schema: topicSchema } = Topic

const TestSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  topic: {
    type: topicSchema,
    required: true
  },
  options: [{
    _id: {
      type: Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true
    },
    content: String,
    correct: Boolean
  }]
})

const Test = model('tests', TestSchema)

export default Test
