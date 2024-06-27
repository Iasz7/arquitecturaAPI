const BaseService= require("./base.service")
let _IdeaRepository= null;

class IdeaService extends BaseService{
    constructor(IdeaRepository){
        super(IdeaRepository)
        _IdeaRepository = IdeaRepository;
    }

    async getIdeasByAuthor(author){
        if(!author) {
            const error = new Error
            error.status = 400;
            error.message = "Author is required"
            throw error;
        }
        return await _IdeaRepository.getIdeasByAuthor(author);
    }

    async upvoteIdea(ideaId){
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
        idea.upvotes.push(true)

        return await _IdeaRepository.update(ideaId, {upvotes:idea.upvotes})
    }
    async downvoteIdea(ideaId){
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
        idea.downvotes.push(true)
        return await _IdeaRepository.update(ideaId, {downvotes: idea.downvotes})
    }
}

module.exports = IdeaService;