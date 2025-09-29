# REACT: Avocado App 📱🥑

## Screenshot 📸

![App Screenshot](https://i.imgur.com/zdbJ7yK.png)

## Project Overview 🌟

- **Live Demo**: [react-avocado-app.netlify.app/](https://react-avocado-app.netlify.app/)

Welcome to my first React app project, created as part of the Web Development program at Full Sail University! This app, dubbed "Avocado App" (just a random name), is a social media-style interface featuring a news feed, messages, watch section, dashboard, settings, notifications, and ad cards. Initially a non-functional prototype, it has evolved into a fully functional application over a 4-week course. This personal project is now hosted and live via Netlify, showcasing my growth as a developer.

> **September 29, 2025 Update - Week 4**: Due to significant time constraints and the steep learning curve to meet Full Sail's requirements, I couldn't update this version in Week 3. However, I’ve now fully completed the app according to my professor's expectations—and then some! Integrated APIs, optimized components, and added mock features like a notifications system and inbox.

> **September 17, 2025 Update - WEEK 2**: Exciting progress! Added state management with user object array, mapped posts with `<PostCard />`, and implemented add/delete functionality. Enhanced components with unique IDs, double validation for posts, and a `TodaysDate` component. Fixed styling, updated to `<article>` tags, and improved background color via `componentDidMount`. Still refining form inputs and delete edge cases!

> **September 8, 2025 Update**: This is its FIRST iteration. It's non-functional, but will be developed throughout my current 4-week course at Full Sail.

## Reflection

Full Sail University's first React.js course for the Web Development program has been amazing 🤩. I believe most of us students, are incredibly grateful for the strong foundation this course provided in this widely-used library. It was fun, enlightening, and challenging. A friend once told me that of the four CRUD operations, the "U" (Update) is the hardest to implement—and I found that to be 100% true. It wasn’t until Week 4 that I finally got my Edit Post feature working. The challenge stemmed from mastering `useState`, especially when using it for custom attributes like `editingPostId`. I had to pass this state as a prop to `PostCard` (even when not directly used) and manage it across opening, submitting, and canceling the edit. 🤯 This realization unlocked the pattern's power, and I’m excited to keep building on it 💪. I plan to practice React, if not daily, at least weekly, to solidify my skills and continue improving.

## Features 🚀

- **Component Structure**: Function-based components including Button, Form, Header, LeftNav, Logo, MyAvatar, AdCard, PostCard, SearchBar, and TodaysDate.
- **Charts**: Integrated the [Recharts.org](https://recharts.org/) library with 4 basic charts using mock data: SimpleBarChart, SimpleLineChart, SimpleRadarChart, and TwoSimplePieChart.
- **Pages**: Dashboard.jsx, Messages.jsx, Newsfeed.jsx, Notifications.jsx, Settings.jsx, and Watch.jsx.
- **Dynamic Content**: Extensive use of props for flexibility.
- **Styling**: CSS-in-JS with the [StyledComponents.com](https://styled-components.com/) library for the Button component, with plans to expand its use. Custom and imported images for logo, favicon, and ads.
- **React Hooks**: Utilized `useState` and `useEffect` for state management and side effects.
- **Icons**: Leveraged the [React-icons.github.io](https://react-icons.github.io/react-icons/) library for visual elements.
- **User Data**: Settings page displays info from the [Randomuser.me](https://randomuser.me/) API.
- **Routing**: Managed with the [ReactRouter.com](https://reactrouter.com/start/declarative/installation) declarative library.

## How to Run This App 🖥️

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd react-avocado-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:5173`

## Development Notes 📝

- Initiated with `npm create vite@latest my-app -- --template react`.
- Installed `react-icons` with `npm install react-icons --save`.
- Added `styled-components` with `npm install styled-components` for the `Button` component.
- Added the "basic" Declarative ReactRouter with `npm i react-router`
- Used custom-sourced images for ads, logo, and favicon.

## Acknowledgments 🙏

Big thanks to Full Sail University for the guidance and to the open-source community for tools like React, Recharts, React Router, and Styled Components that made this possible!

## 👋 About the Author

Hi! I’m Phillip Cantu, an American digital nomad, a **Full Sail University** web development student, and a [4Geeks Academy Full Stack Development with AI Bootcamp](https://4geeksacademy.com/us/apply?ref=REFERRALQEZPTJCK-17696). I’m passionate about creating modern, user-friendly, and practical applications that help people learn and build faster.

You can find me here:

- **GitHub:** [hereisphil](https://github.com/hereisphil)
- **LinkedIn:** [PhillipCantu](https://www.linkedin.com/in/phillipcantu/)
