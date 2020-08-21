# Hands-ON Kubernetes Filkom UB 
This repository will help how to install kubernetes on your local pc/laptop with two nodes (1 master and 1 worker node).

## Requirements
- VirtualBox
- make
- Ansible
- [Rancher Kubernetes Engine](https://github.com/rancher/rke)
- 6GB of Free Memory (Recommended)

## Installation Environment

If you are using 1 pc/laptop, use command below

```sh
$ make all
```

else, if you are using multiple pc/laptop, create virtual machine, install docker. After that provision the kubernetes installation with [Rancher Kubernetes Engine](https://github.com/rancher/rke)
