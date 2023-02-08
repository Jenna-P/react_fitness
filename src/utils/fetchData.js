export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5f47d8a4cmshad9fb50cac7287fp195651jsn440713060a57',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
}

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
     const data = await res.json();

  return data;
};