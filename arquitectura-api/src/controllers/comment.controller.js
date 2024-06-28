let _commentService = null;

class CommentController {
    constructor(commentService) {
        _commentService = commentService;
    }
    async getCommentsByIdeaId(req, res) {
        const { ideaId } = req.params;
        const comments = await _commentService.getCommentsByIdea(ideaId);
        return res.send(comments);
    }
    async createComment(req, res) {
        const { ideaId } = req.params;
        const { body } = req;
        const comment = { body, ideaId };
        const newComment = await _commentService.createComment(comment);
        return res.send(newComment).sendStatus(201);
    }
    async deleteCommentById(req, res) {
        const { commentId } = req.params;
        await _commentService.deleteComment(commentId);
        return res.sendStatus(204);
    }
    async updateCommentById(req, res) {
        const { commentId } = req.params;
        const { body } = req;
        const updatedComment = await _commentService.updateComment(commentId, body);
        return res.send(updatedComment);
    }

}

module.exports = CommentController;