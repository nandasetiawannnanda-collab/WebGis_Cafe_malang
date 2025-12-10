ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([112.441171, -8.111693, 112.778121, -7.843061]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Administrasi_Kotamalang_2023_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kotamalang_2023_1 = format_Batas_Administrasi_Kotamalang_2023_1.readFeatures(json_Batas_Administrasi_Kotamalang_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Batas_Administrasi_Kotamalang_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kotamalang_2023_1.addFeatures(features_Batas_Administrasi_Kotamalang_2023_1);
var lyr_Batas_Administrasi_Kotamalang_2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_Kotamalang_2023_1, 
                style: style_Batas_Administrasi_Kotamalang_2023_1,
                popuplayertitle: 'Batas_Administrasi_Kotamalang_2023',
                interactive: true,
    title: 'Batas_Administrasi_Kotamalang_2023<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_0.png" /> Blimbing<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_1.png" /> Kedungkandang<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_2.png" /> Klojen<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_3.png" /> Lowokwaru<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_4.png" /> Sukun<br />' });
var format_JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_2 = format_JALAN_LN_25K_2.readFeatures(json_JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_2.addFeatures(features_JALAN_LN_25K_2);
var lyr_JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_2, 
                style: style_JALAN_LN_25K_2,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_2.png" /> JALAN_LN_25K'
            });
var format_Point_Persebaran_Cafe_Malang_3 = new ol.format.GeoJSON();
var features_Point_Persebaran_Cafe_Malang_3 = format_Point_Persebaran_Cafe_Malang_3.readFeatures(json_Point_Persebaran_Cafe_Malang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Point_Persebaran_Cafe_Malang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Persebaran_Cafe_Malang_3.addFeatures(features_Point_Persebaran_Cafe_Malang_3);
var lyr_Point_Persebaran_Cafe_Malang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_Persebaran_Cafe_Malang_3, 
                style: style_Point_Persebaran_Cafe_Malang_3,
                popuplayertitle: 'Point_Persebaran_Cafe_Malang',
                interactive: true,
                title: '<img src="styles/legend/Point_Persebaran_Cafe_Malang_3.png" /> Point_Persebaran_Cafe_Malang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Batas_Administrasi_Kotamalang_2023_1.setVisible(true);lyr_JALAN_LN_25K_2.setVisible(true);lyr_Point_Persebaran_Cafe_Malang_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Batas_Administrasi_Kotamalang_2023_1,lyr_JALAN_LN_25K_2,lyr_Point_Persebaran_Cafe_Malang_3];
lyr_Batas_Administrasi_Kotamalang_2023_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Lat': 'Lat', 'Long': 'Long', });
lyr_JALAN_LN_25K_2.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_Point_Persebaran_Cafe_Malang_3.set('fieldAliases', {'Nama_Cafe': 'Nama_Cafe', 'Rate_Cafe': 'Rate_Cafe', 'Alamat': 'Alamat', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kode_Pos': 'Kode_Pos', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'X': 'X', 'Y': 'Y', });
lyr_Batas_Administrasi_Kotamalang_2023_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_JALAN_LN_25K_2.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', });
lyr_Point_Persebaran_Cafe_Malang_3.set('fieldImages', {'Nama_Cafe': 'TextEdit', 'Rate_Cafe': 'TextEdit', 'Alamat': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode_Pos': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Batas_Administrasi_Kotamalang_2023_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_JALAN_LN_25K_2.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', });
lyr_Point_Persebaran_Cafe_Malang_3.set('fieldLabels', {'Nama_Cafe': 'no label', 'Rate_Cafe': 'no label', 'Alamat': 'no label', 'Desa': 'no label', 'Kecamatan': 'no label', 'Kode_Pos': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Point_Persebaran_Cafe_Malang_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});