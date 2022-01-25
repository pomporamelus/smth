// const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(response)

/*const promise = new Promise((resolve,reject) => {
    resolve((
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    ))
}).then((result) => {
    console.log(result)
    return result.json()
}).then((json) => console.log(json)) */
//console.log(promise)
//  let countries = []
async function getCountries() {
    return fetch('https://restcountries.com/v3.1/all')
.then((response) => response.json())
.then((result) => result )
}
// async function showCountries() {
//     const countries = await getCountries()
//     console.log(countries)
// }
//  showCountries()
// async function countryNames() {
//     let countries1 = await getCountries()
//     let countriesNames = countries1.map((country) => country.name.official)
//     console.log(countriesNames)
// }
// countryNames()

async function countryNames() {
    let countries1 = await getCountries()
    let asiasCountries = countries1.filter((country) => country.region == 'Asia' )
    console.log(asiasCountries)
}
countryNames()




