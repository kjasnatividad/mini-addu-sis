const grades = [
    {
        "SUBJ NO.": "CS 2240 / (4-112) /",
        "DESCRIPTIVE TITLE": "APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES / (* 7:40A-9:10A F612 MW * 9:50P-11:50P F612 F*) /",
        "PRELIM": "A",
        "MIDTERM": "B+",
        "PRE-FINAL": "A",
        "FINAL": "A",
        "UNITS": "3.00",
        "CREDIT TO": ""
    },
    {
        "SUBJ NO.": "IT 2239 / (4-108) /",
        "DESCRIPTIVE TITLE": "FUNDAMENTALS OF DATABASE SYSTEMS / (* 7:40A-10:10A F609 TTh *) / ",
        "PRELIM": "A",
        "MIDTERM": "A",
        "PRE-FINAL": "A",
        "FINAL": "A",
        "UNITS": "3.00",
        "CREDIT TO": ""
    },
    {
        "SUBJ NO.": "IT 2241 / (4-114) /",
        "DESCRIPTIVE TITLE": "EVENT-DRIVEN PROGRAMMING / (*2:05P-4:35P F605 TTh *) / ",
        "PRELIM": "A",
        "MIDTERM": "A",
        "PRE-FINAL": "A",
        "FINAL": "A",
        "UNITS": "3.00",
        "CREDIT TO": ""
    },
    {
        "SUBJ NO.": "IT 2242 / (4-109) /",
        "DESCRIPTIVE TITLE": "STATISTICS FOR RESEARCH / (* 9:20A-10:50A D404 MW *) / ",
        "PRELIM": "C+",
        "MIDTERM": "B",
        "PRE-FINAL": "A",
        "FINAL": "C",
        "UNITS": "3.00",
        "CREDIT TO": ""
    },
    {
        "SUBJ NO.": "IT 2243 / (4-104) /",
        "DESCRIPTIVE TITLE": "IT ELECTIVE 1 / (* 12:25-1:55 F610 MW * 1:00P-3:00P F610 F *) / ",
        "PRELIM": "A",
        "MIDTERM": "A",
        "PRE-FINAL": "A",
        "FINAL": "A",
        "UNITS": "3.00",
        "CREDIT TO": ""
    },
];

function gradeTable(grades) {
    let mygradeSection = document.getElementById("grades-table");
    grades.forEach((item, index) => {
        let row = document.createElement("tr");
        row.classList.add(index % 2 === 0 ? "bg-neutral-200" : "bg-neutral-100");

        Object.entries(item).forEach(([key, value], cellIndex) => {
            let cell = document.createElement("td");

            if(key ==="PRELIM" || key === "MIDTERM" || key === "PRE-FINAL" || key === "FINAL" || key === "UNITS"){
                cell.classList.add("p-1", "whitespace-nowrap", "text-xs", "text-gray-800","border","border-white","text-center");
            }else{
                cell.classList.add("p-1", "whitespace-nowrap", "text-xs", "text-gray-800","border","border-white");
            }

            if (key === "SUBJ NO." || key === "DESCRIPTIVE TITLE"){
                const [name, time] = value.split('/');
                cell.innerHTML = `<div>${name.trim()}</div><div>${time.trim()}</div>`;
            }else {
                cell.textContent = value;
            }

            row.appendChild(cell);
        });
        mygradeSection.appendChild(row);
    });
}

gradeTable(grades);


/*const grades = [
    {
        subjno: "CS 2240 / (4-112) /",
        desc: "APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES / (* 7:40A-9:10A F612 MW * 9:50P-11:50P F612 F*) /",
        prelim: "A",
        midterm: "B+",
        prefinal: "A",
        final: "A",
        units: "3.00",
        credit: ""
    },
    {
        subjno: "IT 2239 / (4-108) /",
        desc: "FUNDAMENTALS OF DATABASE SYSTEMS / (* 7:40A-10:10A F609 TTh *) / ",
        prelim: "A",
        midterm: "A",
        prefinal: "A",
        final: "A",
        units: "3.00",
        credit: ""
    },
    {
        subjno: "IT 2241 / (4-114) /",
        desc: "EVENT-DRIVEN PROGRAMMING / (*2:05P-4:35P F605 TTh *) / ",
        prelim: "A",
        midterm: "A",
        prefinal: "A",
        final: "A",
        units: "3.00",
        credit: ""
    },
    {
        subjno: "IT 2242 / (4-109) /",
        desc: "STATISTICS FOR RESEARCH / (* 9:20A-10:50A D404 MW *) / ",
        prelim: "C+",
        midterm: "B",
        prefinal: "A",
        final: "C",
        units: "3.00",
        credit: ""
    },
    {
        subjno: "IT 2243 / (4-104) /",
        desc: "IT ELECTIVE 1 / (* 12:25-1:55 F610 MW * 1:00P-3:00P F610 F *) / ",
        prelim: "A",
        midterm: "A",
        prefinal: "A",
        final: "A",
        units: "3.00",
        credit: ""
    },
];

const gradetable = document.getElementById("grades-table");

for(let grade of grades){
     const newRow = gradetable.insertRow(-1);
}
for(let field in grade){
    const newCell = newRow.insertRow();

    newCell.innerHTML = grade[field];
        
    if(key ==="PRELIM" || key === "MIDTERM" || key === "PRE-FINAL" || key === "FINAL" || key === "UNITS"){
        newCell.classList.add("p-1", "whitespace-nowrap", "text-xs", "text-gray-800","border","border-white","text-center");
    }else{
        newCell.classList.add("p-1", "whitespace-nowrap", "text-xs", "text-gray-800","border","border-white");
    }
    if(gradetable.rows.length % 2 === 0){
        newCell.classList.add("bg-neutral-200");
    }else{
         newCell.classList.add("bg-neutral-100");
        }
    }*/