/**
 * Reverse Geocode para buscar o endereço.
 * @param lat Latitude
 * @param lng Longitude
 * @returns Endereço
 */
export async function reverseGeocode(lat: number, lng: number): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao buscar endereço reverso");
  }

  const data = await response.json();
  return data.display_name || "Endereço desconhecido";
}