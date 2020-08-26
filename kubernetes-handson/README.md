# Hands-ON Kubernetes Filkom UB 
This repository will help how to install kubernetes on your local pc/laptop with two nodes (1 master and 1 worker node).

## Requirements
- VirtualBox
- make
- Ansible
- kubectl
- [Rancher Kubernetes Engine](https://github.com/rancher/rke)
- 4GB of Free Memory (Recommended)

## Installation Environment

Use command below to provision the machine, and install Kubernetes on premise with [Rancher Kubernetes Engine](https://github.com/rancher/rke)

```sh
$ make all
```

if you want to only spawn VM with docker installed and configured for kubernetes installation 
```sh
$ make start-vm
```

If you want to only install Kubernetes after you use __start-vm__ 

```sh
$ make start-kubernetes
```

If you want to remove Kubernetes installation after you use __start-kubernetes__ 
```sh
$ make rm-kubernetes
```

If you want to stop the vm

```sh
$ make stop-vm
```

If you want to remove the vm

```sh
$ make rm-vm
```