pipeline{
  agent any
  stages{
    stage ('Checkout'){
      steps{
        git 'https://github.com/annika-123/jenkins-demo.git'
      }
    }
    stage("list files"){
      steps{
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
