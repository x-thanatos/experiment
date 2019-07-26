// Outer.java
interface Inner {
    String getName();
}

public class AnonymityInnerClass {

    public Inner getInner(final String name, String city) {
        return new Inner() {
            private String nameStr = name;

            public String getName() {
                return nameStr;
            }
        };
    }

    public static void main(String[] args) {
        AnonymityInnerClass outer = new AnonymityInnerClass();
        Inner inner = outer.getInner("Inner", "NewYork");
        System.out.println(inner.getName());
    }
}
