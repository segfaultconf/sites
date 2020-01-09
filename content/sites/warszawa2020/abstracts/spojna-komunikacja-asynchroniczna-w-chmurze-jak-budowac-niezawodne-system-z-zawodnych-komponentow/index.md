---
type: abstract
speakername: 
    - "Szymon Pobiega"
    - "Tomasz Masternak"
presentationtitle: "Spójna komunikacja asynchroniczna w Chmurze. Jak budować niezawodne system z zawodnych komponentów."
---
Budowa systemów rozproszonych, które gwarantują spójność danych nie jest rzeczą łatwą. Wyzwanie staje się jeszcze większe, kiedy nie możemy bazować na stabilnych fundamentach, jakie dają transakcje rozproszone lub chociażby dobrze znane z baz danych transakcje obejmujące wiele rekordów.

Niestety w Chmurze często takie fundamenty są albo niedostępne, albo zbyt drogie albo się nie skalują. Zamiast tego musimy nauczyć się budować niezawodne systemy korzystając z tego, co oferuje nam Chmura -- tanich, ale zawodnych komponentów.

A w szczegółach:

Warsztaty skupiają się na budowie rozproszonych systemów line-of-business przeznaczonych do hostowania w Chmurze z wykorzystaniem jak największej ilości natywnych usług. W tego typu systemach zwykle nie możemy sobie pozwolić na utratę wiadomości (nikt by nie chciał, żeby jego zamówienie na świąteczne prezenty przepadło bez wieści). Nie chcielibyśmy także, aby wiadomości gdzieś pod drodze uległy duplikacji (kochanie, co robi to drugie Porsche przed garażem?). W zamierzchłej przeszłości tego typu systemy wykorzystywały transakcje rozproszone (XA lub DTC) oraz relacyjne bazy danych. Dzięki transakcjom rozproszonym mogliśmy być pewni, że albo wiadomość zostanie wysłana jednocześnie z modyfikacją rekordu.

Niestety w Chmurze często takie fundamenty są albo niedostępne, albo zbyt drogie albo się nie skalują. Podczas warsztatów pokażemy jak, bez użycia XA lub DTC, zapewnić te same (a nawet silniejsze!) gwarancje.

Warsztaty składają się z odrobiny teorii przeplatanej prostymi ćwiczeniami praktycznymi w C#. Ćwiczenia skupiają się na rozwiązywaniu problemów, a nie na składni języka, więc programiści używający na co dzień innych języków nie powinni być zagubieni. Każde ćwiczenie zaprojektowane jest tak, aby pokazać jeden z aspektów deduplikowania wiadomości. Każde rozwiązanie przybliży nas o jeden krok do ideału.
