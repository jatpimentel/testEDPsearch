var input_data = [
    {
        name:"Job Aaron Pimentel",
        gender:"Male",
        age:20,
        position:"Student"
    },
    {
        name:"Karl Justin Natividad",
        gender:"Male",
        age:19,
        position:"Student"
    },
    {
        name:"Dwight De Jesus",
        gender:"Male",
        age:24,
        position:"Teacher"
    },
    {
        name:"Althea Czerein Delarosa",
        gender:"Female",
        age:18,
        position:"Student"
    },
    {
        name:"Beatrice Arapoc",      
        gender:"Female",
        age:21,
        position:"Student"
    },
    {
        name:"Chris Alviola",
        gender:"Male",
        age:42,
        position:"Teacher"
    },
    {
        name:"Isiah Gilmore Veneracion",
        gender:"Male",
        age:24,
        position:"Student"
    },
    {
        name:"Joash Miguel Lim",
        gender:"Male",
        age:22,
        position:"Student"
    },
    {
        name:"Eduard Quianzon",
        gender:"Male",
        age:22,
        position:"Student"
    },
    {
        name:"Eric Enrille",
        gender:"Male",
        age:72,
        position:"Teacher"
    },
    {
        name:"Mae Angela Espera",  
        gender:"Female",
        age:20,
        position:"Student"
    }
]

function buildTable(data) {
    var table = $("#dataTable");
    table.empty(); // Clear existing table data
    $.each(data, function(index, item) {
        var row = `<tr>
                        <td>${item.name}</td>
                        <td>${item.gender}</td>
                        <td>${item.age}</td>
                        <td>${item.position}</td>
                    </tr>`;
        table.append(row);
    });
}

// Function to filter the data based on search criteria
function filterData() {
    var firstName = $("#first_name").val().toLowerCase();
    var lastName = $("#last_name").val().toLowerCase();
    var gender = $("input[name='gender']:checked").val();
    var minAge = parseInt($("#min").val());
    var maxAge = parseInt($("#max").val());
    var position = $("select").val();

    var filteredData = input_data.filter(function(item) {
        var nameParts = item.name.split(" ");
        var firstNameMatch = nameParts[0].toLowerCase().startsWith(firstName);
        var lastNameMatch = nameParts.length > 1 ? nameParts[nameParts.length - 1].toLowerCase().startsWith(lastName) : false;
        return firstNameMatch && lastNameMatch &&
            (gender ? item.gender === gender : true) &&
            (isNaN(minAge) || item.age >= minAge) &&
            (isNaN(maxAge) || item.age <= maxAge) &&
            (position ? item.position === (position === "1" ? "Student" : "Teacher") : true);
    });

    buildTable(filteredData);
}

// Event listeners for input fields and select dropdown
$("#first_name, #last_name, input[name='gender'], #min, #max, select").on("change keyup", filterData);

// Initial table build with all data
buildTable(input_data);