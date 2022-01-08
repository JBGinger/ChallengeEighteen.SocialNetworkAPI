const { Schema, model, Types } = require('mongoose');

Reaction = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Objectid //I don't think this is right.
        },
        reactionBody: {
            type: String,
            required: true,
            //280 character max
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            //Date + time
        }
    }
)