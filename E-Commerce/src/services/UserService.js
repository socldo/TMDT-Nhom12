const createUser = () => {
    new Promise ((resolve , reject) => {
        try{
            resolve({});
        }
        catch(e){
            reject(e);
        }
    })
}

module.exports = {
    createUser
};