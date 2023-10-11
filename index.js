const mongoString ="mongodb+serv://tinytinakpop:NCT@2906@martyna.feke2gx.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const client = MongoClient(mongoString);

async function main() {
    await client.connect();

    await client.close();
}

main();