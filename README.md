# WhatsApp Clone

This is a WhatsApp clone application built using Next.js, TypeScript, Stream.io, and Clerk. It aims to replicate the core functionality of WhatsApp, allowing users to send messages, create groups, and have real-time chat experiences.

## Features

- **Real-time Chat**: Enjoy seamless real-time messaging with friends and groups.
- **User Authentication**: Secure user authentication powered by Clerk.
- **Group Chat**: Create and join groups for group conversations.
- **Multimedia Messaging**: Send text, images, and other media files.
- **Emoji Support**: Express yourself with a wide range of emojis.
- **Message History**: Access your chat history.
- **Responsive Design**: Works on various devices and screen sizes.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- A Clerk account for user authentication.
- A Stream.io account for real-time messaging.

### Installation

1. Clone the repository

2. Install dependencies: npm install

3. Create a .env.local file in the root directory and add the following environment variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
CLERK_WEBHOOK_SECRET
NEXT_PUBLIC_STREAM_KEY
STREAM_SECRET
NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
WEB_PUSH_PRIVATE_KEY

4. Run the development server: npm run dev

5. Open http://localhost:3000 in your browser.

### License

This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md) - see the LICENSE file for details.

### Acknowledgements

- [Clerk](https://clerk.dev/)
- [Stream.io](https://getstream.io/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Thanks to [Coding in Flow](https://www.youtube.com/c/codinginflow) for the tutorial that inspired this project.

### Disclaimer

This project is a clone created for educational purposes and is not affiliated with or endorsed by WhatsApp, Clerk, or Stream.io in any way. It is not intended for production use without further development and security considerations.