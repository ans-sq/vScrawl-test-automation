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
         stage('Publish HTML Report') {
            steps {
                // Run your tests and generate HTML report

                // Assuming you have generated an HTML report file named "report.html" in the build directory
                bat "npm run mergeRep"
                bat "npm run html"

                // Publish the HTML report
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'build',
                    reportFiles: 'Report-Result.html',
                    reportName: 'My HTML Report'
                ])
            }
        }
    }
}