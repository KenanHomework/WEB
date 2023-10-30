import _ from "lodash";
import {
  format,
  addDays,
  isToday,
  differenceInCalendarDays,
  startOfMonth,
} from "date-fns";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Date FNS
const date = new Date();
const formattedDate = format(date, "dd/MM/yyyy");
console.log("Formatted Date:", formattedDate);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const today = new Date();
const nextWeek = addDays(today, 7);
console.log("Date After Adding 7 Days:", format(nextWeek, "dd/MM/yyyy"));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const currentDate = new Date();
console.log("Is Current Date Today?", isToday(currentDate)); // true

const futureDate = new Date("2023-11-01");
console.log("Is Future Date Today?", isToday(futureDate)); // false

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");
const daysBetween = differenceInCalendarDays(endDate, startDate);
console.log("Days Between Start and End Date:", daysBetween);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const dateInMonth = new Date("2023-11-15");
const firstDayOfMonth = startOfMonth(dateInMonth);
console.log("First Day of Month:", format(firstDayOfMonth, "dd/MM/yyyy"));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
const originalObject = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const deepCopy = _.cloneDeep(originalObject);
console.log("Deep Copy of Object:", deepCopy);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const books = [
  { title: "Book A", author: "Author X", year: 2020 },
  { title: "Book B", author: "Author Y", year: 2018 },
  { title: "Book C", author: "Author X", year: 2019 },
];

const sortedBooks = _.orderBy(books, ["author", "year"], ["asc", "desc"]);
console.log("Sorted Books:", sortedBooks);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredData = _.filter(data, (num) => num % 2 === 0);
const countEvenNumbers = _.countBy(data, (num) =>
  num % 2 === 0 ? "even" : "odd"
);

console.log("Filtered Data:", filteredData);
console.log("Count of Even and Odd Numbers:", countEvenNumbers);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const students = [
  { name: "Student A", age: 18 },
  { name: "Student B", age: 20 },
  { name: "Student C", age: 18 },
  { name: "Student D", age: 20 },
  { name: "Student E", age: 18 },
];

const groupedStudents = _.chunk(students, 2);
console.log("Grouped Students:", groupedStudents);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const mergedArray = _.union(array1, array2);
console.log("Merged Array:", mergedArray);
