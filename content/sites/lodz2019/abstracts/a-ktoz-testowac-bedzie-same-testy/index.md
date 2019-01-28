---
type: abstract
speakername: "Robert Pankowecki"
presentationtitle: "A któż testować będzie same testy?"
---
Zaiste dobrze jest testy pisać i oprogramowanie przed błędami wszelakimi chronić.
Azaliż jednak kto powie nam, jak dobre nasze testy są, który kodzik
przetestowany jest, a co umknęło naszej uwadze.

Podczas pracy nad biblioteką open source Rails Event Store zdecydowaliśmy by
trzymać 100% mutation test coverage przy użyciu narzędzia mutant.
Z tą decyzją żyjemy już 2.5 roku i prawie 3000 commitów, 200 pull requestów
oraz 60 releasów.

W czasie prezentacji opowiem o lessons-learnt z tego wieloletniego doświadczenia.

* jak działa mutation coverage na przykładzie mutanta, co wymusza a co przepuszcza
* jak wolne to jest ;)
* czy można naprawdę utrzymać 100%
* najciekawsze przypadki kodu, który dał nam w kość by przekonać narzędzie,
że jest OK (threading, locking, performance) i samemu zastanowić się
czy to coś jest testowalne a jeśli tak, to w jaki sposób
* jaki wpływ na community biblioteki ma takie wymaganie

Myślę, że prezentacja będzie bardzo ciekawa, bo nie znam żadnej
biblioteki/organizacji, która tak rygorystycznie podchodzi do testowania
i nie ma zmiłuj. Pomimo, że sam koncept jest dość prosty do zrozumienia,
to jednak okazuje się, że diabeł tkwi w szczegółach (jak zawsze).

[Quis custodiet ipsos custodes?](https://en.wikipedia.org/wiki/Quis_custodiet_ipsos_custodes%3F)
