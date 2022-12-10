# Mini-project "Pointage":
## Contexte:
L'école ABC gère ses employés via un fichier excel.
Format des données:
```
    IDENTIFIANT_EMPLOYEE:    14566
    NOM: Ranaivoson
    DEPARTEMENT: informatique
    DATE_ENTREE: 2020-09-22T10:00:00
    ACTIF: oui
    SALAIRE: 30000
```

On voudrait bien sécuriser cela via une base de données pour 

## Tâches:
Le but va être de créer un API REST Node Js gérant les informations sur ces employées.
TODO:
-   créer un endpoint qui permet de créer un employée
Les champs ci-dessous doivent être présent dans la base après la création.
```
{ 
    "id": {STRING}
    "name": {STRING}
    "firstName": {STRING}
    "dateCreated": {DATE}
    "department": {STRING}
}
```

-   créer un endpoint qui permet de modifier un employée via son identifiant
-   ajouter un endpoint pour
    -   récupérer la liste des employées
    -  ( optionel ) ajouter un filtre pour récupérer la liste des employées par nom de département

Les données doivent être stockés en BDD ( libre à vous de définir la techno )
-   Ces implémentations doivent être documentés;

## Point bonus:
-   Documentation
-   tests
