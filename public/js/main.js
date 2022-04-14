

let fatherCategory = document.getElementsByClassName('CollapsiblePanel');
console.log(fatherCategory)
for (i in fatherCategory) {
    let k = new Spry.Widget.CollapsiblePanel(fatherCategory[i].id);
}
