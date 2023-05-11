FROM openjdk:11
ADD target/fashionpal-0.0.1-SNAPSHOT.jar ./
EXPOSE 8087
ENTRYPOINT ["java","-jar","fashionpal-0.0.1-SNAPSHOT.jar"]