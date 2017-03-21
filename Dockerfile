FROM node:6.3

RUN useradd jenkins --shell /bin/bash --create-home
USER jenkins
