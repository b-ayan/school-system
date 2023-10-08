

var button = document.getElementById('button');



  class Student{ 
    constructor(studentName, dob, gender, grade) {
    this.studentName=studentName;
    this.dob=dob;
    this.gender=gender;
    this.grade=grade;
   
  }};


button.addEventListener("click",function(event){
    event.preventDefault();
    var studentName= document.getElementById("name").value;
    var dob= document.getElementById("dob").value;
    var gender= document.getElementById("gender").value
    var grade=document.getElementById("grade").value;
   

   /* 
    const row = document.createElement('tr');
    var nameCell= document.createElement('td');
    nameCell.textContent=studentName;
    var dobCell= document.createElement('td');
    dobCell.textContent=dob;
    var genderCell= document.createElement('td');
    genderCell.textContent=gender;
    var gradeCell= document.createElement('td');
    gradeCell.textContent= grade;

    row.appendChild(nameCell);
    row.appendChild(dobCell);
    row.appendChild(genderCell);
    row.appendChild(gradeCell);
    
    var table=document.getElementById("table");
    table.appendChild(row); */

    var students=[];
    const student = new Student(studentName, dob, gender, grade);
    students.push(student);
    console.log(students);

    students.forEach(student =>{
    const studentElement = document.createElement('div');
    studentElement.innerHTML = `
    <div class="col-md-4">
    <div class="card" style="width: 14rem;">
  <img src="assets/blank-profile-picture.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"><h4>${student.studentName}</h4>
    <p>Date of birth: ${student.dob}</p>
    <p>Gender: ${student.gender}</p></p>
  </div>
</div> </div>
 
`;




document.querySelector('#jsRow').appendChild(studentElement);


}); });