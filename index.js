let cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

// Function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

// Function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

// Function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

// Function to append a cat to the cats array and return a new array
function appendCat(name) {
    let newArray = [...cats, name];
    return newArray;
}

// Function to prepend a cat to the cats array and return a new array
function prependCat(name) {
    let newArray = [name, ...cats];
    return newArray;
}

// Function to remove the last cat from the cats array and return a new array
function removeLastCat() {
    let newArray = cats.slice(0, -1);
    return newArray;
}

// Function to remove the first cat from the cats array and return a new array
function removeFirstCat() {
    let newArray = cats.slice(1);
    return newArray;
}
