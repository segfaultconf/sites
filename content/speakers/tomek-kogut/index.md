---
speakername: "Tomek Kogut"
presentationtitle: "Życie po batchu. Streaming i jego oblicza"
resources:
  - src: "tomek_kogut.jpg"
    name: "photo"
bio: |
  Swoje doświadczenie programistyczne zdobywałem od tworzenia niskopoziomowych modułów kernela w C/C++ przez systemy telekomunikacyjne napisane w Javie EE po ETL big datowe. Obecnie moim ulubionym językiem programowania od 2011 jest Scala. Lubię i cenię podejście funkcyjne do programowania staram się jednak ciągle mieć oko na wydajność tworzonych rozwiązań. W codziennej pracy w roli Senior Software Engineer w dziale badawczym firmy Adform, próbuję zbudować wraz ze swoim zespołem jak najlepszą platformę do wdrażania algorytmów uczenia maszynowego.
abstract: |
  Powszechne jest, że każda firma, która operuje danymi w dużej lub mniejszej skali stara się je przetworzyć przy użyciu open source’owych narzędzi takich jak Hadoop czy Spark. Setki procesów batchowych często zwanych w skrócie ETL-ami są uruchamiane w organizacjach, żeby poprzez łącznie i transformowanie danych powstała nowa wartość biznesowa, które ostatecznie ma przełożyć się na zyski. W tej prezentacji chciałbym przedstawić inne podejście do przetwarzania danych – streaming. Okazuje się ono być nadzbiorem (właściwym!) modelu przetwarzania batchowego, który potrafi to samo oraz więcej. Porozmawiamy jakie implikacje ma przejście do przetwarzania zbiorów danych, które są nieograniczone w swoim rozmiarze oraz dlaczego czas staje się kluczowym elementem układanki. Przedstawię również teorię, która stoi za przetwarzaniem strumieniowym – windows, watermarks, triggers, accumulations, będącą podstawą silników takich jak Spark, Flink czy Gearpump.

  UWAGA:
  Prezentacja nie przedstawia budowy i sposobu funkcjonowania Java 8 streams, Rx Streams, AKKA Streams ani innych frameworków służących do przetwarzania danych na pojedynczym węźle. Pomimo (niefortunnej) zbieżności nazw, są to różne rzeczy od tych przedstawionych w prezentacji.
---
