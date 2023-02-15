let input = document.querySelector('.inp');
function push(){
    document.getElementById('tasks').innerHTML += 
    `
        <div class="task">
            <input type="checkbox" class="check">
            <span id="taskname">
                ${input.value}
            </span>
            <button class="delete" onclick="Delete()">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `
    ;
}

function Delete(){
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}