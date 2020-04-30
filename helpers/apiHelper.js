import fetch from 'node-fetch'

export async function getMessages(countryCode, licensePlate)
{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const res = await fetch(`${process.env.BACKEND_BASE_URI}/message/get?countryCode=${countryCode}&licensePlate=${licensePlate}`, { method: 'GET'});
    const messages = await res.json();
    return messages;
}