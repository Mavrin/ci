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
        sh 'npm test'
        junit 'test-results.xml'
      }
    }
    stage('check-file-size') {
      steps {
        sh 'npm run check-file-size'
      }
    }
  }
}