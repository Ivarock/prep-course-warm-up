export {};

function onlyTheAces(arr: string[], value: string) {
    let aces: string [] = [];
    arr.forEach(element => {
        if(element === value) {
            aces.push(element);
        }
    })
    return aces;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"],"Ace")); // Expected result: ['Ace', 'Ace']
