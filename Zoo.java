// Topic: String Concatenation 
// The '+' operator, which we use for adding numbers together, can be used to concatenate Strings
// This allows us to use it to join two Strings together!
// We can even use a primitive datatype as the second variable to concatenate, and Java will 
// intelligently make it a String first:

public class Zoo {
    public static void main(String[] args) {
        int animals = 12;
        String species = "zebra";
        String zooDescription = "Our Zoo has " + animals + " " + species + "s!";
        System.out.println(zooDescription); // print results 'Our zoo has 12 zebras!''
        
    }
}