// problem-1:
//initialize a function
function anaToVori(ana) {
    //Define input of ana
    if (typeof ana != "number" || ana < 0) {
        return "Invalid Input! please Enter a positive Number"
    }
    // ana to vori conversion
    else {
        const vori = ana / 16;
        return vori;
    }
}

console.log(anaToVori(16));