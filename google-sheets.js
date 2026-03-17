const fetch = require('node-fetch'); // If not already available in your environment

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    // Parse URL-encoded form data
    const params = new URLSearchParams(event.body);

    const name = params.get('name') || '';
    const email = params.get('email') || '';
    const message = params.get('message') || '';

    const scriptUrl = 'https://script.google.com/macros/s/AKfycby0YSEi3QR8feKEPNE41eIdnsXR3MTKqsfnFlU8JyVSiKY8lpgkh4if7HEmp827_x5VSg/exec';

    const response = await fetch(scriptUrl + '?nocache=' + Math.random(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        message
      })
    });

    const result = await response.text();

    return {
      statusCode: response.ok ? 200 : 400,
      body: result
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Server Error',
        details: error.message
      })
    };
  }
};
