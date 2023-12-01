// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length-1;i > -1; i--) {
    reversedCompanyName = reversedCompanyName + companyName[i];
}


/*for (let i =0; i<companyName.length; i++){
    reversedCompanyName = companyName[i] + reversedCompanyName
}*/

console.log(reversedCompanyName);
