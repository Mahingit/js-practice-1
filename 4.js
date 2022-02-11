/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */
let roll = [12, 14, 22, 43, 2, 6];
let totalRoll = roll.length;
// console.log(totalRoll);
roll.splice(2, 2, 99);
// console.log(roll);
roll.push(11, 12);
// console.log(roll);
roll.pop()
console.log(roll);