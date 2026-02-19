var SHEET_ID = '1gBrA2a9_PDAMNaukRcMG-DpGwmHqPCfEocu--I84suQ';
var SHEET_NAME = 'Hoja 1';

function doPost(e) {
  try {
    var doc = SpreadsheetApp.openById(SHEET_ID);
    var sheet = doc.getSheetByName(SHEET_NAME);
    
    var rowData = [
      new Date(),
      e.parameter.nombre,
      e.parameter.grado,
      e.parameter.codigo,
      e.parameter.cual,
      e.parameter.lugar,
      e.parameter.hora_contacto,
      e.parameter.telefono,
      e.parameter.whatsapp,
      e.parameter.correo,
      e.parameter.programa
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'message': err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
