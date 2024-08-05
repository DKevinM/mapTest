const options = {
    key: 'yVY0cXn4PmZ0G3BjUvQ7IpSqOG48bgiL',
    lat: 53.535645,
    lon: -113.47194,
    zoom: 5,
};

windyInit(options, windyAPI => {
    const { map } = windyAPI;
    L.popup()
        .setLatLng([53.535645, -113.47194])
        .setContent('Windy map integrated!')
        .openOn(map);

});
