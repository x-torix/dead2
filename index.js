const mongoString ="mongodb+srv://tinytinakpop:NCT@2906@martyna.feke2gx.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoString);

async function main() {
    try{
        await client.connect();
    } catch (error) {
        console.error(error);
    } finally{
        await client.close();
    }

}

main();
