const bazaZadan = {
    'liczby': [
        { 
            poddzial: 'Potęgi i pierwiastki', 
            tresc: 'Oblicz wartość wyrażenia: \\( \\frac{2^5 \\cdot 2^3}{2^6} \\)', 
            rozwiazanie: 'Z własności potęg przy mnożeniu dodajemy wykładniki, a przy dzieleniu odejmujemy:<br>\\( \\frac{2^{5+3}}{2^6} = \\frac{2^8}{2^6} = 2^{8-6} = 2^2 = 4 \\)' 
        },
        { 
            poddzial: 'Potęgi i pierwiastki', 
            tresc: 'Zapisz w postaci jednej potęgi: \\( \\sqrt{2} \\cdot 2^{\\frac{1}{2}} \\)', 
            rozwiazanie: 'Pamiętaj, że pierwiastek kwadratowy to potęga o wykładniku ułamkowym:<br>\\( \\sqrt{2} = 2^{\\frac{1}{2}} \\)<br>Mnożymy potęgi o tej samej podstawie:<br>\\( 2^{\\frac{1}{2}} \\cdot 2^{\\frac{1}{2}} = 2^{\\frac{1}{2} + \\frac{1}{2}} = 2^1 = 2 \\)' 
        },
        { 
            poddzial: 'Logarytmy', 
            tresc: 'Oblicz: \\( \\log_2 8 + \\log_3 9 \\)', 
            rozwiazanie: 'Z definicji logarytmu pytamy, do jakiej potęgi podnieść podstawę:<br>\\( \\log_2 8 = 3 \\) (bo \\( 2^3 = 8 \\))<br>\\( \\log_3 9 = 2 \\) (bo \\( 3^2 = 9 \\))<br>Suma: \\( 3 + 2 = 5 \\)' 
        },
        { 
            poddzial: 'Logarytmy', 
            tresc: 'Oblicz: \\( \\log_5 100 - \\log_5 4 \\)', 
            rozwiazanie: 'Korzystamy ze wzoru na różnicę logarytmów o tej samej podstawie:<br>\\( \\log_a b - \\log_a c = \\log_a (\\frac{b}{c}) \\)<br>Zatem:<br>\\( \\log_5 100 - \\log_5 4 = \\log_5 \\frac{100}{4} = \\log_5 25 = 2 \\)' 
        },
        { 
            poddzial: 'Procenty i błąd względny', 
            tresc: 'Cena butów po obniżce o 20% wynosi 160 zł. Jaka była cena początkowa?', 
            rozwiazanie: 'Skoro obniżono cenę o 20%, to 160 zł stanowi 80% ceny początkowej (oznaczmy jako x).<br>Układamy równanie:<br>\\( 0.8x = 160 \\)<br>Dzielimy obie strony przez 0.8:<br>\\( x = \\frac{160}{0.8} = 200 \\) zł.' 
        },
        { 
            poddzial: 'Procenty i błąd względny', 
            tresc: 'Liczba a jest o 25% większa od liczby b. Jakim procentem liczby a jest liczba b?', 
            rozwiazanie: 'Zapisujemy relację z treści zadania:<br>\\( a = 1.25b \\)<br>Wyznaczamy b:<br>\\( b = \\frac{a}{1.25} = \\frac{100}{125}a = 0.8a \\)<br>Liczba b stanowi zatem 80% liczby a.' 
        }
    ]
};
