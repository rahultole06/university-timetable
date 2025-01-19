let tableData = JSON.parse(jsonDataUni);

const tableElement = document.getElementById("course-list");

const table = document.createElement("table");
table.id = "table";

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headerArr = ['Code', 'Name', 'Days', 'Time', 'Location', 'Enroll Max', 'Enroll Current', 'Enroll Avail.', 'Instructor'];

for (let i = 0; i < headerArr.length; i++){
    const th = document.createElement("th");
    th.textContent = headerArr[i];
    headerRow.appendChild(th);
}

thead.append(headerRow);
table.append(thead);

const tbody = document.createElement("tbody");

tableElement.append(table);
table.append(tbody);

renderTable(tableData);

const filterButton = document.getElementById("filter-button")
const searchInput = document.getElementById("search-input");
filterButton.addEventListener("click", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = tableData.filter(item => item.courseCode.toLowerCase().startsWith(searchTerm.slice(0, item.courseCode.length)));
    renderTable(filteredData);

});

function renderTable(data){
    tbody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.courseCode}</td>
            <td>${item.courseName}</td>
            <td>${item.scheduleDays}</td>
            <td>${item.scheduleTime}</td>
            <td>${item.location}</td>
            <td>${item.enrollmentMax}</td>
            <td>${item.enrollmentCurrent}</td>
            <td>${item.enrollmentAvailability}</td>
            <td>${item.instructor}</td>
        `;
        tbody.append(row);
    }
}