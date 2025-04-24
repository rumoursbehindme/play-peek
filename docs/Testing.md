# 🧪 Testing

Currently, PlayPeek does not include automated testing. Manual testing guidelines are as follows:

## 🔍 Navigation Testing
- Click through all navbar links (Home, Genres, Platforms, Top Rated) to ensure correct routing.

## 🎮 Genre & Platform Filter
- Click on any genre or platform and verify that games update accordingly.
- Ensure loaders appear during data fetching.

## 📱 Responsiveness
- Resize the browser or open on different devices to confirm responsive layout behavior.

## 🔄 Data Fetching
- Check if API calls succeed and relevant game data displays correctly.
- Observe error handling behavior on network failure.

Future updates will introduce automated tests using tools like Vitest or Cypress.

