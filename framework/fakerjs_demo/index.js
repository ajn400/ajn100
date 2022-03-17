import * as faker from 'faker'
let fakers = faker.default

var database = { users : []};
var threshold = 1000 ;

for ( var i = 1 ; i<= threshold; i++) {
    database.users.push({
        id : i,
        name : fakers.name.firstName() + " " + fakers.name.lastName(),
        job : fakers.name.jobTitle(),
        about : fakers.lorem.paragraph(),
        phone : fakers.phone.phoneNumber(),
        userName : fakers.internet.userName(),
        email : fakers.internet.email(),
        salary : "$" + fakers.finance.amount() + "M" ,
        // You can also use fakers.image.people() for image
        country : fakers.address.country()
    });
}
export default database
