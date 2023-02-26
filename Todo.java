package fr.m2i.todolist;

public class Todo {
 
		private Urgence urgence;
		private String titre;
		private String description;
		
		// Constructeur de la classe Todo
		public Todo(Urgence urgence, String titre, String description) throws UrgenceException {
			if (urgence == null) {
				throw new UrgenceException();
			}
		   this.urgence = urgence;
		   this.titre = titre;
		   this.description = description;
		}	
		// Getters 
		public Urgence getUrgence() {
		   return urgence;
		}
		
		public String gettitre() {
		   return titre;
		}
		
		public String getDescription() {
		   return description;
		}
		
		//Setters
		public void setUrgence(Urgence urgence) {			
			this.urgence = urgence;
		}

		public void settitre(String titre) {
			this.titre = titre;
		}

		public void setDescription(String description) {
			this.description = description;
		}
		
		
		// Méthode toString 
		public String toString() {
		   return "[" + urgence + "] " + titre + ": " + description;
		}
}

