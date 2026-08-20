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

## Пример использования

По умолчанию используется формат `stylish` (без указания `-f` или `--format`).

[![asciicast](https://asciinema.org/a/IqYbJjVJ5s3Ivpen.svg)](https://asciinema.org/a/IqYbJjVJ5s3Ivpen)
