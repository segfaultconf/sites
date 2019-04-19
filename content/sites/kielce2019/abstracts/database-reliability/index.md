---
type: abstract
speakername: "Maciej Lasyk"
presentationtitle: "8ms latency w 99tym percentylu dla zapisu - czy to szybko? Czyli jak ważne jest \"SRE implements devops\""
---
Mija 10 lat odkąd devops zagościł na stałe na listach buzzwordów konferencyjnych i 11 lat odkąd Cassandra została upubliczniona przez Facebooka. Co się zmieniło w naszym pojmowaniu  niezawodności baz danych w tym czasie?

Chciałbym wam opowiedzieć historię firmy realizującej podejście #noops, która zdecydowała się zarządzać własnymi clustrami Cassandry rozproszonymi po całym świecie i obsługującymi produkty o bardzo dużym ruchu a wymagającymi bardzo niskich czasów odpowiedzi. Kluczem do zrozumienia tej historii będzie teza, że niezawodność produktu to jego najważniejsza cecha.

Czy wiesz, że (pisownia oryginalna) "targeting specific level of reliability is the key to establish balance between high reliability and providing new features to drive user acquisition and revenue growth?" Czy to zdanie brzmi jak bullshit bingo? Super -w trakcie prezentacji wyjaśnię w detalach jak wyglądała nasza podróż do zrozumienia "wystarczająco niezawodne" w odniesieniu do utrzymania klastrów Cassandry. Postaram się wam wyjaśnić podstawy SRE (Site Reliability Engineering aka Inżynieria Niezawodności Serwisów), jak rozmawiać z biznesem wprowadzając pojęcie CRE (Customer Reliability Engineering aka Inżynieria Niezawodności Klienckiej - CZO XD) a wszystko to po to abyście finalnie mogli powiedzieć "ok, skończyliśmy, nasza baza danych jest wystarczająco niezawodna, możemy zająć się czymś innym".

Dlaczego wybrałem Cassandrę jako kluczowy przykład w tej prezentacji? Ponieważ jej niezawodność jest podstępna - jest to rozproszona baza danych bez jednego, centralnego  źródła prawdy, z konfigurowalną konsystencją, która może być silna lub "na dwoje babka wróżyła". A po wielu latach pracy z RDBMSami (MySQL/Maria/PgSQL/Oracle) mogę spokojnie powiedzieć, że Cassandra to operacyjne bagno, które jednak może zostać opanowane przy użyciu prostych technik SRE i klasycznych metod inżynierii oprogramowania.
