define{
	'module',
	[],
	function(){
function Model(){
	var self = this; 

	self.data = [];

	self.addItem = function(item){
		if (item.length === 0)	{
			return;
		}


		self.data.push(item);
		return self.data;
	};

	self.removeItem = function(item){	
		var index = self.data.indexOf(item);

		if (index === -1) {
			return;
		};

		self.data.splice(index, 1);

		return self.data;
	};
  self.editItem = function (item, editedItem) {
    var index = self.data.indexOf(item);

    if (index === -1) {
      return;
    };

    self.data.splice(index, 1, editedItem );

    return self.data
  };

};

		return Model
	}
}