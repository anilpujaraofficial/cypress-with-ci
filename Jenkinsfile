pipeline {
    agent any
    environment {
        BUILD_IDS = "${env.BUILD_ID}"
        CYPRESS_ENV = 'production' // You can define other environments dynamically if needed
    }

    stages {
        stage("Automation Start") {
            steps {
                sh 'node --version' // Check Node.js version
                sh 'npm i' // Install dependencies
                sh 'npm run cy:verify' // Verify Cypress installation
                sh 'npm run pretest' // Run pre-test tasks (e.g., linting, environment setup)
            }
        }

        stage("Parallel Testing") {
            parallel {
                // Using a loop to generate stages dynamically for CI machines
                script {
                    def machines = ['CI Machine #1', 'CI Machine #2', 'CI Machine #3', 'CI Machine #4', 'CI Machine #5']
                    def parallelStages = [: ]
                    machines.each {
                        machine - >
                            parallelStages["$machine"] = {
                                stage("$machine") {
                                    steps {
                                        sh 'npm run cy:cloud:io' // Run Cypress tests on each CI machine
                                    }
                                }
                            }
                    }
                    // Run the parallel stages
                    parallel parallelStage
                }
            }
        }
    }

    post {
        always {
            // Run post-test tasks such as cleaning up or generating reports
            sh 'npm run posttest' // Post-test steps (e.g., cleanup, notifications)

            // Publish the test results (e.g., HTML report)
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/mochareports/',
                reportFiles: 'report.html',
                reportName: 'HTML Report',
                reportTitles: 'Cypress Test Report'
            ])
        }
    }
}