pipeline {
    agent any
    
    environment {
        DEPLOY_PATH = '/var/www/lataie'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh """
                    rm -rf ${DEPLOY_PATH}/*
                    cp -a build/* ${DEPLOY_PATH}/
                """
            }
        }
    }
    
    post {
        success {
            echo 'Deploy completed successfully!'
        }
        failure {
            echo 'Deploy failed!'
        }
    }
}