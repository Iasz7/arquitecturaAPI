const _ideaService = null;

class IdeaController{
    constructor(ideaService){
        _ideaService = ideaService;
    }

    async getAll(req, res){
        const ideas = await _ideaService.getAll();
        return res.send(ideas);
    }

    async getIdeasByAuthor(req, res){
        const {authorId} = req.params;
        const ideas = await _ideaService.getByAuthor(authorId);
        return res.send(ideas);
    }

    async createIdea(req, res){
        const idea = req.body;
        const newIdea = await _ideaService.create(idea);
        return res.send(newIdea).sendStatus(201);
    }

    async updateIdeaById(req, res){
        const {ideaId} = req.params;
        const updatedIdea = await _ideaService.update(ideaId, req.body);
        return res.send(updatedIdea);
    }

    async deleteIdeaById(req, res){
        const {ideaId} = req.params;
        await _ideaService.delete(ideaId);
        return res.sendStatus(204);
    }
    async getIdeaById(req, res){
        const {ideaId} = req.params;
        const idea = await _ideaService.getById(ideaId);
        return res.send(idea);
    }

    async upvoteIdea(req, res){
        const {ideaId} = req.params;
        const idea = await _ideaService.upvoteIdea(ideaId);
        return res.send(idea);
    }

    async downvoteIdea(req, res){
        const {ideaId} = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId);
        return res.send(idea);
    }

}

module.exports = IdeaController;