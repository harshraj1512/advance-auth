# Advanced Authentication Page

## Overview

This repository contains an advanced authentication system built with modern web development practices. The application leverages cookies, JSON Web Tokens (JWT), and state management using [Zustand](https://zustand-demo.pmnd.rs/). It also integrates [Mailtrap](https://mailtrap.io/) as a third-party service for handling email functionalities like password recovery.

The project includes the following authentication pages:

- **Login**: Securely logs in users using JWT-based authentication.
- **Signup**: Allows new users to create an account.
- **Forgot Password**: Sends a password recovery email through Mailtrap.
- **Reset Password**: Enables users to set a new password.

## Features

1. **Cookie and JWT-Based Authentication**  
   - Securely manages user sessions using cookies and JWT.  
   - Tokens are stored securely to prevent XSS and CSRF attacks.

2. **State Management**  
   - Zustand is used for managing global state, ensuring a lightweight and performant application.

3. **Third-Party Email Service**  
   - Integrated with Mailtrap for email services, including sending verification and password recovery emails.

4. **User-Friendly UI**  
   - A simple and intuitive interface for managing user authentication processes.

## Mailtrap Setup
- Sign up at [Mailtrap](https://mailtrap.io/) and create an inbox.
- Copy your SMTP credentials and configure your email service accordingly.

## Summary

This project is a great starting point for building a secure authentication system in web applications. It combines powerful concepts like JWT, cookies, and modern state management tools like Zustand to create a robust and scalable solution. The integration of Mailtrap adds flexibility for managing email functionalities in a development or staging environment.

By creating this project, you'll gain a deeper understanding of:
- Securely managing user sessions
- Handling email services in development
- Implementing state management in a scalable way

Feel free to fork, contribute, or use this project as a base for your own authentication system! 🎉


