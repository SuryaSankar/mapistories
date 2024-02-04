const map = L.map('map').setView([47.04, 9.66], 4);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';
const tileLayer = L.tileLayer.provider('Esri.WorldImagery');
tileLayer.addTo(map);

const featureInfo = function(feature, layer) {
    // var popupContent = '<table>';
    // for (const [key, value] of Object.entries(feature.properties)) {
    //     popupContent += `
    //         <tr>
    //             <th scope="row">${key}</th>
    //             <td>${value !== null ? Autolinker.link(String(value)) : ""}</td>
    //         </tr>
    //     `;
    // } 
    // popupContent += '</table>';
    // layer.bindPopup(popupContent, {maxHeight: 400});
    var label = L.marker(layer.getBounds().getCenter(), {
        icon: L.divIcon({
            className: 'label',
            html: feature.properties.NAME,
            iconSize: [100, 40]
        })
    }).addTo(map);
}
// const cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';
// const positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
//     attribution: cartodbAttribution
// }).addTo(map);
// const positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
//     attribution: cartodbAttribution,
//     pane: 'labels'
// }).addTo(map);
L.marker([13.08, 77.27]).addTo(map);
const geojson = L.geoJson(bc200GeoJson, {
    attribution: '<a href=""></a>',
    onEachFeature: featureInfo,
});
geojson.addTo(map);