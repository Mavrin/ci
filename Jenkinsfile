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
        	npm test || TEST_RESULTS=$?
		'''
        junit 'test-results.xml'
        sh 'exit $TEST_RESULTS'
      }
    }
    stage('check-file-size') {
      steps {
        sh 'npm run check-file-size'
      }
    }
  }
}
