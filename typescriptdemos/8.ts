function addNumber(a: number, b: number, c?: number): number {
    
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

console.log(addNumber(10,20))
console.log(addNumber(10,40,43))

