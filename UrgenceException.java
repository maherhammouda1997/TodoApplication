package fr.m2i.todolist;

public class UrgenceException extends Exception {
    public UrgenceException() {
        super("La priorité n'est pas valide. Veuillez réessayer.");
    }
}
