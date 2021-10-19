
window.addEventListener("load",()=>{
    const form = document.getElementById("mi-form");
    const status = document.getElementById("status");

    function succes() {
        form.reset();
        status.classList.add('succes');
        status.innerHTML = "Thanks!"
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
        status.classList.add('error');
    }

    form.addEventListener("submit", function(ev){
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method,form.action,data,succes,error);
    });

});

function ajax(method,url,data,succes,error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Accept", "aplication/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !==XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            succes(xhr.response,xhr.responseType);
        } else {
            error(xhr.status,xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}