const mongoose = require('mongoose');
const {Schema} = mongoose;

const CommentSchema = new Schema({
    comment: {type : 'string', required: true},
    description: {type : 'string'},
    author: {type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true},
    upvotes: [{type: Boolean}],
    downvotes:[{type: Boolean}],
    comments: {type: Schema.Types.ObjectId, ref: 'comment', required: true, autopopulate: true}
})

CommentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("comment", CommentSchema);