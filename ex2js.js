document.getElementById('generateButton').addEventListener('click', generateTable);

function generateTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const tableContainer = document.getElementById('tableContainer');
    
    // Clear previous table
    tableContainer.innerHTML = '';

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    const table = document.createElement('table');
    for (let i = 1; i <= rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= cols; j++) {
            const td = document.createElement('td');
            td.textContent = `(${i}, ${j})`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}