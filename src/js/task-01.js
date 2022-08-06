const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);

for (const node of itemRef) {
  console.log(`Category:  ${node.firstElementChild.textContent}`);
  console.log(`Elements:  ${node.lastElementChild.children.length}`);
}
