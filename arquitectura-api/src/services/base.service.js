class BaseService{
    constructor(repository){
        this.repository = repository
    }
    async getAll(){
        return await this.repository.getAll()
    }
    async create(entity){
        return await this.repository.create(entity)
    }
    async findById(id){
        if(!id){
            const error = new Error;
            error.status = 400;
            error.message = "Id is required";
            throw error;
        }

        const currentEntity = await this.repository.get(id);

        if (!currentEntity){
            const error = new Error;
            error.status = 404;
            error.message = "Entity not found";
            throw error;
        }

        return currentEntity;
    }
    async deleteById(id){
        if(!id){
            const error = new Error;
            error.status = 400;
            error.message = "Id is required";
            throw error;
        }

        const currentEntity = await this.repository.get(id);

        if (!currentEntity){
            const error = new Error;
            error.status = 404;
            error.message = "Entity not found";
            throw error;
        }
        
        return await this.repository.delete(id)
    }

    async updateById(id, data){
        if(!id){
            const error = new Error;
            error.status = 400;
            error.message = "Id is required";
            throw error;
        }
        const currentEntity = await this.repository.get(id);
        if (!currentEntity){
            const error = new Error;
            error.status = 404;
            error.message = "Entity not found";
            throw error;
        }
        return await this.repository.update(id, data)
    }
    
}



module.exports = BaseService;