console.log('test script');

function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML= getPersonsHTML(persons);
}

function getPersonsHTML(persons) {
     return persons.map(getPersonHTML).join("");  
   
  }

function getPersonHTML(person) {
    const gitHub = person.gitHub
    return `<tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td><a target="_blanck" href="https://github.com/${gitHub}">gitHub</a></td>
      </tr>`
}

let allPersons = [];  
fetch ('team.json')
.then(res => res.json())
.then (data => {
    allPersons = data
    insertPersons(data);
});

function searchPersons(text) {
    text = text.toLowerCase();
    return allPersons.filter(person => {
        return person.firstName.toLowerCase().indexOf(text) > -1 ;
    }); 
}
    
const search = document.getElementById('search');
search.addEventListener("input", e => {
const  text = e.target.value;
const filtrate = searchPersons(text);
insertPersons(filtrate)
});
 