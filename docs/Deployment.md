# 🌐 Deployment on Vercel

Follow these steps to deploy PlayPeek on Vercel:

## 1. Push to GitHub
Ensure your latest code is on the `main` (or `master`) branch of your GitHub repo.

## 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com/)
- Sign in and click on **New Project**
- Import your GitHub repo

## 3. Set Environment Variables
In the **Settings > Environment Variables** tab on Vercel, add:
```
VITE_RAWG_API_KEY=your_api_key
```

## 4. Deploy
Click **Deploy** and Vercel will automatically build and host the project.

## 5. Live URL
Once deployed, you will receive a live URL like:
```
https://playpeek.vercel.app
```

All future `pushes` to the connected branch will trigger automatic redeployments.

