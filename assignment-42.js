/* ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
১ টি সিঙ্গারা এর দাম – ৭ টাকা
১ টি সমুচা এর দাম – ১০ টাকা 
১ টি জিলাপি এর দাম – ১৫ টাকা 
এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */

// problem-2:
//initialize a function
function pandaCost(shingara, shamucha, jilapi) {
    //Define input
    if (typeof shingara != "number" || typeof shamucha != 'number' || typeof jilapi != 'number' || shingara < 0 || shamucha < 0 || jilapi < 0) {
        return "Invalid Input! please Enter a positive Number"
    }
    // Price calculation
    else {
        const shingaraPrice = 7 * shingara;
        const shamuchaPrice = 10 * shamucha;
        const jilapiPrice = 15 * jilapi;
        const totalCost = shingaraPrice + shamuchaPrice + jilapiPrice;
        return totalCost;
    }
}
let totlacost1 = pandaCost(11, 1, 0);
console.log(totlacost1);
