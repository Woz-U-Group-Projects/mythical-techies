package hello;

// The class below is a Plain Old Java Object (POJO)
public class Greeting {

    // each Greeting has content and an ID
    private final long id;
    private final String content;

    // public constructor
    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
    }

    // getter for ID
    public long getId() {
        return id;
    }

    // getter for content
    public String getContent() {
        return content;
    }
}