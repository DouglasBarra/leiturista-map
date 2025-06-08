import { render, screen } from '@testing-library/react';
import SelectedPointsList from '../components/SelectedPointsList';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

const mockStartPoint = {
  address: 'Rua da Partida, 123',
  lat: -23.56,
  lng: -46.64,
};

const mockEndPoint = {
  address: 'Avenida do Destino, 456',
  lat: -23.57,
  lng: -46.65,
};

const mockStops = [
  { address: 'Parada 1', lat: -23.55, lng: -46.63 },
  { address: 'Parada 2', lat: -23.54, lng: -46.62 },
];

describe('SelectedPointsList', () => {
  it('deve renderizar apenas o ponto de partida se somente ele for fornecido', () => {
    const { getByText, queryByText } = render(<SelectedPointsList startPoint={mockStartPoint} endPoint={null} stops={[]} />);
    expect(getByText('Partida')).toBeInTheDocument();
    expect(getByText(mockStartPoint.address)).toBeInTheDocument();
    expect(queryByText('Destino')).not.toBeInTheDocument();
    expect(queryByText(/Paradas/)).not.toBeInTheDocument();
  });

  it('deve renderizar apenas o ponto de destino se somente ele for fornecido', () => {
    const { getByText, queryByText } = render(<SelectedPointsList startPoint={null} endPoint={mockEndPoint} stops={[]} />);
    expect(getByText('Destino')).toBeInTheDocument();
    expect(getByText(mockEndPoint.address)).toBeInTheDocument();
    expect(queryByText('Partida')).not.toBeInTheDocument();
    expect(queryByText(/Paradas/)).not.toBeInTheDocument();
  });

  it('deve renderizar as paradas se fornecidas', () => {
    const { getByText, getAllByText } = render(<SelectedPointsList startPoint={null} endPoint={null} stops={mockStops} />);
    expect(getByText(/Paradas \(2\)/)).toBeInTheDocument();
    expect(getAllByText('Parada 1')).toHaveLength(2);
    expect(getAllByText('Parada 2')).toHaveLength(2);
  });

  it('deve renderizar todos os pontos: partida, paradas e destino', () => {
    const { getByText, getAllByText } = render(<SelectedPointsList startPoint={mockStartPoint} endPoint={mockEndPoint} stops={mockStops} />);
    expect(getByText('Partida')).toBeInTheDocument();
    expect(getByText(mockStartPoint.address)).toBeInTheDocument();

    expect(getByText(/Paradas \(2\)/)).toBeInTheDocument();
    expect(getAllByText('Parada 1')).toHaveLength(2);
    expect(getAllByText('Parada 2')).toHaveLength(2);

    expect(getByText('Destino')).toBeInTheDocument();
    expect(getByText(mockEndPoint.address)).toBeInTheDocument();
  });

  it('não deve renderizar nada se nenhum ponto for fornecido', () => {
    const { container } = render(<SelectedPointsList startPoint={null} endPoint={null} stops={[]} />);
    expect(container.querySelector('ul')?.childElementCount).toBe(0);
  });

  it('expande o accordion ao clicar', async () => {
    const { getAllByText } = render(<SelectedPointsList startPoint={null} endPoint={null} stops={mockStops} />);
    const accordionHeader = screen.getByText(/Paradas \(2\)/);

    await userEvent.click(accordionHeader);

    expect(getAllByText('Parada 1')).toHaveLength(2);
    expect(getAllByText('Parada 2')).toHaveLength(2);
  });
});
