def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger'
]

pipeline {
    agent any

    stages {
        stage('Building') {
            steps {
                dir('/var/lib/jenkins/DL-Workspace/vScrawl/app/dev/') {
                    checkout([$class: 'GitSCM', branches: [[name: '*/bug/VS-103']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins_ssh', url: 'git@bitbucket.org:dictalabs/vscrawl-app.git']]])
                    sh "npm install"
                    sh "npm run build"
                    sh "sudo service nginx restart"
                }
            }
        }
        stage("Testing") {
            steps {
                dir('/var/lib/jenkins/DL-Workspace/vScrawl/app/dev/') {
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/ans-sq/vScrawl-test-automation.git']]])
                    sh "npm install"
                    sh 'rm -rf /var/lib/jenkins/workspace/vScrawl-App-Dev-Test/mochawesome-report'
                    sh "npm run del"
                    sh "node delResults.js"
                    sh "node delMochawesome-report"
                    sh "npm run report"
                }
            }
        }
    }

    post {
        always {
            dir('/var/lib/jenkins/DL-Workspace/vScrawl/app/dev/') {
                sh "npm run mergeRep"
                sh "npm run html"
                sh "zip -r mochawesome-report.zip mochawesome-report"
            }
        }
        success {
            dir('/var/lib/jenkins/DL-Workspace/vScrawl/app/dev/') {
                slackSend channel: '#vscrawl-test',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests were successful.\nThe HTML report is attached as follows:"

            // Upload the file to Slack
            slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report.zip")
            }
        }
        failure {
            dir('/var/lib/jenkins/DL-Workspace/vScrawl/app/dev/') {
                slackSend channel: '#vscrawl-test',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} ${env.BUILD_NUMBER}\nThe tests failed.\nThe HTML report is attached as follows:"

            // Upload the files to Slack
            slackUploadFile(channel: '#vscrawl-test', filePath: "mochawesome-report.zip")
            slackUploadFile(channel: '#vscrawl-test', filePath: "cypress\\screenshots\\Multiple-signer-pdf-signing.cy.js\\Multiple signer pdf signing -- signs a pdf using multiple signers (failed).png")
            slackUploadFile(channel: '#vscrawl-test', filePath: "cypress\\screenshots\\Single-signer-pdf-signing.cy.js\\Single signer pdf signing -- Signs a pdfs using a single signer (failed).png")
            }
        }
    }
}
