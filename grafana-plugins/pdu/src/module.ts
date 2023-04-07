import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre',
      name: 'Nombre',
      description: 'Nombre de pdu',
    })
    .addTextInput({
      path: 'fase',
      name: 'Fase',
      description: 'Fase donde esta el pdu',
    })
    .addTextInput({
      path: 'sistema',
      name: 'Sistema',
      description: 'Sistema donde esta el pdu',
    })
    .addTextInput({
      path: 'marca',
      name: 'Marca',
      description: 'Marca del pdu',
    })
    .addTextInput({
      path: 'modelo',
      name: 'Modelo',
      description: 'Modelo del pdu',
    })
    .addTextInput({
      path: 'ubicacion',
      name: 'Ubicación',
      description: 'Ubicación del pdu',
    });
    
});
