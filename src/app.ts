import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PingResolver } from "./resolvers/Ping";

export async function startServer() {
    const app = express();
    const server = new ApolloServer({
        schema: await buildSchema({
            // resolvers:["../src/resolvers/**/*.ts"],
            resolvers:[PingResolver],
            validate: false
        }),
        context:({req})=>({req})
    })
    await server.start()
    server.applyMiddleware({ app, path: "/graphql" });
    return app
}