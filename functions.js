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

fetch ('team.json')
.then(res => res.json())
.then (persons => {
    insertPersons(persons);
});
