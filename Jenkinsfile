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
stage('E2E Tests - Playwright') {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.57.0-noble'
            args '-u root --ipc=host'
        }
    }
    steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
        sh 'npm run test:e2e'
    }
    post {
        success {
            echo "🎯 Playwright Tests Passed!"
        }
        failure {
            echo "❌ Playwright Tests Failed!"
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
