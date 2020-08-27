#!/bin/bash

for i in {1..3}
do 
 docker-machine --native-ssh create --virtualbox-memory "768" --virtualbox-disk-size "15000" docker-machine-$i
done
