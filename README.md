# 🚀 Sensai

**Sensai** is a web application built with Next.js that provides personalized career and market insights for developers and tech professionals. Users can create their profiles, solve tech-related questions, track their progress, and generate optimized resumes based on their skills and goals.

### 🌐 Live Demo

👉 [https://sensai.vercel.app](https://sensai-mu-six.vercel.app/)

---

## 🧠 Features

- User authentication and profile creation with **Clerk**
- Custom tech profile setup based on skills and interests
- Solve quizzes and questions related to your career path
- Get personalized insights about the job market and your growth
- Track your learning progress over time
- Automatically generate professional resumes
- Background task handling and automation with **Inngest**
- Data persistence using **Prisma ORM**

---

## 🛠️ Tech Stack

- **[Next.js](https://nextjs.org/)** — React framework for production-grade apps
- **[Clerk](https://clerk.dev/)** — Authentication and user management
- **[Inngest](https://www.inngest.com/)** — Background jobs and serverless workflows
- **[Prisma](https://www.prisma.io/)** — Database ORM
- **[Vercel](https://vercel.com/)** — Hosting and deployment

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/sensai.git

# Navigate to the project directory
cd sensai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your credentials (Clerk, DB, etc.)

# Run the development server
npm run dev
