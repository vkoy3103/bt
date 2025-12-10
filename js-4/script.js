const addBtn = document.getElementById('add');
const container = document.querySelector('.danhsach-container');
const countSpan = document.querySelector('.sl span:last-child');
const form = document.querySelector('form');

function updateCount() {
    const n = container.querySelectorAll('.hv-row').length;
    countSpan.textContent = n;
}

const addStudent=()=>{
    const row = document.createElement('div');
    row.className = 'hv-row';
    
    const name = document.createElement('input');
    name.type='text';
    name.name='student_name[]';
    name.placeholder='Họ và tên học viên';
    name.className = 'name';
    name.required = true;

    const birth = document.createElement('input');
    birth.type='date';
    birth.name='student_bith[]';
    birth.placeholder='Ngày sinh';
    birth.className = 'birth';
    birth.required = true;

    const phone = document.createElement('input');
    phone.type='number';
    phone.name='student_phone[]';
    phone.placeholder='Số điện thoại';
    phone.className = 'phone';
    phone.required = true;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'X';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
        container.removeChild(row);
        updateCount();
    }
    row.appendChild(name);
    row.appendChild(birth);
    row.appendChild(phone);
    row.appendChild(removeBtn);
    
    return row;
}

addBtn.onclick = () => {
    const newStudent = addStudent();
    container.appendChild(newStudent);
    updateCount();
}

form.addEventListener('reset', () => {
  setTimeout(() => {
    container.innerHTML = '';
    updateCount();
  }, 0);
});

