const mongoose = require('mongoose')

const Task = mongoose.model('task', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    assignedTo: {
        type: String,
        trim: true,
        default: "self"
    },
    priority: {
        type: String,
        trim: true,
        default: "medium"
    },
    category: {
        type: String,
        trim: true,
        default: "uncategorized"
    },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = Task