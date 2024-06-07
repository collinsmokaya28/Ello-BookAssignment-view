const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { booksData } = require('./booksData');
const cors = require('cors')

// GraphQL schema
const schema = buildSchema(`
  type Query {
    books: [Book]
  }

  type Book {
    author: String
    coverPhotoURL: String
    readingLevel: String
    title: String
  }
`);

// Root resolver
const root = {
  books: () => booksData,
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use(cors());


app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
