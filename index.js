import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./src/types.js";
import { resolvers } from "./src/resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const apolloServer = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

const server = await startStandaloneServer(apolloServer, { listen: { port: 4300 } });

console.log(`🚀  Server ready at: ${server.url}`);