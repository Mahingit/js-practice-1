/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। */
let roll = [12, 14, 22, 43, 2, 6];
for (i = 0; i < roll.length; i++) {
    console.log(roll[i]);
}

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো */
let number = [12, 14, 22, 93, 2, 85];
for (i = 0; i < number.length; i++) {
    if (number[i] > 80) {
        console.log(number[i]);
    }
}