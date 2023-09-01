pipeline {
    environment{
                DOCKERHUB_REGISTRY = "amulya365/fashionpal"
    }
    agent any

    stages {
        stage('Git Build') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'master', url: 'https://github.com/AmulyaDebo/Fashion_Pal.git'
            }

        }
 
        
	stage ('Running React Tests (Jest)') {
				steps {
					sh '''
							cd frontend
							cd src
							cd components
							npm ci
							npx jest
					'''
				}
			}

			
			stage ('Running backend supertest tests') {
				steps {
					sh '''
							cd backend
						
							npm ci
							npm install morgan
							npm install winston
						
                            npx jest
						
					'''
				}
			}
			
			stage('Build Fashionpal Backend Docker Image') {
				steps {
			    sh "docker build -t $DOCKERHUB_REGISTRY-backend:latest backend/"
			  }   
			}

			stage('Build Fashionpal Frontend Docker Image') {
				steps {
					sh "docker build -t $DOCKERHUB_REGISTRY-frontend:latest frontend/"
				}   
			}
			
		
			stage('Login to Docker Hub') {
				steps {
                script{
                    docker.withRegistry('','dockerhub'){
                   
                    }
                }
            }

			}
			
			stage('Push Backend Docker Image to Docker Hub') {
			  steps {
			    sh "docker push $DOCKERHUB_REGISTRY-backend:latest"
			  }
			}

			stage('Push Frontend Docker Image to Docker Hub') {
				steps {
					sh "docker push $DOCKERHUB_REGISTRY-frontend:latest"
				}
			}
			 stage('Ansible deploy') {
            steps {
              ansiblePlaybook becomeUser: null, colorized: true, disableHostKeyChecking: true, installation: 'Ansible', inventory: 'inventory', playbook: 'ansible-playbook.yml', sudoUser: null
            }

        }
		
		
}


}
