
function giftGenerator(name, age) {
    let gift = "gift description";
    if (name !== "charlie") {
        if (age < 5) {
            gift = "a soft toy";
        } else if(age > 12) {
            gift = "a fiction book";
        } else if (age > 18) {
            gift = "a new mobile phone";
        } else  {
            gift = "some money, so you can buy whatever you like";
        }
    } else {
        gift = "a bar of chocolate with a golden ticket to Willy Wonka's Chocolate Factory";
    }
    return `{name}, your gift is ${gift}. Hope you like it!`;
}

console.log(giftGenerator("Jill", 3)); // should get a soft toy
console.log(giftGenerator("Bob", 11)); // should get a book
// console.log(giftGenerator("Jane", 15)); // should get a mobile phone
// console.log(giftGenerator("Minh", "I don't know")); // should get money
// console.log(giftGenerator("Charlie", 12)); // should get a bar of chocolate