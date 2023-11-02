
//Задание: Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
// localStorage.clear()
const usersURL = 'https://jsonplaceholder.typicode.com/users';

fetch(usersURL)
    .then((response) => response.json())

    .then((users) => localStorage.user = JSON.stringify(users))





    .catch((error) => console.error('Что то пошло не так!'));



const newUser = JSON.parse(localStorage.user)

console.log(newUser);


localStorage.z = JSON.stringify(newUser)

const nnn = JSON.parse (localStorage.z)

delete nnn[4]
console.log(nnn);
localStorage.z =  JSON.stringify(nnn)

