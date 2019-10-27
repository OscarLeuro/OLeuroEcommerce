function routeCourses(){
    const XHR = new XMLHttpRequest();
    XHR.open('GET','views/modules/cursosView.php',true);
    XHR.send();
    XHR.addEventListener('load', function(){
        var box = document.getElementById('content');
        var data = this.responseText;
        box.innerHTML = data;

    })
}

function routeStart(){
    const XHR = new XMLHttpRequest();
    XHR.open('GET','views/modules/inicioView.php',true);
    XHR.send();
    XHR.addEventListener('load', function(){
        var box = document.getElementById('content');
        var data = this.responseText;
        box.innerHTML = data;

    })
}

function routeApps(){
    const XHR = new XMLHttpRequest();
    XHR.open('GET','views/modules/aplicacionesView.php',true);
    XHR.send();
    XHR.addEventListener('load', function(){
        var box = document.getElementById('content');
        var data = this.responseText;
        box.innerHTML = data;

    })
}


function routeSys(){
    const XHR = new XMLHttpRequest();
    XHR.open('GET','views/modules/sistemasView.php',true);
    XHR.send();
    XHR.addEventListener('load', function(){
        var box = document.getElementById('content');
        var data = this.responseText;
        box.innerHTML = data;

    })
}

function routeInfo(){
    const XHR = new XMLHttpRequest();
    XHR.open('GET','views/modules/infoView.php',true);
    XHR.send();
    XHR.addEventListener('load', function(){
        var box = document.getElementById('content');
        var data = this.responseText;
        box.innerHTML = data;

    })
}