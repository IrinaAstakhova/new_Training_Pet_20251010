const log = console.log;

//Функция для сохранения в localStorage
const saveUserData = () => {
  return localStorage.setItem("keyUserArray", JSON.stringify(user));
};

const user = {
  name: "Анна",
  age: 25,
  city: "Москва",
  hobbies: ["чтение", "программирование", "путешествия"],
  theme: "light",
};

//Объявляем и создаем элементы на странице
const profile = document.createElement("div");
profile.classList.add("profile");

const nameElement = document.createElement("h2");
const ageElement = document.createElement("p");
const cityElement = document.createElement("p");
const hobbiesContainer = document.createElement("h4");
hobbiesContainer.textContent = "  Хобби:";
const hobbiesList = document.createElement("ul");

const themeBtn = document.createElement("button");
themeBtn.textContent = "Сменить тему";
const changeCityBtn = document.createElement("button");
changeCityBtn.textContent = "Сменить город";
const addHobby = document.createElement("button");
addHobby.textContent = "➕";
hobbiesContainer.prepend(addHobby);

//Обновляем объект из localStorage
const savedUser = localStorage.getItem("keyUserArray");
if (savedUser) {
  user.name = JSON.parse(savedUser).name;
  user.age = JSON.parse(savedUser).age;
  user.city = JSON.parse(savedUser).city;
  user.hobbies = JSON.parse(savedUser).hobbies;
  user.theme = JSON.parse(savedUser).theme;

  if (user.theme === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "🌚 Ночь";
  }
} else {
  saveUserData();
}

//Смена темы
themeBtn.onclick = () => {
  if (user.theme === "light") {
    user.theme = "dark";
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "🌚 Ночь";
  } else {
    user.theme = "light";
    document.body.classList.remove("dark-theme");
    themeBtn.textContent = "☀️ День";
  }
  saveUserData();
};

//Смена города
changeCityBtn.onclick = () => {
  const renameCity = prompt("Введите город");
  if (renameCity !== null && renameCity.trim() !== "") {
    user.city = renameCity.trim();
    cityElement.textContent = `Город: ${user.city}`;
  } else {
    alert("Поле не может быть пустым");
  }
  saveUserData();
};

//Поля пользователя
nameElement.textContent = `Имя: ${user.name}`;
ageElement.textContent = `Возраст: ${user.age}`;
cityElement.textContent = `Город: ${user.city}`;

//Пробегаем по массиву, создаем кнопки удаления и редактирования
user.hobbies.forEach((hobby) => {
  const li = document.createElement("li");
  const removeHobby = document.createElement("button");
  removeHobby.textContent = "❌";
  const transformHobby = document.createElement("button");
  transformHobby.textContent = "🖋️";

  li.textContent = hobby;
  li.append(removeHobby, transformHobby);
  hobbiesList.append(li);

  removeHobby.onclick = () => {
    const indexFromDel = user.hobbies.indexOf(`${hobby}`);
    user.hobbies.splice(indexFromDel, 1);
    li.remove();
    saveUserData();
  };

  transformHobby.onclick = () => {
    let oldTransformHobby = user.hobbies.indexOf(`${hobby}`);
    const newTransformHobby = prompt("Введите новое значение");
    if (newTransformHobby !== null && newTransformHobby !== "") {
      user.hobbies[oldTransformHobby] = newTransformHobby;
      li.textContent = newTransformHobby;
      li.append(removeHobby, transformHobby);
      saveUserData();
    } else {
      alert("Поле не может быть пустым");
    }
  };
});

//Добавляем новое хобби с кнопками удаления и редактирования
addHobby.onclick = () => {
  const newHobby = prompt("Введите еще одно хобби");
  if (newHobby !== null && newHobby !== "") {
    user.hobbies.push(newHobby);
    const li = document.createElement("li");
    const removeHobby = document.createElement("button");
    removeHobby.textContent = "❌";
    const transformHobby = document.createElement("button");
    transformHobby.textContent = "🖋️";

    li.textContent = newHobby;
    li.append(removeHobby, transformHobby);
    hobbiesList.append(li);
    saveUserData();

    removeHobby.onclick = () => {
      const indexFromDel = user.hobbies.indexOf(`${newHobby}`);
      user.hobbies.splice(indexFromDel, 1);
      li.remove();
      saveUserData();
    };

    transformHobby.onclick = () => {
      let oldTransformHobby = user.hobbies.indexOf(newHobby);
      const newTransformHobby = prompt("Введите новое значение");
      if (newTransformHobby !== null && newTransformHobby !== "") {
        user.hobbies[oldTransformHobby] = newTransformHobby;
        li.textContent = newTransformHobby;
        li.append(removeHobby, transformHobby);
        saveUserData();
      } else {
        alert("Поле не может быть пустым");
      }
    };
  } else {
    alert("Поле не может быть пустым");
  }
};

//Выводим на страницу
document.body.prepend(themeBtn);
profile.append(
  nameElement,
  ageElement,
  cityElement,
  changeCityBtn,
  hobbiesContainer,
  hobbiesList
);
document.body.append(profile);

//Игра: угадай число
let count = 29;
let lastCount = 0;

//Находим элементы на странице
const textGuess = document.querySelector(".text-guess");
const textNumber = document.querySelector(".text-number");
const score = document.querySelector(".score");
const record = document.querySelector(".record");
const inputNumberString = document.querySelector("input.input-game-number");
const btnClick = document.querySelector(".clicker");
const btnRest = document.querySelector(".rest");
btnClick.disabled = false;

function replaceTextGuess(text) {
  textGuess.textContent = text;
  inputNumberString.value = "";
}
let randomNumber = 0;
const fnRandomNumber = () => {
  randomNumber = Math.floor(Math.random() * 30) + 1;
  return randomNumber;
};
fnRandomNumber();

btnClick.addEventListener("click", () => {
  let inputNumber = Number(inputNumberString.value);
  if (inputNumber <= 30 && inputNumber >= 1) {
    if (inputNumber !== randomNumber) {
      if (inputNumber > randomNumber) {
        replaceTextGuess("Вы ввели слишком большое число");
        inputNumberString.value = "";
      } else if (inputNumber < randomNumber) {
        replaceTextGuess("Вы ввели слишком маленькое число");
      }
    } else {
      replaceTextGuess("🏅 Вы Победили!!!");
      if (count > lastCount) {
        lastCount = count;
        record.textContent = `🏆 Твой рекорд равен: ${lastCount}`;
      } else {
        record.textContent = `🏆 Твой рекорд равен: ${lastCount}`;
      }
      textNumber.textContent = `${randomNumber}`;
      btnClick.classList.add("disabled");
      btnClick.disabled = true;
      btnClick.textContent = "💞 Ты молодец!";
      inputNumberString.style.borderColor = "green";
    }

    //Проверяем Проиграл или нет и выводим кол-во оставшихся попыток
    if (count > 0) {
      count--;
      score.textContent = `Количество попыток: ${count + 1}`;
    } else if (count === 0) {
      replaceTextGuess("💥Вы проиграли");
      textNumber.textContent = `${randomNumber}`;
      btnClick.classList.add("disabled");
      btnClick.disabled = true;
      btnClick.textContent = "😊 Попробуй снова!";
    }
  } else {
    replaceTextGuess("Введите любое число от 1 до 30 включительно");
  }
});

btnRest.addEventListener("click", () => {
  count = 30;
  record.textContent = `🏆 Твой рекорд равен: ${lastCount}`;
  score.textContent = `Количество попыток: ${count}`;
  replaceTextGuess("Поехали 🚀");
  textNumber.textContent = "❓";
  fnRandomNumber();
  btnClick.disabled = false;
  btnClick.classList.remove("disabled");
  btnClick.textContent = "Угадать";
});

inputNumberString.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btnClick.click();
  }
});

//Список моих покупок
const btnFilterAll = document.querySelector("button.all");
const btnFilterCompleted = document.querySelector("button.completed");
const btnFilterUnfinished = document.querySelector("button.unfinished");
const inputPurchase = document.querySelector("input.input-purchase");
const btnAddPurchase = document.querySelector(".btn-add_purchase");
const listPuchase = document.querySelector(".list_purchase ul");
const btnRestPurchase = document.querySelector(".btn-reset_purchase");

let arrPurchase = [];
let pressbBtnFilter;
//Сохраняем в локал сторадж список покупок
const saveListPurchase = () => {
  return localStorage.setItem("listPuchase", JSON.stringify(arrPurchase));
};

//Функция для отрисовки
const fnForRenderList = (newArrFiltered) => {
  listPuchase.innerHTML = "";
  newArrFiltered.forEach((obj) => {
    const li = document.createElement("li");
    if (obj.completed === true) {
      li.innerHTML = `<input type="checkbox" checked class="chek_purchase"> ${obj.purchase}`;
      li.classList.add("complete_purchase");
    } else {
      li.innerHTML = `<input type="checkbox" class="chek_purchase"> ${obj.purchase}`;
    }

    li.dataset.id = obj.id;
    listPuchase.append(li);
  });
};

//Восстанавливаем из локал сторадж список покупок
const localStorageGet = localStorage.getItem("listPuchase");
if (localStorageGet) {
  arrPurchase = JSON.parse(localStorageGet);
  fnForRenderList(arrPurchase);
} else {
  saveListPurchase();
}

//Добавление покупки в список
const addPurchaseItem = () => {
  let inputPurchaseValue = inputPurchase.value.trim();
  if (inputPurchaseValue === "") {
    return alert("🚫 Поле покупки не может быть пустым");
  } else {
    arrPurchase.push({
      purchase: `${inputPurchaseValue}`,
      completed: false,
      id: arrPurchase.length,
    });

    const liElem = document.createElement("li");
    liElem.innerHTML = `<input type="checkbox" class="chek_purchase"> ${inputPurchaseValue}`;
    liElem.dataset.id = arrPurchase.length - 1;
    listPuchase.append(liElem);

    inputPurchase.value = "";

    saveListPurchase();
  }
};

btnAddPurchase.addEventListener("click", addPurchaseItem);
inputPurchase.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addPurchaseItem();
  }
});

//Добавляем функционал завершения покупки по клику на чекбокс
listPuchase.addEventListener("change", (e) => {
  if (e.target.classList.contains("chek_purchase")) {
    const chekPurchase = e.target;
    const li = chekPurchase.parentElement;
    li.classList.toggle("complete_purchase");

    arrPurchase.forEach((item) => {
      if (item.id === +li.dataset.id) {
        item.completed = li.classList.contains("complete_purchase");
      }
    });

    saveListPurchase();
    if (pressbBtnFilter === "unfinished") {
      fnViewUnfinished();
    } else if (pressbBtnFilter === "completed") {
      fnViewCompleted();
    } else {
      fnViewAll();
    }
  }
});

//Очищаем список покупок на странице и в массиве
btnRestPurchase.addEventListener("click", () => {
  arrPurchase = [];
  listPuchase.innerHTML = "";
  saveListPurchase();
});

//Функция для завершенных покупок
const fnViewCompleted = () => {
  const completedPurchase = arrPurchase.filter(
    (item) => item.completed === true
  );
  fnForRenderList(completedPurchase);
};

//Показываем завершенные покупки
btnFilterCompleted.addEventListener("click", () => {
  pressbBtnFilter = "completed";
  fnViewCompleted();
});

//Функция для незавершенных покупок
const fnViewUnfinished = () => {
  const unfinishedPurchase = arrPurchase.filter(
    (item) => item.completed === false
  );
  fnForRenderList(unfinishedPurchase);
};

//Показываем незавершенные покупки
btnFilterUnfinished.addEventListener("click", () => {
  pressbBtnFilter = "unfinished";
  fnViewUnfinished();
});

//Показываем все покупки
btnFilterAll.addEventListener("click", () => {
  pressbBtnFilter = "all";

  fnForRenderList(arrPurchase);
});

//Поле поиска
const inputFilterPurchase = document.querySelector(".search_purchase");
inputFilterPurchase.addEventListener("input", () => {
  const value = inputFilterPurchase.value.toLowerCase();
  let newArrFilter = arrPurchase.filter((item) => {
    return item.purchase.toLowerCase().includes(value);
  });

  fnForRenderList(newArrFilter);
});
