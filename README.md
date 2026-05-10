# 💰 AI Finance Platform

An AI-powered full-stack finance management platform built with Next.js, Supabase, Prisma, Tailwind CSS, Inngest, ArcJet, and Shadcn UI.

This application helps users manage finances, track transactions, generate AI insights, and automate financial workflows with a modern and scalable architecture.

---

## 🚀 Features

- 🔐 Authentication with Clerk
- 📊 Financial Dashboard
- 💳 Transaction Management
- 🤖 AI-powered finance insights using Gemini AI
- 📈 Analytics & reports
- 📧 Email notifications with Resend
- ⚡ Background jobs with Inngest
- 🛡️ Security & bot protection using ArcJet
- 🎨 Beautiful UI with Tailwind CSS + Shadcn UI
- 🗄️ Database management using Prisma ORM
- ☁️ Supabase integration

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- Shadcn UI

### Backend
- Next.js Server Actions
- Prisma ORM
- Supabase

### Authentication
- Clerk

### AI
- Google Gemini API

### Other Services
- Inngest
- ArcJet
- Resend

---

## 📂 Folder Structure

```bash
├── app
├── components
├── data
├── emails
├── hooks
├── lib
├── prisma
├── public
├── actions
└── middleware.js

⚙️ Environment Variables

Create a .env file in the root directory and add the following:
DATABASE_URL=

DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=

📦 Installation
1️⃣ Clone the repository
git clone <your-repository-url>
2️⃣ Navigate into the project
cd ai-finance-platform
3️⃣ Install dependencies
npm install
4️⃣ Setup Prisma
npx prisma generate
npx prisma db push
5️⃣ Run the development server
npm run dev
🧠 AI Integration

This project uses Google's Gemini API to generate intelligent finance insights and recommendations.

📧 Email Service

Resend is used for sending transactional emails and notifications.

🔒 Security

ArcJet provides:

Bot protection
Rate limiting
Request validation

<img width="1872" height="830" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/5c272488-1028-44b5-a347-396e0a97583c" />



