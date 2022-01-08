const { Schema, model, Types } = require('mongoose');

ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //Set length between 1 and 280
        },
        createdAt: {
            //Date + time
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
    }
)