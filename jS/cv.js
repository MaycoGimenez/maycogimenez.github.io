document.getElementById("boton_mostrar_secundarios").addEventListener("click", function() {
    if (document.getElementById("boton_mostrar_secundarios").innerHTML == "+") {
        document.getElementById("boton_mostrar_secundarios").innerHTML="-";
        document.getElementById("estudios_secundarios").style.display="block";
    }
     else {
        document.getElementById("boton_mostrar_secundarios").innerHTML="+";
        document.getElementById("estudios_secundarios").style.display="none";
    }
    });

    document.getElementById("boton_mostrar_terciarios").addEventListener("click", function() {
        if (document.getElementById("boton_mostrar_terciarios").innerHTML == "+") {
            document.getElementById("boton_mostrar_terciarios").innerHTML="-";
            document.getElementById("estudios_terciarios").style.display="block";
    }
         else {
            document.getElementById("boton_mostrar_terciarios").innerHTML="+";
            document.getElementById("estudios_terciarios").style.display="none";
        }
        });

document.getElementById("boton_mostrar_tagle").addEventListener("click", function() {
    if (document.getElementById("boton_mostrar_tagle").innerHTML == "+") {
        document.getElementById("boton_mostrar_tagle").innerHTML="-";
        document.getElementById("tagle").style.marginTop="5px";
        document.getElementById("espaciador").style.margin="-70px 0px 100px 0px";
        document.getElementById("tareas_tagle").style.display="block";
    } else {
        document.getElementById("boton_mostrar_tagle").innerHTML="+";
        document.getElementById("tagle").style.margin="83px 0px 0px 250px";
        document.getElementById("espaciador").style.margin="100px 0px 18px 0px";
        document.getElementById("tareas_tagle").style.display="none";
    }
    });

    document.getElementById("boton_mostrar_macwagen").addEventListener("click", function() {
        if (document.getElementById("boton_mostrar_macwagen").innerHTML == "+") {
            document.getElementById("boton_mostrar_macwagen").innerHTML="-";
            document.getElementById("macwagen").style.marginTop="5px";
            document.getElementById("tareas_macwagen").style.display="block";
        } else {
            document.getElementById("boton_mostrar_macwagen").innerHTML="+";
            document.getElementById("macwagen").style.margin="167px 0px 0px 250px";
            document.getElementById("tareas_macwagen").style.display="none";
        }
    });

    document.getElementById("contactar").addEventListener("click", function() {
        if (document.getElementById("contactar").style.color == "blue") {
            document.getElementById("contactar").style.color="red";
        const collection1 = document.getElementsByClassName("datos_contactar");
        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.display="block";
                }
        } else {
            document.getElementById("contactar").style.color="blue";
        const collection1 = document.getElementsByClassName("datos_contactar");
        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.display="none";
                }
        }
    });
