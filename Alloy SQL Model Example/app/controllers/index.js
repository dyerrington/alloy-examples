var icons = Alloy.Collections.icons;
var counter = 1; // this is only an index that is relevant per instance.

function showId(e) {
	if (e.icons.model) {
		//alert(e.icons.model);
	}
}

function addIcon(e) {
	Ti.API.info('addIcon firing..');
	// create the test fighter model
	var model = Alloy.createModel('icons', {
		icon_type_id: counter,
		icon_name: 'icon' + counter
	});
	counter++;

	// add model to the collection and save it to sqlite
	icons.add(model);
	model.save();
}

function clearIconDB(e) {
	// delete from icons;
	// delete from sqlite_sequence where name='icons';
}

icons.fetch();

$.index.open();
