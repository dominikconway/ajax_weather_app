// grab the dom elements
$input = $('input')
$button = $('button')
$aside = $('aside')

// click event on button
$button.on("click", () => {
    // get the text the user types
    const searchCity = $input.val()
    // make the api call
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=cd31f16b242de2f8fee15ee0ef1b9b73&units=imperial`)
    .then((data) => {
        console.log(data)
        // set the html inside the aside with the weather data
        $("aside").html(`
        <h1> Weather for: ${data.name}</h1>
        <h1> Temperature: ${data.main.temp}
        <h1> Feels like: ${data.main.feels_like}
        <h1> Weather: ${data.weather[0].description}`)
    })


})