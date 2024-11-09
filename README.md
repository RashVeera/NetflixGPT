# Netflix GPT Clone

This project is a Netflix-inspired application powered by GPT and TMDB APIs, hosted on Firebase. It includes features like AI-based movie suggestions, user authentication, and responsive design with Tailwind CSS.

## Live Site
[Visit the Live Site](https://gptnetflix-1e506.web.app/)

## Features

### Core Features
- **Login/Sign Up** - Users can sign up or log in to access the app.
- **Authentication** - Secure sign-in and sign-out functionality with Firebase.
- **Profile Management** - Update user profile details.
- **GPT Movie Suggestions** - Search for movies and get AI-powered recommendations.
- **Responsive Design** - TailwindCSS ensures a responsive and aesthetic UI across devices.

### Movie Browsing
- **Main Movie Display** - Shows main movie trailer in background, title, and description.
- **Movie Suggestions** - AI-powered movie suggestions based on user preferences.
- **Multiple Movie Lists** - Dynamic categories of movies, such as popular and trending.
- **Search Bar with GPT** - A search bar powered by OpenAI GPT for interactive movie suggestions.

## Project Setup and Structure

### Technology Stack
- **React.js** - Frontend framework for building UI components.
- **TailwindCSS** - CSS framework for responsive design.
- **Firebase** - For hosting, authentication, and database.
- **Redux** - State management.
- **TMDB API** - Fetch movie data.
- **OpenAI API** - GPT integration for AI movie suggestions.

### Main Components and Features

1. **Configured TailwindCSS** - Styled components with responsive design.
2. **Header and Routing** - Integrated navigation and page routing.
3. **Authentication**
   - Login and Sign Up Forms
   - Form Validation
   - Firebase Authentication for account creation and login
   - Sign out functionality
4. **Redux Store** - Managed app state with `userSlice` and `movieSlice`.
5. **TMDB Integration**
   - Registered TMDB API and obtained access token
   - Fetched "Now Playing" and popular movies using custom hooks
   - Created movie cards and lists with TMDB images.
6. **GPT Integration**
   - GPT-based Search Bar for intelligent movie suggestions.
   - Fetched GPT movie suggestions from TMDB and updated `gptSlice`.
7. **Video Integration** - Autoplay and mute trailer videos using YouTube embeds.
8. **Responsive Design** - Made the application responsive across devices.
9. **Bug Fixes**
   - Display name and profile picture update on sign-up.
   - Redirect to login if the user is not authenticated.
   - Unsubscribed from `onAuthStateChanged` callback.

### Environment Variables
- Added `.env` file for storing API keys securely.
- Updated `.gitignore` to exclude `.env` file from version control.

### Future Enhancements
- **Multi-language Support** - Integrate additional languages.
- **Enhanced Recommendations** - Improve AI-based movie suggestions.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/netflix-gpt-clone.git
   ```
2. **Navigate to the project directory**:
    ```bash
    cd netflix-gpt-clone
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Create a .env file with your Firebase, TMDB, and OpenAI API keys**:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    REACT_APP_OPENAI_API_KEY=your_openai_api_key
    ```
5. **Run the app locally**:
    ```bash
    npm run start
    ```

### Project Structure
- **/src/components** - Reusable UI components.
- **/src/pages** - Different pages for navigation.
- **/src/redux** - Redux slices for user, movies, and GPT suggestions.
- **/src/firebase** - Firebase configuration.
- **/src/hooks** - Custom hooks for API integration.
- **/src/App.js** - Main app structure and routing.

### Issues with accessing TMDB API

- **TMDB API's maybe inaccessible to some users in India due to government restrictions. Some users have worked around this issue by changing their DNS to options like Google’s (8.8.8.8) or Cloudflare’s (1.1.1.1), or by using a VPN**