const monitor = document.querySelector('.calculator__monitor');
//функция установки фокуса на инпут
const setFocus = () => monitor.focus();

//функция удаления одного символа
const bckSpace = (str) => {  
  setFocus();              
  return monitor.value = str.slice(0, -1); 
}

// функция очистки монитора
const clean = () => {
  setFocus();
  return monitor.value = '';
}

//функция фставки символа
const symbol = (buttonValue) => {
  let cont = buttonValue.textContent;
  if (monitor.value.length === 0) {
    return  monitor.value = cont;
    }
  if (monitor.value.length !==0) {
    return monitor.value = `${monitor.value}${cont}`;
  }
}

// Функция подсчёта результата
const equally = (str) => {
  const validation = /[A-Za-zА-ЯЁа-яё]/;
  const resvalid = validation.test(str);
  if (resvalid === true) {
    return monitor.value = 'Введите число';
  }
  try {
    return monitor.value = eval(str);
  }
  catch(e) {
    return monitor.value = 'Некорректный ввод';
  }
} 

const butttonListner = document.querySelector('.calculator').addEventListener('click', (event) => {
    if (event.target.classList.contains('calculator__button_symbol-backspace')) {
      return bckSpace(monitor.value);
      }
    if (event.target.classList.contains('calculator__button_symbol-clean')) {
      return clean();
      }
    if (event.target.classList.contains('calculator__button_equally')) {
      return equally(monitor.value);
    }
    if (event.target.classList.contains('calculator__button')) {
      return symbol(event.target);
    }
    
  });

   

