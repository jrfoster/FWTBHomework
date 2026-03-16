/*
Functional Requirements
 Build the Tree: Implement buildTree(data) that returns only top-level nodes
(parentId: null), each with a populated replies array.
 Recursive Nesting: The solution must be recursive to handle arbitrary depth
(e.g., ID 14 is a child of 13, which is a child of 12, and so on).
 Robustness: If a parentId refers to an ID that doesn't exist, ignore that reply or
handle it safely.
Technical Constraints
 Efficiency: Aim for $O(n)$ time complexity. Avoid iterating through the entire list
to find children for every single node. Hint: Use a Hash Map/Object to store
references by id.
 Pure JavaScript: No third-party libraries (like Lodash).

Deliverables
 A .js file with your logic.
 A console.log statement that prints the tree structure formatted for readability (use
JSON.stringify(tree, null, 2)).
*/
const fs = require('fs');
let idDict = {};
let headArray = [];

try {
    const data = fs.readFileSync('./Test.json', 'utf8');
    const jsonArray = JSON.parse(data);

    jsonArray.forEach((item) => {
        idDict[item.id] = [item.parentId, item.text];
    });

} catch (err) {
    console.error(err);
}

//console.log("ID Dictionary:", idDict);


// Recursive function to find the head of a given id
function findHead(id) {
    const parentId = idDict[id][0];

    if (parentId === null) {
        return id; 
    } else {
        return findHead(parentId); // go up the tree
    }
}


// Find all unique heads
let seenHeads = {};

for (let id in idDict) {
    const head = findHead(id);

    if (!seenHeads[head]) {
        seenHeads[head] = true;
        headArray.push(head);
    }
}

console.log("Heads:", headArray);