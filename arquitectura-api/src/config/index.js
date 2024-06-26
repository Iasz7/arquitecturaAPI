if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
}