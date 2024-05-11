
function adicionarTarefa() {
    var compromisso = document.getElementById("compromisso").value;
    var data = document.getElementById("data").value;
    var local = document.getElementById("local").value;

    var listaTarefas = document.getElementById("listadetarefas");

    var novaTarefa = document.createElement("div");
    novaTarefa.innerHTML = "<p><b>Compromisso:</b> " + compromisso + "</p>" +
        "<p><b>Data:</b> " + data + "</p>" +
        "<p><b>Local:</b> " + local + "</p>";

    listaTarefas.appendChild(novaTarefa);
}




