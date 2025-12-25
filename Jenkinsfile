pipeline {
    agent {
        docker{ image 'node:18-alpine'}
    }
    
    stages {
        
        stage('Checkout') {
            steps {
               git branch: 'main', url: 'https://github.com/annika-123/jenkins-demo.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
    steps {
        sh 'npm test || exit 1'
    }
    post {
        always {
            junit allowEmptyResults: true, testResults: '**/junit.xml'
        }
    }
}


        stage ('Build'){
            steps{
                sh 'npm run build'
    }
}
        stage('Run app'){
            steps{
                sh 'npm start'
            }
        }
    }
    post{
        success { echo 'Ci pipeline successfull'}
        failure{ echo 'ci pipeline failed'}
    }
}
