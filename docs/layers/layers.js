var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kerkfotografie_1 = new ol.format.GeoJSON();
var features_kerkfotografie_1 = format_kerkfotografie_1.readFeatures(json_kerkfotografie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kerkfotografie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kerkfotografie_1.addFeatures(features_kerkfotografie_1);
var lyr_kerkfotografie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kerkfotografie_1, 
                style: style_kerkfotografie_1,
                popuplayertitle: 'kerkfotografie',
                interactive: true,
                title: '<img src="styles/legend/kerkfotografie_1.png" /> kerkfotografie'
            });
var format_mijnstreek_2 = new ol.format.GeoJSON();
var features_mijnstreek_2 = format_mijnstreek_2.readFeatures(json_mijnstreek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mijnstreek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mijnstreek_2.addFeatures(features_mijnstreek_2);
var lyr_mijnstreek_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mijnstreek_2, 
                style: style_mijnstreek_2,
                popuplayertitle: 'mijnstreek',
                interactive: true,
                title: '<img src="styles/legend/mijnstreek_2.png" /> mijnstreek'
            });
var format_maas_en_waal_3 = new ol.format.GeoJSON();
var features_maas_en_waal_3 = format_maas_en_waal_3.readFeatures(json_maas_en_waal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maas_en_waal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maas_en_waal_3.addFeatures(features_maas_en_waal_3);
var lyr_maas_en_waal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maas_en_waal_3, 
                style: style_maas_en_waal_3,
                popuplayertitle: 'maas_en_waal',
                interactive: true,
                title: '<img src="styles/legend/maas_en_waal_3.png" /> maas_en_waal'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_kerkfotografie_1.setVisible(true);lyr_mijnstreek_2.setVisible(true);lyr_maas_en_waal_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_kerkfotografie_1,lyr_mijnstreek_2,lyr_maas_en_waal_3];
lyr_kerkfotografie_1.set('fieldAliases', {'id': 'id', 'plaats': 'plaats', 'gebouw': 'gebouw', 'link': 'link', });
lyr_mijnstreek_2.set('fieldAliases', {'id': 'id', 'plaats': 'plaats', 'gebouw': 'gebouw', 'link': 'link', });
lyr_maas_en_waal_3.set('fieldAliases', {'id': 'id', 'plaats': 'plaats', 'kerk': 'kerk', 'link': 'link', });
lyr_kerkfotografie_1.set('fieldImages', {'id': 'TextEdit', 'plaats': 'TextEdit', 'gebouw': 'TextEdit', 'link': 'TextEdit', });
lyr_mijnstreek_2.set('fieldImages', {'id': 'TextEdit', 'plaats': 'TextEdit', 'gebouw': 'TextEdit', 'link': 'TextEdit', });
lyr_maas_en_waal_3.set('fieldImages', {'id': 'TextEdit', 'plaats': 'TextEdit', 'kerk': 'TextEdit', 'link': 'TextEdit', });
lyr_kerkfotografie_1.set('fieldLabels', {'id': 'no label', 'plaats': 'no label', 'gebouw': 'no label', 'link': 'no label', });
lyr_mijnstreek_2.set('fieldLabels', {'id': 'no label', 'plaats': 'no label', 'gebouw': 'no label', 'link': 'no label', });
lyr_maas_en_waal_3.set('fieldLabels', {'id': 'no label', 'plaats': 'no label', 'kerk': 'no label', 'link': 'no label', });
lyr_maas_en_waal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});