pipeline {
    agent any
    
    environment{
        DOCKER_IMAGE ="hit52/youtube-clone:latest"
        SCANNER_HOME = tool 'SonarScanner'
    }
    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Hitesh322/youtube_clone_reactjs.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube'){
                    sh '''
                       $SCANNER_HOME/bin/sonar-scanner \
                       -Dsonar.projectName=youtube-clone \
                       -Dsonar.projectKey=youtube-clone
                       '''
                    
                }
            }
        }
        
        
        stage('OWASP Dependency Check') {
    steps {
        withCredentials([string(credentialsId: 'NVD_API_KEY', variable: 'NVD_KEY')]) {
            dependencyCheck(
                odcInstallation: 'DependencyCheck',
                additionalArguments: '--scan ./ --nvdApiKey $NVD_KEY --noupdate'
            )
        }
        dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
    }
}

        
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        
        
        stage('Trivy Scan') {
            steps {
                sh 'trivy image --scanners vuln --timeout 30m  $DOCKER_IMAGE > trivy-report.txt'
            }
        }
        
        
        
        
        stage ('Docker Hub Login & Push'){
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS',
                        )
                    ]){
                  sh ''' 
                       echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER"   --password-stdin
                        docker push $DOCKER_IMAGE                      
                      '''
            }
            }
            
        }
        


        
    

        

        stage('Docker run container'){
            steps{
                sh '''
                  docker stop youtube_container || true
                  docker rm youtube_container || true
                  docker run -d -p 3000:3000 --restart always --name youtube_container $DOCKER_IMAGE
                  '''
            }
           }
        
    }
}
