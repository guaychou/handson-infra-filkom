#!/bin/bash

set -e
eval $(docker-machine env docker-machine-1)
MANAJER_IP=$(docker-machine ip docker-machine-1)
TOKEN=$(docker swarm init --advertise-addr $MANAJER_IP| grep -- '--token' | awk {' print $5 '})
for i in $(docker-machine ls | sed '1d;2d' | awk {' print $1 '})
do 
  echo "Setting up $i . . . " 
  eval $(docker-machine env $i)
  docker swarm join --token $TOKEN $MANAJER_IP:2377
done

eval $(docker-machine env docker-machine-1)
for i in $(docker-machine ls | sed '1d;2d' | awk {' print $1 '})
do 
  docker node promote $i
done