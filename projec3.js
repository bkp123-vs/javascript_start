let superheroes=[
    {
        name: "Thor",
        age: 1500,
        planet: "Asgard",
        height: "6.3"
    },
    {
        name:"Iron Man",
        age: 34,
        planet: "Earth",
        height: "5.10",
    },
    {
        name: "Captain America",
        age: 101,
        planet: "Earth",
        height:"5.10",
    },
];
function display() {
    // let htmlData="<tr>";
    let tabledata="";
    superheroes.forEach(function(superhero) {
        let currentrow=`<tr>
                        <td>1</td>
                        <td>${superhero.name}</td>
                        <td>${superhero.age}</td>
                        <td>${superhero.planet}</td>
                        <td>${superhero.height}</td> 
                        </tr>`;

                    tabledata +=currentrow;    
    });
    // document.getElementsByClassName('tdata')[0].innerHTML=tabledata;
    document.getElementById('tdata').innerHTML=tabledata;
}
display();