var div = document.getElementsByTagName("div")[0];

function seeAllDates() {
    eel.seeAllDatesPython()(function(output) { // We are trying to figure out what's going on here...
        removeButtons();
        displayResult(output);
    })

}


function seeRange() {
    removeButtons();
    var linebreak = document.createElement("br");
    var today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    var form = document.createElement("form");
    form.id = "form1";
    form.action = "index.html"
    div.appendChild(form);

    var startDate = document.createElement("input");
    startDate.type = "date";
    startDate.name = "start_date";
    startDate.id = "startDate";
    startDate.required = true;
    startDate.max = today;

    var endDate = document.createElement("input");
    endDate.type = "date";
    endDate.name = "end_date";
    endDate.id = "endDate";
    endDate.required = true;
    endDate.max = today;

    var submitButton = document.createElement("input");
    submitButton.type = "submit"
    submitButton.value = "Go!"
    submitButton.id = "submitButton"

    var startDateLabel = document.createElement("label");
    startDateLabel.for = "startDate";
    startDateLabel.innerHTML = "Start Date: ";

    var endDateLabel = document.createElement("label");
    endDateLabel.for = "endDate";
    endDateLabel.innerHTML = "  End Date: ";

    form.appendChild(startDateLabel);
    form.appendChild(startDate);
    form.appendChild(linebreak);
    form.appendChild(endDateLabel);
    form.appendChild(endDate);
    form.appendChild(linebreak);
    form.appendChild(submitButton);

    document.getElementById("startDate").style.margin = "10px"
    document.getElementById("endDate").style.margin = "10px"
    document.getElementById("submitButton").style.margin = "10px"

    output = new String;

    submitButton.onclick = function() {
        inputs = Array.from(document.querySelectorAll("#form1 input")).reduce((acc, input) => ({...acc, [input.id]: input.value }), {});

        if (inputs.startDate > inputs.endDate) {
            window.alert("Start date cannot be after end date. Please retry");
            console.error(error);
        }

        eel.seeRangePython(inputs.startDate, inputs.endDate)(function(output) {
            window.alert(output);
        })
    }
}


function removeButtons() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
}


function displayResult(result) {
    para = document.createElement("p")
    node = document.createTextNode(`${result}`);
    para.appendChild(node);
    div.appendChild(para)
}