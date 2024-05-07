---
title: "Database Improvements"
parent: planning
---

# Database Improvements

## Problem Statement

- БД (постгрес) крутится на VPSке (точно?)
- Бекапов нет
- Бекапы не тестируются
- Нет миграций
- Нет провиженинга (скрипта для пересоздания базы)
- Нет простого способа создать локальную БД для тестирования

Из этого вытекает следующая проблема: **любое действие с базой это потенциальный риск**.

## Как Улучшить

Простой способ улучшить ситуацию - это запихнуть постгрес в **докер**. Самое главное, что он нам даст - это чистая база, которую никто не трогал, а также простой способ очистить базу.

У этого подхода есть плюсы и минусы:

- (+) Пересоздать базу (=протестировать провиженинг, миграции и бекапы) очень просто
- (+) Можно запустить две базы рядом (например, для разработки на двух разных ветках)
- (+) У нас будет локальное окружение для разработки
- (-) Сложнее взаимодействовать с базой, в т.ч. делать и восстанавливать бекапы
  - (+) На самом деле, отличий минимум - можно использовать все те же `pg_*` команды
  - (+) Избавляемся от ненужной абстракции - больше нет "локальной" и "удаленной" БД, всегда только "удаленная" БД
- (-) Придется мигрировать production
  - (+) Это все равно придется делать
  - (+) В идеале, миграция будет выглядеть так: `systemctl disable --now postgres.service && systemctl enable --now postgres-docker.service`
  - (-) Придется писать systemd unit для запуска БД
    - (+) По большей части он прост: нам нужно только запустить `docker compose up`
    - (-) Возможно, для упрощения жизни придется добавлять вещи сложнее: хелсчеки, рестарты и т.д.

## План по Миграции

Пишем `compose.yaml` (не протестировано):

```yaml
services:
  postgres:
    image: "postgres:16"
    restart: always
    secrets:
      - postgres-password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/postgres-password
    # В локальной папке migrations будут *.sql и *.sh файлы, которые будут выполнены при первом запуске
    volumes:
      - ./migrations:/docker-entrypoint-initdb.d
      - data:/var/lib/postgresql/data
    expose:
      - "5432"

secrets:
  postgres-password:
    # Этот файл добавить в .gitignore
    file: ./postgres-password

volumes:
  data:
```

Пишем systemd unit (не протестировано):

```
[Unit]
After=docker.service

[Service]
ExecStart=/bin/docker compose -f /home/user/project/compose.yaml up
Restart=always
Type=simple

[Install]
WantedBy=multi-user.target
```
