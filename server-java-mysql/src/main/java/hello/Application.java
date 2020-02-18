package hello;

//import all necessary tools
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
            // launch the application
        SpringApplication.run(Application.class, args);
    }
}