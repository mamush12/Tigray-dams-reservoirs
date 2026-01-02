var wms_layers = [];

var format_Tigray_0 = new ol.format.GeoJSON();
var features_Tigray_0 = format_Tigray_0.readFeatures(json_Tigray_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tigray_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tigray_0.addFeatures(features_Tigray_0);
var lyr_Tigray_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tigray_0, 
                style: style_Tigray_0,
                popuplayertitle: 'Tigray',
                interactive: false,
                title: '<img src="styles/legend/Tigray_0.png" /> Tigray'
            });
var format_Tigray_road_1 = new ol.format.GeoJSON();
var features_Tigray_road_1 = format_Tigray_road_1.readFeatures(json_Tigray_road_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tigray_road_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tigray_road_1.addFeatures(features_Tigray_road_1);
var lyr_Tigray_road_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tigray_road_1, 
                style: style_Tigray_road_1,
                popuplayertitle: 'Tigray_road',
                interactive: false,
    title: 'Tigray_road<br />\
    <img src="styles/legend/Tigray_road_1_0.png" /> primary<br />\
    <img src="styles/legend/Tigray_road_1_1.png" /> secondary<br />\
    <img src="styles/legend/Tigray_road_1_2.png" /> trunk<br />' });
var format_DamsandReservoirs_2 = new ol.format.GeoJSON();
var features_DamsandReservoirs_2 = format_DamsandReservoirs_2.readFeatures(json_DamsandReservoirs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DamsandReservoirs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DamsandReservoirs_2.addFeatures(features_DamsandReservoirs_2);
var lyr_DamsandReservoirs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DamsandReservoirs_2, 
                style: style_DamsandReservoirs_2,
                popuplayertitle: 'Dams and Reservoirs',
                interactive: true,
                title: '<img src="styles/legend/DamsandReservoirs_2.png" /> Dams and Reservoirs'
            });
var format_Dams_3 = new ol.format.GeoJSON();
var features_Dams_3 = format_Dams_3.readFeatures(json_Dams_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dams_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dams_3.addFeatures(features_Dams_3);
var lyr_Dams_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dams_3, 
                style: style_Dams_3,
                popuplayertitle: 'Dams',
                interactive: false,
                title: '<img src="styles/legend/Dams_3.png" /> Dams'
            });

lyr_Tigray_0.setVisible(true);lyr_Tigray_road_1.setVisible(true);lyr_DamsandReservoirs_2.setVisible(true);lyr_Dams_3.setVisible(true);
var layersList = [lyr_Tigray_0,lyr_Tigray_road_1,lyr_DamsandReservoirs_2,lyr_Dams_3];
lyr_Tigray_0.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm1_ref_n': 'adm1_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Tigray_road_1.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_aa': 'name_aa', 'name_am': 'name_am', 'name_om': 'name_om', 'name_so': 'name_so', 'name_ti': 'name_ti', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_DamsandReservoirs_2.set('fieldAliases', {'Name': 'Name', 'Res A sqm': 'Res A sqm', 'Axis L m': 'Axis L m', 'Wereda': 'Wereda', 'Zone': 'Zone', });
lyr_Dams_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Dam axis m': 'Dam axis m', });
lyr_Tigray_0.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm1_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Tigray_road_1.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'width': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'source': 'TextEdit', 'name_aa': 'TextEdit', 'name_am': 'TextEdit', 'name_om': 'TextEdit', 'name_so': 'TextEdit', 'name_ti': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_DamsandReservoirs_2.set('fieldImages', {'Name': 'TextEdit', 'Res A sqm': 'TextEdit', 'Axis L m': 'TextEdit', 'Wereda': 'TextEdit', 'Zone': 'TextEdit', });
lyr_Dams_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Dam axis m': 'TextEdit', });
lyr_Tigray_0.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm1_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Tigray_road_1.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_aa': 'no label', 'name_am': 'no label', 'name_om': 'no label', 'name_so': 'no label', 'name_ti': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_DamsandReservoirs_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Res A sqm': 'inline label - visible with data', 'Axis L m': 'inline label - visible with data', 'Wereda': 'inline label - visible with data', 'Zone': 'inline label - visible with data', });
lyr_Dams_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Dam axis m': 'no label', });
lyr_Dams_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});