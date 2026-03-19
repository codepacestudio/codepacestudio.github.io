bazaZadan['kombinatoryka'] = [
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Ile różnych wyników możemy otrzymać w rzucie trzema monetami?',
        rozwiazanie: 'Każda moneta to 2 możliwości (orzeł lub reszka). Zgodnie z regułą mnożenia wymnażamy opcje.<br>\\( 2 \\cdot 2 \\cdot 2 = 8 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Rzucamy raz sześcienną kostką i dwiema monetami. Ile jest wszystkich możliwych wyników tego doświadczenia?',
        rozwiazanie: 'Kostka daje 6 możliwości, każda z monet po 2.<br>Mnożymy: \\( 6 \\cdot 2 \\cdot 2 = 24 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Ile można utworzyć różnych czterocyfrowych kodów PIN?',
        rozwiazanie: 'Na każdym z czterech miejsc możemy wpisać jedną z 10 cyfr (od 0 do 9).<br>\\( 10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10000 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Ile można utworzyć liczb trzycyfrowych o niepowtarzających się cyfrach ze zbioru {1, 2, 3, 4, 5}?',
        rozwiazanie: 'Na pierwsze miejsce wybieramy cyfrę na 5 sposobów. Na drugie zostają 4, na trzecie 3.<br>\\( 5 \\cdot 4 \\cdot 3 = 60 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Ile jest wszystkich naturalnych liczb trzycyfrowych?',
        rozwiazanie: 'Na pierwszym miejscu nie może stać 0, więc mamy 9 opcji. Na drugim i trzecim dowolna z 10 cyfr.<br>\\( 9 \\cdot 10 \\cdot 10 = 900 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Ile jest wszystkich liczb naturalnych trzycyfrowych o różnych cyfrach?',
        rozwiazanie: 'Na pierwsze miejsce dajemy cyfrę na 9 sposobów (bez zera). Na drugie też na 9 (odpada pierwsza, ale wraca zero). Na trzecie zostaje 8 opcji.<br>\\( 9 \\cdot 9 \\cdot 8 = 648 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Na ile sposobów można ustawić 5 osób w kolejce do kasy?',
        rozwiazanie: 'Pierwsze miejsce zajmuje jedna z 5 osób, drugie jedna z 4 pozostałych i tak dalej.<br>\\( 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Ile jest liczb trzycyfrowych parzystych?',
        rozwiazanie: 'Pierwsza cyfra na 9 sposobów (bez zera), druga na 10. Trzecia cyfra musi być parzysta (0, 2, 4, 6, 8), czyli 5 opcji.<br>\\( 9 \\cdot 10 \\cdot 5 = 450 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Wybieramy szefa i jego zastępcę z grupy 10 pracowników. Na ile sposobów można to zrobić?',
        rozwiazanie: 'Szefa wybieramy na 10 sposobów. Zastępcę wybieramy z pozostałych 9 osób.<br>\\( 10 \\cdot 9 = 90 \\)'
    },
    {
        poddzial: 'Reguła mnożenia',
        tresc: 'Masz 4 różne koszule, 3 pary spodni i 2 pary butów. Na ile sposobów możesz się ubrać?',
        rozwiazanie: 'Zwykła reguła mnożenia. Wybierasz po jednym elemencie z każdej grupy.<br>\\( 4 \\cdot 3 \\cdot 2 = 24 \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy dwiema monetami. Oblicz prawdopodobieństwo wyrzucenia orła i reszki.',
        rozwiazanie: 'Wszystkie opcje (Omega) to 4: (O,O), (R,R), (O,R), (R,O). Interesują nas dwa ostatnie zdarzenia.<br>\\( P = \\frac{2}{4} = \\frac{1}{2} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy dwiema kostkami. Oblicz prawdopodobieństwo, że suma oczek wyniesie 8.',
        rozwiazanie: 'Omega to \\( 6 \\cdot 6 = 36 \\). Zdarzenia sprzyjające to: (2,6), (3,5), (4,4), (5,3), (6,2). Jest ich 5.<br>\\( P = \\frac{5}{36} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy raz kostką. Jakie jest prawdopodobieństwo wyrzucenia liczby pierwszej?',
        rozwiazanie: 'Liczby pierwsze na kostce to 2, 3, 5 (jest ich 3). Jedynka nie jest liczbą pierwszą.<br>\\( P = \\frac{3}{6} = \\frac{1}{2} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy trzy razy monetą. Jakie jest prawdopodobieństwo wyrzucenia co najmniej jednego orła?',
        rozwiazanie: 'Najprościej policzyć zdarzenie przeciwne: same reszki (R,R,R). Jest to 1 zdarzenie z 8 możliwych.\\( P(A\') = \\frac{1}{8} \\).<br>\\( P(A) = 1 - \\frac{1}{8} = \\frac{7}{8} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy dwiema kostkami. Oblicz prawdopodobieństwo, że iloczyn oczek wynosi 12.',
        rozwiazanie: 'Omega to 36. Pary dające iloczyn 12 to: (2,6), (6,2), (3,4), (4,3). Są 4 takie pary.<br>\\( P = \\frac{4}{36} = \\frac{1}{9} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy dwiema kostkami. Oblicz prawdopodobieństwo wyrzucenia dubletu (takich samych oczek).',
        rozwiazanie: 'Pary to (1,1), (2,2), (3,3), (4,4), (5,5), (6,6). Jest ich 6.<br>\\( P = \\frac{6}{36} = \\frac{1}{6} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy monetą i kostką. Jakie jest prawdopodobieństwo wylosowania orła i liczby parzystej?',
        rozwiazanie: 'Wszystkich opcji jest \\( 2 \\cdot 6 = 12 \\). Orzeł i liczba parzysta to: (O,2), (O,4), (O,6). Są 3 takie zdarzenia.<br>\\( P = \\frac{3}{12} = \\frac{1}{4} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy raz kostką. Oblicz prawdopodobieństwo wyrzucenia liczby mniejszej od 5.',
        rozwiazanie: 'Oczka mniejsze od 5 to: 1, 2, 3, 4. Jest ich cztery na sześć możliwych.<br>\\( P = \\frac{4}{6} = \\frac{2}{3} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy dwiema kostkami. Oblicz prawdopodobieństwo, że suma oczek będzie mniejsza niż 5.',
        rozwiazanie: 'Szukamy par: (1,1), (1,2), (2,1), (1,3), (3,1), (2,2). Jest ich dokładnie 6.<br>\\( P = \\frac{6}{36} = \\frac{1}{6} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo klasyczne - rzuty',
        tresc: 'Rzucamy trzema monetami. Oblicz prawdopodobieństwo wyrzucenia dokładnie dwóch orłów.',
        rozwiazanie: 'Opcji jest 8. Dwa orły występują w wynikach: (O,O,R), (O,R,O), (R,O,O). Są 3 takie zdarzenia.<br>\\( P = \\frac{3}{8} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'Ze zbioru liczb naturalnych od 1 do 20 losujemy jedną liczbę. Jakie jest prawdopodobieństwo wylosowania liczby podzielnej przez 4?',
        rozwiazanie: 'Liczby podzielne przez 4 w tym przedziale to: 4, 8, 12, 16, 20. Jest ich 5 z 20.<br>\\( P = \\frac{5}{20} = \\frac{1}{4} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'W urnie jest 5 kul białych i 3 czarne. Losujemy jedną. Oblicz prawdopodobieństwo wylosowania kuli białej.',
        rozwiazanie: 'Wszystkich kul jest 8. Kul białych jest 5.<br>\\( P = \\frac{5}{8} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'Prawdopodobieństwo zdarzenia przeciwnego do zdarzenia A wynosi 0.3. Oblicz prawdopodobieństwo zdarzenia A.',
        rozwiazanie: 'Suma prawdopodobieństw zdarzenia i zdarzenia przeciwnego to zawsze 1. Wzór: \\( P(A) = 1 - P(A\') \\).<br>\\( P(A) = 1 - 0.3 = 0.7 \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'W pudełku jest 10 kul zielonych. Ile kul czerwonych trzeba dorzucić, aby prawdopodobieństwo wylosowania kuli czerwonej wynosiło \\( \\frac{1}{3} \\)?',
        rozwiazanie: 'x to liczba kul czerwonych. Wszystkich kul będzie \\( 10 + x \\). Równanie: \\( \\frac{x}{10+x} = \\frac{1}{3} \\).<br>Mnożymy na krzyż: \\( 3x = 10 + x \\Rightarrow 2x = 10 \\Rightarrow x = 5 \\).'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'Ze zbioru liczb {1, 2, ..., 10} losujemy jedną. Jakie jest prawdopodobieństwo wylosowania liczby pierwszej?',
        rozwiazanie: 'Liczby pierwsze w tym zbiorze to 2, 3, 5, 7. Są 4 takie liczby na 10 możliwych.<br>\\( P = \\frac{4}{10} = \\frac{2}{5} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'Wiadomo, że \\( P(A) = 0.4 \\) i \\( P(B) = 0.5 \\), a zdarzenia A i B wykluczają się. Oblicz \\( P(A \\cup B) \\).',
        rozwiazanie: 'Zdarzenia wykluczające się nie mają części wspólnej, czyli prawdopodobieństwo iloczynu to zero. Wzór na sumę upraszcza się.<br>\\( P(A \\cup B) = P(A) + P(B) = 0.4 + 0.5 = 0.9 \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'W klasie liczącej 30 uczniów jest 20 chłopców. Nauczyciel losuje jedną osobę do odpowiedzi. Jakie jest prawdopodobieństwo, że wylosuje dziewczynę?',
        rozwiazanie: 'Skoro jest 20 chłopców, to dziewcząt jest 10. Losujemy jedną z 30 osób.<br>\\( P = \\frac{10}{30} = \\frac{1}{3} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'Rzucamy dwiema kostkami sześciennymi. Oblicz prawdopodobieństwo, że suma wyrzuconych oczek wyniesie 13.',
        rozwiazanie: 'Maksymalna suma w rzucie dwiema kostkami to 12 (6+6). Wynik 13 jest zdarzeniem niemożliwym.<br>Prawdopodobieństwo zdarzenia niemożliwego wynosi 0.'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'W loterii przygotowano 100 losów, z czego 5 wygrywa. Kupujesz jeden los. Jakie masz prawdopodobieństwo wygranej?',
        rozwiazanie: 'Liczba losów wygrywających to 5. Liczba wszystkich to 100.<br>\\( P = \\frac{5}{100} = \\frac{1}{20} \\)'
    },
    {
        poddzial: 'Prawdopodobieństwo - zbiory i urny',
        tresc: 'Ze zbioru cyfr {1, 2, 3, 4, 5} tworzymy losowo liczbę dwucyfrową o różnych cyfrach. Jakie jest prawdopodobieństwo, że będzie to liczba 12?',
        rozwiazanie: 'Zgodnie z regułą mnożenia wszystkich takich liczb jest \\( 5 \\cdot 4 = 20 \\). Liczba 12 to tylko jeden konkretny przypadek z tych dwudziestu.<br>\\( P = \\frac{1}{20} \\)'
    }
];
