
// Variables:
let filterType = 'asc';

let table = document.querySelector('.dataTable');
let tableHeadCells = Array.from(table.tHead.rows[0].cells);
let tableBodyRows = table.tBodies[0].rows;
let currentRows = [];
let currentCells = [];

for (row of tableBodyRows) {

   for (cell of row.cells) {
      currentCells.push(cell.innerText);
   }
   currentRows.push(currentCells);
   currentCells = [];
};








let filterTitles = document.querySelectorAll('th[data-filter-value]');
filterTitles.forEach((title) => {
   title.addEventListener('click', titleHandler);
});


function titleHandler(e) {

   let clickedIndex = tableHeadCells.indexOf(e.target);
   sortTableBodyRows(clickedIndex);

};


function sortTableBodyRows(index) {

   if (filterType === 'asc') {
      for (let i = 0; i < currentRows.length; i++) {

         for (let j = currentRows.length - 1; j > i; j--) {

            if (Number(currentRows[i][index]) > Number(currentRows[j][index])) {
               let max = currentRows[i];
               currentRows[i] = currentRows[j];
               currentRows[j] = max;
            }
         }
      }
      upDateTable(currentRows);
      filterType = 'desc';
   }
   else {
      for (let i = 0; i < currentRows.length; i++) {

         for (let j = currentRows.length - 1; j > i; j--) {

            if (Number(currentRows[i][index]) < Number(currentRows[j][index])) {
               let min = currentRows[j];
               currentRows[j] = currentRows[i];
               currentRows[i] = min;
            }
         }
      }
      upDateTable(currentRows);
      filterType = 'asc';
   }
};

function upDateTable(newRows) {

   for (let i = 0; i < newRows.length; i++) {

      for (let j = 0; j < newRows[i].length; j++) {
         tableBodyRows[i].cells[j].innerText = newRows[i][j];
      }

   }

}















