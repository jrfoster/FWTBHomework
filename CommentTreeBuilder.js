/*
Functional Requirements
 Build the Tree: Implement buildTree(data) that returns only top-level nodes
(parentId: null), each with a populated replies array.
#### Done
 Recursive Nesting: The solution must be recursive to handle arbitrary depth
(e.g., ID 14 is a child of 13, which is a child of 12, and so on).
#### Done
 Robustness: If a parentId refers to an ID that doesn't exist, ignore that reply or
handle it safely.
#### Done

Technical Constraints
 Efficiency: Aim for $O(n)$ time complexity. Avoid iterating through the entire list
to find children for every single node. Hint: Use a Hash Map/Object to store
references by id.
#### Maybe Done

 Pure JavaScript: No third-party libraries (like Lodash).
#### Done

Deliverables
 A .js file with your logic.
 A console.log statement that prints the tree structure formatted for readability (use
JSON.stringify(tree, null, 2)).
#### Maybe Done

Questions
1. What should I do with the arrray with the replys?
2. How should the tree JSON look like?
3. How should I test or see if my code in in O(n)?
*/
const fs = require('fs');
let idDict = {};
//let headArray = [];
//let seenHeads = {};

// Read the JSON file and build the idDict
try {
    const data = fs.readFileSync('./Test.json', 'utf8');
    const jsonArray = JSON.parse(data);

    jsonArray.forEach((item) => {
        idDict[item.id] = [item.parentId, item.text];
    });

} catch (err) {
    console.error(err);
}
/*
// Recursive function to find the head of a given id
function findHead(id) {
    if (id !== null && idDict[id]) {
        const parentId = idDict[id][0];
        if (parentId === null) {
            //console.log();
            return id; 
        } else {
            return findHead(parentId); // go up the tree
        }
    }
    else {
        return null; // skip to the next key
    }
}

// Find all unique heads
for (let id in idDict) {
    const head = findHead(id);
    if (!seenHeads[head]) {
        seenHeads[head] = true;
        if (head !== null) {
            headArray.push(idDict[id][1]);
        }
    }
}

console.log("Heads:", headArray);*/

// Build the tree structure
function buildTree(dict) {

    // Helper function to build a node and its children
    function buildNode(id) {
        let node = {
            id: id,
            text: dict[id][1],
            children: []
        };

        // Find children recursively
        Object.keys(dict).forEach(childId => {
            if (dict[childId][0] == id) {
                node.children.push(buildNode(childId));
            }
        });

        return node;
    }
    // Start from roots
    let roots = [];

    Object.keys(dict).forEach(id => {
        if (dict[id][0] === null) {
            roots.push(buildNode(id));
        }
    });

    return roots;
}

const tree = buildTree(idDict);

// Write the tree to a JSON file
const jsonString = JSON.stringify(tree, null, 2);

fs.writeFile('JSTree.json', jsonString, (err) => {
  if (err) {
    console.error('Error writing to file',err);
    return;
  }
  console.log('Data written to file');
});