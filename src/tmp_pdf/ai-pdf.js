import {makeVizPDF} from './arbreintegralVizPdf'

export function makePDF(AI, history) {
  const bgColor = "#eeeeee"
  const textColor = "#000000"

  const doc = new PDFDocument({
    layout: 'landscape',
    size: 'A6'
  })
  const stream = doc.pipe(blobStream())

  doc.font('Times-Roman')

  // Cover
  doc
    .moveTo(0, 0).rect(0, 0, 420, 298).fillAndStroke(bgColor, bgColor)
    .fill(textColor);

    doc.fontSize(30)
      .text(`L'Arbre Intégral`, 110, 40, {lineBreak: false})
    makeVizPDF(AI, doc, history);

  let numPage = 1

  doc.fontSize(16)

  // One page per leaf
  for (let leafinfo of history){
    let leaf = AI.getLeaf(leafinfo.pathname)
    doc
      .addPage()
      .moveTo(0, 0).rect(0, 0, 420, 298).fillAndStroke(bgColor, bgColor)
      .fill(textColor);

    doc.text(leaf.content, {align: 'center'})
    doc.text(numPage++, 200, 270, {lineBreak: false})
  }

  doc.end()
  stream.on('finish', function(){
      // get a blob you can do whatever you like with
      // blob = stream.toBlob('application/pdf')

      // or get a blob URL for display in the browser
      let url = stream.toBlobURL('application/pdf')
      // iframe.src = url
      window.open(url)
    });

  /*var docDefinition = {
    pageSize: 'A6',
    pageOrientation: 'landscape',
    content: [
      {text: 'Arbre Intégral', fontSize: 30, alignment: 'center', pageBreak: 'after', fillColor: 'gray'},
      {text: 'Boloblolo', fontSize: 15, alignment: 'center', pageBreak: 'after'},
  ],
    footer: function (currentPage){
      return { text: currentPage, alignment: 'center' }
    },
  };
//  pdfMake.createPdf(docDefinition).open();
 pdfMake.createPdf(docDefinition).download('arbre-integral.pdf');
 */

}

