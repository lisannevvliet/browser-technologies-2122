# Enquête Minor Web

## Inhoudsopgave
- [Demo](#demo)
- [Functionele schets](#functionele-schets)
- [Verwerkte features](#verwerkte-features)
- [Geteste browsers](#geteste-browsers)
- [Testverslag](#testverslag)

## Demo
https://enquete-minor-web.herokuapp.com/

## Functionele schets
(Wireflow) schets van de functionaliteit.

De core functionality van de [enquête over de minor Web Design & Development](https://github.com/cmda-minor-web/browser-technologies-2122/blob/main/usecases/Usecase-enquete.md) is het volledig kunnen invullen en versturen van de enquête. De functional/reliable laag is enkel de HTML, de usable laag is de HTML én CSS (die het visueel aantrekkelijk maakt) en de pleasurable laag is de HTML, CSS én JavaScript (die voor real-time input validation, opslag in de localStorage van de naam en het studentnummer, en een progress bar zorgt).

## Verwerkte features
Om ervoor te zorgen dat de website er op zo oud mogelijke browsers goed uit ziet, heb ik geen gebruik gemaakt van grid of flexbox, maar van float. Alle onderdelen van de enquête werken ook zonder CSS en JavaScript, omdat ik gebruik heb gemaakt van type, min en max, require en checked. Standaard wordt er server-side informatie over de vakken (naam, docenten en week) opgehaald vanuit een JSON en ingevuld als value in de HTML. Als de gebruiker de enquête  invult en verstuurt, wordt de JSON aangepast en zal de website vanaf dan altijd geladen worden met de ingevulde enquête. Middels de "Reset" knop kan de JSON (en localStorage) worden teruggezet naar de standaard informatie. Op het moment dat de gebruiker een naam en studentnummer invult, wordt dit real-time opgeslagen in de localStorage. Als de gebruiker het formulier opstuurt of op de "Reset" knop klikt, wordt deze informatie verwijderd. De localStorage is bedoeld om ervoor te zorgen dat de gebruiker de enquête weg kan klikken en later af kan maken.

Beschrijving van de feature(s)/Browser Technologies die in je demo zijn gebruikt en hoe je dit PE hebt toegepast.

## Geteste browsers
1. Google Chrome 100.0.4896.75 (macOS 12.3.1, MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports))
2. Apple Safari 15.4 (macOS 12.3.1, MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports))
3. Apple Safari 15.4 (iOS 15.4.1, iPhone 11 Pro)
4. Google Chrome 75.0.3770.143 (Android 6.0.1, Nexus 5)

## Testverslag
Op alle vier de browsers werken alle functionaliteiten zoals behoren.

Testverslag met een beschrijving van de feature-lijst die zijn onderzocht, welke browsers de feature(s) wel/niet ondersteunen en welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests.
