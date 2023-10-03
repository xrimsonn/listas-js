var names_list = ['Esaú', 'Yanelin', 'Pedro', 'Milton', 'René'];
var people = [
  {
    name: 'René',
    pwd: '1234',
    age: 22,
  },
];

function show() {
  var list = document.getElementById('list');
  list.innerHTML = '';
  people.forEach((person, i) => {
    var li = document.createElement('li');
    li.innerHTML = "Nombre: " + person.name + ", Contraseña:  " + person.pwd + ", Edad: " + person.age;
    list.appendChild(li);
  });
}

function insert_head() {
  var name = document.getElementById('name').value;
  var pwd = document.getElementById('pwd').value;
  var age = document.getElementById('age').value;
  people.unshift({
    name: name,
    pwd: pwd,
    age: age,
  });
  show();
}

function insert_tail() {
  var name = document.getElementById('name').value;
  var pwd = document.getElementById('pwd').value;
  var age = document.getElementById('age').value;
  people.push({
    name: name,
    pwd: pwd,
    age: age,
  });
  show();
}

function remove_tail() {
  alert("Quieres eliminar el último registro?");
  people.pop();
  show();
}

function sort_asc() {
  people.sort((a, b) => {
    return a.age - b.age;
  });
  show();
}

function sort_desc() {
  people.reverse();
  show();
}
