# RodyAIbiza

Bonjour Rody, voici la build la plus récente que nous avons. Elle est mise à disposition afin d'avoir des retours d'experience pour que nous puissions l'améliorer.

**SPOIL ALERT : Cette beta ne contient que deux scènes démo qui ne feront pas partis du jeu :)**

>**BETA TEST** : Joue directement sur le web avec cette adresse :
[https://rawgit.com/LaCreArthur/RodyAIbiza/master/WebGLPLayer/index.html](https://rawgit.com/LaCreArthur/RodyAIbiza/master/WebGLPLayer/index.html)


### Bugs et retours

Tu trouveras une [session dédiée aux bugs](https://github.com/LaCreArthur/RodyAIbiza/issues) où tu peux poster des billets pour les bugs que tu as trouvés, merci d'avance pour tes retours ! 

Indique-nous tes remarques concernant le synthétiseur pour que nous puissions continuer à l'améliorer ! :purple_heart:

*Bug connu : Dans la version webGL, chez moi (w10 + firefox 48), la phrase du père de Rody à la 1ère scène commence trop tot, je sais pas pourquoi...*

### Le synthétiseur
il fonctionne par un système de phonèmes mis bout à bout [(plus d'info ici)](http://www.rocketbox.fr/synthese-vocale-en-1987-comment-faisaient/), 

chaque phonème a été enregistré à partir des jeux Rody & Mastico originaux, 

chaque phonème peut donc être réenregistré s'il n'a pas été bien découpé.

Voici la liste des phonèmes


![liste des phonèmes](/synthese_vocale_1.jpg)

J'améliorerais petit à petit chaque phonème et posterais des mises à jour jusqu'à l'obtention d'un dialogue fluide et identique aux originaux.

### Jouer
Pour ceux qui ne connaissent pas du tout Rody & Mastico ...

#### configuration 
Un menu de configuration s'affiche en premier lieu. Tu peux y choisir ta résolution d'écran favorite, le reste n'est pas utile.

#### In-game
Le contenu du jeu en est actuellement à : 
 
1. Un écran de titre où l'**on doit attendre** la fin de la musique pour passer au menu
2. Un menu
3. Deux scènes de test

#### Le menu
1. En haut, il y a 4 grands bouttons pour choisir entre le mode entre *normal*, *dessin*, *ecran titre*, et le dernier pour valider le choix
2. En dessous il y a 16 scènes, tu sélectionnes celle sur laquelle tu veux commencer.

:heavy_exclamation_mark: seul le mode normal et la première scène sont activés pour le moment :heavy_exclamation_mark:

#### La scène
* Le bouton draw n'est pas actif 
* Arrivé à la fin de la scène, elle se relance en boucle. 

