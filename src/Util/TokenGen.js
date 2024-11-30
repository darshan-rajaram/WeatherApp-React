async function getToken(setToken) {
  try {
    const response = await fetch("http://localhost:5146/api/WeatherApp/token");
    if (!response.ok) throw new Error("Failed to fetch token");
    const data = await response.json();
    console.log("got token!!!", data.token);
    setToken(data.token);
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
}

export default getToken;
