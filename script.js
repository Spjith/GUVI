// primitive data type
var number =10;
var name ="jith";
var precentage = 1.8;
var flag = false;

console.log(number, typeof number);
console.log(name, typeof name);
console.log(flag, typeof flag);
console.log(precentage, typeof precentage);

// non primitive data type
//array
//collection data
const arr =[10, "jith", precentage, false, {mentor:"jith"}];
console.log(arr);

//object JSON
//key and value
const obj ={
    name:"jith",
    batch:54,
    stand:true,
    arr:[1,2,3,"d"],
};
console.log(obj);

// copy by value and copy by reference
var num1 = 10;
var num2 = num1;
var num2 =30;
console.log("num1", num1);
console.log("num2", num2);
//copy by reference
let herocricketer =["virat","rohit","sachin"];
let herocricketercopy = herocricketer;
herocricketercopy[1] ="dhoni";
console.log(herocricketer);
console.log(herocricketercopy);
const nestobj =[
    {
        class :"fsd",
        student:[
            {
             name:"jith",
             stack: [
                "html",
                "css",
                {
                    js:["react","angular"]
             },
            ],
            },
            {
                name:"shree",
                stack: ["html","css",{
                       js:["react","vlue"]
                }]
               },
        ],
    
    },
];
console.log("jith",nestobj[0].student[0].stack[2].js[1]);
console.log("shree",nestobj[0].student[1].stack[2].js[1]);