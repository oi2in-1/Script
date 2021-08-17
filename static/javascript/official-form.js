
let print = () => {
	let objFra = document.getElementById('official-form');
    objFra.contentWindow.focus();
    objFra.contentWindow.print();
}

// Using regular js features.
    
//     function print() {
//         var objFra = document.getElementById('myFrame');
//         objFra.contentWindow.focus();
//         objFra.contentWindow.print();
//     }
