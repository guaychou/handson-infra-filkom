all: start-vm start-kubernetes
start-vm:
	@echo "Generating key for vagrant . . . "
	@if [ -f ${HOME}/.ssh/vagrant_rsa ]; then\
		echo "Key already exist, skipping . . . ";\
	else\
		echo "y\n\n" | ssh-keygen -f ${HOME}/.ssh/vagrant_rsa -t rsa -N '';\
		echo "Key Generated . . . ";\
	fi
	@echo "Bootstrapping VM . . . "
	@vagrant up
start-kubernetes:
	@echo "Installing Kubernetes in your VM . . . "
	@rke up
	@echo "Generating secret for metallb deployments . . . "
	@KUBECONFIG=${PWD}/kube_config_cluster.yml kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

rm-kubernetes:
	@echo "Removing Kubernetes in your VM. . . ."
	@rke remove
	@ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory master.yml --tags "clean"

stop-vm:
	@echo "Stopping VM . . . "
	@vagrant halt

rm-vm:
	@echo "Removing Kubernetes Cluster . . ."
	@rm -rf cluster.rkestate kube_config_cluster.yml
	@echo "Destroying VM . . ."
	@vagrant destroy
	@rm -rf .vagrant

reload-vm:
	@echo "Restarting your VM . . . "
	@vagrant reload	
	@echo "Done . . ."