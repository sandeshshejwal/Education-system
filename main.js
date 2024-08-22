document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('studentName').value;
    let email = document.getElementById('studentEmail').value;
    let course = document.getElementById('studentCourse').value;

    let students = document.getElementById('students');
    let newStudent = document.createElement('li');
    newStudent.textContent = name + ' (' + email + ') - ' + course;

    students.appendChild(newStudent);

    document.getElementById('registerMessage').textContent = name + ' has been registered for the ' + course + ' course.';

    document.getElementById('registrationForm').reset();
});
