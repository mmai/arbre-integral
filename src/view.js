import {h} from '@cycle/dom';
const lastLeafId = "0111111"

import {renderDashboard} from './views/dashboard'
import {renderCover}     from './views/cover'
import {renderPoem}      from './views/poem';
import {renderEnd}       from './views/end'
import {renderPdf}       from './views/pdf';

import {shareView}       from './views/share';

// export default function view(state, history, progressionVtree, aiLogoSvgVTree, aiSvgVTree){
export default function view(dashboardView, state){
  let views = [];
  // let dashboardView = renderDashboard(state.showDashboard, state.isUpside, history, progressionVtree, aiLogoSvgVTree, aiSvgVTree);
  if (window.aiPageType === "wordpress") {
    views.push(h('div'))//XXX if not present, it seems to harm virtual-dom (it makes fail e2e test "poem is made of 3 circles divs" for example), I don't know exactly why :-( ...
    views.push(dashboardView)
  } else if (state.pathname === 'pdf') {
    views.push(renderPdf(state.editionId));
    views.push(dashboardView)
  } else {
    if ( 0 === state.history.length){
      views.push(renderPoem(state.isUpside, state.leafInfos))
      views.push(renderCover());
    } else {
      if (state.leafInfos.leaf.id === lastLeafId) {
        views.push(renderEnd(state.leafInfos));
      } else {
        views.push(renderPoem(state.isUpside, state.leafInfos))
      }
      views.push(dashboardView);
      views.push(shareView)
    }
  }
  return h("div#ai-page", views)
  // return h("div", 'Page non trouvée');
}

