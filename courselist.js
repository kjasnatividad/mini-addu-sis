const courselist = [
  {
    coursecode: "CS 2240",
    coursename: "APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES",
    totalSlots: "40",
    occupied: "10",
    remaining: "30",
    sched: "* 7:40A-9:10A F612 MW * 9:50A-11:50A F612 F *",
  },
  {
    coursecode: "GE 1213",
    coursename: "LIFE AND WORKS OF RIZAL",
    totalSlots: "40",
    occupied: "20",
    remaining: "20",
    sched: "* 5:50P-7:20P F312 TTh *",
  },
  {
    coursecode: "IT 2239",
    coursename: "FUNDAMENTALS OF DATABASE SYSTEMS",
    totalSlots: "40",
    occupied: "30",
    remaining: "10",
    sched: "* 7:40A-10:10A F609 TTh *",
  },
  {
    coursecode: "IT 2241",
    coursename: "EVENT-DRIVEN PROGRAMMING",
    totalSlots: "40",
    occupied: "10",
    remaining: "30",
    sched: "* 7:40A-9:10A F612 MW * 9:50A-11:50A F612 F *",
  },
  {
    coursecode: "IT 2242",
    coursename: "STATISTICS FOR RESEARCH",
    totalSlots: "40",
    occupied: "35",
    remaining: "5",
    sched: "* 9:20A-10:50A D404 MW *",
  },
  {
    coursecode: "IT 2243",
    coursename: "IT ELECTIVE 1",
    totalSlots: "40",
    occupied: "10",
    remaining: "30",
    sched: "* 7:40A-9:10A F612 MW * 9:50A-11:50A F612 F *",
  },
  {
    coursecode: "PE 2217",
    coursename:
      "PATH-FIT 4: TEAM SPORTS, GROUP EXERCISE AND RECREATIONAL ACTIVITIES",
    totalSlots: "40",
    occupied: "40",
    remaining: "0",
    sched: "* 5:50P-7:50P M700A M *",
  },
  {
    coursecode: "ASF 1203",
    coursename:
      "NATIONAL SERVICE TRAINING PROGRAM - CIVIC WELFARE TRAINING SERVICE 2",
    totalSlots: "40",
    occupied: "40",
    remaining: "0",
    sched: "* 1:30P-4:30P F405 Sat *",
  },
  {
    coursecode: "Philo 1000",
    coursename: "PHILOSOPHY",
    totalSlots: "40",
    occupied: "0",
    remaining: "0",
    sched: "* 7:40A-9:10A F408 MW *",
  },
  {
    coursecode: "GE 1105",
    coursename: "UNDERSTANDING THE SELF",
    totalSlots: "40",
    occupied: "20",
    remaining: "20",
    sched: "* 9:20A-10:50A F312 Tth *",
  },
  {
    coursecode: "GE 1106",
    coursename: "PURPOSIVE COMMUNICATION",
    totalSlots: "40",
    occupied: "30",
    remaining: "10",
    sched: "* 7:40A-9:10A F510 MW *",
  },
  {
    coursecode: "GE 1108",
    coursename: "MATHEMATICS IN THE MODERN WORLD",
    totalSlots: "40",
    occupied: "15",
    remaining: "25",
    sched: "* 7:40A-9:10A F709 MW *",
  },
  {
    coursecode: "Theo 1000",
    coursename: "THEOLOGY",
    totalSlots: "40",
    occupied: "40",
    remaining: "0",
    sched: "* 7:40A-9:10A F508 TTh *",
  },
  {
    coursecode: "GE 1210",
    coursename: "READINGS IN PHILIPPINE HISTORY",
    totalSlots: "40",
    occupied: "35",
    remaining: "5",
    sched: "* 7:30P-9:00P F702 MW *",
  },
  {
    coursecode: "GE 1211",
    coursename: "THE CONTEMPORARY WORLD",
    totalSlots: "40",
    occupied: "38",
    remaining: "2",
    sched: "* 7:40A-9:10A F305 MW *",
  },
  {
    coursecode: "GE 1212",
    coursename: "SCIENCE, TECHNOLOGY AND SOCIETY",
    totalSlots: "40",
    occupied: "35",
    remaining: "5",
    sched: "* 7:30P-9:00P F702 MW *",
  },
  {
    coursecode: "GE 1107",
    coursename: "ART APPRECIATION",
    totalSlots: "40",
    occupied: "38",
    remaining: "2",
    sched: "* 7:40A-9:10A F305 MW *",
  },
  {
    coursecode: "GE 1109",
    coursename: "ETHICS",
    totalSlots: "40",
    occupied: "35",
    remaining: "5",
    sched: "* 7:30P-9:00P F702 MW *",
  },
];

const courseTable = document
  .getElementById("course-data")
  .getElementsByTagName("tbody")[0];

for (let course of courselist) {
  const newRow = courseTable.insertRow(-1);

  for (let field in course) {
    const newCell = newRow.insertCell();

    newCell.innerHTML = course[field];

    newCell.classList.add(
      "px-2",
      "py-1",
      "text-sm",
      "border",
      "border-white",
      "border-2",
      "h-10"
    );

    if (courseTable.rows.length % 2 === 0) {
      newCell.classList.add("bg-neutral-200");
    } else {
      newCell.classList.add("bg-neutral-100");
    }

    if (
      field === "totalSlots" ||
      field === "occupied" ||
      field === "remaining"
    ) {
      newCell.classList.add("text-center");
    }
  }
}
