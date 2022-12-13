import Avatar from '@mui/material/Avatar';
import {
  List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { useGetinventoriesQuery } from '../../../store/api/inventory/inventoryApi';


export function InventoryView() {

  const { data: inventories = [], isLoading } = useGetinventoriesQuery();
  return !isLoading && (
    <List>
      {inventories.map((inventory) => (
        <div>

          <ListItem
            key={inventory.id}
          >
            <ListItemAvatar>
              <Avatar>
                <MapsHomeWorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Codigo Aula ${inventory.location.code}`}
              secondary={`Recorder: ${inventory.recorder.first_name} ${inventory.recorder.last_name}, Receiver: ${inventory.receiver.first_name} ${inventory.receiver.last_name}`}
            />
          </ListItem>
          <table style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>
            <tr style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>
              <th style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>Codigo</th>
              <th style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>Denominacion</th>
              <th style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>Marca</th>
              <th style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>Modelo</th>
              <th style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>Color</th>
              <th style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>Serie</th>
              <th style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>Detalle</th>
            </tr>
            {inventory.assets.map((asset) => (
              <tr style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>
                <td style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>{asset.code}</td>
                <td style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>{asset.denomination}</td>
                <td style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>{asset.brand}</td>
                <td style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>{asset.model}</td>
                <td style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>{asset.color}</td>
                <td style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>{asset.serie}</td>
                <td style={{ border: "1px solid black", marginLeft: "auto", marginRight: "auto" }}>{asset.detail}</td>
              </tr>
            ))}
          </table>
        </div>
      ))}
    </List>
  );
}
