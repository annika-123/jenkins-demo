pipeline {
    agent any
    
    stages {
        
        stage('Checkout') {
            steps {
               git branch: 'main', url: 'https://github.com/annika-123/jenkins-demo.git'
            }
        }
        
        stage('List Files') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Run Script') {
            steps {
                sh '''
                chmod +x app.sh
                ./app.sh
                '''
            }
        }
    }
}
