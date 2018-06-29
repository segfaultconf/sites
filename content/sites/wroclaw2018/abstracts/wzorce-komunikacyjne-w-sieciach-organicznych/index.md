---
type: abstract
speakername: Zbyszko Papierski
presentationtitle: Wzorce komunikacyjne w sieciach organicznych
---
Porozmawiajmy o rzeczach wszystkim Wam świetnie znanych.

Głodzenie wątków. Długie bloki synchronize. Niestabilne I/O. Problemy w wyborem lidera w klastrze.

To wszystko, to oczywiście problemy komunikacji.
Takiej międzyludzkiej.

Czym innym jest meeting niż blokiem synchronize, rozciągniętym na wątki naszej uwagi? Cały projekt upada, bo jedna osoba wylądowała na L4 – dziwnie podobne do potężnych stron, upadających z powodu jednej niedziałającej usługi!

Komunikacja, ta w realnych życiu, ma dużo wspólnego z komunikacją pomiędzy wątkami/ procesami/maszynami. Obie są trudne – obie też powinny być przemyślane. Co najważniejsze dla nas – są pewnie lekcje, które odnoszą się do obu!

No dobra, ale czemu ja, programista, miałbym się tym przejmować? – zadajesz sobie pytanie. Odpowiedź jest prosta – komunikacja nie jest dziedziną przeznaczoną tylko i wyłącznie Product Managerom czy architektom. Niekończące się spotkania, czy ciągła niemożność dojścia do decyzji – to są rzeczy, które skutecznie wysycają twoje wewnętrzne zasoby i spowalniają cię w podobny sposób, jak niepotrzebna synchronizacja spowalnia twój kod.


Porozmawiamy o tym, w jaki sposób wiedza o współczesnych procesorach może nam pomóc zorganizować efektywne spotkania.
Przekonamy się, co wspólnego mają ze sobą programiści i Java Memory Model.
Nauczymy się, jak zaprojektować nieblokującą komunikację, i to bez używania brzydkich tricków jak Unsafe!

Ostrzeżenie – ludzie będą tutaj porównywani do zasobów.
