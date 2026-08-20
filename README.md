# Вычислитель отличий

Утилита, определяющая разницу между двумя структурами данных.

[![Actions Status](https://github.com/Linkoff/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Linkoff/qa-auto-engineer-javascript-project-87/actions) [![Node CI](https://github.com/Linkoff/qa-auto-engineer-javascript-project-87/actions/workflows/ci.yml/badge.svg)](https://github.com/Linkoff/qa-auto-engineer-javascript-project-87/actions/workflows/ci.yml)

## Возможности утилиты

- Поддержка входных форматов: `yaml`, `json`
- Генерация отчёта в форматах:
  - `stylish` — наглядный вывод с `+` и `-`
  - `plain` — текстовое описание изменений
  - `json` — машиночитаемый вывод
- Выбор формата через `-f` или `--format`
- Встроенная справка `-h` и вывод версии `-V`

## Установка

### Для пользователя (глобальная команда)

```bash
git clone https://github.com/Linkoff/qa-auto-engineer-javascript-project-87.git
cd qa-auto-engineer-javascript-project-87
npm install
npm link
```

### Для разработки

Если вы хотите внести изменения, запустить тесты или проверить покрытие:

```bash
make install          # установка зависимостей
make lint             # проверка кода линтером
make test             # запуск тестов
make test-coverage    # запуск тестов с покрытием
```

## Пример использования

По умолчанию используется формат `stylish` (без указания `-f` или `--format`).

[![asciicast](https://asciinema.org/a/IqYbJjVJ5s3Ivpen.svg)](https://asciinema.org/a/IqYbJjVJ5s3Ivpen)
