---
type: abstract
speakername: "Tomek Nurkiewicz"
presentationtitle: "Charbusters - 10 mitów o Unicode"
---

* Jeśli wydaje Ci się, że w Javie do zapisu liter najlepiej użyć typu char - zapraszam!
* Jeśli kiedykolwiek użyłeś metody String.length() do policzenia długości stringa i wydaje Ci się, że zwraca ona liczbę znaków - wyprowadzę cię z błędu
* Jeśli nie chcesz, by przez błąd w obsłudze Unicode w twojej aplikacji zginęli ludzie, zapraszam tym bardziej. Tak, nieznajomość Unicode zabija. Dosłownie.

Kodowanie znaków, jak wiele innych zadań w naszej branży, wydaje się proste i przewidywalne. 
Gdy jednak przyjrzeć się dokładnie, poprawny zapis polskich czy chińskich liter wcale nie jest taki oczywisty. 
Podczas tej pozornie banalnej prezentacji pokażę wam, jak trudną domeną jest Unicode. 
Jakie problemy, także z bezpieczeństwem, możemy napotkać. 
Ile pułapek kryje się w specyfikacji oraz jej implementacji w Javie. 
Na przykład czy wiedzieliście, że jeden symbol w UTF-32 może zajmować nawet... 28 bajtów? 
Nie mówiąc już o słowie roku 2015 wg Oxford English Dictionary, czyli... '😂' (tak, emoji, o nich też będzie). 