
const baseUrl = 'https://ravi-kumar-rana0795.github.io/my-website-api';

const  fetcher = async<TRespose>(url: string) : Promise<TRespose> => {
  const fullUrl = `${baseUrl}${url}`;
  try {
    const res = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
    }

    const data: TRespose = await res.json();
    return data;
  } catch (err) {
    console.error('Fetcher error:', err);
    throw err;
  }
}

export default fetcher;
