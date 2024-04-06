document.getElementById("button_add").onclick = function(){
    var text_input = document.getElementById("input_tarefa").value;

    var new_taks = '<div id="tarefas"><span>'+ text_input + '</span><button id="deletar">Del</button></div>';
    
    if (text_input.length == 0){
        alert("Digite alguma tarefa");
    }else{
        document.getElementById("novas_tarefas").innerHTML += new_taks;
        document.getElementById("input_tarefa").value="";
    }

    var numero_de_tarefas = document.querySelectorAll("#deletar");

    for (let index = 0; index < numero_de_tarefas.length; index++) {
        numero_de_tarefas[index].onclick = function(){
            this.parentNode.remove();
        }
    }
}
