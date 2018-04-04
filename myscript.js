function checkEmpty() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        dob = document.getElementById("dob").value,
        gen = document.getElementById("gen").value,
        add = document.getElementById("add").value,
        num = add = document.getElementById("num").value;
    if (fname === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    } else if (lname === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    } else if (dob === "") {
        alert("Date of Birth Connot Be Empty");
        isEmpty = true;
    } else if (gen === "Select") {
        alert("Select Your Gender");
        isEmpty = true;
    } else if (add === "") {
        alert("Address Connot Be Empty");
        isEmpty = true;
    } else if (num === "" || num.length > 12) {
        alert("Contact Number Connot Be Empty or Cannot Exceed 12 Digits");
        isEmpty = true;
    }
    return isEmpty;
}

function addRow() {
    if (!checkEmpty()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            fname = document.getElementById("fname").value,
            mname = document.getElementById("mname").value,
            lname = document.getElementById("lname").value,
            dob = document.getElementById("dob").value,
            gen = document.getElementById("gen").value,
            add = document.getElementById("add").value,
            num = document.getElementById("num").value;
        if (mname === "") {
            cell1.innerHTML = fname + " " + lname;
        } else {
            cell1.innerHTML = fname + " " + mname + " " + lname;
        }
        cell2.innerHTML = dob;
        cell3.innerHTML = gen;
        cell4.innerHTML = add;
        cell5.innerHTML = num;
        cell6.innerHTML = "Edit";
        cell7.innerHTML = "Remove";
        editRow();
        deleteRow();
        clearForm();
    }
}

function editRow() {
    var index, table = document.getElementById('table');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[5].onclick = function () {
            var c = confirm("do you want to edit this row");
            if (c === true) {
                index = this.parentElement.rowIndex;
                table.rows[index].cells[0].innerHTML = prompt("Enter Your Full Name :");
                table.rows[index].cells[1].innerHTML = prompt(
                    "Enter Your Date of Mirth in YYYY-MM-DD Format :");
                table.rows[index].cells[2].innerHTML = prompt("Enter Your Gender :");
                table.rows[index].cells[3].innerHTML = prompt("Enter Your Address :");
                table.rows[index].cells[4].innerHTML = prompt("Enter Your Contact Number :");
            }
        };

    }
}

function deleteRow() {
    var index, table = document.getElementById('table');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[6].onclick = function () {
            var c = confirm("do you want to delete this row");
            if (c === true) {
                index = this.parentElement.rowIndex;
                table.deleteRow(index);
            }
        };

    }
}

function clearForm() {
    document.getElementById("fname").value = '';
    document.getElementById("mname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("gen").value = 'Select';
    document.getElementById("add").value = '';
    document.getElementById("num").value = '';
}