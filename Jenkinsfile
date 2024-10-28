pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                // Retry mechanism for npm install
                script {
                    def retries = 3
                    def success = false
                    for (int i = 0; i < retries; i++) {
                        try {
                            sh 'npm install'
                            success = true
                            break
                        } catch (Exception e) {
                            echo "npm install failed, attempt ${i + 1} of ${retries}"
                        }
                    }
                    if (!success) {
                        error "npm install failed after ${retries} attempts"
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t my-new-app .'
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    docker.withRegistry('', 'docker-hub-credentials') {
                        sh 'docker tag my-new-app your-docker-hub-username/my-new-app:latest'
                        sh 'docker push your-docker-hub-username/my-new-app:latest'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Clean up') {
            steps {
                echo 'Cleaning up...'
                sh 'docker system prune -f'
            }
        }
    }
}
