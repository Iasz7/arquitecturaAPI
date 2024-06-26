const BaseRepository = require("./base.repository");
let _comment = null;

class CommentRepository extends BaseRepository{
    constructor(Comment){
        super(Comment);
        _comment = Comment;
    }
    
    async getCommentsByIdea(ideaId){
        return await _comment.find({ideaId});
    }
}

module.exports = CommentRepository;