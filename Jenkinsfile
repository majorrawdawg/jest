pipeline {
    agent any

    tools {
        maven 'maven3'  // Name of the Maven installation defined in Global Tool Configuration
        jdk 'jdk17'  // Name of the JDK installation defined in Global Tool Configuration
    }
environment {
        SONARQUBE_URL = 'http://localhost:9000' // Replace with your actual SonarQube server URL if different
        SONARQUBE_TOKEN = credentials('sonar-api-key') // Use the correct credentials ID for SonarQube token
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
               script { 
                 withSonarQubeEnv(installationName: 'SonarQubeServer', credentialsId: 'sonar-api-key') {
                    sh 'mvn sonar:sonar -Dsonar.login=$SONARQUBE_TOKEN -Dsonar.host.url=$SONARQUBE_URL'
                }
               }
            }
        }
        stage('Quality Gate Status'){
            steps{
                script{
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonar-api-key'
                }
            }
        }
    }
}