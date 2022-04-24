const studentData = [
    // name, roll, age, class, gender, location, admission fees
    ['Shahab', '1', '24', '5', 'male', 'Habiganj', '3000'],
    ['Istiak', '2', '20', '4', 'male', 'Mirpur', '3500'],
    ['Raza', '3', '22', '3', 'male', 'Chittagong', '2200'],
    ['Rubel', '4', '24', '2', 'male', 'Sirajganj', '3600'],
    ['Faisal Kabir', '5', '25', '5', 'male', "Habiganj", '1200'],
    ['Abdur Razzak', '1', '10', '1', 'male', 'Mirpur', '4900'],
    ['Apu Barua', '50', '4', '3', 'male', 'Habiganj', '3900'],
    ['Mahbubur Rahman', '45', '7', '2', 'male', 'Banani', '600'],
    ['Rejoyan', '30', '16', '1', 'male', 'Mirpur', '1250'],
    ['Somaiya Alam', '4', '14', '4', 'female', 'Banani', '1460'],
    ['Saddam', '46', '13', '4', 'male', 'Sylhet', '3600'],
    ['Nazrul', '24', '7', '3', 'male', 'Habiganj', '760'],
    ['Rabiul', '75', '15', '1', 'male', 'Mirpur', '1300'],
    ['Sufia', '31', '19', '5', 'female', 'Banani', '1850'],
    ['Sarmin', '16', '16', '5', 'female', 'Sirajganj', '5400'],
    ['Ayesha', '60', '19', '4', 'female', 'Mirpur', '1500'],
    ['Sumi', '90', '24', '4', 'female', 'Banani', '2500'],
    ['Pushpo', '100', '12', '3', 'male', 'Habiganj', '10000'],
    ['Alisha Popy', '14', '6', '4', 'female', 'Sirajganj', '500'],
    ['Babli', '1', '4', '1', 'female', 'Habiganj', '3600'],
    ['Jorina', '4', '24', '2', 'female', 'Barisal', '1400'],
    ['Morjina', '5', '9', '1', 'female', 'Habiganj', '2100'],
    ['Ruji', '46', '14', '3', 'female', 'Mirpur', '1100'],
    ['Jasmin', '25', '25', '1', 'female', 'Chittagong', '5000'],
    ['Asma', '66', '11', '2', 'female', 'Sirajganj', '1600'],
    ['Taj Banu', '1', '13', '3', 'female', 'Chittagong', '10000'],
    ['Hasan', '47', '3', '1', 'male', 'Mirpur', '600'],
    ['Noman', '74', '17', '4', 'male', 'Sirajganj', '4270'],
    ['Parvez', '90', '14', '1', 'male', 'Sirajganj', '1780'],
    ['Mahmud', '16', '12', '4', 'male', 'Habiganj', '6500']
]


/**
 * Assignment 1
 * Total Admission Fees
 */

let totalFees = 0;

studentData.sort().forEach( (data, index) => {

    console.log(`${index+1}. Name: ${data[0]} | Class: ${data[3]} | Fees: ${data[6]}`);

    totalFees += +data[6]
});
console.log(`------------------------------------------
    Total Fees =    ${totalFees} 
`); 


/**
 * Assignment 2
 * Find All Female Studens
 */


console.log(`All Female Students
-----------------------------------`);

studentData.sort().map( (data, index) => {
    if (data[4] == 'female') {
        console.log(`Name: ${data[0]} | Class: ${data[3]}  |   Roll: ${data[1]} | Age: ${data[2]} | Location: ${data[5]}`);
    }
})


// /**
//  * Assignment 3
//  * Find class wise student result 
//  */


//Class 1
console.log(`
Class One
-----------------------------------------------
`);
studentData.sort().forEach( (data, index) => {
    if (data[3] == '1') {
        console.log(`Name: ${data[0]} | Class: ${data[3]} | Roll: ${data[1]} | Gender: ${data[4]} | Age: ${data[2]} | Location: ${data[5]}`);
    }
})

//Class 2
console.log(`
Class Two
-----------------------------------------------
`);
studentData.sort().forEach( (data, index) => {
    if (data[3] == '2') {
        console.log(`Name: ${data[0]} | Class: ${data[3]} | Roll: ${data[1]} | Gender: ${data[4]} | Age: ${data[2]} | Location: ${data[5]}`);
    }
})

//Class 3
console.log(`
Class Three
-----------------------------------------------
`);
studentData.sort().forEach( (data, index) => {
    if (data[3] == '3') {
        console.log(`Name: ${data[0]} | Class: ${data[3]} | Roll: ${data[1]} | Gender: ${data[4]} | Age: ${data[2]} | Location: ${data[5]}`);
    }
})

//Class 4
console.log(`
Class Four
-----------------------------------------------
`);
studentData.sort().forEach( (data, index) => {
    if (data[3] == '4') {
        console.log(`Name: ${data[0]} | Class: ${data[3]} | Roll: ${data[1]} | Gender: ${data[4]} | Age: ${data[2]} | Location: ${data[5]}`);
    }
})

//Class 5
console.log(`
Class Five
-----------------------------------------------
`);
studentData.sort().forEach( (data, index) => {
    if (data[3] == '5') {
        console.log(`Name: ${data[0]} | Class: ${data[3]} | Roll: ${data[1]} | Gender: ${data[4]} | Age: ${data[2]} | Location: ${data[5]}`);
    }
})


/**
 * Assignment 4
 * Location wise student result 
 */

studentData.sort().reverse().map( (data, index) => {

    if (data[5] == 'Habiganj') {
        console.log(`Name: ${data[0]} | Class: ${data[3]} | Roll: ${data[1]} | Gender: ${data[4]} | Age: ${data[2]} | Location: ${data[5]}`);
    }

})

/**
 * Assignment 5
 *  find student between 10 - 25 age 
 */

studentData.sort().map( (data, index) => {

    if (data[2] >= 10 && data[2] <= 25) {
        console.log(`Name: ${data[0]} | Age: ${data[2]} | Class: ${data[3]} | Roll: ${data[1]} | Gender: ${data[4]} | Location: ${data[5]}`);
    }
}) 