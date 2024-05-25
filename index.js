// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const copyCat = [...cats, name];
    return copyCat;
}

appendCat()


function prependCat(name) {
    const copyCat = [name, ...cats];
    return copyCat;
}

prependCat()


function removeLastCat(name) {
    const copyCat = cats.slice(0, cats.length - 1)
    return copyCat;
}

function removeFirstCat(name) {
    const copyCat = cats.slice(1)
    return copyCat;
}
