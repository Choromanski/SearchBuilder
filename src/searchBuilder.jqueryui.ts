/*! JQuery ui ui integration for DataTables' SearchBuilder
 * ©2016 SpryMedia Ltd - datatables.net/license
 */
// Hack to allow TypeScript to compile our UMD
declare var define: {
	(string, Function): any;
	amd: string;
};
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery', 'datatables.net-ju', 'datatables.net-searchbuilder'], function($) {
			return factory($, window, document);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		module.exports = function(root, $) {
			if (! root) {
				root = window;
			}

			if (! $ || ! $.fn.dataTable) {
				$ = require('datatables.net-ju')(root, $).$;
			}

			if (! $.fn.dataTable.searchBuilder) {
				require('datatables.net-searchbuilder')(root, $);
			}

			return factory($, root, root.document);
		};
	}
	else {
		// Browser
		factory(jQuery, window, document);
	}
}(function($, window, document) {
'use strict';
let DataTable = $.fn.dataTable;

$.extend(true, DataTable.SearchBuilder.classes, {
	clearAll: 'ui-button ui-corner-all ui-widget dtsb-clearAll'
});

$.extend(true, DataTable.Group.classes, {
	add: 'ui-button ui-corner-all ui-widget dtsb-add',
	clearGroup: 'ui-button ui-corner-all ui-widget dtsb-clearGroup',
	logic: 'ui-button ui-corner-all ui-widget dtsb-logic',
});

$.extend(true, DataTable.Criteria.classes, {
	condition: 'ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all dtsb-condition',
	data: 'ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all dtsb-data',
	delete: 'ui-button ui-corner-all ui-widget dtsb-delete',
	left: 'ui-button ui-corner-all ui-widget dtsb-left',
	right: 'ui-button ui-corner-all ui-widget dtsb-right',
	value: 'ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all dtsb-value',
});

return DataTable.searchPanes;
}));
