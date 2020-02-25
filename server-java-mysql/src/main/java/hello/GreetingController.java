package hello;

// import all necessary tools
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// this class is a controller
@RestController
public class GreetingController {

    // the template for the greeting string
    private static final String template = "Welcome, %s!";

    // the counter used for IDs
    private final AtomicLong counter = new AtomicLong();

    // respond to requests made to "http://localhost:8080/greeting"
    @RequestMapping("/greeting")

    // public constructor. The name to be passed in is optional and will default to "User" if not specified
    public Greeting greeting(@RequestParam(value="name", defaultValue="User") String name) {

        // increment a Greeting object with a new ID and the greeting string template
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
}