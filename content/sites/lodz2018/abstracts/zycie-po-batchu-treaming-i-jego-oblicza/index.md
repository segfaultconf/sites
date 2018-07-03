---
type: abstract
speakername: "Tomek Kogut"
presentationtitle: "Życie po batchu. Streaming i jego oblicza"
---
Wyobraź sobie, że w twojej aplikacji zachodzą jakieś zmiany (domain eventy). Chcielibyśmy te zmiany wystawić na zewnątrz, żebyśmy mogli na ich podstawie robić sobie raporty, read modele, sagi, synchronizować dane. Czy to zadanie okaże się być trudne czy proste, jeśli użyjemy bazy danych SQL. Co zyskaliśmy dzięki temu, że używam RDBMS/SQL a co utraciliśmy, być może, bezpowrotnie. W tej prezentacji opowiem wam jak chciałem zbudować pewną funkcjonalność dla biblioteki Rails Event Store, dlaczego okazało być się to trudniejsze niż myślałem, o modelu MVCC w PostgreSQL, czy jest sposób, żeby go obejść i uzyskać emulację trybu READ UNCOMMITTED. A może możnaby do całego problemu podejśc zupełnie inaczej i podłączyć się pod Write-Ahead-Log (WAL) i wygrać świat w ten sposób? Pokażę też jak moim zdaniem, korzystając z dokładnie tych samych konceptów, które stoją za Event Sourcingiem i bazami danych moglibyśmy budować API, tak bym za każdym razem pisząc integrację z serwisem X nie musiał się zastanawiać czy jego autorzy rozumieją pojęcie idempotent czy nie. Albo jak moglibyśmy osiągnąć prostotę dzięki używaniu Convergent Replicated Data Types (CRDT). Być może jako community stać nas na więcej niż REST nad CRUDem. Zastanowimy się, czy sprzedawcy SQLa zlasowali nam mózgi, sprawili, że zapomnieliśmy o najprostszym sposobie, który może działać i wprowadzili nas w maliny, w których aktualnie się znajdujemy. A może sami jesteśmy sobie winni? TLDR: Czy nasze aplikacje nie mogłyby działać tak jak pod spodem działają bazy danych?
Czy to wszystko musi być takie ciężkie i skomplikowane jeśli chcemy mieć mikro-serwisy, zwłaszcza w małym zespole, który niekoniecznie lubi dostawiać 5 bazę danych do stacku technologicznego.