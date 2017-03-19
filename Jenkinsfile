pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
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
        sh '''
        	set -e
			npm test
			$RESULT=$?
		'''
        junit 'test-results.xml'
        sh 'exit $RESULT'
      }
    }
    stage('check-file-size') {
      steps {
        sh 'npm run check-file-size'
      }
    }
  }
}
