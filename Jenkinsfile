
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
            //  slackSend channel: '#vscrawl-test',
            //             color: COLOR_MAP[currentBuild.currentResult],
            //             message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests were successful.\nFIle path for report : ${env.WORKSPACE}\\mochawesome-report\\Report-Result.html"

            // // Upload the file to Slack
            // slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report\\Report-Result.html")
             // Set the Slack webhook URL for your custom app
                def webhookUrl = "https://hooks.slack.com/services/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"

                // Define the message and file path
                def message = "Test was a Success"
                def filePath = "mochawesome-report\Report-Result.html"

                // Construct the cURL command to send the message and file to Slack
                def curlCommand = "curl -X POST -H 'Content-type: application/json' --data "
                curlCommand += "'{\"text\": \"$message\", \"attachments\": [{\"fallback\": \"File Upload\", \"color\": \"good\", \"title\": \"File Upload\", \"title_link\": \"\", \"fields\": [], \"actions\": [], \"text\": \"\", \"thumb_url\": \"\", \"thumb_width\": 0, \"thumb_height\": 0}], \"files\": [{\"title\": \"File\", \"initial_comment\": \"File Upload\", \"color\": \"#36a64f\", \"text\": \"\", \"fallback\": \"\", \"thumb_url\": \"\", \"thumb_width\": 0, \"thumb_height\": 0, \"image_url\": \"\", \"audio_url\": \"\", \"video_url\": \"\", \"mime_type\": \"application/octet-stream\", \"filetype\": \"auto\", \"size\": 0, \"filename\": \"$filePath\", \"timestamp\": 0, \"external_id\": \"\", \"url_private\": \"\", \"url_private_download\": \"\", \"thumb_64\": \"\"}]}' "
                curlCommand += "$webhookUrl"

                // Execute the cURL command
                bat(curlCommand)
        }
        failure{
            //  slackSend channel: '#vscrawl-test',
            //             color: COLOR_MAP[currentBuild.currentResult],
            //             message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests failed.\nFIle path for report : ${env.WORKSPACE}\\mochawesome-report\\Report-Result.html"

            // // Upload the file to Slack
            // slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report\\Report-Result.html")
             // Set the Slack webhook URL for your custom app
                def webhookUrl = "https://hooks.slack.com/services/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"

                // Define the message and file path
                def message = "Test was a Failure"
                def filePath = "mochawesome-report\Report-Result.html"

                // Construct the cURL command to send the message and file to Slack
                def curlCommand = "curl -X POST -H 'Content-type: application/json' --data "
                curlCommand += "'{\"text\": \"$message\", \"attachments\": [{\"fallback\": \"File Upload\", \"color\": \"danger\", \"title\": \"File Upload\", \"title_link\": \"\", \"fields\": [], \"actions\": [], \"text\": \"\", \"thumb_url\": \"\", \"thumb_width\": 0, \"thumb_height\": 0}], \"files\": [{\"title\": \"File\", \"initial_comment\": \"File Upload\", \"color\": \"#36a64f\", \"text\": \"\", \"fallback\": \"\", \"thumb_url\": \"\", \"thumb_width\": 0, \"thumb_height\": 0, \"image_url\": \"\", \"audio_url\": \"\", \"video_url\": \"\", \"mime_type\": \"application/octet-stream\", \"filetype\": \"auto\", \"size\": 0, \"filename\": \"$filePath\", \"timestamp\": 0, \"external_id\": \"\", \"url_private\": \"\", \"url_private_download\": \"\", \"thumb_64\": \"\"}]}' "
                curlCommand += "$webhookUrl"

                // Execute the cURL command
                bat(curlCommand)
        }
    }
}