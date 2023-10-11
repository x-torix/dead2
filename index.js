const mongoString ="mongodb+srv://tinytinakpop:NCT@2906@martyna.feke2gx.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoString);

async function main() {
    try{
        await client.connect();
        await listDB(client);
    } catch (error) {
        console.error(error);
    } finally{
        await client.close();
    }

}
async function listDB(client){
    let databaseList = client.db().admin().listDatabases();

    console.log(databaseList);
}
main();
