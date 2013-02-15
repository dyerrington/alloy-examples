exports.definition = {
  
	config: {
		"columns": {
			"user_icon_id":"INT PRIMARY KEY AUTOINCREMENT",
			"user_id":"tinyint",
			"icon_id":"int",
			"updated":"datetime"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "user_icons",
      "idAttribute": "user_icon_id"
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
