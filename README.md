This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ENGLISH VERSION IS BELOW RUSSIAN

## UPPERSETUP CINEMA APP

UPPERSETUP CINEMA APP — это веб-приложение, позволяющее искать фильмы по названию, просматривать их подробную информацию и добавлять любимые фильмы в избранное.

Данные поступают из OMDb API.

## Архитектура

Проект построен на Next.js с использованием TypeScript и SCSS-модулей.

Основные компоненты:

Header — включает лого, строку поиска и переключатель тем (тёмная/светлая).

MovieCard — карточка фильма с базовой информацией, возможностью открыть подробности и добавить в избранное.

Modal — модальное окно с расширенной информацией о фильме.

Pagination — пагинация по 10 элементов на страницу.

Контексты:

MovieContext — хранит список фильмов, отображаемых на текущей странице
ThemeContext — тема приложения (тёмная/светлая).

Используется app-директория

## Реализованные фичи
Пагинация - внизу страницы с фильмами

Модалка с подробной информацией - по кнопке More Info на карточке фильма

Кэширование с React Query

Система избранного — можно добавлять фильмы в избранное, данные хранятся в localStorage

Адаптивная тёмная/светлая тема


## UPPERSETUP CINEMA APP

UPPERSETUP CINEMA APP is a web application that allows searching movies by title, viewing detailed information about them, and adding favorite movies to favorites.

Data is fetched from the OMDb API.

## Architecture

The project is built with Next.js using TypeScript and SCSS modules.

Main components:

Header — includes logo, search bar, and theme switcher (dark/light).

MovieCard — a movie card with basic info, ability to open details and add to favorites.

Modal — modal window with detailed movie information.

Pagination — pagination with 10 items per page.

Contexts:

MovieContext — stores the list of movies shown on the current page

ThemeContext — application theme (dark/light).

The /app is user for routing .

## Implemented features

Pagination — at the bottom of the movies page

Modal with detailed information — you can view it by the "More Info" button on the movie card

Caching with React Query

Favorites system — allows adding movies to favorites, data stored in localStorage

Adaptive dark/light theme








