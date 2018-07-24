class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.table( employees );

let employeeBonuses = [];
for (let employee of employees){
  let employeeBonus = calculateBonus(employee);
  employeeBonuses.push(employeeBonus)
  console.table(employeeBonus);
}

function calculateBonus(employee){
  let rating = employee.reviewRating;
  let bonusPercentage = 0;
  if (rating === 3){
    bonusPercentage = 0.04;
  }
  else if (rating === 4){
    bonusPercentage = 0.06;
  }
  else if (rating === 5){
    bonusPercentage = 0.10;
  }
  if(employee.employeeNumber.length === 4){
    bonusPercentage += 0.05;
  }
  if(parseInt(employee.annualSalary) > 65000){
    bonusPercentage -= 0.01;
  }
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  }
  else if (bonusPercentage < 0){
    bonusPercentage = 0;
  }

  let bonusAmount = Math.round(employee.annualSalary * bonusPercentage);
  let employeeBonusCalculation = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: parseInt(employee.annualSalary) + bonusAmount,
    totalBonus: bonusAmount
  }
  return employeeBonusCalculation;
} // end calculateBonus

//console.log("Atticus bonus should be 0.09: Bonus returned was:", employeeBonuses[0].bonusPercentage);
