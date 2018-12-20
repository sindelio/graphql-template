const fetch = require('node-fetch');

var author = 'andy';
var content = 'hope is a good thing';
var domain = 'andy@test.com';

var query = `mutation CreateEmail($input: EmailInput) {
  createEmail(input: $input) {
    id
  }
}`;

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: {
      input: {
        author,
				content,
				domain
      }
    }
  })
})
  .then(r => r.json())
	.then(data => console.log('data returned:', data))
	.catch((e) => console.error(e));

/* Notes
    - The query variables are sent inside the body of the request!
*/