const axios = require("axios");

exports.handler = async function(event, context, callback) {

  const { lat, lon } = event.queryStringParameters;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  console.log('fetching :', url);

  const response = await axios.get(url);
  console.log('response :', response);
  callback(null, {
    statusCode: 200,
    body: response.data
  });

}
