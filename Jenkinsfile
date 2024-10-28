pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-new-app"
        DOCKER_HUB_REPO = "your-docker-hub-username/my-new-app"
DOCKERHUB_CREDENTIALS = credentials("docker-hub-credentials")
    }

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
                sh 'npm install'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    // Use the correct credentials ID here
                    sh 'docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                        sh "docker tag ${DOCKER_IMAGE} ${DOCKER_HUB_REPO}:latest"
                        sh "docker push ${DOCKER_HUB_REPO}:latest"
                   
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

