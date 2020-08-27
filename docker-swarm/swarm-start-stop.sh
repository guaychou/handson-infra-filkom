for i in $(docker-machine ls | sed '1d' | awk {' print $1 '})
do 
  docker-machine $1 $i
done