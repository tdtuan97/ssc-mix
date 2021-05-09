const API_URL = 'http://localhost:3000/'
const NODE_ENV = process.env.NODE_ENV;

function getClientEnvironment() {
    return NODE_ENV;
}

module.exports = getClientEnvironment;