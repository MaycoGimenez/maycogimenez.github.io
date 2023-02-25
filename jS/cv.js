document.getElementById("boton_mostrar_secundarios").addEventListener("click", function() {
    if (document.getElementById("boton_mostrar_secundarios").innerHTML == "+") {
        document.getElementById("boton_mostrar_secundarios").innerHTML="-";
    const collection1 = document.getElementsByClassName("estudios_secundarios");
    for (let i = 0; i < collection1.length; i++) {
        collection1[i].style.display="block";
}
    } else {
        document.getElementById("boton_mostrar_secundarios").innerHTML="+";
    const collection1 = document.getElementsByClassName("estudios_secundarios");
    for (let i = 0; i < collection1.length; i++) {
        collection1[i].style.display="none";
}
    }
    });

    document.getElementById("boton_mostrar_terciarios").addEventListener("click", function() {
        if (document.getElementById("boton_mostrar_terciarios").innerHTML == "+") {
            document.getElementById("boton_mostrar_terciarios").innerHTML="-";
        const collection1 = document.getElementsByClassName("estudios_terciarios");
        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.display="block";
    }
        } else {
            document.getElementById("boton_mostrar_terciarios").innerHTML="+";
        const collection1 = document.getElementsByClassName("estudios_terciarios");
        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.display="none";
    }
        }
        });

document.getElementById("boton_mostrar_tagle").addEventListener("click", function() {
    if (document.getElementById("boton_mostrar_tagle").innerHTML == "+") {
        document.getElementById("boton_mostrar_tagle").innerHTML="-";
        document.getElementById("tagle").style.marginTop="5px";
        document.getElementById("espaciador").style.margin="-70px 0px 100px 0px";
        const collection1 = document.getElementsByClassName("tareas_tagle");
        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.display="block";
}
    } else {
        document.getElementById("boton_mostrar_tagle").innerHTML="+";
        document.getElementById("tagle").style.margin="83px 0px 0px 250px";
        document.getElementById("espaciador").style.margin="100px 0px 18px 0px";
        const collection1 = document.getElementsByClassName("tareas_tagle");
        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.display="none";
}
    }
    });

    document.getElementById("boton_mostrar_macwagen").addEventListener("click", function() {
        if (document.getElementById("boton_mostrar_macwagen").innerHTML == "+") {
            document.getElementById("boton_mostrar_macwagen").innerHTML="-";
            document.getElementById("macwagen").style.marginTop="5px";
            const collection1 = document.getElementsByClassName("tareas_macwagen");
            for (let i = 0; i < collection1.length; i++) {
                collection1[i].style.display="block";
    }
        } else {
            document.getElementById("boton_mostrar_macwagen").innerHTML="+";
            document.getElementById("macwagen").style.margin="167px 0px 0px 250px";
            const collection1 = document.getElementsByClassName("tareas_macwagen");
            for (let i = 0; i < collection1.length; i++) {
                collection1[i].style.display="none";
    }
        }
        });