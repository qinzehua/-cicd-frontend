#bin/bash
time=$(date "+%Y%m%d%H%M%S")
npm run build
docker build -t 172.16.81.7:8082/frontend-app:$time .
docker push 172.16.81.7:8082/frontend-app:$time
