exports.definition = {
	
	config: {
		"columns": {
			"icon_id":"INT PRIMARY KEY AUTOINCREMENT",
			"icon_type_id":"tinyint",
			"icon_name":"string",
			"updated":"datetime"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "icons",
			// idAttribute tells Alloy/Backbone to use this column in
			// my table as its unique identifier field. Without
			// specifying this, Alloy's default behavior is to create
			// and "alloy_id" field which will uniquely identify your
			// rows in the table with a text GUID.
			"idAttribute": "icon_id"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here

		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

