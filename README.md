# YouTube Clone - CI/CD & DevSecOps Project

A React-based YouTube Clone application deployed using an automated CI/CD and DevSecOps pipeline with Jenkins, Docker, SonarQube, OWASP Dependency-Check, Trivy, Prometheus, Grafana, and Node Exporter.

## 🚀 Project Overview

This project demonstrates an end-to-end DevOps workflow where application code is managed through GitHub and automatically processed through a Jenkins CI/CD pipeline.

Whenever new code is pushed to the GitHub repository, Jenkins automatically triggers the pipeline to build, scan, containerize, and deploy the application.

## 🏗️ CI/CD & DevSecOps Pipeline

```text
Developer
    |
    v
  GitHub
    |
    v
  Jenkins
    |
    +--> Checkout Source Code
    |
    +--> Install Dependencies
    |
    +--> SonarQube Code Analysis
    |
    +--> OWASP Dependency-Check
    |
    +--> Build React Application
    |
    +--> Build Docker Image
    |
    +--> Trivy Vulnerability Scan
    |
    +--> Push Image to Docker Hub
    |
    +--> Deploy Application using Docker
    |
    v
Application Running
    |
    v
Prometheus + Node Exporter
    |
    v
Grafana
~~~

| Category            | Technologies                       |
| ------------------- | ---------------------------------- |
| Application         | React.js                           |
| Source Control      | Git, GitHub                        |
| CI/CD               | Jenkins                            |
| Containerization    | Docker                             |
| Container Registry  | Docker Hub                         |
| Code Quality        | SonarQube                          |
| Dependency Security | OWASP Dependency-Check             |
| Container Security  | Trivy                              |
| Monitoring          | Prometheus, Grafana, Node Exporter |
| Operating System    | Linux                              |


## 🔄 Jenkins Pipeline

The Jenkins pipeline automates the following stages:

1. Checkout

Jenkins pulls the latest source code from the GitHub repository.

2. Install Dependencies

Node.js dependencies are installed using npm.

3. SonarQube Analysis

SonarQube is used to analyze the source code and identify code quality issues.

4. OWASP Dependency-Check

OWASP Dependency-Check scans project dependencies for known security vulnerabilities.

5. Build Application

The React application is built for production.

6. Docker Build

A Docker image is created for the React application.

7. Trivy Security Scan

Trivy scans the Docker image for known vulnerabilities before deployment.

8. Docker Hub

The Docker image is pushed to Docker Hub.

9. Deployment

The application is deployed using Docker.

## DevSecOps

Security is integrated into the CI/CD pipeline using:

SonarQube for source code quality analysis
OWASP Dependency-Check for dependency vulnerability scanning
Trivy for Docker image vulnerability scanning

This helps identify security issues before the application is deployed.

## Monitoring

The deployed environment is monitored using:

Prometheus - Collects and stores monitoring metrics
Node Exporter - Collects Linux system metrics
Grafana - Provides dashboards for monitoring and visualization
##  Docker

The application is containerized using Docker.

Build the Docker image:

docker build -t youtube-clone .

Run the container:

docker run -d -p 3000:3000 youtube-clone

The application can then be accessed at:

http://localhost:3000
## Run Locally

Clone the repository:

git clone https://github.com/Hitesh322/youtube_clone_reactjs.git

Navigate to the project:

cd youtube_clone_reactjs

Install dependencies:

npm install

Start the application:

npm start

Open:

http://localhost:3000
## Key Learnings

Through this project, I gained practical experience in:

CI/CD pipeline automation using Jenkins
GitHub integration with Jenkins
Docker containerization
Docker image management with Docker Hub
Code quality analysis using SonarQube
Dependency vulnerability scanning using OWASP
Container vulnerability scanning using Trivy
Linux administration
Application deployment
Infrastructure and application monitoring
Prometheus and Grafana integration ‍
## Author

Hitesh Mahajan

GitHub: https://github.com/Hitesh322
