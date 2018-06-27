---
type: abstract
speakername: "Maciej Rząsa"
presentationtitle: "Nie ma nic prostszego niż napisanie wolnego regexpa"
resources:
  - src: "maciej_rzasa.png"
    name: "photo"
---
Chociaż prawie każdy używa wyrażeń regularnych, mało kto zastanawia się nad ich wydajnością. Tymczasem źle napisany regexp (zarówno po stronie serwera jak i w przeglądarce) może skutecznie spowolnić działanie aplikacji. Jak więc napisać wyrażenie regularne, które nie tylko znajduje to, co trzeba, ale robi to szybko?

Aby odpowiedzieć na to pytanie wyjaśnię w jaki sposób działają wyrażenia regularne. Wychodząc od tego pokażę, dlaczego podobne do siebie wyrażenia mogą wykładniczo różnić się wydajnością. Opowiadając o tym jak optymalizować wyrażenia regularne wykorzystam przykłady związane z wyszukiwaniem, walidacją formularzy i parsowaniem tekstu. Opowiem też, czego nauczyłem się przy pozornie prostym zadaniu, jakim jest zliczanie liczb w wielojęzycznych tekstach.

Jak wydajnie sprawdzić poprawność wejściowego tekstu? Czego unikać przy przeszukiwaniu dużych plików? Dlaczego warto pisać długie regexpy? Oraz: czy prosty regexp może zatrzymać działanie aplikacji? Na te pytania znajdziecie odpowiedź w prezentacji.
