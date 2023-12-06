### Hexlet tests and linter status:

[![Actions Status](https://github.com/nazhduck/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nazhduck/fullstack-javascript-project-44/actions)  
[![Maintainability](https://api.codeclimate.com/v1/badges/07d8ad6ef8e23fa6fd03/maintainability)](https://codeclimate.com/github/nazhduck/fullstack-javascript-project-44/maintainability)

# Игры разума (JavaScript)

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

Игры:

- Определение чётного числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Определение наибольшего общего делителя.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение простого числа.

## Установка

```javascript
make install
```

## Игра: "Проверка на чётность"

Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить "yes", если число чётное, или "no" — если нечётное.

### Запуск игры

```javascript
make brain-even
```

### Пример игры

[![asciicast](https://asciinema.org/a/624150.svg)](https://asciinema.org/a/624150)

## Игра: "Калькулятор"

Суть игры в следующем: пользователю показывается случайное математическое выражение, которое нужно вычислить и записать правильный ответ.

### Запуск игры

```javascript
make brain-calc
```

### Пример игры

[![asciicast](https://asciinema.org/a/624156.svg)](https://asciinema.org/a/624156)

## Игра "НОД"

Суть игры в следующем: пользователю показывается два случайных числа. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

### Запуск игры

```javascript
make brain-gcd
```

### Пример игры

[![asciicast](https://asciinema.org/a/624185.svg)](https://asciinema.org/a/624185)

## Игра "Арифметическая прогрессия"

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

### Запуск игры

```javascript
make brain-progression
```

### Пример игры

[![asciicast](https://asciinema.org/a/625192.svg)](https://asciinema.org/a/625192)

## Игра "Простое ли число?"

Игроку показывается число, и он должен опеределить: является ли это чило простым или нет.

### Запуск игры

```javascript
make brain-prime
```

### Пример игры

[![asciicast](https://asciinema.org/a/625230.svg)](https://asciinema.org/a/625230)
