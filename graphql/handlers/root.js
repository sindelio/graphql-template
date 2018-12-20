
// If Message had any complex fields, we'd put them on this object.
class Message {
  constructor(id, input) {
    this.id = id;
    this.content = input.content;
    this.author = input.author;
  }
}

class Email extends Message{
	constructor(id, input){
		super(id, input);
		this.domain = input.domain;
	}
}

class Letter extends Message{
	constructor(id, input){
		super(id, input);
		this.address = input.address;
	}
}

// Maps username to content
var fakeDatabase = {};

const root = {
	getEmail: function (args) {
    if (!fakeDatabase[args.id]) {
      throw new Error('no message exists with id ' + args.id);
    }
    return new Email(args.id, fakeDatabase[args.id]);
  },
  createEmail: function (args) {
    // Create a random id for our "database" of doom
    var id = require('crypto').randomBytes(10).toString('hex');

    fakeDatabase[id] = args.input;
    return new Email(id, args.input);
  },
  updateEmail: function (args) {
    if (!fakeDatabase[args.id]) {
      throw new Error('no message exists with id ' + args.id);
    }
    fakeDatabase[args.id] = args.input;
    return new Email(args.id, args.input);
	},
	
	getLetter: function (args) {
    if (!fakeDatabase[args.id]) {
      throw new Error('no message exists with id ' + args.id);
    }
    return new Letter(args.id, fakeDatabase[args.id]);
  },
  createLetter: function (args) {
    // Create a random id for our "database" of doom
    var id = require('crypto').randomBytes(10).toString('hex');

    fakeDatabase[id] = args.input;
    return new Letter(id, args.input);
  },
  updateLetter: function (args) {
    if (!fakeDatabase[args.id]) {
      throw new Error('no message exists with id ' + args.id);
    }
    fakeDatabase[args.id] = args.input;
    return new Letter(args.id, args.input);
	},

};

module.exports = root;

/* Notes
		- The queries are returning new objects al the time, but in a real application a query should not create a new object.
*/