// add to .gitignore
const dotenv=require('dotenv');
dotenv.config();

const user=process.env.user;
const pass=process.env.pass;
const my_url=process.env.url;
module.exports = {
    google : {
        clientId : "<url>.apps.googleusercontent.com",
        clientSecret : "my-secret"
    },
    mongoDB : {
        dbURI : 'mongodb+srv://'+user+':'+pass+'@'+my_url+'?retryWrites=true&w=majority'
    },
    session : {
        cookieKey : 'Shriyanshisecret'
    }
}
