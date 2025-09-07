pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/muhammad16952n-bot/luxe-couture-craft.git'
      }
    }
    stage('Deploy to Vercel') {
      steps {
        sh 'npx vercel --prod'
      }
    }
  }
}
