const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: { 
            type: String,
            required: true,
            match: /.+@.+..+/,
            unique: true
          },
        thoughts: [
            {
                type: Schema.model,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.UserSchema,
                ref: 'User'
            }
        ]
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce;
});

const User = model('User', UserSchema);

module.exports = User;