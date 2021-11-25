require('dotenv').config()

const PORT = process.env.PORT
const MONGO_DB = /* process.env.MONGO_DB === "test"
? process.env.TEST_MONGO_DB 
: */process.env.MONGO_DB


module.exports={
    MONGO_DB,
    PORT
}