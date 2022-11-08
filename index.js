// Code your solutions in this file
const gifts = ["teddy bear", "drone","doll"];

function wrapGifts(gift){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
};

wrapGifts(gifts);

const messages = [];

function writeCards(stringName,eventName){
    for (let i = 0; i < stringName.length;i++){
        
        messages.push((`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`));
    
    };

return messages;

};
function countDown(integerPos){
    let i = integerPos;
    while(i >= 0){
        console.log(i--);
    }
}


countDown(10);







