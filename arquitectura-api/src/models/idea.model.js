const mongoose = require('mongoose');
const {Schema} = mongoose;

const IdeaSchema = new Schema({
    idea: {type : 'string', required: true},
    description: {type : 'string'},
    author: {type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true},
    upvotes: [{type: Boolean}],
    downvotes:[{type: Boolean}],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment',
            autopopulate: true,
            required: true
        }
    ]
})

IdeaSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("idea", IdeaSchema);