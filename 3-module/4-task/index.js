const users = [{
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
}, {
  "balance": "$1",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Gol Bra",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
}]

console.log(doIt(users, 30))

function doIt(users,age) {
  return users.filter(users => users.age <= age).map(users => `${users.name} ${users.balance}`).join('\r\n')
}