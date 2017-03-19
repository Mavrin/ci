pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'sudo npm install'
            }
        }
        stage('lint') {
			steps {
				sh 'npm run lint'
			}
        }
        stage('lint') {
			steps {
				sh 'npm test'
			}
		}
		stage('lint') {
			steps {
				sh 'npm run check-file-size'
			}
		}
    }
}
