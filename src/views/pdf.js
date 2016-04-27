import {h} from 'cycle-snabbdom'
import {assetsDir} from 'settings'

export function renderPdf(editionId){
  let content = []
  if (editionId === "pending") {
    content = [
      h('div.ai-pdf-pending', [
          h('img', {attrs:{src:`${assetsDir}/ajax-loader.gif`, alt:"en cours de traitement..."}}),
          h("div", "Édition des documents...")
        ])
    ]
  } else {
    content = [
      // h('h2', `Édition du parcours ${editionId}`),
      h('h2', `Sauvegardez votre livre`),
      h("div", "Grâce à votre lecture, l’Arbre Intégral a terminé son évolution."),
      h("div", ["En circulant dans le réseau de ses branches, vous avez généré ", h("strong", "un livre unique.") ]),
      h("div#ai-pdf--apercu", [
        h('img', {attrs:{src:`${assetsDir}/cover.png`, alt:"couverture"}}),
        h('img', {attrs:{src:`${assetsDir}/double-page.png`, alt:"interieur"}})
      ]),
      h("div", ["Vous pouvez le sauvegarder dans ", h("strong", "une version PDF"), " numérotée et datée puis, si vous le souhaitez, le matérialiser ", h("strong", ["via la plateforme Blook", h("sup", "up")]), ", partenaire de l’Arbre Intégral, pour un prix de 28 € (hors frais de port)." ]),
      h("div", "Quelques minutes et quelques clics suffiront."),
      h('h3', `Étapes`),

      h("div", "Étape 1 : Téléchargez le contenu édité et la couverture de votre livre en cliquant sur les liens ci-dessous :"),
      h("ul", [
          h("li", [h('a', {attrs:{rel: "external", download: `ArbreIntegral-${editionId}.pdf`, href: `/aibooks/ArbreIntegral-${editionId}.pdf`}}, `Contenu de votre livre`)]),
          h("li", [h('a', {attrs:{rel: "external", download: `ArbreIntegral-${editionId}-couverture.jpg`, href: `/aibooks/ArbreIntegral-${editionId}-couverture.jpg`}}, `Couverture de votre livre`)]),
        ]),

      h("div", ["Étape 2 : Rendez-vous sur le site ", h("a", {attrs:{href: `http://www.blookup.com`}}, "Blookup"), " et créez votre compte utilisateur."]),
      h("div", ["Étape 3 : Cliquez sur l’onglet ", h('strong',"Blookshop"), " puis sur ", h('strong', "Créez votre livre maintenant"), "."]),
      h("div", ["Étape 4 (contenu) : Sélectionnez votre plateforme, ", h('strong', "choisissez PDF"), " puis téléchargez le ", h('strong', "contenu édité"), " du livre, sauvegardé sur votre terminal à l’étape 1."]),
      h("div", ["Étape 5 (format) : La maquette de l’Arbre Intégral correspond au format A6 ", h('strong', "(10X15 cm)"), " bientôt disponible sur Blookup. Il est possible, en attendant, d’utiliser le format 15x21 cm."]),
      h("div", ["Étape 6 (couverture et quatrième de couverture) : Choisissez le modèle de couverture ", h('strong', "100% perso"), " et importez la ", h('strong', "couverture du livre"), ", sauvegardée sur votre terminal à l’étape 1. Choisissez le ", h('strong', "noir"), " comme couleur pour la quatrième de couverture. Il est inutile de remplir les autres champs. "]),
      h("div", "Etape 7 : Réglez et recevez votre livre.")
    ]
  }

  return h('div.main-container', [ 
    h('div#ai-pdf.navigate-content', content),
    h("div.breadcrumb", [
      h('div', 'Édition du parcours')
    ])
  ]);
}
