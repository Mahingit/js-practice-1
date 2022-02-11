// /*৪. [ ফাংশন নেম দিতে হবে oddFriend]: বিস্তারিত ভিডিওতে দেখো। onekgula friemd er naam thakbe, prthom j friednd er array naam total caractecr string lenth odd oita ber korte hobe *


// problem-4:
//initialize a function
function oddFriend(friendsName) {
    let firstOddFriend = "";
    for (let i = 0; i < friendsName.length; i++) {
        //Define input
        if (typeof friendsName[i] == "number") {
            return "Invalid Input! please Enter only string"
        }
        //Find odd string  
        if (friendsName[i].length % 2 == 1) {
            firstOddFriend = friendsName[i];
            break;
        }
    }
    return firstOddFriend;
}


const arrayOf = ['abul', 123, 'kbul', 'habul'];
console.log(oddFriend(arrayOf));
