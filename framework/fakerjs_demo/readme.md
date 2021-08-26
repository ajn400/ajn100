# faker.js
## faker.js是最近很火(2020)的在浏览器和node中生成大量fake data的库,下面是用法
- 初始化
> npm init -y
- 安装faker
> npm i faker --save
- 安装json-server
>npm i json-server --save
- index.js
```js
const faker = require ( 'faker' );
let database = { users : []};
const threshold = 1000 ;

for ( let i = 1 ; i<= threshold; i++) {
    database.users.push({
        id : i,
        name : faker.name.firstName() + " " + faker.name.lastName(),
        job : faker.name.jobTitle(),
        about : faker.lorem.paragraph(),
        phone : faker.phone.phoneNumber(),
        userName : faker.internet.userName(),
        email : faker.internet.email(),
        salary : "$" + faker.finance.amount() + "M" ,
        image: faker.image. lorempicsum.people() ,
        country : faker.address.country()
    });
}
export default database
```
- 生成
```shell script
node ./index.js > ./db.json
```
- 运行
```shell script
json-server --watch ./db.json
```
