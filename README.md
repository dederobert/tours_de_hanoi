# Tours de hanoï

Ce projet est un jeu des tours de Hanoï réalisé avec **React**. Il a pour objectif de mesurer l'effet d'un temps d'attente sur la prise de décision. Ainsi, ce jeu propose trois modes différents choisis aléatoirement: sans attente, avec attente à faible focus et attente avec fort focus.

## Les temps d'attente
L'objectif étant de mesurer l'impact des temps d'attente sur la prise de décision, nous avons ajouté des temps d'attente au projet. Il existe trois modes de fonctionnement:

- Sans temps d'attente: Le jeu se déroule de manière tout à fait normale.
- Attente à focus faible: Un met un temps d'attente à l'utilisateur entre chaque mouvement en affichant le message _"Sauvegarde ..."_
- Attente à focus fort: Un met un temps d'attente mais avec une barre de progression, celle-ci porte l'attention sur le temps de chargement.

## Changelog

__*Le projet est actuelement en version alpha car il n'a pas été testé*__

- 0.3.0: Sauvegarde des données 
- 0.2.0: Ajout de temps d'attente 
- 0.1.0: Code de base des tours de hanoï