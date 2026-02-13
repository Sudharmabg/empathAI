# EmpathAI - Emotional Intelligence Platform for Children

EmpathAI is a comprehensive platform designed to support children's emotional intelligence development through AI-powered assessments, interactive learning, and professional counseling services.

## Project Structure

- **empathiai-homepage/**: React frontend application
- **empathiai-backend/**: Java Spring Boot backend service  
- **empathiai-ai-service/**: Python AI service for chatbot and assessments

## Features

- 🧠 AI-powered emotional assessment
- 📚 Interactive CBSE curriculum with gamification
- 💬 Emotional support chatbot
- 👨‍⚕️ Professional counselor booking system
- 🎯 Personalized intervention recommendations
- 📊 Progress tracking and analytics

## Getting Started

### Prerequisites
- Node.js 18+
- Java 17+
- Python 3.8+

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sudharmabg/empath-ai.git
cd empath-ai
```

2. Set up the frontend
```bash
cd empathiai-homepage
npm install
npm run dev
```

3. Set up the backend
```bash
cd empathiai-backend
./mvnw spring-boot:run
```

4. Set up the AI service
```bash
cd empathiai-ai-service
pip install -r requirements.txt
python app.py
```

## Technology Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Java Spring Boot, JPA/Hibernate
- **AI Service**: Python, Flask, AWS Bedrock
- **Database**: PostgreSQL/MySQL
- **Deployment**: AWS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.