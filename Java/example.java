package Java;

import java.util.Scanner;

public class example{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int number = scanner.nextInt();
        System.out.println("number: " + number);
        scanner.close();
    }
}