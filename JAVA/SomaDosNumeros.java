package JAVA;
import java.util.Scanner;

public class SomaDosNumeros {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Solicita dois números ao usuário
        System.out.print("Digite o primeiro número: ");
        int num1 = sc.nextInt();
        
        System.out.print("Digite o segundo número: ");
        int num2 = sc.nextInt();
        
        // Identifica o menor e o maior número
        int menor = Math.min(num1, num2);
        int maior = Math.max(num1, num2);
        
        int soma = 0;

        // Soma todos os números entre eles, inclusive os próprios
        for (int i = menor; i <= maior; i++) {
            soma += i;
        }
        
        // Exibe o resultado da soma
        System.out.println("A soma de todos os números entre " + num1 + " e " + num2 + " é: " + soma);
    }
}
