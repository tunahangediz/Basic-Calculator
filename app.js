const output = document.querySelector(".output");
const calculator = document.querySelector("#calculator");


calculator.addEventListener("click", display);



function display(e) {
    console.log(e.target);
    if (e.target.className == "button") {
        output.textContent += e.target.textContent;
    } else if (e.target.className == "button r1-b1") {
        output.textContent = "";
        clearValues();
    } else if (e.target.className == "button c") {
        output.textContent = output.textContent.slice(0, -1);

    }
    ///this section eval version of my calculator ///
    else if (e.target.className == "button equal") {
        console.log(eval(output.textContent));
        output.textContent = eval(output.textContent);

    }
}

