bazaZadan['trygonometria'] = [
    // PODDZIAŁ 1: Funkcje kąta ostrego w trójkącie prostokątnym (10 zadań)
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'W trójkącie prostokątnym przyprostokątne mają długości 3 i 4. Oblicz sinus kąta leżącego naprzeciwko boku o długości 3.',
        rozwiazanie: 'Liczymy przeciwprostokątną (c) z twierdzenia Pitagorasa:<br>\\( c^2 = 3^2 + 4^2 = 9 + 16 = 25 \\Rightarrow c = 5 \\)<br>Sinus to stosunek przyprostokątnej leżącej naprzeciwko kąta do przeciwprostokątnej:<br>\\( \\sin \\alpha = \\frac{3}{5} \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'W trójkącie prostokątnym przeciwprostokątna ma długość 13, a jedna z przyprostokątnych 5. Oblicz cosinus kąta przyległego do boku o długości 5.',
        rozwiazanie: 'Cosinus to stosunek przyprostokątnej przyległej do kąta do przeciwprostokątnej.<br>Mamy oba te boki, nie musimy liczyć trzeciego.<br>\\( \\cos \\alpha = \\frac{5}{13} \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'W trójkącie prostokątnym przyprostokątne mają długości 6 i 8. Oblicz tangens kąta leżącego naprzeciwko dłuższego boku.',
        rozwiazanie: 'Tangens to stosunek przyprostokątnej naprzeciwko kąta do przyprostokątnej przyległej.<br>Bok naprzeciwko to 8, przyległy to 6.<br>\\( \\tg \\alpha = \\frac{8}{6} = \\frac{4}{3} \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'Przeciwprostokątna trójkąta prostokątnego ma długość 10. Sinus jednego z kątów ostrych wynosi 0.6. Oblicz długość przyprostokątnej leżącej naprzeciwko tego kąta.',
        rozwiazanie: 'Z definicji sinusa: \\( \\sin \\alpha = \\frac{a}{c} \\).<br>Podstawiamy dane: \\( 0.6 = \\frac{a}{10} \\)<br>Mnożymy przez 10:<br>\\( a = 6 \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'Przyprostokątna przyległa do kąta ostrego \\( \\alpha \\) ma długość 8. Cosinus tego kąta to \\( \\frac{4}{5} \\). Oblicz przeciwprostokątną.',
        rozwiazanie: 'Z definicji cosinusa: \\( \\cos \\alpha = \\frac{b}{c} \\).<br>Podstawiamy: \\( \\frac{4}{5} = \\frac{8}{c} \\)<br>Mnożymy na krzyż:<br>\\( 4c = 40 \\Rightarrow c = 10 \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'W trójkącie równoramiennym prostokątnym oblicz tangens dowolnego kąta ostrego.',
        rozwiazanie: 'W trójkącie prostokątnym równoramiennym obie przyprostokątne mają taką samą długość (oznaczmy ją jako a).<br>\\( \\tg \\alpha = \\frac{a}{a} = 1 \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'W trójkącie prostokątnym przyprostokątne mają długości \\( 2\\sqrt{2} \\) i 3. Oblicz tangens kąta naprzeciwko boku 3.',
        rozwiazanie: 'Z definicji tangensa (stosunek boku naprzeciw do przyległego):<br>\\( \\tg \\alpha = \\frac{3}{2\\sqrt{2}} \\).<br>Usuwamy niewymierność z mianownika:<br>\\( \\frac{3\\sqrt{2}}{2 \\cdot 2} = \\frac{3\\sqrt{2}}{4} \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'Wiadomo, że \\( \\tg \\alpha = \\frac{3}{4} \\). Oblicz \\( \\sin \\alpha \\) wykorzystując trójkąt prostokątny.',
        rozwiazanie: 'Tangens to stosunek przyprostokątnych (3x i 4x). Z Pitagorasa liczymy przeciwprostokątną (c):<br>\\( (3x)^2 + (4x)^2 = 9x^2 + 16x^2 = 25x^2 \\Rightarrow c = 5x \\).<br>Sinus to stosunek boku naprzeciw do przeciwprostokątnej:<br>\\( \\sin \\alpha = \\frac{3x}{5x} = \\frac{3}{5} \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'W trójkącie prostokątnym o bokach 5, 12, 13 wskaż wartość sinusa kąta leżącego naprzeciwko najkrótszego boku.',
        rozwiazanie: 'Najkrótszy bok to 5. Przeciwprostokątna to najdłuższy bok, czyli 13.<br>\\( \\sin \\alpha = \\frac{\\text{bok naprzeciw}}{\\text{przeciwprostokątna}} = \\frac{5}{13} \\)'
    },
    {
        poddzial: 'Kąt ostry w trójkącie',
        tresc: 'Oblicz cosinus kąta ostrego zawartego między dłuższą przyprostokątną o długości 15 a przeciwprostokątną o długości 17.',
        rozwiazanie: 'Cosinus to stosunek przyprostokątnej przyległej (tworzącej ten kąt) do przeciwprostokątnej.<br>\\( \\cos \\alpha = \\frac{15}{17} \\)'
    },

    // PODDZIAŁ 2: Związki między funkcjami (Jedynka trygonometryczna) (10 zadań)
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Kąt \\( \\alpha \\) jest ostry i \\( \\sin \\alpha = \\frac{1}{2} \\). Oblicz \\( \\cos \\alpha \\).',
        rozwiazanie: 'Korzystamy z jedynki trygonometrycznej: \\( \\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\).<br>\\( (\\frac{1}{2})^2 + \\cos^2 \\alpha = 1 \\)<br>\\( \\frac{1}{4} + \\cos^2 \\alpha = 1 \\Rightarrow \\cos^2 \\alpha = \\frac{3}{4} \\).<br>Ponieważ kąt jest ostry (cosinus dodatni): \\( \\cos \\alpha = \\frac{\\sqrt{3}}{2} \\)'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Kąt \\( \\alpha \\) jest ostry i \\( \\cos \\alpha = \\frac{3}{5} \\). Oblicz \\( \\sin \\alpha \\).',
        rozwiazanie: 'Z jedynki trygonometrycznej:<br>\\( \\sin^2 \\alpha + (\\frac{3}{5})^2 = 1 \\)<br>\\( \\sin^2 \\alpha + \\frac{9}{25} = 1 \\)<br>\\( \\sin^2 \\alpha = \\frac{16}{25} \\).<br>Kąt ostry, więc \\( \\sin \\alpha = \\frac{4}{5} \\).'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Oblicz wartość wyrażenia \\( \\sin^2 30^\\circ + \\cos^2 30^\\circ \\).',
        rozwiazanie: 'Zgodnie z jedynką trygonometryczną \\( \\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\) dla każdego tego samego kąta.<br>Nie trzeba nic liczyć z tablic. Wartość wyrażenia to zawsze 1.'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Kąt \\( \\alpha \\) jest ostry, \\( \\sin \\alpha = \\frac{4}{5} \\) i \\( \\cos \\alpha = \\frac{3}{5} \\). Oblicz \\( \\tg \\alpha \\).',
        rozwiazanie: 'Korzystamy ze wzoru \\( \\tg \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} \\).<br>\\( \\tg \\alpha = \\frac{\\frac{4}{5}}{\\frac{3}{5}} = \\frac{4}{5} \\cdot \\frac{5}{3} = \\frac{4}{3} \\)'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Kąt \\( \\alpha \\) jest ostry i \\( \\sin \\alpha = \\frac{5}{13} \\). Oblicz \\( \\tg \\alpha \\).',
        rozwiazanie: 'Najpierw z jedynki liczymy cosinus:<br>\\( \\cos^2 \\alpha = 1 - (\\frac{5}{13})^2 = 1 - \\frac{25}{169} = \\frac{144}{169} \\Rightarrow \\cos \\alpha = \\frac{12}{13} \\).<br>Teraz tangens: \\( \\tg \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{\\frac{5}{13}}{\\frac{12}{13}} = \\frac{5}{12} \\).'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Uprość wyrażenie: \\( 1 - \\sin^2 \\alpha \\)',
        rozwiazanie: 'Przekształcamy wzór na jedynkę trygonometryczną \\( \\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\).<br>Przenosimy sinus na prawą stronę:<br>\\( \\cos^2 \\alpha = 1 - \\sin^2 \\alpha \\).<br>Odpowiedź: \\( \\cos^2 \\alpha \\).'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Uprość wyrażenie: \\( (\\sin \\alpha + \\cos \\alpha)^2 - 2\\sin \\alpha \\cos \\alpha \\).',
        rozwiazanie: 'Rozwijamy nawias ze wzoru skróconego mnożenia:<br>\\( \\sin^2 \\alpha + 2\\sin \\alpha \\cos \\alpha + \\cos^2 \\alpha - 2\\sin \\alpha \\cos \\alpha \\).<br>Podwójne iloczyny się redukują. Zostaje:<br>\\( \\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\).'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Oblicz wartość wyrażenia \\( 3\\sin^2 \\alpha + 3\\cos^2 \\alpha \\).',
        rozwiazanie: 'Wyłączamy trójkę przed nawias:<br>\\( 3(\\sin^2 \\alpha + \\cos^2 \\alpha) \\).<br>Zawartość nawiasu to jedynka trygonometryczna.<br>\\( 3 \\cdot 1 = 3 \\).'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Wiadomo, że \\( \\tg \\alpha = 2 \\). Podaj wartość wyrażenia \\( \\frac{\\sin \\alpha}{\\cos \\alpha} \\).',
        rozwiazanie: 'Z definicji zachodzi równość: \\( \\tg \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} \\).<br>Skoro tangens wynosi 2, to wartość tego ułamka też wynosi 2.'
    },
    {
        poddzial: 'Jedynka trygonometryczna',
        tresc: 'Zapisz wyrażenie \\( \\frac{1}{\\cos^2 \\alpha} - 1 \\) za pomocą funkcji tangens.',
        rozwiazanie: 'Sprowadzamy do wspólnego mianownika:<br>\\( \\frac{1 - \\cos^2 \\alpha}{\\cos^2 \\alpha} \\).<br>Z jedynki trygonometrycznej licznik to \\( \\sin^2 \\alpha \\).<br>Otrzymujemy: \\( \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha} = \\tg^2 \\alpha \\).'
    },

    // PODDZIAŁ 3: Kąty charakterystyczne i zastosowania (10 zadań)
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Oblicz wartość wyrażenia: \\( \\sin 30^\\circ + \\cos 60^\\circ \\).',
        rozwiazanie: 'Z tabeli wartości funkcji trygonometrycznych odczytujemy:<br>\\( \\sin 30^\\circ = \\frac{1}{2} \\)<br>\\( \\cos 60^\\circ = \\frac{1}{2} \\)<br>Suma: \\( \\frac{1}{2} + \\frac{1}{2} = 1 \\)'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Oblicz: \\( \\tg 45^\\circ \\cdot \\cos 60^\\circ \\).',
        rozwiazanie: 'Odczytujemy z tabeli:<br>\\( \\tg 45^\\circ = 1 \\)<br>\\( \\cos 60^\\circ = \\frac{1}{2} \\)<br>Iloczyn: \\( 1 \\cdot \\frac{1}{2} = \\frac{1}{2} \\)'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Oblicz: \\( 2\\sin 45^\\circ \\cdot \\cos 45^\\circ \\).',
        rozwiazanie: 'Podstawiamy wartości z tabeli:<br>\\( 2 \\cdot \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{2}}{2} \\)<br>\\( 2 \\cdot \\frac{2}{4} = 2 \\cdot \\frac{1}{2} = 1 \\)'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Dla jakiego kąta ostrego \\( \\alpha \\) prawdziwe jest równanie \\( \\sin \\alpha = \\frac{\\sqrt{3}}{2} \\)?',
        rozwiazanie: 'Sprawdzamy w tabeli wartości funkcji trygonometrycznych.<br>Wartość \\( \\frac{\\sqrt{3}}{2} \\) dla sinusa odpowiada kątowi \\( 60^\\circ \\).'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Dla jakiego kąta ostrego zachodzi równość \\( \\tg \\alpha = 1 \\)?',
        rozwiazanie: 'Z tablic trygonometrycznych odczytujemy, że tangens przyjmuje wartość 1 dla kąta \\( 45^\\circ \\).'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Oblicz wartość ułamka: \\( \\frac{\\sin 30^\\circ}{\\tg 45^\\circ} \\).',
        rozwiazanie: 'Wstawiamy znane wartości:<br>Licznik: \\( \\sin 30^\\circ = \\frac{1}{2} \\)<br>Mianownik: \\( \\tg 45^\\circ = 1 \\)<br>\\( \\frac{\\frac{1}{2}}{1} = \\frac{1}{2} \\)'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Drzewo rzuca cień o długości równej swojej wysokości. Pod jakim kątem padają promienie słoneczne?',
        rozwiazanie: 'Stosunek wysokości drzewa (h) do długości cienia (h) to tangens kąta padania promieni.<br>\\( \\tg \\alpha = \\frac{h}{h} = 1 \\).<br>Kąt, dla którego tangens wynosi 1, to \\( 45^\\circ \\).'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Latawiec znajduje się na końcu napiętego sznurka o długości 10 m. Sznurek tworzy z poziomem kąt \\( 30^\\circ \\). Na jakiej wysokości leci latawiec?',
        rozwiazanie: 'Wysokość (h) leży naprzeciwko kąta \\( 30^\\circ \\), sznurek to przeciwprostokątna.<br>Używamy sinusa: \\( \\sin 30^\\circ = \\frac{h}{10} \\).<br>Wiemy, że \\( \\sin 30^\\circ = 0.5 \\).<br>\\( 0.5 = \\frac{h}{10} \\Rightarrow h = 5 \\) m.'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Drabina o długości 5 m jest oparta o ścianę pod kątem \\( 60^\\circ \\) do poziomu. W jakiej odległości od ściany znajduje się jej podstawa?',
        rozwiazanie: 'Odległość podstawy (x) to przyprostokątna przyległa do kąta \\( 60^\\circ \\).<br>Używamy cosinusa: \\( \\cos 60^\\circ = \\frac{x}{5} \\).<br>Wartość \\( \\cos 60^\\circ = \\frac{1}{2} \\).<br>\\( \\frac{1}{2} = \\frac{x}{5} \\Rightarrow 2x = 5 \\Rightarrow x = 2.5 \\) m.'
    },
    {
        poddzial: 'Kąty charakterystyczne',
        tresc: 'Oblicz pole trójkąta, wiedząc, że dwa jego boki mają długości 4 i 6, a kąt między nimi wynosi \\( 30^\\circ \\).',
        rozwiazanie: 'Korzystamy ze wzoru z sinusem: \\( P = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin \\alpha \\).<br>Podstawiamy dane: \\( P = \\frac{1}{2} \\cdot 4 \\cdot 6 \\cdot \\sin 30^\\circ \\).<br>Skoro \\( \\sin 30^\\circ = \\frac{1}{2} \\), to:<br>\\( P = 12 \\cdot \\frac{1}{2} = 6 \\).'
    }
];
