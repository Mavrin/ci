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
        	npm test || touch fail
		'''
        junit 'test-results.xml'
        sh 'node ./check-test-result.js'
      }
    }
    stage('check-file-size') {
      steps {
        sh 'npm run check-file-size  || touch fail'
        junit 'test-results.xml'
        sh 'node ./check-test-result.js'
      }
    }
  }
}
