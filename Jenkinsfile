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
                sh 'node server.js'
            }
        }
stage('Docker build') {
steps {
                sh 'docker build -t "my-new-app" .'
}
}
}
}
