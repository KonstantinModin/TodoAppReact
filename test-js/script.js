'use strict';
let graph = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggy"],
    claire: ["thom", "jonny"],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: []
};
console.log(graph);

function search(name) {
    let searchedFlag = false;

    function notInSearched(person) {
        searchedFlag = false;
        searched.forEach(item => {
            if (item == person {searchedFlag = true});
        });
    }
    
    function personIsSeller(person) {
        if (person == 'thom') return true;
    }    
    
    let queue = graph[name],
        searched = [];
        while (queue) {
            let person = queue.shift();
            if (notInSearched(person)) {
                console.log(`did not look ${person}`);
                console.log(searched[person]);
                if (personIsSeller(person)) {
                    console.log(person + ' is mango seller')
                    return true;
                } else {
                    graph[person].forEach(item => {
                        queue.push(item);                    
                    });
                    searched.push(person);
                    console.log(searched);
            }
        }
    }
    
    console.log(queue);
}
search('you');