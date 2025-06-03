import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RoomIcon from '@mui/icons-material/Room';
import { Point } from '../pages/Map';

interface SelectedPointsListProps {
  startPoint: Point | null;
  endPoint: Point | null;
  stops?: Point[];
}

const SelectedPointsList = ({ startPoint, endPoint, stops = [] }: SelectedPointsListProps) => {
  return (
    <List>
      {startPoint && (
        <ListItem>
          <LocationOnIcon color="primary" sx={{ mr: 1 }} />
          <ListItemText primary="Partida" secondary={startPoint.address} />
        </ListItem>
      )}

      {stops.length > 0 && (
        <Accordion sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="stops-content"
            id="stops-header"
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', ml: 5 }}>
              Paradas ({stops.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0, pl: 5 }}>
            {stops.map((stop, index) => (
              <ListItem key={index} disableGutters>
                <RoomIcon fontSize="small" sx={{ mr: 1, color: 'action.active' }} />
                <ListItemText primary={`Parada ${index + 1}`} secondary={stop.address} />
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
      )}

      {endPoint && (
        <ListItem>
          <LocationOnIcon color="secondary" sx={{ mr: 1 }} />
          <ListItemText primary="Destino" secondary={endPoint.address} />
        </ListItem>
      )}
    </List>
  );
};

export default SelectedPointsList;
