// Construct a schema, using GraphQL schema language
var { buildSchema } = require('graphql');

var schema = buildSchema(`
	type Mutation {
		createEmail(input: EmailInput): Email
		updateEmail(id: ID!, input: EmailInput): Email
		
		createLetter(input: LetterInput): Letter
		updateLetter(id: ID!, input: LetterInput): Letter
	}		

	type Query {
		getEmail(id: ID!): Email
		getLetter(id: ID!): Letter
	}

	interface Message {
		id: ID!
    content: String
    author: String
	}

  type Email implements Message {
    id: ID!
		content: String
		author: String
		domain: String
  }

	type Letter implements Message {
    id: ID!
    content: String
		author: String
		address: String
	}

	input EmailInput {
    content: String
		author: String
		domain: String
	}
	
	input LetterInput {
    content: String
		author: String
		address: String
  }
`);

module.exports = schema;