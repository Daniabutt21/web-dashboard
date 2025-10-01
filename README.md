# Daily Workload Dashboard - Frontend

AngularJS 1.x frontend for the Daily Workload Dashboard.

## Run

```bash
npm install
npm start
```

Open http://localhost:4200

## Structure

- `app/` - AngularJS application
  - `app.module.js` - Main module definition
  - `app.routes.js` - Route configuration
  - `services/` - API service for backend communication
  - `components/` - Reusable components
    - `stat-card/` - Metric card component
  - `pages/` - Page controllers and templates
    - `dashboard/` - Main dashboard with 3x3 metric grid
  - `config/` - Environment configuration
- `styles/` - CSS styles
- `index.html` - Main HTML template

## Configuration

Copy `app/config/env.example.js` to `app/config/env.local.js` and set your backend URL:

```javascript
window.ENV = {
  apiBaseUrl: 'http://localhost:3000'
};
```

## Scripts

- `npm start` - serve the app (static server)
- `npm run build` - placeholder for future build/bundling if needed
