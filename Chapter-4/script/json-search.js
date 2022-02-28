window.onload = function() {
    const people = [
        {
            "Name": "Jane Doe",
            "Sex": "f",
            "Born": "1876",
            "Died": "1956",
            "Father": "Petreous de Milliano",
            "Mother": "Sophia van Damme"
        },
        {
            "Name": "Jane Ramirez",
            "Sex": "f",
            "Born": "1102",
            "Died": "--",
            "Father": "Thermistocles Merovech",
            "Mother": "Amara Floros"
        },
        {
            "Name": "James Cameron",
            "Sex": "m",
            "Born": "1982",
            "Died": "2222",
            "Father": "Herman Straight",
            "Mother": "Alena Vegarov"
        },
        {
            "Name": "Colby Jeane",
            "Sex": "f",
            "Born": "1802",
            "Died": "1891",
            "Father": "Humphrey Charles",
            "Mother": "Tanya Teneson"
        },
        {
            "Name": "Simon Whay",
            "Sex": "m",
            "Born": "2000",
            "Died": "--",
            "Father": "Philip Martin",
            "Mother": "Danielle Peace"
        }
    ];

    document.getElementById("personSubmit").onclick = personFinder;
    function personFinder(){
        let name = document.getElementById("personName").value;
        let found = false;
        document.getElementById("personStats").innerHTML = "";

        for (let i = 0; i < people.length; i++) {
            if(people[i].Name.toLowerCase().includes(name.toLowerCase())){
                document.getElementById("personStats").innerHTML += "Name: " + people[i].Name + "<br>" +
                                                                             "Sex: " + people[i].Sex + "<br>" +
                                                                             "Born: " + people[i].Born + "<br>" +
                                                                             "Died: " + people[i].Died + "<br>" +
                                                                             "Mother: " + people[i].Father +"<br><br>";
                found = true;
            }
        }
        if(!found){
            document.getElementById("err").innerHTML = "No Person Found";
        }
        else {
            document.getElementById("err").innerHTML = "";
        }

    }
}