const options = {
    key: 'yVY0cXn4PmZ0G3BjUvQ7IpSqOG48bgiL',
    // Changing Windy parameters at start-up time
    // (recommended for faster start-up)
    lat: 53.535645,
    lon: -113.47194,
    zoom: 5,
    hourFormat: '12h',
};

windyInit(options, windyAPI => {
    const { map } = windyAPI;
    L.popup()
        .setLatLng([53.535645, -113.47194])
        .setContent('Windy map integrated!')
        .openOn(map);

    const { store } = windyAPI;
    
    const levels = store.getAllowed('availLevels');

    let i = 0;
    setInterval(() => {
        i = i === levels.length - 1 ? 0 : i + 1;

        store.set('level', levels[i]);
    }, 5000);

    store.on('level', level => {
        console.log(`Level was changed: ${level}`);
    });
});
