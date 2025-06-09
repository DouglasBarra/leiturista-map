import { AddressSuggestion } from '../components/SideMenu';

export const fetchAddressSuggestions = async (
  query: string
): Promise<AddressSuggestion[]> => {
  if (!query) return [];

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}&countrycodes=br&limit=5&addressdetails=1`
  );

  if (!response.ok) {
    throw new Error('Erro na requisição');
  }

  const data = await response.json();
  return data;
};
