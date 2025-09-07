pipeline {
    agent any

    environment {
        // Jenkins me ek Secret Text credentials banana hai
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/muhammad16952n-bot/luxe-couture-craft.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                echo 'Deploying to Vercel...'
                bat "npx vercel --prod --token=%VERCEL_TOKEN%"
            }
        }
    }
}
