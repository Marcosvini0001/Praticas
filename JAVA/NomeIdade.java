package JAVA;

import java.util.Scanner;

public class NomeIdade{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String nome = sc.next();

        System.out.println("Digite sua Idade: ");
        int idade = sc.nextInt();

        System.out.println("Seu nome é " + nome + " e tem " + idade + " anos.");
    }
}