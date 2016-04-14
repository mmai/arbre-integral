const leafRadius = 1;
const circleRadius = 15;
const origin = {x:210, y:170};
const color_up = "green";
const color_down = "brown";
const color_brothers = "#BBBBBB";
const color_default = "black";

const display = {
  circles: true,
  rootPath: false
}

//Driver
export function makeVizPDF(AI, doc, history){

  for (let leafinfo of history){
    newLeaf(leafinfo)
  }

  function newLeaf(dleaf){
    const newLeaf = AI.data[dleaf.pathname];
    const fromLeaf = AI.data[dleaf.from];

    makeLeaf(newLeaf);
    makeJoinLine(fromLeaf, newLeaf);
  }

  function makeLeaf (leaf){
    const coords = AI.getCoords(leaf);
    const type = AI.getType(leaf);
    const pos = getPosFromCoords(coords);
    const color = (type == 'UP')?color_up:color_down;

    doc.circle(pos.x, pos.y, leafRadius).fillAndStroke(color, color)
  }

  function makeJoinLine(fromLeaf, toLeaf) {
    let coordsFrom = AI.getCoords(fromLeaf);
    let coordsTo = AI.getCoords(toLeaf);

    let color = (AI.getType(fromLeaf) == 'UP')?color_up:color_down;

    if (coordsFrom.circ == coordsTo.circ && coordsFrom.pos != coordsTo.pos){
      if (display.circles){
        //Reverse arc direction if destination is 'before' start leaf
        let diff = coordsTo.pos - coordsFrom.pos;
        if ( diff == -1 || diff > 1 ){
          let tmp = coordsFrom;
          coordsFrom = coordsTo;
          coordsTo = tmp;
        }

        makeArcBetweenLeafs(coordsFrom, coordsTo, color);
      }
    } else {
      makeLineBetweenLeafs(coordsFrom, coordsTo, color);
    }
  }

  function makeArcBetweenLeafs (from, to, color){
    const posfrom = getPosFromCoords(from);
    const posto = getPosFromCoords(to);
    // const line = two.makeLine(posfrom.x, posfrom.y, posto.x, posto.y);

    const radius = Math.sqrt(Math.pow(posto.x - origin.x, 2) + Math.pow(posto.y - origin.y, 2));

    let polarfrom = polarCoords({x: posfrom.x - origin.x, y:origin.y - posfrom.y});
    let polarto = polarCoords({x: posto.x - origin.x, y:origin.y - posto.y});

    let path = pathArc(
      origin.x, origin.y,
      radius, 
      0 - polarfrom.angle,
      0 - polarto.angle,
      false
    );
    doc.path(path).stroke(color);
    // line.rotation = 0 - Math.PI/2 - polarto.angle;
  }

  function makeLineBetweenLeafs (from, to, color){
    const posfrom = getPosFromCoords(from);
    const posto = getPosFromCoords(to);
    doc.moveTo(posfrom.x, posfrom.y).lineTo(posto.x, posto.y).stroke(color);
  }


  /*********** Coordinates converters *******/
 
  function getPosFromCoords ({circ, pos}){
    if (circ < 1){
      return origin;
    }

    const nbLeafs = Math.pow(2, circ);
    const angleIncrement = Math.PI / (nbLeafs/2 + 1);
    const random = Math.random() * angleIncrement / nbLeafs;
    // let deviation = angleIncrement * 0.5 * (pos % 3 ? 1.2 : 0.9) * (circ % 2 ? 0.9 : 1.1);
    let deviation = angleIncrement * 0.5;
    let angle = Math.PI + deviation - pos * angleIncrement;
    if (pos > nbLeafs/2) {
      angle -= angleIncrement ; 
    }
    const radial = circleRadius * circ; 
    return {
      x: origin.x + radial * Math.cos(angle),
      y: origin.y - radial * Math.sin(angle)
    };
  }

  function polarCoords(pos){
    const r = Math.sqrt(Math.pow(pos.x, 2) + Math.pow(pos.y, 2)); 
    const angle = 2 * Math.atan(pos.y/(pos.x + r));
    return {r:r, angle:angle};
  }

  /** pdfkit helper : give the path for an arc circle **/
  function pathArc (x, y, radius, startAngle, endAngle, anticlockwise) {
    let startX = x + radius * Math.cos(startAngle);
    let startY = y + radius * Math.sin(startAngle);
    let endX = x + radius * Math.cos(endAngle);
    let endY = y + radius * Math.sin(endAngle);
    let arcAngle = endAngle-startAngle;
    let largeArc = (arcAngle > Math.PI) && (startAngle > endAngle) && anticlockwise;

    return "M "+startX+","+startY+
      " A "+radius+","+radius+
      " 0 "+(largeArc?"1":"0")+","+(anticlockwise?"0":"1")+
      " "+endX+","+endY;
  }
}


