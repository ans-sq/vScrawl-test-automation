
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
            }
        }
    }
    post{
        always{

            bat "npm run mergeRep"
            bat "npm run html"

            const errorMessages = [];

            data.results.forEach((suite) => {
            suite.suites.forEach((testSuite) => {
                testSuite.tests.forEach((test) => {
                if (test.state === 'failed' && test.err && test.err.message) {
                    errorMessages.push(test.err.message);
                }
                });
            });
            });
            def message = ''
            errorMessages.eachWithIndex { errorMessage, index ->
                message += "Error ${index + 1}: ${errorMessage}\n"
            }
    
        }
        success{
             slackSend channel: '#vscrawl-test',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests were successful."

            // Upload the file to Slack
            slackUploadFile(channel: '#vscrawl-test', filePath: 'mochawesome-report\\Report-Result.html')
        }
        failure{
             slackSend channel: '#vscrawl-test',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests failed.\n${message}"

            // Upload the file to Slack
            slackUploadFile(channel: '#vscrawl-test', filePath: 'mochawesome-report\\Report-Result.html')
        }
    }
}