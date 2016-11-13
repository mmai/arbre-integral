import {h} from 'cycle-snabbdom'
import {assetsDir, baseUrl} from 'settings'

export function renderPdf(editionId){
  let content = []
  if (false) {
  // if (editionId === "pending") {
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
        h('a.img-zoomable', {attrs:{rel: "external", href:"#img-cover-full"}}, [
            h('img', {attrs:{src:`${assetsDir}/cover.png`, alt:"couverture"}}),
          ]),
        h('a#img-cover-full.lightbox', {attrs:{rel: "external", href:"#_"}}, [
            h('img', {attrs:{src:`${assetsDir}/cover-full.png`, alt:"couverture"}}),
          ]),
        h('a.img-zoomable', {attrs:{rel: "external", href:"#img-double-page-full"}}, [
            h('img', {attrs:{src:`${assetsDir}/double-page.png`, alt:"interieur"}}),
          ]),
        h('a#img-double-page-full.lightbox', {attrs:{rel: "external", href:"#_"}}, [
            h('img', {attrs:{src:`${assetsDir}/double-page-full.png`, alt:"interieur"}}),
          ]),
      ]),
      h("div", ["Vous pouvez en obtenir une version papier ", h("strong", "signée par l'auteur"), " et soigneusement éditée par nos soins. Format A6 (10x15cm), dos carré collé." ]),
      h("div", "La couverture comprend le tracé et le numéro de votre parcours. Le texte est paginé dans l’ordre de votre lecture et est augmenté des feuillets de titre, faux titre, exergue, dédicace, bibliographie et achevé d’imprimer."),
      h("div", ["Il vous suffit de régler votre commande via Paypal en selectionnant la zone de livraison et en cliquant sur le bouton ci-dessous."]),

      ,h("form", {attrs:{action: "https://www.paypal.com/cgi-bin/webscr", method:"post", target:"_top"}}, [
      // ,h("form", {attrs:{action: "https://www.sandbox.paypal.com/cgi-bin/webscr", method:"post", target:"_top"}}, [//XXX Sandbox
          h("input", {attrs:{type: "hidden", name:"cmd", value:"_s-xclick"}})
          ,h("input", {attrs:{type: "hidden", name:"hosted_button_id", value:"CYNJX63V9Z2CJ"}})
          // ,h("input", {attrs:{type: "hidden", name:"hosted_button_id", value:"E7KPZ7UYMURP2"}})//XXX Sandbox
          ,h("input", {attrs:{type: "hidden", name:"notify_url", value:`${baseUrl}/index.php?wp_paypal_ipn=1`}})

          ,h("input", {attrs:{type: "hidden", name:"item_number", value:`${editionId}`}})
          ,h("input", {attrs:{type: "hidden", name:"custom", value:`${editionId}`}})
          ,h("table", [
              h("tr", [
                  h("td", {attrs:{colspan:2}}, [
                      h("input", {attrs:{type: "hidden", name:"on0", value:"Prix, frais de port inclus"}}),
                      // h("input", {attrs:{type: "hidden", name:"on0", value:"livraison"}}),//XXX Sandbox

                      h("div", "Prix du livre signé, frais de port inclus. France : 28 €. Étranger : 33 €."),
                    ]),
                ]),
              h("tr", [
                  h("td", {attrs:{style:"vertical-align:top;"}}, [
                      h("select", {attrs:{name:"os0"}}, [
                          // h("option", {attrs:{value:"france"}}, "Livraison France €28,00 EUR"), //XXX Sandbox
                          // h("option", {attrs:{value:"etranger"}}, "Livraison Etranger €33,00 EUR") //XXX Sandbox

                          h("option", {attrs:{value:"Livraison France"}}, "Livraison France €28,00 EUR"), 
                          h("option", {attrs:{value:"Livraison Etranger"}}, "Livraison Etranger €33,00 EUR") 
                        ])
                    ]),
                  h("td", [
                      // h("input", {attrs:{type: "image", src: "https://www.sandbox.paypal.com/fr_FR/FR/i/btn/btn_buynowCC_LG.gif", name:"submit", border:"0", alt:"PayPal, le réflexe sécurité pour payer en ligne"}})//XXX Sandbox

                      // ,h("img", {attrs:{border: "0", src: "https://www.sandbox.paypal.com/fr_FR/FR/i/scr/pixel.gif", width:"1", height:"1"}})//XXX Sandbox

                      h("input", {attrs:{type: "image", src: "https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_buynowCC_LG.gif", name:"submit", border:"0", alt:"PayPal, le réflexe sécurité pour payer en ligne"}})
                      ,h("img", {attrs:{border: "0", src: "https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif", width:"1", height:"1"}})
                    ]),
                ])
            ])
          ,h("input", {attrs:{type: "hidden", name:"currency_code", value:"EUR"}})
        ])
      ,h("div", ["Pour toute information concernant la commande, veuillez nous contacter à l'adresse poemevolume@hotmail.com."]),
      ,h("div", "Vous pouvez également télécharger le contenu et la couverture de votre livre en cliquant sur les liens ci-dessous :"),
      ,h("ul", [
          h("li", [h('a', {attrs:{rel: "external", download: `ArbreIntegral-${editionId}.pdf`, href: `/aibooks/ArbreIntegral-${editionId}.pdf`}}, `Contenu de votre livre`)])
          ,h("li", [h('a', {attrs:{rel: "external", download: `ArbreIntegral-${editionId}-couverture.pdf`, href: `/aibooks/ArbreIntegral-${editionId}-couverture.pdf`}}, `Couverture de votre livre`)]),
        ])

    ]
  }

  return h('div.main-container', [ 
    h('div#ai-pdf.edito-container', content),
    h("div.breadcrumb", [
      h('div', 'Édition du parcours')
    ])
  ]);
}
