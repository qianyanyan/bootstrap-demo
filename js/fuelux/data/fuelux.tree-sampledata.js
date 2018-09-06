var DataSourceTree = function(options) {
	this._data 	= options.data;
	this._delay = options.delay;
}

DataSourceTree.prototype.data = function(options, callback) {
	var self = this;
	var $data = null;

	if(!("name" in options) && !("type" in options)){
		$data = this._data;//the root tree
		callback({ data: $data });
		return;
	}
	else if("type" in options && options.type == "folder") {
		if("additionalParameters" in options && "children" in options.additionalParameters)
			$data = options.additionalParameters.children;
		else $data = {}//no data
	}

	if($data != null)//this setTimeout is only for mimicking some random delay
		setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

	//we have used static data here
	//but you can retrieve your data dynamically from a server using ajax call
	//checkout examples/treeview.html and examples/treeview.js for more info
};

var tree_data = {
	'for-sale' : {name: '全部人员 ', type: 'folder', 'icon-class':'blue'}	,
	//'personals' : {name: 'Personals', type: 'item'}
}
tree_data['for-sale']['additionalParameters'] = {
	'children' : {
		'appliances' : {name: '<i class="icon-user blue"></i> 系统管理员<i class="icon-pencil green pull-right">', type: 'item'},
		'arts-crafts' : {name: '<i class="icon-user blue"></i> 销售主管<i class="icon-pencil green pull-right">', type: 'item'},
		'clothing' : {name: '<i class="icon-user blue"></i> 销售人员<i class="icon-pencil green pull-right">', type: 'item'},
		'computers' : {name: '<i class="icon-user blue"></i> 客服主管<i class="icon-pencil green pull-right">', type: 'item'}
	}
}
var treeDataSource = new DataSourceTree({data: tree_data});
var tree_data_2 = {
	'pictures' : {name: '所有模板', type: 'folder', 'icon-class':'green'}	,
}
tree_data_2['pictures']['additionalParameters'] = {
	'children' : {
		'wallpapers' : {name: '平台基本设置', type: 'folder', 'icon-class':'red'},
		'camera' : {name: '人员个人操作', type: 'folder', 'icon-class':'orange'},
		'plat' : {name: '课件库管理', type: 'folder', 'icon-class':'blue'}
	}
}
tree_data_2['pictures']['additionalParameters']['children']['wallpapers']['additionalParameters'] = {
	'children' : [
		{name: '<i class="icon-folder-close pink"></i> wallpaper1.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> wallpaper2.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> wallpaper3.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> wallpaper4.jpg', type: 'item'}
	]
}
tree_data_2['pictures']['additionalParameters']['children']['camera']['additionalParameters'] = {
	'children' : [
		{name: '<i class="icon-folder-close pink"></i> 人员与权限', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> 地区设置', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> 项目管理', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> 考试年月日设置', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> 平台参数设置', type: 'item'}
	]
}
tree_data_2['pictures']['additionalParameters']['children']['plat']['additionalParameters'] = {
	'children' : [
		{name: '<i class="icon-folder-close pink"></i> photo1.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> photo2.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> photo3.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> photo4.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> photo5.jpg', type: 'item'},
		{name: '<i class="icon-folder-close pink"></i> photo6.jpg', type: 'item'}
	]
}
var treeDataSource2 = new DataSourceTree({data: tree_data_2});