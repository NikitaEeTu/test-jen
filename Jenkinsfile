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
    }
}
