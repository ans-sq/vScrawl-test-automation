
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

            sh '''
            # Set Slack API endpoint and access token
            SLACK_API_URL="https://hooks.slack.com/services/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"
            SLACK_TOKEN="xoxb-2991932861365-5351893201860-JFVT66S0WX1HmJgPYaRE9LiD"

            # Set channel and message
            CHANNEL="#vscrawl-test"
            MESSAGE="Test message with file attachment and danger level"

            # Set file path
            FILE_PATH="${env.WORKSPACE}/mochawesome-report/Report-Result.html"

            # Set danger level (red color)
            DANGER_LEVEL="{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"*$MESSAGE*\"},\"color\":\"good\"}"

            # Send Slack message with file attachment and danger level
            curl -F file=@"$FILE_PATH" \
                -F channels="$CHANNEL" \
                -F initial_comment="$DANGER_LEVEL" \
                -H "Authorization: Bearer $SLACK_TOKEN" \
                "$SLACK_API_URL"
            '''

        }
        // success{
        //      slackSend channel: '#vscrawl-test',
        //                 color: COLOR_MAP[currentBuild.currentResult],
        //                 message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests were successful."

        //     // Upload the file to Slack
        //     slackUploadFile(channel: '#vscrawl-test', filePath: 'mochawesome-report\\Report-Result.html')
        // }
        // failure{
        //      slackSend channel: '#vscrawl-test',
        //                 color: COLOR_MAP[currentBuild.currentResult],
        //                 message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests failed.\n${message}"

        //     // Upload the file to Slack
        //     slackUploadFile(channel: '#vscrawl-test', filePath: 'mochawesome-report\\Report-Result.html')
        // }
    }
}