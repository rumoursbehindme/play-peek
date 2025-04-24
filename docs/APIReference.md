# 🔍 API Reference

PlayPeek uses the RAWG Video Games Database API. Below are key endpoints:

## 🎮 Fetch Games
```
GET /games?key=YOUR_API_KEY
```
Returns a list of popular games.

## 📅 Upcoming Games
```
GET /games?dates=TODAY,NEXT_YEAR_END&ordering=-added&key=YOUR_API_KEY
```
Returns games releasing in the next year.

## 🏷️ Fetch Genres
```
GET /genres?key=YOUR_API_KEY
```
Returns a list of all genres.

## 🎮 Games by Genre
```
GET /games?genres=GENRE_ID&key=YOUR_API_KEY
```
Returns games filtered by genre.

## 🕹️ Fetch Platforms
```
GET /platforms/lists/parents?key=YOUR_API_KEY
```
Returns a list of platforms.

## 🎮 Games by Platform
```
GET /games?platforms=PLATFORM_ID&key=YOUR_API_KEY
```
Returns games filtered by platform.

Sample responses are structured with `results`, `count`, `next`, and `previous` fields.

