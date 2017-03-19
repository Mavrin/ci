pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('lint') {
			steps {
				sh 'npm run lint'
			}
        }
        stage('test') {
			steps {
				sh 'npm test'
			}
		}
		stage('check-file-size') {
			steps {
				sh 'npm run check-file-size'
			}
		}
    }
}
