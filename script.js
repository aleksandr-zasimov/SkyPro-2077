function season () {
  let month = prompt ('Введите номер месяца');
  if (month == 12 || month == 1 || month == 2) {
    alert ('Зима');
  }
  else if (month == 3 || month == 4 || month == 5) {
    alert ('Весна');
  }
  else if (month == 6 || month == 7 || month == 8) {
    alert ('Лето');
  } 
  else if (month == 9 || month == 10 || month == 11) {
    alert ('Осень');
  }
  else {
    alert ('Вы ввели неправильное значение');
  }
}

function fruits() {
  let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  arr = arr.sort(() => Math.random() - 0.5);
  alert(arr);

  let firstElement = prompt('Введите первый элемент');
  let lastElement = prompt('Введите второй элемент');
  
  if (firstElement === arr[0] && lastElement === arr[arr.length - 1]) {
    alert('Молодец угадал!');
  } else if (firstElement === arr[0] || lastElement === arr[arr.length - 1]) {
    alert('Вы были близки к победе!');
  } else {
    alert('Не угадал!')
  }
}