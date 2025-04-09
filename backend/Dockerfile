# Start with a Maven image to build the app
FROM maven:3.9.3-eclipse-temurin-17 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy everything to the container
COPY . .

# Build the application using Maven
RUN mvn clean package -DskipTests

# Use a lightweight JDK image for the final container
FROM eclipse-temurin:17-jdk-alpine

# Set working directory inside the runtime container
WORKDIR /app

# Copy the jar from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
