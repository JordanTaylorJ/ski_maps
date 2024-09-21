#operating system
FROM ubuntu:jammy 

RUN apt-get update 
RUN apt-get install ruby ruby-dev nodejs rails -y 
RUN gem install bundler 

