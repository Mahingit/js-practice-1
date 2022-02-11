/* ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 
যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 
যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 
আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  
 
এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 
*/

// problem-3:
//initialize a function
function picnicBudget(personJoiningPicnic) {
    //Define input
    if (typeof personJoiningPicnic != "number" || personJoiningPicnic < 0) {
        return "Invalid Input! please Enter a positive Number"
    }
    // Per person cost in various situation. 
    const costForFirst100 = 5000;
    const costForSecond100 = 4000;
    const costAfterSecond100 = 3000;
    // Total budget for picnic if persons are less than hundrad.
    if (personJoiningPicnic <= 100) {
        const totalBudgetIfBelow100 = personJoiningPicnic * costForFirst100;
        return totalBudgetIfBelow100;
        console.log(totalBudgetIfBelow100);
    }
    // Total budget for picnic if persons are above one hundrad but less than two hundrad.
    else if (personJoiningPicnic <= 200) {
        const costingForFirst100 = 100 * costForFirst100;
        const restPerson = personJoiningPicnic - 100;
        const costingForAbove100 = restPerson * costForSecond100;
        const totalBudgetIfBelow200 = costingForFirst100 + costingForAbove100;
        return totalBudgetIfBelow200;
    }
    // Total budget for picnic if persons are above two hundrad.
    else if (personJoiningPicnic > 200); {
        const costingForFirst100 = 100 * costForFirst100;
        const costingForAbove100 = 100 * costForSecond100;
        const restPerson = personJoiningPicnic - 200;
        const costingAfter200 = restPerson * costAfterSecond100;
        const totalBudgetIfAbove200 = costingForFirst100 + costingForAbove100 + costingAfter200;
        return totalBudgetIfAbove200;
    }
}

const budget = picnicBudget(200);
console.log(budget);