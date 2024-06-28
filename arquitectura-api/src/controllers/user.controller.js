let _userService = null;
class UserController{
    constructor(UserService){
        _userService = UserService;
    }
    async getUserById(req, res){
        const {userId}=req.params;
        const user = await _userService.get(userId)
        return res.send(user);
    }
    async getAll(req, res){
        const users= await _userService.find();
        return users;
    }
    
    async deleteById(req, res){
        const userId=req.params.userId;
        return await _userService.findByIdAndDelete(userId);
    }
    async updateUserById(req, res){
        const userId=req.params.userId;
        const {body} = req;
        const updatedUser = await _userService.findByIdAndUpdate(userId, body);
        return res.send(updatedUser);
    }
}

module.exports = UserController;