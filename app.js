var express = require('express');
var graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schemas/schema');
const root = require('./graphql/handlers/root');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => {
  console.log('Running a GraphQL API server at localhost:3000/graphql');
});