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
        sh '''
        	#!/bin/bash
        	if [ -f ./fail ]; then
                exit 1
            fi
        '''
      }
    }
    stage('check-file-size') {
      steps {
        sh 'npm run check-file-size'
      }
    }
  }
}
