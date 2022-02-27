window.onload = function() {

    document.getElementById("hee-Haw-Calculate").onclick = heeHaw;
        function heeHaw() {
            let number = document.getElementById("number").value;

            if(number < 0 || !/\d/.test(number)){
                document.getElementById("err").innerHTML = "Positive Integer Required";
                return;
            }
            else {
                document.getElementById("err").innerHTML = "";
            }

            let value = "";

            for (let i = 1; i <= number; i++) {
                let j = i;

                if ((j % 3 === 0) && (j % 5 === 0)) {
                    j = "Hee Haw!";

                } else if (j % 3 === 0) {
                    j = "Hee!";

                } else if (j % 5 === 0) {
                    j = "Haw!";

                }

                value += j + "<br />";
            }
            document.getElementById("hee-Haw").innerHTML = value;
        }
}