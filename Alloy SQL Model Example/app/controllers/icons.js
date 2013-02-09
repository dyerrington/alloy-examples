// Attach the bound model ($model) to the row so 
// we can access it in a click event.
if ($model) {
	Ti.API.info('Firing icons.js controller after boolean $model');
	$.icons.model = $model.toJSON();
	Ti.API.info($.icons.model);
	Ti.API.debug($.icons.model);
}

function viewDetails(e) {
	alert(JSON.stringify(e.row));
}

function deleteIcon(e) {
	Ti.API.info('delete method!!');
	Ti.API.info(JSON.stringify(e.rowData));
}