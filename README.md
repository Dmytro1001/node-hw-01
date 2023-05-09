# Node.js homework 01

Цей проект був написаний допомогою Node.js

## Запуск проекту

Для запуску проекту у консолі необхідно прописати npm install (npm i)
ВАЖЛИВО для роботи з проектом його необхідно склонувати на ПК.

## Робота у консолі із файлом contacts.json

Для роботи у консолі із файлом contacts.json у проекті був використаний модуль
[commander] (https://www.npmjs.com/package/commander) для парсинга аргументів
командного рядка.

commander містить наступні команди
program
.option("-a, --action <type>", "choose action")
.option("-i, --id <type>", "user id")
.option("-n, --name <type>", "user name")
.option("-e, --email <type>", "user email")
.option("-p, --phone <type>", "user phone");

contacts.json - це база даних контактів користувача, де один контакт містить
інформацію у вигляді об'єкта:
{
"id": "rsKkOQUi80UsgVPCcLZZW",
"name": "Alec Howard",
"email": "Donec.elementum@scelerisquescelerisquedui.net",
"phone": "(748) 206-2688"
}

Для запуску команд використовується термінал не використовуються команди наведені вище
у консолі прописуємо команди:

1 "list" - дана дія повертає список контактів - </ node index -a list />

![node index -a list](https://i.ibb.co/N9Q69cC/get-table.jpg)

2 "get" - дана дія повертає відповідний контакт за id - </ node index -a get -i "rsKkOQUi80UsgVPCcLZZW" />

![node index -a get -i "rsKkOQUi80UsgVPCcLZZW"](https://i.ibb.co/Dp5C2pr/get.jpg)

3 "add" - дана дія додає новий контакт до нашої бази даних - </ node index -a add -n Molly
-e molly@gmail.com -p "(044) 325-22-21" />

![node index -a add -n Molly -e molly@gmail.com -p "(044) 325-22-21"](https://i.ibb.co/xLj9Rwc/add.jpg)

4 "remove" - дана дія видаляє контакт за id - </ node index -a remove -i "rsKkOQUi80UsgVPCcLZZW" />

![node index -a remove -i "rsKkOQUi80UsgVPCcLZZW"](https://i.ibb.co/PzN2Qyf/remove.jpg)
