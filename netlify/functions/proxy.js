import axios from 'axios';

export async function handler(event, context) {
  try {
    // Extract the POST data from the request
    const requestData = JSON.parse(event.body);

    // Make a POST request to your backend server
    const response = await axios.post(
      'http://upskilling-egypt.com:3000/contact',
      requestData
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({
        error: 'Failed to make a request to the backend server',
      }),
    };
  }
}
