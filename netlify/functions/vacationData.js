// netlify/functions/vacationData.js

let vacationData = {
    'Thea': { days: 0, team: 'Italy' },
    'Isabella': { days: 0, team: 'Italy' },
    'LA': { days: 0, team: 'US' },
    'Linda': { days: 0, team: 'US' },
    'Talia': { days: 0, team: 'US' }
  };
  
  exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify(vacationData),
      };
    }
  
    if (event.httpMethod === 'POST') {
      try {
        const body = JSON.parse(event.body);
        vacationData = { ...vacationData, ...body };
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Data updated successfully', data: vacationData }),
        };
      } catch (error) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid data' }),
        };
      }
    }
  
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  };
  