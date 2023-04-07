import { PanelData, InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPdu } from 'components/variables/variables';
//import alarmaStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';



const DataPDU = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataPdu => {
  console.log(options)
  console.log(data)
  console.log(replaceVariables)

  //------------------------------------ASIGNACION DE VARIABLES-------------------------------//
/*
{variable:'PDU_1.KVA_1.CH1',detalle:'POTENCIA APARENTE 1 CH 1'},
{variable:'PDU_1.KVA_1.CH2',detalle:'POTENCIA APARENTE 1 CH 2'},
{variable:'PDU_1.KVA_1.CH3',detalle:'POTENCIA APARENTE 1 CH 3'},
{variable:'PDU_1.KVA_1.CH4',detalle:'POTENCIA APARENTE 1 CH 4'},
{variable:'PDU_1.KVA_1.CH5',detalle:'POTENCIA APARENTE 1 CH 5'},
{variable:'PDU_1.KVA_1.CH6',detalle:'POTENCIA APARENTE 1 CH 6'},
{variable:'PDU_1.KVA_1.CH7',detalle:'POTENCIA APARENTE 1 CH 7'},
{variable:'PDU_1.KVA_1.CH8',detalle:'POTENCIA APARENTE 1 CH 8'},
{variable:'PDU_1.KVA_1.CH9',detalle:'POTENCIA APARENTE 1 CH 9'},
{variable:'PDU_1.KVA_1.CH10',detalle:'POTENCIA APARENTE 1 CH 10'},
{variable:'PDU_1.KVA_1.CH11',detalle:'POTENCIA APARENTE 1 CH 11'},
{variable:'PDU_1.KVA_1.CH12',detalle:'POTENCIA APARENTE 1 CH 12'},
{variable:'PDU_1.KVA_1.CH13',detalle:'POTENCIA APARENTE 1 CH 13'},
{variable:'PDU_1.KVA_1.CH14',detalle:'POTENCIA APARENTE 1 CH 14'},
{variable:'PDU_1.KVA_1.CH15',detalle:'POTENCIA APARENTE 1 CH 15'},
{variable:'PDU_1.KVA_1.CH16',detalle:'POTENCIA APARENTE 1 CH 16'},
{variable:'PDU_1.KVA_1.CH17',detalle:'POTENCIA APARENTE 1 CH 17'},
{variable:'PDU_1.KVA_1.CH18',detalle:'POTENCIA APARENTE 1 CH 18'},
{variable:'PDU_1.KVA_1.CH19',detalle:'POTENCIA APARENTE 1 CH 19'},
{variable:'PDU_1.KVA_1.CH20',detalle:'POTENCIA APARENTE 1 CH 20'},
{variable:'PDU_1.KVA_1.CH21',detalle:'POTENCIA APARENTE 1 CH 21'},
{variable:'PDU_1.KVA_1.CH22',detalle:'POTENCIA APARENTE 1 CH 22'},
{variable:'PDU_1.KVA_1.CH23',detalle:'POTENCIA APARENTE 1 CH 23'},
{variable:'PDU_1.KVA_1.CH24',detalle:'POTENCIA APARENTE 1 CH 24'},
{variable:'PDU_1.KVA_1.CH25',detalle:'POTENCIA APARENTE 1 CH 25'},
{variable:'PDU_1.KVA_1.CH26',detalle:'POTENCIA APARENTE 1 CH 26'},
{variable:'PDU_1.KVA_1.CH27',detalle:'POTENCIA APARENTE 1 CH 27'},
{variable:'PDU_1.KVA_1.CH28',detalle:'POTENCIA APARENTE 1 CH 28'},
{variable:'PDU_1.KVA_1.CH29',detalle:'POTENCIA APARENTE 1 CH 29'},
{variable:'PDU_1.KVA_1.CH30',detalle:'POTENCIA APARENTE 1 CH 30'},
{variable:'PDU_1.KVA_1.CH31',detalle:'POTENCIA APARENTE 1 CH 31'},
{variable:'PDU_1.KVA_1.CH32',detalle:'POTENCIA APARENTE 1 CH 32'},
{variable:'PDU_1.KVA_1.CH33',detalle:'POTENCIA APARENTE 1 CH 33'},
{variable:'PDU_1.KVA_1.CH34',detalle:'POTENCIA APARENTE 1 CH 34'},
{variable:'PDU_1.KVA_1.CH35',detalle:'POTENCIA APARENTE 1 CH 35'},
{variable:'PDU_1.KVA_1.CH36',detalle:'POTENCIA APARENTE 1 CH 36'},
{variable:'PDU_1.KVA_1.CH37',detalle:'POTENCIA APARENTE 1 CH 37'},
{variable:'PDU_1.KVA_1.CH38',detalle:'POTENCIA APARENTE 1 CH 38'},
{variable:'PDU_1.KVA_1.CH39',detalle:'POTENCIA APARENTE 1 CH 39'},
{variable:'PDU_1.KVA_1.CH40',detalle:'POTENCIA APARENTE 1 CH 40'},
{variable:'PDU_1.KVA_1.CH41',detalle:'POTENCIA APARENTE 1 CH 41'},
{variable:'PDU_1.KVA_1.CH42',detalle:'POTENCIA APARENTE 1 CH 42'},
{variable:'PDU_1.KWH_1.CH1',detalle:'ENERGÍA 1 CH 1'},
{variable:'PDU_1.KWH_1.CH2',detalle:'ENERGÍA 1 CH 2'},
{variable:'PDU_1.KWH_1.CH3',detalle:'ENERGÍA 1 CH 3'},
{variable:'PDU_1.KWH_1.CH4',detalle:'ENERGÍA 1 CH 4'},
{variable:'PDU_1.KWH_1.CH5',detalle:'ENERGÍA 1 CH 5'},
{variable:'PDU_1.KWH_1.CH6',detalle:'ENERGÍA 1 CH 6'},
{variable:'PDU_1.KWH_1.CH7',detalle:'ENERGÍA 1 CH 7'},
{variable:'PDU_1.KWH_1.CH8',detalle:'ENERGÍA 1 CH 8'},
{variable:'PDU_1.KWH_1.CH9',detalle:'ENERGÍA 1 CH 9'},
{variable:'PDU_1.KWH_1.CH10',detalle:'ENERGÍA 1 CH 10'},
{variable:'PDU_1.KWH_1.CH11',detalle:'ENERGÍA 1 CH 11'},
{variable:'PDU_1.KWH_1.CH12',detalle:'ENERGÍA 1 CH 12'},
{variable:'PDU_1.KWH_1.CH13',detalle:'ENERGÍA 1 CH 13'},
{variable:'PDU_1.KWH_1.CH14',detalle:'ENERGÍA 1 CH 14'},
{variable:'PDU_1.KWH_1.CH15',detalle:'ENERGÍA 1 CH 15'},
{variable:'PDU_1.KWH_1.CH16',detalle:'ENERGÍA 1 CH 16'},
{variable:'PDU_1.KWH_1.CH17',detalle:'ENERGÍA 1 CH 17'},
{variable:'PDU_1.KWH_1.CH18',detalle:'ENERGÍA 1 CH 18'},
{variable:'PDU_1.KWH_1.CH19',detalle:'ENERGÍA 1 CH 19'},
{variable:'PDU_1.KWH_1.CH20',detalle:'ENERGÍA 1 CH 20'},
{variable:'PDU_1.KWH_1.CH21',detalle:'ENERGÍA 1 CH 21'},
{variable:'PDU_1.KWH_1.CH22',detalle:'ENERGÍA 1 CH 22'},
{variable:'PDU_1.KWH_1.CH23',detalle:'ENERGÍA 1 CH 23'},
{variable:'PDU_1.KWH_1.CH24',detalle:'ENERGÍA 1 CH 24'},
{variable:'PDU_1.KWH_1.CH25',detalle:'ENERGÍA 1 CH 25'},
{variable:'PDU_1.KWH_1.CH26',detalle:'ENERGÍA 1 CH 26'},
{variable:'PDU_1.KWH_1.CH27',detalle:'ENERGÍA 1 CH 27'},
{variable:'PDU_1.KWH_1.CH28',detalle:'ENERGÍA 1 CH 28'},
{variable:'PDU_1.KWH_1.CH29',detalle:'ENERGÍA 1 CH 29'},
{variable:'PDU_1.KWH_1.CH30',detalle:'ENERGÍA 1 CH 30'},
{variable:'PDU_1.KWH_1.CH31',detalle:'ENERGÍA 1 CH 31'},
{variable:'PDU_1.KWH_1.CH32',detalle:'ENERGÍA 1 CH 32'},
{variable:'PDU_1.KWH_1.CH33',detalle:'ENERGÍA 1 CH 33'},
{variable:'PDU_1.KWH_1.CH34',detalle:'ENERGÍA 1 CH 34'},
{variable:'PDU_1.KWH_1.CH35',detalle:'ENERGÍA 1 CH 35'},
{variable:'PDU_1.KWH_1.CH36',detalle:'ENERGÍA 1 CH 36'},
{variable:'PDU_1.KWH_1.CH37',detalle:'ENERGÍA 1 CH 37'},
{variable:'PDU_1.KWH_1.CH38',detalle:'ENERGÍA 1 CH 38'},
{variable:'PDU_1.KWH_1.CH39',detalle:'ENERGÍA 1 CH 39'},
{variable:'PDU_1.KWH_1.CH40',detalle:'ENERGÍA 1 CH 40'},
{variable:'PDU_1.KWH_1.CH41',detalle:'ENERGÍA 1 CH 41'},
{variable:'PDU_1.KWH_1.CH42',detalle:'ENERGÍA 1 CH 42'},
{variable:'PDU_1.KVA_2.CH1',detalle:'POTENCIA APARENTE 2 CH 1'},
{variable:'PDU_1.KVA_2.CH2',detalle:'POTENCIA APARENTE 2 CH 2'},
{variable:'PDU_1.KVA_2.CH3',detalle:'POTENCIA APARENTE 2 CH 3'},
{variable:'PDU_1.KVA_2.CH4',detalle:'POTENCIA APARENTE 2 CH 4'},
{variable:'PDU_1.KVA_2.CH5',detalle:'POTENCIA APARENTE 2 CH 5'},
{variable:'PDU_1.KVA_2.CH6',detalle:'POTENCIA APARENTE 2 CH 6'},
{variable:'PDU_1.KVA_2.CH7',detalle:'POTENCIA APARENTE 2 CH 7'},
{variable:'PDU_1.KVA_2.CH8',detalle:'POTENCIA APARENTE 2 CH 8'},
{variable:'PDU_1.KVA_2.CH9',detalle:'POTENCIA APARENTE 2 CH 9'},
{variable:'PDU_1.KVA_2.CH10',detalle:'POTENCIA APARENTE 2 CH 10'},
{variable:'PDU_1.KVA_2.CH11',detalle:'POTENCIA APARENTE 2 CH 11'},
{variable:'PDU_1.KVA_2.CH12',detalle:'POTENCIA APARENTE 2 CH 12'},
{variable:'PDU_1.KVA_2.CH13',detalle:'POTENCIA APARENTE 2 CH 13'},
{variable:'PDU_1.KVA_2.CH14',detalle:'POTENCIA APARENTE 2 CH 14'},
{variable:'PDU_1.KVA_2.CH15',detalle:'POTENCIA APARENTE 2 CH 15'},
{variable:'PDU_1.KVA_2.CH16',detalle:'POTENCIA APARENTE 2 CH 16'},
{variable:'PDU_1.KVA_2.CH17',detalle:'POTENCIA APARENTE 2 CH 17'},
{variable:'PDU_1.KVA_2.CH18',detalle:'POTENCIA APARENTE 2 CH 18'},
{variable:'PDU_1.KVA_2.CH19',detalle:'POTENCIA APARENTE 2 CH 19'},
{variable:'PDU_1.KVA_2.CH20',detalle:'POTENCIA APARENTE 2 CH 20'},
{variable:'PDU_1.KVA_2.CH21',detalle:'POTENCIA APARENTE 2 CH 21'},
{variable:'PDU_1.KVA_2.CH22',detalle:'POTENCIA APARENTE 2 CH 22'},
{variable:'PDU_1.KVA_2.CH23',detalle:'POTENCIA APARENTE 2 CH 23'},
{variable:'PDU_1.KVA_2.CH24',detalle:'POTENCIA APARENTE 2 CH 24'},
{variable:'PDU_1.KVA_2.CH25',detalle:'POTENCIA APARENTE 2 CH 25'},
{variable:'PDU_1.KVA_2.CH26',detalle:'POTENCIA APARENTE 2 CH 26'},
{variable:'PDU_1.KVA_2.CH27',detalle:'POTENCIA APARENTE 2 CH 27'},
{variable:'PDU_1.KVA_2.CH28',detalle:'POTENCIA APARENTE 2 CH 28'},
{variable:'PDU_1.KVA_2.CH29',detalle:'POTENCIA APARENTE 2 CH 29'},
{variable:'PDU_1.KVA_2.CH30',detalle:'POTENCIA APARENTE 2 CH 30'},
{variable:'PDU_1.KVA_2.CH31',detalle:'POTENCIA APARENTE 2 CH 31'},
{variable:'PDU_1.KVA_2.CH32',detalle:'POTENCIA APARENTE 2 CH 32'},
{variable:'PDU_1.KVA_2.CH33',detalle:'POTENCIA APARENTE 2 CH 33'},
{variable:'PDU_1.KVA_2.CH34',detalle:'POTENCIA APARENTE 2 CH 34'},
{variable:'PDU_1.KVA_2.CH35',detalle:'POTENCIA APARENTE 2 CH 35'},
{variable:'PDU_1.KVA_2.CH36',detalle:'POTENCIA APARENTE 2 CH 36'},
{variable:'PDU_1.KVA_2.CH37',detalle:'POTENCIA APARENTE 2 CH 37'},
{variable:'PDU_1.KVA_2.CH38',detalle:'POTENCIA APARENTE 2 CH 38'},
{variable:'PDU_1.KVA_2.CH39',detalle:'POTENCIA APARENTE 2 CH 39'},
{variable:'PDU_1.KVA_2.CH40',detalle:'POTENCIA APARENTE 2 CH 40'},
{variable:'PDU_1.KVA_2.CH41',detalle:'POTENCIA APARENTE 2 CH 41'},
{variable:'PDU_1.KVA_2.CH42',detalle:'POTENCIA APARENTE 2 CH 42'},
{variable:'PDU_1.KWH_2.CH1',detalle:'ENERGÍA 2 CH 1'},
{variable:'PDU_1.KWH_2.CH2',detalle:'ENERGÍA 2 CH 2'},
{variable:'PDU_1.KWH_2.CH3',detalle:'ENERGÍA 2 CH 3'},
{variable:'PDU_1.KWH_2.CH4',detalle:'ENERGÍA 2 CH 4'},
{variable:'PDU_1.KWH_2.CH5',detalle:'ENERGÍA 2 CH 5'},
{variable:'PDU_1.KWH_2.CH6',detalle:'ENERGÍA 2 CH 6'},
{variable:'PDU_1.KWH_2.CH7',detalle:'ENERGÍA 2 CH 7'},
{variable:'PDU_1.KWH_2.CH8',detalle:'ENERGÍA 2 CH 8'},
{variable:'PDU_1.KWH_2.CH9',detalle:'ENERGÍA 2 CH 9'},
{variable:'PDU_1.KWH_2.CH10',detalle:'ENERGÍA 2 CH 10'},
{variable:'PDU_1.KWH_2.CH11',detalle:'ENERGÍA 2 CH 11'},
{variable:'PDU_1.KWH_2.CH12',detalle:'ENERGÍA 2 CH 12'},
{variable:'PDU_1.KWH_2.CH13',detalle:'ENERGÍA 2 CH 13'},
{variable:'PDU_1.KWH_2.CH14',detalle:'ENERGÍA 2 CH 14'},
{variable:'PDU_1.KWH_2.CH15',detalle:'ENERGÍA 2 CH 15'},
{variable:'PDU_1.KWH_2.CH16',detalle:'ENERGÍA 2 CH 16'},
{variable:'PDU_1.KWH_2.CH17',detalle:'ENERGÍA 2 CH 17'},
{variable:'PDU_1.KWH_2.CH18',detalle:'ENERGÍA 2 CH 18'},
{variable:'PDU_1.KWH_2.CH19',detalle:'ENERGÍA 2 CH 19'},
{variable:'PDU_1.KWH_2.CH20',detalle:'ENERGÍA 2 CH 20'},
{variable:'PDU_1.KWH_2.CH21',detalle:'ENERGÍA 2 CH 21'},
{variable:'PDU_1.KWH_2.CH22',detalle:'ENERGÍA 2 CH 22'},
{variable:'PDU_1.KWH_2.CH23',detalle:'ENERGÍA 2 CH 23'},
{variable:'PDU_1.KWH_2.CH24',detalle:'ENERGÍA 2 CH 24'},
{variable:'PDU_1.KWH_2.CH25',detalle:'ENERGÍA 2 CH 25'},
{variable:'PDU_1.KWH_2.CH26',detalle:'ENERGÍA 2 CH 26'},
{variable:'PDU_1.KWH_2.CH27',detalle:'ENERGÍA 2 CH 27'},
{variable:'PDU_1.KWH_2.CH28',detalle:'ENERGÍA 2 CH 28'},
{variable:'PDU_1.KWH_2.CH29',detalle:'ENERGÍA 2 CH 29'},
{variable:'PDU_1.KWH_2.CH30',detalle:'ENERGÍA 2 CH 30'},
{variable:'PDU_1.KWH_2.CH31',detalle:'ENERGÍA 2 CH 31'},
{variable:'PDU_1.KWH_2.CH32',detalle:'ENERGÍA 2 CH 32'},
{variable:'PDU_1.KWH_2.CH33',detalle:'ENERGÍA 2 CH 33'},
{variable:'PDU_1.KWH_2.CH34',detalle:'ENERGÍA 2 CH 34'},
{variable:'PDU_1.KWH_2.CH35',detalle:'ENERGÍA 2 CH 35'},
{variable:'PDU_1.KWH_2.CH36',detalle:'ENERGÍA 2 CH 36'},
{variable:'PDU_1.KWH_2.CH37',detalle:'ENERGÍA 2 CH 37'},
{variable:'PDU_1.KWH_2.CH38',detalle:'ENERGÍA 2 CH 38'},
{variable:'PDU_1.KWH_2.CH39',detalle:'ENERGÍA 2 CH 39'},
{variable:'PDU_1.KWH_2.CH40',detalle:'ENERGÍA 2 CH 40'},
{variable:'PDU_1.KWH_2.CH41',detalle:'ENERGÍA 2 CH 41'},
{variable:'PDU_1.KWH_2.CH42',detalle:'ENERGÍA 2 CH 42'},
*/

  let IN1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_CA_VOL= data.series.find(({ name }) => name?.includes('DATA.IN1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_AB_VOL= data.series.find(({ name }) => name?.includes('DATA.OUT1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_A_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_B_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_C_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let NEUT_CUR = data.series.find(({ name }) => name?.includes('DATA.NEUT_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let DOOR_OPEN_ALM = data.series.find(({ name }) => name?.includes('DATA.DOOR_OPEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let GEN_ALM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let MAIN_TRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.MAIN_TRIP_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_TOTAL_KVA = data.series.find(({ name }) => name?.includes('DATA.OUT1_TOTAL_KVA.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  /*let OUT1_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT1_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT1_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_KWH = data.series.find(({ name }) => name?.includes('DATA.OUT1_KWH.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_A_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_B_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_C_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull*/
  
  
  
  //-------------------------------------------------------------------------------------------//
  
  let pdu: DataPdu = {

    estados:{

        in1_AB: 0,
        in1_BC: 0,
        in1_CA: 0,
        out1_AB: 0,
        out1_BC: 0,
        out1_CA: 0,
        out1_A: 0,
        out1_B: 0,
        out1_C: 0,
        corriente_N: 0
    },
    botones_alarmas:{

        alarma_general:estadoStyles.sinConexion,
        puerta_abierta:estadoStyles.sinConexion,
        falla_breaker:estadoStyles.sinConexion,
        red_modbus:estadoStyles.sinConexion,
        

        
    },
    datos_generales: {

        fase: '',
        marca: '',
        modelo: '',
        sistema: '',
        ubicacion: ''


    },
    
    datos_principales: {

        in_volt:0,
        out_volt: 0,
        corr_total: 0,
        boton_pdu:estadoStyles.sinConexion, 
        nombre_pdu: '',
        boton_estado: estadoStyles.sinConexion,
        estado: '',

            
    }
  }

   // ------------------------INTERPOLACION DE VARIABLES-------------
   let variableNombre = replaceVariables('$EQUIPO')

   pdu.datos_principales.nombre_pdu = variableNombre !== '' ? variableNombre : options.nombre

  // pdu.datos_principales.nombre_pdu = options.nombre 

  // --------------------------ESTADOS----------------------------------// 

  pdu.estados.in1_AB =  Number.parseFloat (IN1_AB_VOL?.toFixed(2))/10;
  pdu.estados.in1_BC =  Number.parseFloat (IN1_BC_VOL?.toFixed(2))/10;
  pdu.estados.in1_CA =  Number.parseFloat (IN1_CA_VOL?.toFixed(2))/10;
  pdu.estados.out1_AB=  Number.parseFloat (OUT1_AB_VOL?.toFixed(2))/10;
  pdu.estados.out1_BC = Number.parseFloat(OUT1_BC_VOL?.toFixed(2))/10;
  pdu.estados.out1_CA = Number.parseFloat(OUT1_CA_VOL?.toFixed(2))/10;
  pdu.estados.out1_A = Number.parseFloat(OUT1_A_CUR?.toFixed(2))/10;
  pdu.estados.out1_B = Number.parseFloat(OUT1_B_CUR?.toFixed(2))/10;
  pdu.estados.out1_C = Number.parseFloat(OUT1_C_CUR?.toFixed(2))/10;
  pdu.estados.corriente_N = Number.parseFloat(NEUT_CUR?.toFixed(2))/10;

  //pdu.estados.ventilador = EVAP_FAN_SPEED === 0? 'OFF': 'ON'
 
  // --------------------------DATOS GENERALES-------------------------//
  
  pdu.datos_generales.fase = options.fase

   if (variableNombre === 'PDU_1A_F1' || variableNombre === 'PDU_1A_F2'|| variableNombre === 'PDU_1A_F3' || variableNombre === 'PDU_1A_F4' || variableNombre === 'PDU_1A_F5' || variableNombre === 'PDU_1A_F6'|| variableNombre === 'PDU_1A_F7' || variableNombre === 'PDU_1A_F8'|| variableNombre === 'PDU_1A_F9'|| variableNombre === 'PDU_1A_F10'     ) {
    pdu.datos_generales.sistema = '1'
  }

 
  if (variableNombre === 'PDU_2A_F1' || variableNombre === 'PDU_2A_F2'|| variableNombre === 'PDU_2A_F3' || variableNombre === 'PDU_2A_F4' || variableNombre === 'PDU_2A_F5' || variableNombre === 'PDU_2A_F6'|| variableNombre === 'PDU_2A_F7' || variableNombre === 'PDU_2A_F8'|| variableNombre === 'PDU_2A_F9'|| variableNombre === 'PDU_2A_F10'     ) {
    pdu.datos_generales.sistema = '2'
  }
  

  //pdu.datos_generales.sistema = options.sistema 

  pdu.datos_generales.marca = options.marca
  pdu.datos_generales.modelo = options.modelo
  pdu.datos_generales.ubicacion = options.ubicacion

  // ----------------------BOTONES ALARMAS------------------------------//

  pdu.botones_alarmas.alarma_general = GEN_ALM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  pdu.botones_alarmas.puerta_abierta = DOOR_OPEN_ALM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  pdu.botones_alarmas.falla_breaker = MAIN_TRIP_ALM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  pdu.botones_alarmas.red_modbus = MODBUS_ST === 1 ? estadoStyles.alarma: estadoStyles.ok

    
  // ---------------------- DATOS PRINCIPALES---------------------------//

  

  let in_volt = (IN1_AB_VOL + IN1_BC_VOL + IN1_CA_VOL) / 3;
  if (IN1_AB_VOL !== undefined && IN1_BC_VOL !== undefined && IN1_CA_VOL !== undefined) {
    pdu.datos_principales.in_volt = Number.parseFloat(in_volt.toFixed(1))/10;
  }

  let out_volt = (OUT1_AB_VOL + OUT1_BC_VOL + OUT1_CA_VOL) / 3;
  if (OUT1_AB_VOL !== undefined && OUT1_BC_VOL !== undefined && OUT1_CA_VOL !== undefined) {
    pdu.datos_principales.out_volt = Number.parseFloat(out_volt.toFixed(0))/10;
  }

  let corr_total = (OUT1_TOTAL_KVA*1000 ) / (out_volt * Math.sqrt (3));
  if (out_volt !== undefined && OUT1_TOTAL_KVA !== undefined) {
    pdu.datos_principales.corr_total = Number.parseFloat(corr_total.toFixed(2));
  }
  
  //pdu.datos_principales.nombre_pdu = options.nombre  
  pdu.datos_principales.boton_estado = MODBUS_ST === 1? estadoStyles.sinConexion : estadoStyles.ok;
  pdu.datos_principales.estado = GEN_ALM === 1? 'ALARMADO':'ENCENDIDO'
  pdu.datos_principales.boton_pdu= MODBUS_ST === 1? estadoStyles.sinConexion : estadoStyles.ok;
  
  
  return pdu
}

export default DataPDU

