// MUTATION EXAMPLE
// mutation CreateEmail($author: String) { 
// 	createEmail(input: {
//     author: $author,
//     content: "hope is a good thing",
//     domain: "test@tes.com"
//   }) {
//     id
//   }
// }
//
// Query Variables:
// {
//   "author": "sindelio"
// }

// ------------------------------------------------

// QUERY EXAMPLE
// query {
//   getEmail(id: "SOME_VALID_ID") {
//     ...messageFragment
//     domain
//   }
// }
//
// fragment messageFragment on Email{
// 	id
// 	author
// 	content
// }

// ------------------------------------------------

// ANOTHER QUERY EXAMPLE
// query GetEmail($contentFlag: Boolean!) {
//   getEmail (id: "SOME_VALID_ID"){
//     author
//     content @include(if: $contentFlag)
//     id
//     ... on Email {
//       domain
//     }
//   }
// }
// Query Variables:
// {
//   "contentFlag": "true"
// }

/* Notes
		- Variables and fragment only exist in the query, not in the schema!
*/