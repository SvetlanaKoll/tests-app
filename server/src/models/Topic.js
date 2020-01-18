import { Schema, model } from 'mongoose'

const TopicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Topic = model('topics', TopicSchema)

export default Topic
