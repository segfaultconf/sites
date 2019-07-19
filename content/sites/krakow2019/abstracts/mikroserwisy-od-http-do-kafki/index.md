---
type: abstract
speakername: "Wojciech Rząsa"
presentationtitle: "Mikroserwisy -- od HTTP do Kafki"
---
Komunikacja w mikroserwisach -- jak powinna być zrealizowana? Oczywiście komunikacja oparta na HTTP jest łatwiejsza do poprawnej implementacji i zapewne także do zaprojektowania. Zwłaszcza, że wielu deweloperów i architektów ma sporo doświadczenia z takim podejściem. Z drugiej strony podejście asynchroniczne, oparte na wiadomościach przesyłanych za pomocą kolejek ma wiele zalet. Pozwala tworzyć rozwiązania odporne na awarie, które nawet w przypadku wystąpienia usterek czy przeciążeń nadal mogą dostarczać usługi użytkownikom.

Większość komunikacji jaką w FLYR Inc. zrealizowaliśmy w naszym produkcie jest synchroniczna, oparta na HTTP. Na pewnym etapie rozwoju systemu okazało się jednak, że do zrealizowania wymaganej funkcjonalności potrzebujemy czegoś bardziej elastycznego i... asynchronicznego. Jakie decyzje podjęliśmy? Co zrobiliśmy, żeby te decyzje nie były ostateczne, żebyśmy mogli zmienić te, które w przyszłości okażą się błędne? Jak zapewniliśmy, że deweloperzy będą poprawnie wykorzystywać message brokera, właściwie używać jego sterowników, a każdy serwis będzie miał wiarygodny healthcheck dla Kubernetes? Na te pytania postaram się odpowiedzieć opowiadając swoją historię.

Nie mam dla Was jedynie słusznych rozwiązań i rad, które zawsze się sprawdzą. Ale mogę podzielić się tym czego się nauczyliśmy, opowiedzieć jakie problemy (nie tylko techniczne) udało nam się rozwiązać, a jakie jeszcze widzimy przed sobą. Jeśli zechcecie posłuchać.
