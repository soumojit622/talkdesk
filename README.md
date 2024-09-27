# ![Talkdesk Banner](https://your-banner-link.com/banner-image.png)

# 🚀 Talkdesk

Talkdesk is a feature-packed **Calendly clone** built with **Next.js**, **React**, **Tailwind CSS**, **Prisma**, **Neon**, **Clerk**, and **Shadcn UI**. It enables seamless meeting scheduling, event management, and authentication functionality with an elegant and responsive design.

> This project integrates the **Google Calendar API**, managed via **Google Cloud Console**, to streamline scheduling and event syncing.

## 🌐 [Live Demo](https://talkdesk-demo.com)

Check out the live demo [here](https://talkdesk-demo.com) 🎉.

## 🚩 Features

- 📅 **Meeting Scheduling**: Effortlessly schedule meetings with a user-friendly interface.
- 🔐 **Authentication**: Secure user authentication using **Clerk**.
- 🛠️ **Event Management**: A system for managing meetings and events.
- ⚡ **Responsive Design**: Optimized for mobile and desktop using **Tailwind CSS**.
- 🗄️ **Database Integration**: Data is securely stored with **Prisma** and **Neon**.
- 📆 **Google Calendar Sync**: Integrated **Google Calendar API** for syncing events.

## 📑 Technologies Used

- [**Next.js**](https://nextjs.org/) - A powerful framework for building fast, scalable web applications.
- [**React**](https://react.dev/) - A component-based JavaScript library for building user interfaces.
- [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework that makes it easy to build responsive UIs.
- [**Prisma**](https://www.prisma.io/) - An ORM for managing databases seamlessly with JavaScript and TypeScript.
- [**Neon**](https://neon.tech/) - A serverless PostgreSQL database solution optimized for cloud-native applications.
- [**Clerk**](https://clerk.dev/) - A service that simplifies authentication and user management.
- [**Shadcn UI**](https://shadcn.dev/) - A highly customizable and accessible component library for modern web applications.
- [**Google Cloud Console**](https://console.cloud.google.com/) - Used to manage the **Google Calendar API** for scheduling events.

## 🛠️ Installation

To run **Talkdesk** locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/talkdesk.git
    cd talkdesk
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add the following:

    ```bash
    DATABASE_URL=your-neon-database-url
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    CLERK_SECRET_KEY=your-clerk-secret-key

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

## 💻 Usage

1. **Sign up** or **log in** using Clerk authentication.
2. **Schedule meetings**: Select a date and time for your meetings.
3. **Manage events**: View past and upcoming events in your dashboard.
4. **Join meetings**: Use integrated meeting links to join.

## 💬 Contributing

We welcome all contributions! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your feature"
    ```
4. Push the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## 📧 Contact

For any questions or feedback, feel free to contact me:

- Email: [soumojitbanerjee22@gmail.com](mailto:soumojitbanerjee22@gmail.com)

## 👨‍💻 Made by [Soumojit Banerjee](https://www.linkedin.com/in/soumojit-banerjee-4914b3228/)

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/soumojit-banerjee-4914b3228/).

## 🙏 Acknowledgements

Thanks to the amazing teams behind **Next.js**, **Prisma**, **Neon**, **Clerk**, **Google Cloud Console**, and **Shadcn UI** for their powerful tools and resources.

## ❤️ Special Thanks

A special thanks to **ChatGPT** for all your support in completing this project!
