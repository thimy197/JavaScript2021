/**
 * Array method:
        * forEach
        * every
        * some
        * find
        * filter
        * map
        * reduce
 */
var courses =[
    {
        id: 1,
        name: "Java",
        coin: 0
    },
    {
        id: 2,
        name: "Java2",
        coin: 2
    },
    {
        id: 3,
        name: "Java3",
        coin: 3
    },
    {
        id: 4,
        name: "Java3",
        coin: 4
    },
];

// lặp qua hết các phần tử
courses.forEach(function(course, index){
    console.log(index, course);
});

// kiểm tra tất cả có thỏa điều kiện
var isFree = courses.every(function(course, index){
    return course.coin === 0;
});
console.log(isFree);

// kiểm tra có bất kỳ ptu thỏa điều kiện
var hasFree = courses.some(function(course, index){
    return course.coin === 0;
});
console.log(hasFree);

// Tìm kiếm ptu đầu tiên thỏa điều kiện 
// --> chỉ trả về 1 đối tượng đầu tiên, kok có trả về undefine
var courseFind = courses.find(function(course, index){
    return course.name === "Java3";
});
console.log(courseFind);

// Tìm tất cả ptu thỏa đk
var courseFilter = courses.filter(function(course, index){
    return course.name === "Java3";
});
console.log(courseFilter);

// map, map giá trị trả về cho result
// var newCourses = courses.map(function(course){
//     course.name = `"Khóa học: "+ ${course.name}`;
//     course.content = "new content";
//     return course;
// });
// console.log(newCourses);
// Note: Nếu thực sửa như trên thì sẽ ảnh hưởng đến gốc lun
var newCoursesMap = courses.map(function(course){
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: 0,
        content: "new File"
    };
});
console.log(newCoursesMap);

// reduce, trả về kết quả tính toán trong reduce
var totalCoint = courses.reduce(function(totalCoint, currentCourse, currentIndex){
    // giá trị trả về sẽ đc lưu trữ trong totalCoint cho lần lặp tiếp theo
    return totalCoint + currentCourse.coin;
}, 0);// 0 là giá trị khởi tạo cho totalCoint
console.log(totalCoint);

// Chú ý nếu không có giá trị khởi tạo thì nó sẽ lấy ptu đầu tiên làm giá trị khởi tạo lun
var numberCoin = [100, 200, 500, 600];
var totalNumberCoin = numberCoin.reduce(function(total, current){
    return total+current;
});
console.log(totalNumberCoin);

// Ví dụ về làm phẳng mảng
var detailCourses = [
    {
        id: 1,
        course:{
            idCourse:1,
            name: "java",
            coin: 123
        }
    },
    {
        id: 2,
        course:{
            idCourse:2,
            name: "java2",
            coin: 223
        }
    },
    {
        id: 3,
        course:{
            idCourse:3,
            name: "java3",
            coin: 323
        }
    }
];

var newDetailCourse = detailCourses.reduce(function(newDetail, currentDetail){
    // Combines two or more arrays.
    return newDetail.concat(currentDetail.course);
}, []);
console.log(newDetailCourse);