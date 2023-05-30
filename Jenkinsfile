pipeline{

    agent any

    stages{
        stage('Checkout'){
           steps{
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/ans-sq/vScrawl-test-automation.git']])
           }
        }
        stage('Building'){
            steps{
                bat "npm install"
            }
        }
        stage("Testing"){
            steps{
                bat "npm run del"
                bat "npm run report"
                bat "npm run mergeRep"
                bat "npm run html"
            }
        }
    }
}