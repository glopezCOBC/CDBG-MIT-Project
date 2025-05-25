var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PerformanceMeasures_1 = new ol.format.GeoJSON();
var features_PerformanceMeasures_1 = format_PerformanceMeasures_1.readFeatures(json_PerformanceMeasures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerformanceMeasures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerformanceMeasures_1.addFeatures(features_PerformanceMeasures_1);
var lyr_PerformanceMeasures_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerformanceMeasures_1, 
                style: style_PerformanceMeasures_1,
                popuplayertitle: 'Performance Measures',
                interactive: true,
                title: '<img src="styles/legend/PerformanceMeasures_1.png" /> Performance Measures'
            });
var format_ActivityMidpoints_2 = new ol.format.GeoJSON();
var features_ActivityMidpoints_2 = format_ActivityMidpoints_2.readFeatures(json_ActivityMidpoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActivityMidpoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActivityMidpoints_2.addFeatures(features_ActivityMidpoints_2);
var lyr_ActivityMidpoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActivityMidpoints_2, 
                style: style_ActivityMidpoints_2,
                popuplayertitle: 'Activity Midpoints',
                interactive: true,
                title: '<img src="styles/legend/ActivityMidpoints_2.png" /> Activity Midpoints'
            });
var format_StormSewer_3 = new ol.format.GeoJSON();
var features_StormSewer_3 = format_StormSewer_3.readFeatures(json_StormSewer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StormSewer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StormSewer_3.addFeatures(features_StormSewer_3);
var lyr_StormSewer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StormSewer_3, 
                style: style_StormSewer_3,
                popuplayertitle: 'Storm Sewer',
                interactive: true,
                title: '<img src="styles/legend/StormSewer_3.png" /> Storm Sewer'
            });
var format_Inlets_4 = new ol.format.GeoJSON();
var features_Inlets_4 = format_Inlets_4.readFeatures(json_Inlets_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inlets_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inlets_4.addFeatures(features_Inlets_4);
var lyr_Inlets_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inlets_4, 
                style: style_Inlets_4,
                popuplayertitle: 'Inlets',
                interactive: true,
                title: '<img src="styles/legend/Inlets_4.png" /> Inlets'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_PerformanceMeasures_1.setVisible(true);lyr_ActivityMidpoints_2.setVisible(true);lyr_StormSewer_3.setVisible(true);lyr_Inlets_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_PerformanceMeasures_1,lyr_ActivityMidpoints_2,lyr_StormSewer_3,lyr_Inlets_4];
lyr_PerformanceMeasures_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'LinearFT': 'LinearFT', });
lyr_ActivityMidpoints_2.set('fieldAliases', {'id': 'id', 'Location': 'Location', 'Length_LF': 'Length_LF', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'LF': 'LF', });
lyr_StormSewer_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Inlets_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_PerformanceMeasures_1.set('fieldImages', {'id': '', 'Name': '', 'LinearFT': '', });
lyr_ActivityMidpoints_2.set('fieldImages', {'id': '', 'Location': '', 'Length_LF': '', 'Longitude': '', 'Latitude': '', 'LF': '', });
lyr_StormSewer_3.set('fieldImages', {'id': '', 'Name': '', });
lyr_Inlets_4.set('fieldImages', {'id': '', 'Name': '', });
lyr_PerformanceMeasures_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'LinearFT': 'no label', });
lyr_ActivityMidpoints_2.set('fieldLabels', {'id': 'hidden field', 'Location': 'hidden field', 'Length_LF': 'hidden field', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'LF': 'hidden field', });
lyr_StormSewer_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', });
lyr_Inlets_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', });
lyr_Inlets_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});