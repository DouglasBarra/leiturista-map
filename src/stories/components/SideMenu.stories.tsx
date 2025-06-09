import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SideMenu from '../../components/SideMenu';

const meta = {
  title: 'Components/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
  args: { onClose: () => {} },
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockStartPoint = {
  lat: -23.5505,
  lng: -46.6333,
  address: 'Av. Paulista, São Paulo - SP',
};

const mockEndPoint = {
  lat: -22.9068,
  lng: -43.1729,
  address: 'Copacabana, Rio de Janeiro - RJ',
};

const mockStops = [
  {
    lat: -23.1234,
    lng: -46.4321,
    address: 'Parada 1 - São Caetano do Sul, SP',
  },
  {
    lat: -22.8901,
    lng: -43.2100,
    address: 'Parada 2 - Niterói, RJ',
  },
];

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: fn(),
    startPoint: null,
    endPoint: null,
    onStartPointChange: fn(),
    onEndPointChange: fn(),
    onCalculateRoute: fn(),
  },
};

export const OpenEmpty: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    startPoint: null,
    endPoint: null,
    onStartPointChange: fn(),
    onEndPointChange: fn(),
    onCalculateRoute: fn(),
  },
};

export const OpenWithStart: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    startPoint: mockStartPoint,
    endPoint: null,
    onStartPointChange: fn(),
    onEndPointChange: fn(),
    onCalculateRoute: fn(),
  },
};

export const OpenWithStartAndEnd: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    startPoint: mockStartPoint,
    endPoint: mockEndPoint,
    onStartPointChange: fn(),
    onEndPointChange: fn(),
    onCalculateRoute: fn(),
  },
};

export const OpenWithStops: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    startPoint: mockStartPoint,
    endPoint: mockEndPoint,
    stops: mockStops,
    onStartPointChange: fn(),
    onEndPointChange: fn(),
    onCalculateRoute: fn(),
  },
};
