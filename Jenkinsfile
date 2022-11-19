pipeline {
    agent {
        docker {
            image 'node:18.12.1'
            args '-u root -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker'
            reuseNode true
        }
    }
    stages {
        stage('Install') {
          steps {
                sh 'npm install'
                sh 'npm install -g @angular/cli@14.2.7'
            }
        }
        stage('Build') {
          steps { sh 'npm run-script build' }
        }
        stage('Build Docker image') {
	          agent none
            environment {
                DOCKER_HUB = credentials('docker-hub')
            }
            steps {
                script {
                    echo "Before docker build"
                    sh 'docker build -t ${WEBAPP_IMAGE_REGISTRY} . '
                    echo "Image built"
                    sh 'docker login -u ${DOCKER_HUB_USR} -p ${DOCKER_HUB_PSW} '
                    echo "Login into docker done"
                    sh 'docker push ${WEBAPP_IMAGE_REGISTRY}'
                    echo "Image pushed"
                }
            }
        }
    }
}
