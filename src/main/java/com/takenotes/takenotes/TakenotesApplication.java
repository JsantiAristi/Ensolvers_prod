package com.takenotes.takenotes;

import com.takenotes.takenotes.models.Categories;
import com.takenotes.takenotes.models.Notes;
import com.takenotes.takenotes.models.NotesCategories;
import com.takenotes.takenotes.models.User;
import com.takenotes.takenotes.repositories.CategoriesRepository;
import com.takenotes.takenotes.repositories.NotesCategoriesRepository;
import com.takenotes.takenotes.repositories.NotesRepository;
import com.takenotes.takenotes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TakenotesApplication {

	public static void main(String[] args) {
		SpringApplication.run(TakenotesApplication.class, args);
	}

	@Autowired
	private PasswordEncoder passwordEncoder;
	@Bean
	public CommandLineRunner initData(
			UserRepository userRepository,
			CategoriesRepository categoriesRepository,
			NotesRepository notesRepository,
			NotesCategoriesRepository notesCategoriesRepository) {
		return (args) -> {
			User user1 = new User("Santiago", "Guarin", "santiago@gmail.com",passwordEncoder.encode("123456"));
			userRepository.save(user1);

			Categories categories1 = new Categories("Hogar", "f79307");
			user1.addCategoria(categories1);
			categoriesRepository.save((categories1));

			Categories categories2 = new Categories("Clase", "3bf707");
			user1.addCategoria(categories2);
			categoriesRepository.save((categories2));

			Notes notes1= new Notes("Programacíon","Santiago es el mejor",true,"d6a0a079");
			user1.addNotes(notes1);
			notesRepository.save(notes1);

			Notes notes2= new Notes("Lavar ropa","Se debe de lavar la ropa con: Detergente, Suavizante, Cloro, Otros componentes",false,"a0a3d679");
			user1.addNotes(notes2);
			notesRepository.save(notes2);

			Notes notes3= new Notes("Jugar Videojuegos","Descargar algunos juegos, y pasarla bien",false,"a0a3d679");
			user1.addNotes(notes3);
			notesRepository.save(notes3);

			NotesCategories notesCategories1 = new NotesCategories ("Clase", "3bf707", true);
			notes1.addNotesCategories(notesCategories1);
			categories2.addNotesCategories(notesCategories1);
			notesCategoriesRepository.save(notesCategories1);

			NotesCategories notesCategories2 = new NotesCategories ("Hogar", "f79307", true);
			notes2.addNotesCategories(notesCategories2);
			categories1.addNotesCategories(notesCategories2);
			notesCategoriesRepository.save(notesCategories2);
		};
	}
}