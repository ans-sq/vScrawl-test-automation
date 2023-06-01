
def COLOR_MAP = [
    'SUCCESS' : 'good',
    'FAILURE' : 'danger'
]

pipeline{

    agent any

    stages{
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

        }
        success{
             slackSend channel: '#vscrawl-test',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests were successful.\nFIle path for report : ${env.WORKSPACE}\\mochawesome-report\\Report-Result.html"

            // Upload the file to Slack
            slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report\\Report-Result.html")
        }
        failure{
             slackSend channel: '#vscrawl-test',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests failed.\nFIle path for report : ${env.WORKSPACE}\\mochawesome-report\\Report-Result.html"

            // Upload the file to Slack
            slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report\\Report-Result.html")
        }
    }
}