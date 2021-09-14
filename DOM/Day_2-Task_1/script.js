
let output = document.getElementById('output');
let alert = document.getElementById('alert');

function display(num) {
    output.value += num;
}


function Calculate() {
    try {
        if (output.value == "") {
            output.value = "";
            return;
        }
        let ans = eval(output.value);
        if (ans === Infinity) {
            output.value = "Infinity";
            setTimeout(() => handleInfinity(), 2000);
            return;
        }
        output.value = ans;
        console.log(ans);

        function handleInfinity() {
            output.value = "";
        }


    }
    catch (err) {
        window.alert("PLease enter only numbers...Only Numbers are Allowed!!!!...");
        output.value = "";
    }
}

function del() {
    output.value = output.value.slice(0, -1);
}

function Clear() {
    output.value = "";
}

function ips() {
    let inputs = /^[0-9]+$/;
    if (!output.value.matches(inputs)) {
        alert("Only numbers are allowed!!!")
    }

}
