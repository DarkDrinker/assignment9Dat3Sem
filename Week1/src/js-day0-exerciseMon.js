//0.0 Excerise 0: getting comfortable with arrays, filter, map and foreach
//0.1 
let people = [{lars},{Peter},{Jan},{Ian}];
let filteredPeople = people.filter(person => person.length<3);

filteredPeople.map(person => {
  console.log(person);
  return <li>{person}</li>;
});

//0.2 Use the names-array created above, and, using its map method, create a new array with all names uppercased.
let uppercasedNames = people.map(person => person.toUpperCase());

//0.3 Use map, join + just a little bit more to create a function, which given the array of names, for example: 
//["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
function createHTMLList(names) {
  let htmlString = "<ul>\n";
  htmlString += names.map(name => `<li>${name}</li>`).join("\n");
  htmlString += "\n</ul>";
  return htmlString;
}

let names = ["Lars", "Peter", "Jan", "Ian"];
console.log(createHTMLList(names));

//0.4 given this JS array
let cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
//0.4.1 Use the filter to get arrays with only 
//Cars newer than 1999
//All volvos
//all cars with a price below 5000
let carsnewerthan1999 = cars.map(car => car.year>1999);
let allvolvos = cars.map(car => car.make==="Volvo");
let carsunder5000 = cars.map(car=>car.price<5000);

//0.4.2 Use map, join + just a little bit more to implement a function, that , given the cars array used above, will create, and return a string 
//with valid SQL statements to insert the data into a table with matching column names (id, year, make, model, price) as sketched below:

function createSQLStringsForCars(cars){
  let sqlStatements = cars.map(car => 
    `INSERT INTO cars (id,year,make,model,price) VALUES (${car.id}, ${car.year}, '${car.make}', '${car.model}', ${car.price});`
  ).join("\n");

  return sqlStatements;
}

console.log(createSQLStringsForCars(cars))

////////////////////////////////////////
//1.1 Implement map and filter