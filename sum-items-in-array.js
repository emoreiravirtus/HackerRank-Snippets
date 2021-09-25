function simpleArraySum(arrayOfNumbers) {
    return arrayOfNumbers.reduce(add, 0);

}

const add = (accumulator, a) => {
    return accumulator + a;
}
