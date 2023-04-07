import { PanelData,InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataUma } from 'components/variables/variables';
//import alarmaStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';



const DataUMA = (data: PanelData, options: SimpleOptions,replaceVariables: InterpolateFunction): DataUma => {
  console.log(options)
  console.log(data)
  console.log(replaceVariables)


  //------------------------------------ASIGNACION DE VARIABLES-------------------------------//
    

  let SYS_ON = data.series.find(({ name }) => name?.includes('DATA.SYS_ON.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  //let ROOM_TEMP_LIMIT = data.series.find(({ name }) => name?.includes('DATA.ROOM_TEMP_LIMIT.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let FILTER_ALARM= data.series.find(({ name }) => name?.includes('DATA.FILTER_ALARM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let FLOODING_ALARM= data.series.find(({ name }) => name?.includes('DATA.FLOODING_ALARM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let LOSS_OF_AIR = data.series.find(({ name }) => name?.includes('DATA.LOSS_OF_AIR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let HEAT_OVER_ALARM = data.series.find(({ name }) => name?.includes('DATA.HEAT_OVER_ALARM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let SMOKE_FIRE_ALARM = data.series.find(({ name }) => name?.includes('DATA.SMOKE_FIRE_ALARM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  //let HUMIDIFIER_ALARM = data.series.find(({ name }) => name?.includes('DATA.HUMIDIFIER_ALARM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let UNIT_ALARM = data.series.find(({ name }) => name?.includes('DATA.UNIT_ALARM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let ROOM_TEMP = data.series.find(({ name }) => name?.includes('DATA.ROOM_TEMP.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let DELI_AIR_TEMP = data.series.find(({ name }) => name?.includes('DATA.DELI_AIR_TEMP.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let ROOM_REL_HUM = data.series.find(({ name }) => name?.includes('DATA.ROOM_REL_HUM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let COLD_WAT_VALV = data.series.find(({ name }) => name?.includes('DATA.COLD_WAT_VALV.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let EVAP_FAN_SPEED = data.series.find(({ name }) => name?.includes('DATA.EVAP_FAN_SPEED.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  //let SETP_COOL_RET_AIR= data.series.find(({ name }) => name?.includes('DATA.SETP_COOL_RET_AIR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
 // let SNS_COOL_RET_AIR = data.series.find(({ name }) => name?.includes('DATA.SNS_COOL_RET_AIR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let UNIT_RUN_ALARM = data.series.find(({ name }) => name?.includes('DATA.UNIT_RUN_ALARM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  //let HUM_RUN_HOURS = data.series.find(({ name }) => name?.includes('DATA.HUM_RUN_HOURS.VALUE'))?.fields[1].state?.calcs?.lastNotNull



    
  //-------------------------------------------------------------------------------------------//
  
  let uma: DataUma = {

    
    estados:{
        modo: '',
        ventilador: '',
        valvulas: '',
        temp_cuarto: 0,
        humedad_relativa: 0,
        t_suministro: 0,
        t_retorno: 0,
        h_funcionamiento: 0
        
    },

    botones_alarmas:{

    general : estadoStyles.sinConexion,
    filtro_aire: estadoStyles.sinConexion,
    inundacion: estadoStyles.sinConexion,
    sobrecalentamiento:estadoStyles.sinConexion,
    perdida_flujo: estadoStyles.sinConexion,
    humo_fuego: estadoStyles.sinConexion

    },

    datos_generales: {
        fase: '',
        marca: '',
        modelo: '',
        sistema: '',
        ubicacion: ''


    },
    boton_uma:estadoStyles.sinConexion,

    datos_principales: {
      t_suministro: 0,
      t_retorno: 0,
      humedad_relativa:  0,
      nombre_uma: '',
      boton_estado:estadoStyles.sinConexion,
      estado:'',
        
    }
  }

     // ------------------------INTERPOLACION DE VARIABLES-------------
    let variableNombre = replaceVariables('$EQUIPO')

     ///console.log("variableNombre", variableNombre)

     uma.datos_principales.nombre_uma = variableNombre !== '' ? variableNombre : options.nombre

  // --------------------------ESTADOS----------------------------------//
  
  uma.estados.modo = SYS_ON === 0? 'OFF':'ON' 
  uma.estados.ventilador = EVAP_FAN_SPEED === 0? 'OFF': 'ON'
  uma.estados.valvulas = COLD_WAT_VALV ===0? 'OFF': 'ON'
  uma.estados.temp_cuarto =  Number.parseFloat (ROOM_TEMP?.toFixed(2));
  uma.estados.humedad_relativa = Number.parseFloat(ROOM_REL_HUM?.toFixed(2));
  uma.estados.t_suministro = Number.parseFloat(DELI_AIR_TEMP?.toFixed(2));
  uma.estados.t_retorno =Number.parseFloat(ROOM_TEMP?.toFixed(2));
  uma.estados.h_funcionamiento = Number.parseFloat(UNIT_RUN_ALARM?.toFixed(2));
  
  // --------------------------DATOS GENERALES-------------------------//

  
  uma.datos_generales.fase = options.fase
  uma.datos_generales.sistema = options.sistema
  uma.datos_generales.marca = options.marca
  uma.datos_generales.modelo = options.modelo
  uma.datos_generales.ubicacion = options.ubicacion

  // ----------------------BOTONES ALARMAS------------------------------//

  uma.botones_alarmas.filtro_aire = FILTER_ALARM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  uma.botones_alarmas.general = UNIT_ALARM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  uma.botones_alarmas.humo_fuego = SMOKE_FIRE_ALARM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  uma.botones_alarmas.inundacion = FLOODING_ALARM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  uma.botones_alarmas.perdida_flujo = LOSS_OF_AIR === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  uma.botones_alarmas.sobrecalentamiento = HEAT_OVER_ALARM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  
  // ---------------------- DATOS PRINCIPALES---------------------------//

  uma.datos_principales.t_suministro =Number.parseFloat(DELI_AIR_TEMP?.toFixed(2));
  uma.datos_principales.t_retorno = Number.parseFloat(ROOM_TEMP?.toFixed(2));
  //uma.datos_principales.nombre_uma = options.nombre
  uma.datos_principales.humedad_relativa = Number.parseFloat(ROOM_REL_HUM?.toFixed(2));
  uma.datos_principales.boton_estado = SYS_ON === 0? estadoStyles.sinConexion : estadoStyles.ok;
  uma.datos_principales.estado= SYS_ON === 0? 'REPOSO':'ENCENDIDO'
  uma.boton_uma= SYS_ON === 0? estadoStyles.sinConexion : estadoStyles.ok;
  
  return uma
}

export default DataUMA

