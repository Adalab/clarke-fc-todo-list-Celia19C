'use stritc'
const date= document.querySelector('.date');
const btPlus=document.querySelector('.btAdd');
const btAdd=document.querySelector('.btTask');
const checkbox=document.getElementById('cbox');
const add=document.querySelector('.add');
const lista ={
  tarea:[]
};

//CARGAR LOCAL STORAGE
loadStorage ()
function loadStorage () {
  let taskList=document.querySelector('.task_list');
    if (localStorage.getItem('tareas')){
    var getLocalStorage=JSON.parse(localStorage.getItem('tareas'));
    let newList=getLocalStorage.tarea
     let addList ='';
      for (let i=0;i<newList.length;i++){
         addList+= `<li class="single_task"><label><input type="checkbox" id="cbox" value="first_task">${newList[i]}</label></li>`;
      };
      taskList.innerHTML= addList;
}
}

//FECHA
  let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  let diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  let f=new Date();
  let dayTxt= diasSemana[f.getDay()];
  let day= f.getDate();
  let month= meses[f.getMonth()];
  let year=f.getFullYear()
  f=day + " " +dayTxt +" " + month + " " + year;
  date.innerHTML=f;

//BOTÓN +
btPlus.addEventListener('click',function(){
    //Aparece cuadro de añadir
    function buttonPlus() {
      add.classList.toggle('invisible');
      btPlus.classList.toggle('off');
    }
    buttonPlus()
});

//BOTÓN AÑADIR

btAdd.addEventListener('click', function(){

    //Guardar en el localStorage y pintar
    function paintList (){
      let taskList=document.querySelector('.task_list');
      let value=document.querySelector('#input').value;

        lista.tarea.push(value);
        let newList=lista.tarea
          console.log(newList);
         let addList ='';
      		for (let i=0;i<newList.length;i++){
      			 addList+= `<li class="single_task"><label><input type="checkbox" id="cbox">${newList[i]}</label></li>`;
      		};
      		taskList.innerHTML= addList;
          //reseteo valor input
          document.querySelector('#input').value='';
          localStorage.setItem('tareas', JSON.stringify(lista));
          }

    paintList();

    //Desaparecer cuadro añadir
    function buttonTask() {
      add.classList.toggle('invisible');
      btPlus.classList.toggle('off');
    }
    buttonTask();
})


//CHECKBOX y TACHAR
