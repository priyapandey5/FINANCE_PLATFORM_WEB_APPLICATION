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
<img width="1872" height="830" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/b42ae408-2f43-431c-b4b0-889e207c00e3" />
<img width="1881" height="806" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/e1ec54a4-fe75-41a1-95e4-0493692fafc5" />
<img width="1883" height="813" alt="Screenshot (80)" src="https://github.com/user-attachments/assets/a947eb5d-ac7c-44e8-a44e-744ba20b6702" />

<img width="1896" height="813" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/ea3db895-7997-49d9-8139-3fed227d1d94" />
<img width="1892" height="813" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/a465dfc0-348c-4618-a0d0-10f4f8dba69f" />
<img width="1882" height="824" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/1d5ec642-5fe9-4d9b-803f-57ec97cdcddb" />


