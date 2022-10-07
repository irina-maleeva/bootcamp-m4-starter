# Module 4 project – Movie organizer.

## Проект: "Доработка органайзера фильмов"
### JavaScript, HTML, CSS, React, Redux, API

Задание было доработать код проекта (в том числе исправить ошибки за другим разработчиком).
Изначальный код, от которого надо было стартовать, находится здесь: https://github.com/afon-himself/bootcamp-m4-starter 

Финальное приложение позволяет составлять списки фильмов и делиться ими с друзьями.
Основную часть главной страницы занимает форма поиска и список найденных фильмов. Справа на странице находится список выбранных фильмов.
Пользователь набирает название на английском, нажимает кнопку "Искать" и внизу под строкой поиска отображаются все фильмы, в названии которых есть данное слово.

![search](https://user-images.githubusercontent.com/92203369/194552999-b38e7c2b-f61d-4189-8386-a3f83de87c73.png)

Далее пользователь нажимает кнопку «Добавить в список», фильм попадает в список выбранных фильмов.
Пользователь может удалить фильм из списка выбранных фильмов.

![addingToList](https://user-images.githubusercontent.com/92203369/194556128-ad15555b-af70-4851-93c4-93bf11ddcb4b.png)

Пользователь может сохранить список. Дл этого он должен сперва написать название для списка, а потом нажать на кнопку «Сохранить список». Пока нет названия списка, кнопка "сохранить список" неактивна. Список сохраняется на сервере и получает уникальный id. На основе этого id формируется ссылка вида http://localhost:3000/list/<id>. Ссылка появляется на месте кнопки «Сохранить список». При переходе по ссылке, на отдельной странице отображается название списка и связанные с ним фильмы. Для каждого фильма указана ссылка, ведущая на соответствующую страницу в IMDB.

![listExample](https://user-images.githubusercontent.com/92203369/194556910-01513c50-3c9d-43cd-94da-1929fda48662.png)

Для получения информации о фильме используется API: http://www.omdbapi.com/




