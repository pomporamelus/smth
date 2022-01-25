// let a: number = 10
// console.log(a, typeof a)
//  a = 20
//  console.log(a, typeof a)
 
//  let text: number |string = 0
//  text = 'hello world'


// function sum(a: number,b: number): number {
//     return a + b 
// }
// const result = (sum(2,2))
//const result = sum(true,'nekoma')
// console.log(result)

// const numbers: (string | number)[]= [1,2,3,4,5,'a']
// const numbers1: [number,number,number] = [1,2,3]

// const sum = (...numbers : number[]) => {
//     numbers.reduce((a,b) => a + b)
// }
// console.log(sum(1,2,3,4,5))

enum Gender  {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
interface IUser {
    name: string
    age: number
    job: string | string[]
    gender: string
}

const user: IUser = {
    name: 'Adilet',
    age: 20,
    job: ['JS instructor','Node.js deceloper'],
    gender: Gender.MALE
}
console.log(user)

const user2 = {
     name: 'Dima',
    age: 23,
    job: 'Frontend developer',
    gender: Gender.MALE
}
console.log(user2)

class Users implements IUser {
    constructor(
    readonly name: string,
    readonly age: number,
    readonly job: string,
    readonly gender : Gender.MALE ,
    private married : boolean
    ) {
        this.name = name
        this.age = age
        this.job = job
        this.gender = gender
        this.married = married
}
}

//const user3 = new Users('')