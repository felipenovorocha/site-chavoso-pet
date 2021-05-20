// const Task = new Object();
// Task.id;
// Task.nome;
// Task.startAction;
// Task.endAction;

// const TaskList = [{
//     id : 1,
//     nome: 'arrumar a casa',
//     startAction : new Date(),
//     endAction: new Date()
// },
// {
//     id : 2,
//     nome: 'lavar o quintal',
//     startAction : new Date(),
//     endAction: new Date()
// },
// {
//     id : 3,
//     nome: 'lavar o banheiro',
//     startAction : new Date(),
//     endAction: new Date()
// },
// ];


// const verificarStatus = function(Task) {
//     if(!Task.startAction)
//     {
//         return 'Não iniciada'
//     }
//     if(Task.startAction && !Task.endAction)
//     {
//         return 'Não Finalizada'
//     }
//     if(Task.startAction < Task.endAction)
//     {
//         return 'Finalizada'
//     }    
// };

// console.log(TaskList.forEach(verificarStatus))



const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
