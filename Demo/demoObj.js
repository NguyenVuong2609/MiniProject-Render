//! OBJECT !//
let student = {
    name: 'Nguyen Vuong',
    age: 17,
    address: {
        District: 'West Lake',
        Street: 'Lac Long Quan'
    },
    talk: function(){
        console.log("Hello!");
    }
}
//* Create: Thêm thuộc tính vào đối tượng object *//
student.id = 1;

//* Read *//
for (let key in student) {
//    console.log(student[key]);
} //? forIn: in ra các thuộc tính của object *//

//* Update *//
student.age = 18;
// console.log(student);

//* Delete *//
// delete student.id;
// console.log(student);

//* Spread *// Dạng shallow clone *//
let student1 = {...student};
//TODO: Chỉ clone không thay đổi cấp độ I, từ cấp II sẽ bị thay đổi. //
//? Nếu không phải là object thì sẽ không bị thay đổi //

//* Object.assign //  Dạng shallow clone *//
// let student2 = Object.assign({},student)
// student.age = 16;
// student.address = 'Trich Sai';
// console.log(student2);

//* Deep clone *// Clone hoàn toàn //
let student2 = JSON.parse(JSON.stringify(student));
// console.log(student.address.District);
// console.log(student);
student.address.District = 'Hoan Kiem';
// console.log(student);
// console.log(student2);

//* new Date, Set //
let array = [1,1,1,5,5,7,8,9,4];
//? Set : loại phần tử trùng nhau //
let result = new Set(array);
console.log(result);

//? Date : lấy ngày giờ, tháng năm //
let date = new Date();
console.log(date.getDate());