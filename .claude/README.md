# Skills & agents Claude Code

Ce dossier `.claude/` est de l'**outillage pour Claude Code** : il n'est pas
compilé ni déployé sur le site. Il rend disponibles, dans toute session Claude
Code ouverte sur ce dépôt, un ensemble de « conseillers » et de skills de
développement.

## Comment s'en servir

- Demander directement, par ex. : « passe mon projet ComplianceZen devant le
  board », « critique l'offre », « fais une revue de sécurité du code ».
- Ou invoquer un skill par son nom : `/founder-board`, `/founder-offer`,
  `/code-review-and-quality`, `/security-and-hardening`, etc.
- Les agents (`.claude/agents/`) sont des relecteurs spécialisés que Claude peut
  lancer : `code-reviewer`, `security-auditor`, `test-engineer`,
  `web-performance-auditor`.

Certains skills « founder » écrivent un fichier `founder/idea.md` dans le projet
pour garder le contexte de l'idée entre deux conseillers.

## Contenu

### Conseillers « founder » (avis critique sur le projet)
`founder-board` (comité qui challenge l'idée via 3 cadres publics : Offres,
Monopole, Produit), `founder-offer`, `founder-pricing`, `founder-marketing`,
`founder-brand`, `founder-competitors`, `founder-cfo`, `founder-ops`,
`founder-launch`, `founder-plan`.

> La simulation de 100 clients (`founder-consumer`) n'a **pas** été installée :
> ce sont des acheteurs simulés, pas une vraie validation marché.

### Skills de développement (cycle complet)
Spec, planification, build incrémental, revue, tests, sécurité, performance,
frontend, git, documentation, debugging, etc. (25 skills).

## Provenance & licences

Ces fichiers proviennent de deux projets open source (licence **MIT**), copiés
tels quels, sans les hooks shell ni les configs multi-hôtes :

- **agent-skills** — Addy Osmani — https://github.com/addyosmani/agent-skills
  (skills `*`, agents, `references/`)
- **founder-skill** — Jake Schincariol — https://github.com/Jakeschincariol/founder-skill
  (skills `founder-*` sauf `founder-consumer`)

Crédit et licence MIT appartiennent à leurs auteurs respectifs. Tu peux
supprimer n'importe quel dossier de `skills/` dont tu ne veux pas.
