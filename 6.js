/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। */
function multiply(a, b, c) {
    const d = a * b * c;
    return d;
}

const multiplication = multiply(10, 2, 5)
// console.log(multiplication);

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। */
let objectt = { company: 'apple', price: 120, color: 'black' };
objectt.price = 200;
console.log(objectt);