# Aspiro

Aspiro is a responsive career counseling website designed to provide users with personalized career advice, guidance, and resources to help them make informed decisions about their professional future. Built with React, Firebase, and modern web development techniques, the platform offers a seamless and interactive user experience.

# 🌟 Features

### Dynamic Career Counseling Services:

- Showcased career services such as counseling sessions, resume reviews, and skill assessments.
- Each service card displays details like the name, category (online/offline), price, counselor name, and more.

### Protected Routes:

- Pages like "My Profile" and "Service Details" are accessible only to logged-in users.

### Interactive User Profile:

- Users can view and update their profile information, including their name and photo, using Firebase's updateProfile method.

### Authentication:

- Email-password-based login and registration with Firebase Authentication.
- Google Login integration for a quicker sign-in experience.
- Password visibility toggle for a secure yet user-friendly experience.

### Service Feedback:

- Users can leave comments or feedback on services. These are dynamically displayed on the Service Details page.

### Additional Features:

- Swiper slider for a visually appealing homepage experience.
- Forgot password functionality with a reset email feature.
- 404 Not Found page with a user-friendly design.
- Extra protected route to showcase additional features.

# 🔑 Key Technologies and Concepts Used

## Frontend Development:

- React.js
- Tailwind CSS
- UI Enhancements:
  - Integrated Swiper.js for a responsive, touch-friendly homepage slider.
  - Used animations via AOS (Animate on Scroll) to create an engaging user experience.

## Backend and Authentication:

- Firebase:

  - Implemented authentication using Firebase Auth (email-password and Google login).
  - Updated user profiles securely with Firebase's updateProfile method.
  - Managed real-time user authentication states using Firebase's onAuthStateChanged.

- JSON Data Management:
  - Hosted static JSON files to populate service cards dynamically.

# 💻 Deployment and Hosting

- Hosted on Firebase
- Deployed as a Single Page Application (SPA) to ensure smooth navigation and no errors on reloading private routes.

# 🚀 Live Site

https://career-aspiro.web.app/
