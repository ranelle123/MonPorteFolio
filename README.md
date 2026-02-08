# 📋 Projet M2L - Gestion Multi-Utilisateurs

Gestion des employés de ligues sportives avec support multi-utilisateurs et système de rôles.

## 📌 Description

La Maison des Ligues de Lorraine (M2L) héberge plusieurs ligues sportives. Ce projet modernise la gestion de leurs employés en transformant une application mono-utilisateur en ligne de commande vers un système supportant plusieurs utilisateurs simultanés avec différents niveaux de droits.

## 🎯 Fonctionnalités

- **Gestion des Ligues** : Création, modification, suppression de ligues sportives
- **Gestion des Employés** : CRUD complet avec dates d'arrivée/départ
- **Système de Rôles** :
  - 👤 Employé Simple (lecture seule)
  - 👨‍💼 Administrateur de Ligue (CRUD sur sa ligue)
  - 🔑 Super-Administrateur/Root (accès total)
- **Validation des Données** : Vérification des dates et droits d'accès
- **Persistance** : Sauvegarde par sérialisation fichier (migration MySQL prévue)

## 🛠️ Technologies Utilisées

| Technologie | Usage |
|------------|-------|
| **Java 17** | Langage principal |
| **Eclipse IDE** | Environnement de développement |
| **Serialization** | Persistance actuellement |
| **JDBC** | Migration future vers MySQL |

## 📁 Structure du Projet

```
MonPorteFolio/
├── Projet.html              # Documentation du projet
├── Ranelle.html             # Portfolio principal
├── Ranelle.js               # Logique JavaScript
├── Ranelle.css              # Styles
├── README.md                # Ce fichier
└── images/                  # Captures d'écran
    ├── AbreHeureustique.png
    ├── MCD1.png
    └── MCD2.png
```

## 🏗️ Architecture

Le projet suit une **architecture 3-tiers** :

```
┌─────────────────────────────┐
│   PRÉSENTATION (CLI)        │
│   LigueConsole.java         │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│   MÉTIER                    │
│   Employe, Ligue, Droits    │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│   DONNÉES (Passerelle)      │
│   Serialization / JDBC      │
└─────────────────────────────┘
```

## 💾 Modèle de Données

### Classe `Employe`
```java
- nom: String
- prenom: String
- mail: String
- password: String
- date_arrivee: LocalDate  ✨ AJOUT
- date_depart: LocalDate   ✨ AJOUT
- estRoot(): boolean
- estAdmin(Ligue): boolean
```

### Classe `Ligue`
```java
- id: int
- nom: String
- administrateur: Employe
- employes: SortedSet<Employe>
```

## 🚀 Utilisation

### Prérequis
- Java 17+
- Eclipse IDE (optionnel)

### Lancer l'application
```bash
java -cp . commandLine.Main
```

### Fonctionnalités principales
1. **Accès Root** : Gérer toutes les ligues et administrateurs
2. **Accès Admin Ligue** : Gérer les employés de sa ligue
3. **Accès Employé** : Consulter l'annuaire

## 📊 Captures d'Écran

### Abre Heuristique
Menu principal avec structure des ligues

### MCD 1
Gestion d'une ligue et ses options

### MCD 2
Formulaire d'ajout d'un employé avec validation des dates

## 🎓 Compétences Mobilisées (BTS SIO)

- ✅ **B1.1** - Recherche de solutions techniques (LocalDate, Pattern Passerelle)
- ✅ **B1.2** - Développement d'une solution applicative
- ✅ **B1.3** - Conception et adaptation de structures de données
- ✅ **B1.4** - Programmation objet (héritage, encapsulation)
- ✅ **B1.5** - Gestion des données et préparation migration BDD

## 🔄 Évolutions Futures

- [ ] Migration vers MySQL avec JDBC
- [ ] Hashage des mots de passe (BCrypt/PBKDF2)
- [ ] Interface graphique (Swing/JavaFX)
- [ ] Tests unitaires (JUnit)
- [ ] Historique des modifications
- [ ] API REST

## ⚠️ Points Importants

**Validation des Données** : Les contraintes métier sont appliquées dans les classes métier (constructeurs, setters) et pas seulement dans l'interface utilisateur. Cela garantit la cohérence des données indépendamment de l'interface.

**Séparation des Responsabilités** : 
- La présentation ne manipule JAMAIS directement les attributs
- Elle passe toujours par les méthodes métier (getters/setters)
- Les droits d'accès sont vérifiés à la couche métier

## 📝 Licence

© 2026 - Projet M2L • BTS SIO SLAM

---

**Durée du projet** : 2 semaines  
**Lignes de code** : ~150 lignes ajoutées/modifiées  
**Fichiers modifiés** : `Employe.java`, `LigueConsole.java`, `Ligue.java`
