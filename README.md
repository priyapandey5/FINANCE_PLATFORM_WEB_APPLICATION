# 💰 AI Finance Platform

An AI-powered full-stack finance management platform built with Next.js, Supabase, Prisma, Tailwind CSS, Inngest, ArcJet, and Shadcn UI.

This application helps users manage finances, track transactions, generate AI insights, and automate financial workflows with a modern and scalable architecture.
<img width="1872" height="830" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/2e8ab073-ba22-404f-8a99-aa67763c84f9" />
<img width="1898" height="831" alt="Screenshot (75)" src="https://github.com/user-attachments/assets/9e5c4899-7501-41d7-9651-72399969660d" />
<img width="1883" height="813" alt="Screenshot (80)" src="https://github.com/user-attachments/assets/7b77f4c5-c0ca-46c9-9f99-6ac72ebe2857" />
<img width="1879" height="820" alt="Screenshot (81)" src="https://github.com/user-attachments/assets/26c60560-f221-45d1-b3df-e6acbc291d7d" />

<img width="1896" height="813" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/8f891723-9427-4e2e-bbf3-ad85b14e635c" />
<img width="1892" height="813" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/e45b405d-62f1-4cc3-bab8-2d115ce62931" />
<img width="1882" height="824" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/8049cc75-fd68-4675-a88e-fdba1c0ad326" />


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
<img width="1898" height="831" alt="Screenshot (75)" src="https://github.com/user-attachments/assets/1b60ba7a-021c-48b7-86c8-7c0b8563c3cc" />
<img width="1883" height="813" alt="Screenshot (80)" src="https://github.com/user-attachments/assets/87f5ec0a-551a-48ee-91c3-afb9274cdedd" />
<img width="1896" height="813" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/d85900c1-bc93-4c78-a562-296f8f815d80" />

<img width="1882" height="824" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/8d672459-abfb-4f48-b0b7-bc7e0716740b" />
<img width="1892" height="813" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/8dc3f47c-09c0-4475-a9e1-69221a48e64b" />





