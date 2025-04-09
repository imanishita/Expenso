# Start with a Maven image to build the app
FROM maven:3.9.3-eclipse-temurin-17 AS builder

# Set working directory inside the container
WORKDIR /app

# First copy only the POM file to leverage Docker cache
COPY pom.xml .

# Download dependencies (this layer will be cached unless POM changes)
RUN mvn dependency:go-offline

# Copy the rest of the source files
COPY src ./src

# Build the application using Maven
RUN mvn clean package -DskipTests

# Use a lightweight JRE image for the final container (smaller than JDK)
FROM eclipse-temurin:17-jre-alpine

# Set working directory inside the runtime container
WORKDIR /app

# Copy the jar from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Add a non-root user for security
RUN addgroup -S spring && adduser -S spring -G spring
USER spring

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Use optimized JVM settings for containers
ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]