pipeline{

    agent any

    options{
        ansiColor("xterm")
    }
    stages{
        stage('Building'){
            echo "building the application "
        }
        stage("Testing"){
            steps{
                bat "npn i"
                bat "npm run del"
                bat "npm run report"
                bat "npm run mergeRep"
                bat "npm run html"
            }
        }
        stage('Deploying'){
            echo : "deploying the applicaiton"
        }
    }
}