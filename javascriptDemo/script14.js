//Template Literals

let c1 = {cid:101,name:'Vamsy',mobile:'9052224753',email:'vamsy@gmail.com',dob:new Date('1987-01-01')};

let msg = "Hello "+c1.name+"! It is good to call you at "+c1.mobile;
console.log(msg);

let msg2= `Hello ${c1.name}! It is good to call you at ${c1.mobile}`;
console.log(msg2);

//Destructured assignment

//let name = c1.name;
//let mobile = c1.mobile;

let {name,mobile} = c1;
console.log(`Hello ${name}! It is good to call you at ${mobile}`);

const printAge = ({name,dob}) => {
    let age = (new Date()).getFullYear()-dob.getFullYear();
    console.log(`Hello ${name}! You are ${age} years old`);
};

printAge(c1);

