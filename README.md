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

De core functionality van de [enquête over de minor Web Design & Development](https://github.com/cmda-minor-web/browser-technologies-2122/blob/main/usecases/Usecase-enquete.md) is het volledig kunnen invullen en versturen van de enquête. De functional/reliable laag is enkel de HTML, de usable laag is de HTML én CSS (die het visueel aantrekkelijk maakt) en de pleasurable laag is de HTML, CSS én JavaScript (die voor real-time input validation, opslag in de localStorage en de progress bar zorgt).

## Verwerkte features
Om ervoor te zorgen dat de website er op zo oud mogelijke browsers goed uit ziet, heb ik geen gebruik gemaakt van grid of flexbox, maar van float. Alle onderdelen van de enquête werken ook zonder CSS en JavaScript, omdat ik gebruik heb gemaakt van type, min en max, require en checked. Server-side wordt er informatie over de vakken (naam, docenten en week) opgehaald vanuit een JSON-bestand en als value in de HTML ingevuld. Als de gebruiker de enquête invult en verstuurd, wordt het JSON-bestand aangepast en zal de website vanaf dan altijd geladen worden met de ingevulde enquête. Bij een klik op de "Reset" knop wordt het JSON-bestand overschreven met de standaard informatie (en de localStorage geleegd). Op het moment dat de gebruiker een naam en studentnummer invult, wordt dit real-time opgeslagen in de localStorage. Als de gebruiker het formulier opstuurt of op de "Reset" knop klikt, wordt deze informatie verwijderd. De localStorage is bedoeld om ervoor te zorgen dat de gebruiker de enquête weg kan klikken en later af kan maken. In verband met tijdsnood heb ik dit niet op de hele enquête kunnen implementeren, maar dit zou wel de meest gunstige eindsituatie zijn. Omdat alle gebruikte CSS-eigenschappen op oude browsers ondersteund worden, heb ik geen @supports hoeven te gebruiken. De JavaScript functies m.b.t. de localStorage worden pas uitgevoerd als localStorage door de feature detection heen komt.

## Geteste browsers
1. Google Chrome 100.0.4896.75 (macOS 12.3.1, MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports))
2. Apple Safari 15.4 (macOS 12.3.1, MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports))
3. Apple Safari 15.4 (iOS 15.4.1, iPhone 11 Pro)
4. Google Chrome 75.0.3770.143 (Android 6.0.1, Nexus 5)

## Testverslag
Naast de algemene werking van de website heb ik de features required, min en max en localStorage onderzocht. Op de vier browsers worden alle features ondersteund en werkt de website zoals behoren. Tijdens het testen heb ik CSS, JavaScript en localStorage uitgezet. Zonder CSS gaat er geen core functionality verloren (zie de onderstaande screenshot), maar de real-time input validation werkt niet meer (omdat hierbij een outline wordt toegevoegd). Zonder JavaScript werkt de real-time input validation, opslag in de localStorage en de progress bar niet meer. Omdat de lege progress bar transparant is en het pas wordt gevuld in de JavaScript, lijkt het alsof er geen progress bar is. Zonder de real-time input validation en opslag in de localStorage (wat afhankelijk is van JavaScript) kan de gebruiker alsnog de enquête invullen. Als de browser geen localStorage ondersteund of dit uitgezet wordt, worden de JavaScript functies m.b.t. localStorage overgeslagen.