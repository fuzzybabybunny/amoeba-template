Meteor.publish('websites', function() {
  return Websites.find();
});

// Meteor.publish('users', function() {
//   return Users.find();
// });