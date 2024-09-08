package Java;

import java.util.Scanner;

public class example{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int number = scanner.nextInt();
        System.out.println("number: " + number);

        int array1[] = {};
        for(int i=0; i<number;i++){
            array1[i] = scanner.nextInt();
        }

        scanner.close();
    }
}