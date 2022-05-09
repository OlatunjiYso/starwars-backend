import * as fs from "fs" 
import * as path from 'path' 
import * as express from "express" 
import { ApolloServer } from 'apollo-server-express' 
import { resolvers } from './resolver' 

const app = express() 
const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8").toString() 
let server = null;
async function startServer() {
    server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
) 