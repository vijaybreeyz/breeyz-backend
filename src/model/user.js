const mongoose = require('mongoose')
const  validator = require('validator')


const User = mongoose.model('user', {
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    middleName: {
        type: String,
        required: false,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    dob: {
        type: Date,
        required: false,
        validate(value) {
            if (!validator.isDate(value))
            {
                throw new Error('Not a Valid Date of Birth')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    phone: {
        type: Number,
        required: false,
        validate(value) {
            if (!validator.isMobilePhone(value,"en-US"))
            {
                throw new Error('Not a Valid Phone Number')
            }
        }
    },
    emailverified: {
        type: Boolean,
        required: false,
    },
    phoneverified: {
        type: Boolean,
        required: false,
    }
})

module.exports = User