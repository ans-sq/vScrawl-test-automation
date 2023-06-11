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
                          message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests were successful.\nThe HTML report is attached as follows:"

            // Upload the file to Slack
                slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report\\Report-Result.html")
        }
        failure{
           
                slackSend channel: '#vscrawl-test',
                          color: COLOR_MAP[currentBuild.currentResult],
                          message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests failed.\nThe HTML report is attached as follows:"

            // Upload the file to Slack
                slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report\\Report-Result.html")
                slackUploadFile(channel: '#vscrawl-test', filePath: "cypress\\screenshots\\Multiple-signer-pdf-signing.cy.js\\Multiple signer pdf signing -- signs a pdf using multiple signers (failed).png")
                slackUploadFile(channel: '#vscrawl-test', filePath: "cypress\\screenshots\\Single-signer-pdf-signing.cy.js\\Single signer pdf signing -- Signs a pdfs using a single signer (failed).png")

        }
    }
}
