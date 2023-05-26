
    function openNav() {

        var x = document.getElementById("navegation");

        if (x.className === "navegation"){

            x.className += " menujs";
            document.getElementById("threeline-icon").innerHTML = "&#935;";
        }

        else {

            x.className = "navegation";
            document.getElementById("threeline-icon").innerHTML = "&#9776;";
        }


    }
