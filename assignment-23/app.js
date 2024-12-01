// Question No.1

var itemsArray = [
    {name: "juice", price: 50, quantity: 3},
    {name: "cookie", price: 30, quantity: 9},
    {name: "shirt", price: 880, quantity: 1},
    {name: "pen", price: 100, quantity: 2}
];

var totalAmount = 0;

itemsArray.forEach(item => {
    var itemTotal = item.price * item.quantity; 
    console.log(`${item.name}: ${itemTotal}`);  
    totalAmount += itemTotal; 
});

console.log(`Total price of all items: ${totalAmount}`); 

// question No.2

var user = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
};
console.log("Has age: ", user.hasOwnProperty('age'));
console.log("Has country: ", user.hasOwnProperty('country'));

console.log("Has firstName: ", user.hasOwnProperty('firstName'));
console.log("Has lastName: ", user.hasOwnProperty('lastName'));

// Question No.3

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

var person1 = new Person("Alice", 25, "Los Angeles");
var person2 = new Person("Bob", 30, "Chicago");

console.log(person1);
console.log(person2);

// Question NO.4

        function PopulationRecord(name, gender, address, education, profession) {
            this.name = name;
            this.gender = gender;
            this.address = address;
            this.education = education;
            this.profession = profession;
        }

        function submitForm() {
            const name = document.getElementById("name").value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const address = document.getElementById("address").value;
            const education = document.getElementById("education").value;
            const profession = document.getElementById("profession").value;

            var record = new PopulationRecord(name, gender, address, education, profession);
            console.log(record);

            localStorage.setItem('populationRecord', JSON.stringify(record));
            alert("Record saved!");
        }
  
