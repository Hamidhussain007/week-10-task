let array =[];

let myData = {
    name: "hamid Ali",
    fatherName: "M kazim",
    age:"20",
    address: "summayar nagar",
    religion: "Islam",
    nation:"pakistan"
}
let newData={
    matric: "G.B model school smr nagar",
    FA: "Degree College Ali abad Hunza",
    BA: "vision heigher secondarry school and college"
}

console.log(array);

array.unshift(myData);
console.log(array)
array.push(newData);
console.log(array);

// let myBio = `My name is ${array[0].name}. My father name is ${array[0].fatherName}. I am ${[0].age} year old. I belong to ${array[0].address}. My religion is ${array[0].religion} and my nation is pakistan. I have matriculated from ${array[1].matric} and F.A from ${array[1].FA} and am currently studying at ${array[1].BA}.`

// console.log(myBio);

array.shift(myData);
console.log(array)
array.pop(newData);
console.log(array);
