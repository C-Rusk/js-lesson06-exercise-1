var shoutIt = function (name) {
  var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
  return shout;
};

console.log(shoutIt("Cassandra"));
console.log(shoutIt("Laura Palmer"));
console.log(shoutIt("Agent Cooper"));
