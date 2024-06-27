const BaseService = require("./base.service")
let _CommentRepository= null;
let _IdeaRepository = null;

class CommentService extends BaseService{
    constructor(CommentRepository, IdeaRepository){
        super(CommentRepository)
        _CommentRepository = CommentRepository;
        _IdeaRepository = IdeaRepository;
    }
    
    async getCommentsByIdea(ideaId){
        if(!ideaId) {
            const error = new Error
            error.status = 400;
            error.message = "Idea ID is required"
            throw error;
        }
        const idea = await _IdeaRepository.get(ideaId);
        if(!idea) {
            const error = new Error
            error.status = 404;
            error.message = "Idea not found"
            throw error;
        }
        const {comments} = idea;
        return comments;
    }

    async createComment(comment, ideaId){
        if(!ideaId){
            const error = new Error
            error.status = 400;
            error.message = "Idea ID is required"
            throw error;
        }
        const idea = await _IdeaRepository.get(ideaId);
        if(!idea) {
            const error = new Error
            error.status = 404;
            error.message = "Idea not found"
            throw error;
        }
        const createdComment = await _CommentRepository.create(comment);
        idea.comments.push(createdComment);
        return await _IdeaRepository.update(ideaId, {comments: idea.comments})
    }
}

module.exports = CommentService;