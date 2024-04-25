pipeline {
    agent any
    tools {node.js "Node"}
    
    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ElizabethTV/CI-CD-API'
            }
        }
        
        stage('Instalar Dependencias') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Desplegar') {
            steps {
                bat 'node src/index.js'
            }
        }
    }
}