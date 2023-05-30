
def COLOR_MAP = [
    'SUCCESS' : 'good',
    'FAILURE' : 'danger'
]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline{

    agent any

    stages{
        // stage('Checkout'){
        //    steps{
        //         checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/ans-sq/vScrawl-test-automation.git']])
        //    }
        // }
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
    post{
        always{
                // script{
                //     BUILD_USER = getBuildUser()
                // }

                slackSend channel: '#vscrawl-test',
                           color: COLOR_MAP[currentBuild.currentResult],
                           message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER} by ${BUILD_USER}",
                           file: 'mochawesome-report\\Report-Result.html'
        
        }
    }
}