const student = ["Nidhi","Mannat","Sandhya","Vikas","Shourya","Nishant","Pranav","Sujata","Snehal","Piyara","Shobha","Krish","Vidhi"]
const studentContainer= document.getElementById(`card-container`);

function renderstudents(studentlist){
    studentContainer.innerHTML=' ';

    studentlist.forEach((students)=>{
      studentContainer.innerHTML +=`<div class='card'>${students}</div>` 
    })
}
renderstudents(student);

function loadSearchResult(){
    const inputElement = document.getElementById(`search`);
    const searchText = inputElement.value.toLowerCase();

    const filteredStudents = student.filter((students)=>{
      if(students.toLowerCase().includes(searchText)){
        return true;
      }
    })
renderstudents(filteredStudents);
}
