package fr.m2i.todolist;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
import java.util.Scanner;

//Classe principale de l'application
public class TodoListApp {

	private static Deque<Todo> todos = new ArrayDeque<Todo>();
	private static Scanner scanner = new Scanner(System.in);

	// Méthode pour afficher le menu
	private static void afficherMenu() {
		System.out.println("------------------------");
		System.out.println("1) Ajouter un todo");
		System.out.println("2) Voir les todos");
		System.out.println("3) Retirer et afficher un todo par index");
		System.out.println("4) Retirer et afficher le dernier todo");
		System.out.println("5) Quitter");
		System.out.println("------------------------");
	}

	// Méthode pour ajouter un nouveau todo à la liste
	private static void ajouterTodo() {

		System.out.print("Entrez la priorité (HAUTE, NORMALE, ou FAIBLE) : ");
		String input = scanner.nextLine().toUpperCase();
		try {
			Urgence urgence = Urgence.valueOf(input);
			System.out.print("Entrez le titre : ");
			String titre = scanner.nextLine();
			System.out.print("Entrez la description : ");
			String description = scanner.nextLine();
			todos.add(new Todo(urgence, titre, description));
			System.out.println("Todo ajouté !");

		} 	catch (IllegalArgumentException e) {
			System.out.println("Priorité invalide. Veuillez réessayer.");			
		}
	}

	// Méthode pour afficher tous les todos de la liste
	private static void voirTodo() {
		System.out.println("------------------------");
		Iterator<Todo> iterator = todos.iterator(); // créer un itérateur pour parcourir la Deque 'todos'	
		int index = 1; // indexation de todos 
		while (iterator.hasNext()) {
			Todo todo = iterator.next();
			System.out.println(index + ") " + todo.toString());
			index++;
			//System.out.println("------------------------");
		}
	}

	// Méthode pour retirer et afficher un todo par index
	private static void retirerParIndex() {
		System.out.print("Entrez l'index du todo à retirer : ");
		int index = Integer.parseInt(scanner.nextLine());
		Todo todoSupprime = null;
		int i = 1; 
		for (Todo todo : todos) {
			if (i == index) {
				todoSupprime = todo;
				break;
			}
			i++;
		}
		if (todoSupprime != null) {
			todos.remove(todoSupprime);
			System.out.println("Todo retiré : " + todoSupprime.toString());
		} else {
			System.out.println("Index invalide. Veuillez réessayer.");
		}
	}

	// Méthode pour retirer et afficher le dernier todo de la liste
	private static void retirerAfficherDernierTodo() {
		Todo todoSupprime = todos.pollLast();
		if (todoSupprime != null) {
			System.out.println("Dernier todo retiré : " + todoSupprime.toString());
		} else {
			System.out.println("La liste de todo est vide.");
		}
	}

	// Méthode principale de l'application
	public static void main(String[] args) {

		while (true) {

			afficherMenu();
			System.out.print("Choisissez une option : ");

			// int choix = Integer.parseInt(scanner.nextLine());
			String choix = scanner.nextLine();

			switch (choix) {

			case "1":
				ajouterTodo();
				break;

			case "2":
				voirTodo();
				break;

			case "3":
				retirerParIndex();
				break;

			case "4":
				retirerAfficherDernierTodo();
				break;

			case "5":

				System.out.println("À bientôt !");
				return;

			default:
				System.out.println("Option invalide. Veuillez réessayer.");
				break;
			}
		}
	}
}
