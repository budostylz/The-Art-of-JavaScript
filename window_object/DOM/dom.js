
//root node <html>
console.log(document.documentElement);

//last child of <html> --> <body>
console.log(document.documentElement.lastChild);

//first <div> of body
console.log(document.documentElement.lastChild.children[0]);

//return all children textnodes
console.log(document.documentElement.lastChild.childNodes[0]);