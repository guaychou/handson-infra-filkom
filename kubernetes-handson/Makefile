all: vagrant kubernetes
vagrant:
	@echo "Bootstrapping VM . . . "
	@vagrant up

kubernetes:
	@echo "Installing Kubernetes in your VM . . . "
	@rke up
	@kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

stop:
	@echo "Stopping VM . . . "
	@vagrant halt

delete:
	@echo "Destroying VM . . ."
	@vagrant destroy