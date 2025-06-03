import { Meta, StoryObj } from '@storybook/react';
import SelectedPointsList from '../../components/SelectedPointsList';

const meta = {
  title: 'Components/SelectedPointsList',
  component: SelectedPointsList,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedPointsList>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockStartPoint = {
  lat: -23.5505,
  lng: -46.6333,
  address: 'Avenida Paulista, São Paulo - SP',
};

const mockEndPoint = {
  lat: -22.9068,
  lng: -43.1729,
  address: 'Praia de Copacabana, Rio de Janeiro - RJ',
};

const mockStops = [
  {
    lat: -23.0000,
    lng: -45.0000,
    address: 'Parada 1 - São José dos Campos, SP',
  },
  {
    lat: -22.5000,
    lng: -44.5000,
    address: 'Parada 2 - Volta Redonda, RJ',
  },
];

export const BothPoints: Story = {
  args: {
    startPoint: mockStartPoint,
    endPoint: mockEndPoint,
  },
};

export const OnlyStartPoint: Story = {
  args: {
    startPoint: mockStartPoint,
    endPoint: null,
  },
};

export const OnlyEndPoint: Story = {
  args: {
    startPoint: null,
    endPoint: mockEndPoint,
  },
};

export const NoPoints: Story = {
  args: {
    startPoint: null,
    endPoint: null,
  },
};

export const WithStops: Story = {
  args: {
    startPoint: mockStartPoint,
    endPoint: mockEndPoint,
    stops: mockStops,
  },
};
