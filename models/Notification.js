const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema(
  {
    read: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ['comment', 'request', 'upvote'],
      required: true
    },
    action: {
      type: mongoose.Schema.Types.ObjectId, 
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    date: {
      type: Date
    }
  }
)

module.exports = mongoose.model('Notification', NotificationSchema)
