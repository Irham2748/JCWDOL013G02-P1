// // Soal No. 1
// var p = 5;
// var l = 3;
// var luas = p * l;
// console.log(luas);

// // Soal No.2 
// var p = 5;
// var l = 3;
// var kll = (p * 2) + (l * 2);
// console.log(kll);

// // Soal No.3 
// // Write code to find the diameter, circumference and area of a circle.
// // Example : radius = 5
// // Output : diameter = 10, circumference = 31.4159, area = 78.539
// var r = 5;
// var d = 2 * r;
// console.log(`diameter = ${d}`);
// var mathPI = Math.PI;
// var c = 2 * mathPI * r;
// console.log(`circumference = ${c}`);
// var a = 3.14 * Math.pow(r, 2);
// console.log(`area = ${a}`);

// // Soal No. 4 
// // Write code to find the angles of a triangle given two angles.
// // Example : a = 80, b = 65 → 35
// var a = 80,
//   b = 65;
// var c = 180 - (a + b);
// console.log(c);

// // Soal No. 5
// // Write code to get the difference between dates in days.
// // Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
// const date1 = new Date("2022-01-20");
// const data2 = new Date("2022-01-22");

// const dataDay1 = date1.getDate();
// const dataDay2 = data2.getDate();

// const selisihHari = dataDay2 - dataDay1;
// console.log(selisihHari);

// // Soal No. 6
// // Write code to convert days to years, months, and days (Note: 1 year : 365 days, 1 month : 30 days).
// // Example : 400 days → 1 year, 1 month, 5 days
// // Example: 366 days → 1 year, 0 month, 1 day
// var numberOfDays = 366;
// var years = Math.floor(numberOfDays / 365);
// console.log(years);
// var daysleft = numberOfDays % 365;
// console.log(daysleft);
// var months = Math.floor(daysleft / 30);
// console.log(months);
// var days = daysleft % 30;
// console.log(days);

// console.log(years + " years " + months + " months " + days + " days");