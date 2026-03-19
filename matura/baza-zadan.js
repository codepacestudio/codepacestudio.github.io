const bazaZadan = {
    'liczby': [
        // PODDZIAŁ 1: POTĘGI I PIERWIASTKI (10 zadań)
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Oblicz wartość wyrażenia: \\( \\frac{2^5 \\cdot 2^3}{2^6} \\)',
            rozwiazanie: 'Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki, a przy dzieleniu odejmujemy.<br>\\( \\frac{2^{5+3}}{2^6} = \\frac{2^8}{2^6} = 2^{8-6} = 2^2 = 4 \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Zapisz wyrażenie w postaci jednej potęgi: \\( (3^4 \\cdot 3^{-2})^3 \\)',
            rozwiazanie: 'Najpierw wykonujemy działanie w nawiasie:<br>\\( 3^{4 + (-2)} = 3^2 \\)<br>Następnie potęgujemy potęgę (mnożymy wykładniki):<br>\\( (3^2)^3 = 3^{2 \\cdot 3} = 3^6 \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Oblicz: \\( \\sqrt{12} + \\sqrt{27} \\)',
            rozwiazanie: 'Rozkładamy liczby pod pierwiastkiem, aby wyciągnąć czynnik przed znak pierwiastka:<br>\\( \\sqrt{4 \\cdot 3} + \\sqrt{9 \\cdot 3} \\)<br>\\( 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3} \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Oblicz wartość wyrażenia: \\( 16^{\\frac{1}{4}} \\)',
            rozwiazanie: 'Potęga ułamkowa to inaczej pierwiastek. Wykładnik \\( \\frac{1}{4} \\) oznacza pierwiastek czwartego stopnia:<br>\\( \\sqrt[4]{16} = 2 \\), ponieważ \\( 2^4 = 16 \\).'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Oblicz: \\( \\left(\\frac{1}{2}\\right)^{-3} \\)',
            rozwiazanie: 'Ujemny wykładnik odwraca ułamek:<br>\\( \\left(\\frac{2}{1}\\right)^3 = 2^3 = 8 \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Uprość wyrażenie: \\( \\sqrt[3]{54} - \\sqrt[3]{16} \\)',
            rozwiazanie: 'Wyciągamy czynniki przed pierwiastek sześcienny:<br>\\( \\sqrt[3]{27 \\cdot 2} - \\sqrt[3]{8 \\cdot 2} \\)<br>\\( 3\\sqrt[3]{2} - 2\\sqrt[3]{2} = \\sqrt[3]{2} \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Oblicz: \\( (2\\sqrt{5})^2 \\)',
            rozwiazanie: 'Podnosimy do kwadratu każdy z czynników w nawiasie:<br>\\( 2^2 \\cdot (\\sqrt{5})^2 = 4 \\cdot 5 = 20 \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Oblicz: \\( \\frac{\\sqrt{50}}{\\sqrt{2}} \\)',
            rozwiazanie: 'Zapisujemy pod jednym pierwiastkiem:<br>\\( \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5 \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Przedstaw w postaci potęgi liczby 5: \\( 25^3 \\cdot 125^2 \\)',
            rozwiazanie: 'Zmieniamy podstawy na 5:<br>\\( (5^2)^3 \\cdot (5^3)^2 = 5^6 \\cdot 5^6 = 5^{12} \\)'
        },
        {
            poddzial: 'Potęgi i pierwiastki',
            tresc: 'Wyznacz odwrotność liczby \\( 2\\sqrt{2} \\)',
            rozwiazanie: 'Odwrotność to \\( \\frac{1}{2\\sqrt{2}} \\). Usuwamy niewymierność z mianownika:<br>\\( \\frac{1 \\cdot \\sqrt{2}}{2\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{\\sqrt{2}}{2 \\cdot 2} = \\frac{\\sqrt{2}}{4} \\)'
        },

        // PODDZIAŁ 2: LOGARYTMY (10 zadań)
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( \\log_2 16 \\)',
            rozwiazanie: 'Z definicji logarytmu pytamy: do jakiej potęgi podnieść 2, aby otrzymać 16?<br>\\( 2^4 = 16 \\), więc \\( \\log_2 16 = 4 \\)'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( \\log_5 100 - \\log_5 4 \\)',
            rozwiazanie: 'Różnica logarytmów o tej samej podstawie to logarytm ilorazu:<br>\\( \\log_5 \\frac{100}{4} = \\log_5 25 = 2 \\)'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( \\log_6 2 + \\log_6 18 \\)',
            rozwiazanie: 'Suma logarytmów o tej samej podstawie to logarytm iloczynu:<br>\\( \\log_6 (2 \\cdot 18) = \\log_6 36 = 2 \\)'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( 3^{\\log_3 7} \\)',
            rozwiazanie: 'Korzystamy z podstawowego wzoru logarytmicznego \\( a^{\\log_a b} = b \\):<br>Odpowiedź to 7.'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( \\log_{\\frac{1}{2}} 8 \\)',
            rozwiazanie: 'Do jakiej potęgi podnieść \\( \\frac{1}{2} \\), aby otrzymać 8?<br>\\( (\\frac{1}{2})^{-3} = 2^3 = 8 \\). Odpowiedź to -3.'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( \\log 1000 \\)',
            rozwiazanie: 'Logarytm bez zapisanej podstawy to logarytm dziesiętny (podstawa 10).<br>\\( \\log_{10} 1000 = 3 \\), ponieważ \\( 10^3 = 1000 \\).'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Rozwiąż równanie: \\( \\log_3 x = 4 \\)',
            rozwiazanie: 'Z definicji logarytmu:<br>\\( x = 3^4 \\)<br>\\( x = 81 \\)'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( 2\\log_5 5 \\)',
            rozwiazanie: 'Wiemy, że \\( \\log_a a = 1 \\), więc \\( \\log_5 5 = 1 \\).<br>Wynik: \\( 2 \\cdot 1 = 2 \\)'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Zapisz jako jeden logarytm: \\( 2\\log_3 4 + \\log_3 5 \\)',
            rozwiazanie: 'Wprowadzamy liczbę przed logarytmem do potęgi argumentu:<br>\\( \\log_3 4^2 + \\log_3 5 = \\log_3 16 + \\log_3 5 \\)<br>Zamieniamy sumę na iloczyn:<br>\\( \\log_3 (16 \\cdot 5) = \\log_3 80 \\)'
        },
        {
            poddzial: 'Logarytmy',
            tresc: 'Oblicz: \\( \\log_4 2 \\)',
            rozwiazanie: 'Pytamy: do jakiej potęgi podnieść 4, aby otrzymać 2?<br>Zauważamy, że \\( \\sqrt{4} = 2 \\), co oznacza potęgę ułamkową.<br>\\( 4^{\\frac{1}{2}} = 2 \\), więc odpowiedź to \\( \\frac{1}{2} \\).'
        },

        // PODDZIAŁ 3: PROCENTY I BŁĄD WZGLĘDNY (10 zadań)
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Cena roweru po obniżce o 15% wynosi 850 zł. Oblicz cenę początkową.',
            rozwiazanie: 'Skoro obniżono o 15%, to 850 zł stanowi 85% ceny początkowej x.<br>\\( 0.85x = 850 \\)<br>\\( x = \\frac{850}{0.85} = 1000 \\) zł.'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Liczba A jest o 25% większa od liczby B. O ile procent liczba B jest mniejsza od liczby A?',
            rozwiazanie: 'Zapisujemy relację: \\( A = 1.25B \\).<br>Stąd \\( B = \\frac{1}{1.25}A = 0.8A \\).<br>Liczba B stanowi 80% liczby A, co oznacza, że jest od niej o 20% mniejsza.'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Towar kosztował 200 zł. Najpierw jego cenę podniesiono o 10%, a następnie nową cenę obniżono o 10%. Jaka jest cena końcowa?',
            rozwiazanie: 'Po podwyżce: \\( 200 \\cdot 1.10 = 220 \\) zł.<br>Po obniżce: \\( 220 \\cdot 0.90 = 198 \\) zł.'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Oblicz błąd bezwzględny przybliżenia liczby 15.4 liczbą 15.',
            rozwiazanie: 'Wzór na błąd bezwzględny: \\( \\Delta x = |x - x_0| \\), gdzie x to wartość dokładna, a x_0 przybliżona.<br>\\( \\Delta x = |15.4 - 15| = 0.4 \\)'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Wyznacz błąd względny (w procentach) przybliżenia liczby 80 liczbą 82.',
            rozwiazanie: 'Błąd bezwzględny: \\( |80 - 82| = 2 \\).<br>Błąd względny to stosunek błędu bezwzględnego do wartości dokładnej:<br>\\( \\frac{2}{80} = \\frac{1}{40} = 0.025 \\).<br>W procentach wynosi to 2.5%.'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Jaki procent liczby 60 stanowi liczba 15?',
            rozwiazanie: 'Dzielimy mniejszą liczbę przez większą i mnożymy przez 100%:<br>\\( \\frac{15}{60} \\cdot 100\\% = \\frac{1}{4} \\cdot 100\\% = 25\\% \\)'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Oblicz 30% z liczby 120.',
            rozwiazanie: 'Zamieniamy procent na ułamek dziesiętny i mnożymy:<br>\\( 0.30 \\cdot 120 = 36 \\)'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Znajdź liczbę, której 40% wynosi 24.',
            rozwiazanie: 'Układamy proste równanie: \\( 0.40x = 24 \\)<br>Dzielimy obie strony przez 0.40:<br>\\( x = \\frac{24}{0.4} = 60 \\)'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Kwota 500 zł wpłacona na lokatę oprocentowaną 4% w skali roku (kapitalizacja roczna). Ile wyniesie kapitał po roku?',
            rozwiazanie: 'Obliczamy kwotę po dodaniu 4% odsetek:<br>\\( 500 \\cdot 1.04 = 520 \\) zł.'
        },
        {
            poddzial: 'Procenty i błąd względny',
            tresc: 'Złoto próby 585 oznacza, że w 1000g stopu jest 585g czystego złota. Ile czystego złota jest w 40g takiego stopu?',
            rozwiazanie: 'Próba 585 oznacza zawartość 58.5%.<br>Liczymy 58.5% z 40g:<br>\\( 0.585 \\cdot 40 = 23.4 \\) g.'
        }
    ]
};
