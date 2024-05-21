
// create a variable to hold your NFT's
const NFT = [];

var i = 0; //declaring and initializing the global counter


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (na,da,pr) {
     NFT[i] = {                  //Can also create a local object and use NFT.push() to push that object
        "name": na,              // to the NFT array
        "date" : da,
        "price" : pr
    }
    console.log(NFT[i].name + " added successfully");
    i++; // incrementing global counter
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    console.log("List of all NFTs:");
    for(let j =0; j<i ; j++){
        console.log(j+1 + ". " + "Name: " + NFT[j].name);
        console.log("   Date of Acquiring: " + NFT[j].date);
        console.log("   Price of NFT: " + NFT[j].price);
    }
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The total NFTs created: ",NFT.length); //Can also use global counter "i" to get the total number 
}


// call your functions below this line
mintNFT("Sphere Art","02-12-2023","$530");
mintNFT("Thunder NFT","11-03-2024","$234");
mintNFT("Crypto Potato","16-04-2024","$348");
listNFTs();
getTotalSupply();