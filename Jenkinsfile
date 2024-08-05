pipeline {
    agent any

    tools {
        maven 'maven3'  // Name of the Maven installation defined in Global Tool Configuration
        jdk 'jdk17'  // Name of the JDK installation defined in Global Tool Configuration
    }

    environment {
        SONARQUBE_URL = 'https://your-sonarqube-server-url' // Replace with your actual SonarQube server URL
        SONARQUBE_TOKEN = credentials('sonar-api-token') // Use the ID you saved the token as in Jenkins credentials
    }

    stages {
        stage("Git Checkout") {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/StarGirlOxRaz/jest.git'
            }
        }
        stage("UNIT testing") {
            steps {
                sh 'mvn test'
            }
        }
        stage('Integration testing') {
            steps {
                sh 'mvn verify -DskipUnitTests'
            }
        }
        stage('maven build'){
            steps {
                 sh 'mvn clean install'
            }
        }
        stage('SonarQube analysis'){
            steps {
                withSonarQubeEnv('SonarQube') { // Use the SonarQube server name configured in Jenkins
                    sh 'mvn sonar:sonar -Dsonar.login=$SONARQUBE_TOKEN -Dsonar.host.url=$SONARQUBE_URL'
                }
            }
        }
    }
}
