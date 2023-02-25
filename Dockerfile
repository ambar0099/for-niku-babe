RUN apk add --update nodejs npm curl

RUN mkdir /app
WORKDIR /app
COPY . .
Run npm i --no-progress

#Start application
ENTRYPOINT ["npm", "run", "start-app"]