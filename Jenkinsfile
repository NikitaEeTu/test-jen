pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World :)))))))'
                sh 'echo "Hello, Nikita" > hello.txt'
                sh 'cat hello.txt'
            }
        }
        stage('Start app') {
            steps {
                echo 'start app and build process'
            }
        }
        stage('Docker build') {
            steps {
                sh 'docker build -t "my-new-app" .'
            }
        }
        stage('app test') {
            steps {
                sh 'docker run -d --name my-new-app-container my-new-app'
                sh 'docker exec my-new-app-container npm test'
            }
        }
        stage('Clean up') {
            steps {
                sh 'docker stop my-new-app-container'
                sh 'docker rm my-new-app-container'
            }
        }
    }
}

