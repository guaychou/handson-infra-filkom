all: vagrant kubernetes
vagrant:
	@echo "Bootstrapping VM . . . "
	@vagrant up

kubernetes:
	@echo "Installing Kubernetes in your VM . . . "
	@rke up

stop:
	@echo "Stopping VM . . . "
	@vagrant halt

delete:
	@echo "Destroying VM . . ."
	@vagrant destroy