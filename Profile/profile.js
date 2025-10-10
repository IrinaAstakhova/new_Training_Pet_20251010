const log = console.log;

const saveUserData = () => {
  return localStorage.setItem("keyUserArray", JSON.stringify(user));
};

const user = {
  name: "Анна",
  age: 25,
  city: "Москва",
  hobbies: ["чтение", "программирование", "путешествия"],
};

const savedUser = localStorage.getItem("keyUserArray");
if (savedUser) {
  user.name = JSON.parse(savedUser).name;
  user.age = JSON.parse(savedUser).age;
  user.city = JSON.parse(savedUser).city;
  user.hobbies = JSON.parse(savedUser).hobbies;
}

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

//Смена темы
themeBtn.onclick = () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.textContent = "🌚 Ночь";
  } else {
    themeBtn.textContent = "☀️ День";
  }
};

//Смена города
changeCityBtn.onclick = () => {
  user.city = prompt("Введите город").trim();
  if (user.city !== "") {
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
    const newTransformHobby = prompt("Введите новое значение").trim();
    if (newTransformHobby !== "") {
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
  const newHobby = prompt("Введите еще одно хобби").trim();
  if (newHobby !== "") {
    user.hobbies.push(newHobby);
    const li = document.createElement("li");
    const removeHobby = document.createElement("button");
    removeHobby.textContent = "❌";
    const transformHobby = document.createElement("button");
    transformHobby.textContent = "🖋️";

    li.textContent = newHobby;
    li.append(removeHobby, transformHobby);
    hobbiesList.append(li);
    removeHobby.onclick = () => {
      const indexFromDel = user.hobbies.indexOf(`${newHobby}`);
      user.hobbies.splice(indexFromDel, 1);
      li.remove();
      saveUserData();
    };

    transformHobby.onclick = () => {
      let oldTransformHobby = user.hobbies.indexOf(newHobby);
      const newTransformHobby = prompt("Введите новое значение").trim();
      if (newTransformHobby !== "") {
        console.log(user.hobbies[oldTransformHobby]);
        user.hobbies[oldTransformHobby] = newTransformHobby;
        console.log(newTransformHobby);
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
