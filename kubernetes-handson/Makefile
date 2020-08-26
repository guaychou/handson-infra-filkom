all: start-vm start-kubernetes
start-vm:
	@echo "Generating key for vagrant . . . "
	@echo "${HOME}/.ssh/vagrant_rsa\n\n" | ssh-keygen
	@echo "Key Generated . . . "
	@echo "Bootstrapping VM . . . "
	@vagrant up

start-kubernetes:
	@echo "Installing Kubernetes in your VM . . . "
	@rke up
	@echo "Configuring your kubectl command line . . . "
	@Export KUBECONFIG=${PWD}/kube_config_cluster.yml
	@kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

rm-kubernetes:
	@echo "Removing Kubernetes in your VM. . . ."
	@rke remove
	@ansible-playbook -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory master.yml --tags "clean"

stop-vm:
	@echo "Stopping VM . . . "
	@vagrant halt

rm-vm:
	@echo "Destroying VM . . ."
	@vagrant destroy