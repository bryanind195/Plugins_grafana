import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGenerador } from 'components/variables/variables';
import modoControlStyles from 'styles/modoControlStyles';
import alarmasStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';

const dataGenerador = (data: PanelData, options: SimpleOptions): DataGenerador => {
  console.log('data: ', data);
  console.log('options: ', options);

  let MANUAL_MODE = data.series.find(({ name }) => name?.includes('DATA.MANUAL_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let STOP_MODE = data.series.find(({ name }) => name?.includes('DATA.STOP_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let AUTO_MODE = data.series.find(({ name }) => name?.includes('DATA.AUTO_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OFF_MODE = data.series.find(({ name }) => name?.includes('DATA.OFF_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1L2_VOL = data.series.find(({ name }) => name?.includes('DATA.L1L2_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L2L3_VOL = data.series.find(({ name }) => name?.includes('DATA.L2L3_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L3L1_VOL = data.series.find(({ name }) => name?.includes('DATA.L3L1_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1N_VOL = data.series.find(({ name }) => name?.includes('DATA.L1N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L2N_VOL = data.series.find(({ name }) => name?.includes('DATA.L2N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L3N_VOL = data.series.find(({ name }) => name?.includes('DATA.L3N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1_CUR = data.series.find(({ name }) => name?.includes('DATA.L1_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let L2_CUR = data.series.find(({ name }) => name?.includes('DATA.L2_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let L3_CUR = data.series.find(({ name }) => name?.includes('DATA.L3_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let TOT_VA = data.series.find(({ name }) => name?.includes('DATA.TOT_VA.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let TOT_WATTS = data.series.find(({ name }) => name?.includes('DATA.TOT_WATTS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FREQ = data.series.find(({ name }) => name?.includes('DATA.FREQ.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let FUEL_LEV = data.series.find(({ name }) => name?.includes('DATA.FUEL_LEV.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OIL_PRESS = data.series.find(({ name }) => name?.includes('DATA.OIL_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let COOL_TEMP = data.series.find(({ name }) => name?.includes('DATA.COOL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ENG_BATT_VOL = data.series.find(({ name }) => name?.includes('DATA.ENG_BATT_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ENG_RUN_TIME = data.series.find(({ name }) => name?.includes('DATA.ENG_RUN_TIME.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let WARNING_ST = data.series.find(({ name }) => name?.includes('DATA.WARNING_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GHV_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let GHV_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GHV_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GLV_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let GLV_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GLV_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let HCT_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let HCT_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let HCT_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let LOP_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let LOP_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let LOP_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.US_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.US_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.US_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

  // ---------------------------------------------------------------
  let generador: DataGenerador = {
    alternador: {
      corriente: 0,
      factor_pot: 0,
      pot_kva: 0,
      pot_kw: 0,
      voltaje_ff: 0,
    },
    boton_estado: estadoStyles.sinConexion,
    boton_gen: '',
    botones_Alarmas: {
      altas_revol: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      alto_volt_gen: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      baja_pres_aceite: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      baja_temp: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      bajas_revol: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      bajo_volt_gen: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      falla_arranque: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      paro_emergencia: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
    },
    dataGeneral: {
      fase: options.fase,
      marca: options.marca,
      modelo: options.modelo,
      sistema: options.sistema,
      ubicacion: options.ubicacion,
    },
    estado: '',
    modoControl: {
      modo_apagado: modoControlStyles.SinConexion,
      modo_auto: modoControlStyles.SinConexion,
      modo_encendido: modoControlStyles.SinConexion,
      modo_manual: modoControlStyles.SinConexion,
    },
    motor: {
      frecuencia: 0,
      horas_uso: 0,
      pres_aceite: 0,
      temp: 0,
      voltaje_bat: 0,
    },
    nivel: FUEL_LEV,
    nombre_gen: options.nombre,
    temp: COOL_TEMP,
    voltaje: 0,
  };

  // ---------------------------------------------------------------
  let corriente = (L1_CUR + L2_CUR + L3_CUR) / 3;
  if (L1_CUR !== undefined && L2_CUR !== undefined && L3_CUR !== undefined) {
    generador.alternador.corriente = Number.parseFloat(corriente.toFixed(2));
  }

  let factorPotencia = TOT_WATTS / TOT_VA;
  if (TOT_VA === 0) {
    factorPotencia = 0;
  }
  if (TOT_VA !== undefined && TOT_WATTS !== undefined) {
    generador.alternador.factor_pot = Number.parseFloat(factorPotencia.toFixed(2));
  }

  let potKVA = TOT_VA / 1000;
  if (TOT_VA !== undefined) {
    generador.alternador.pot_kva = Number.parseFloat(potKVA.toFixed(2));
  }

  let potKW = TOT_WATTS / 1000;
  if (TOT_WATTS !== undefined) {
    generador.alternador.pot_kw = Number.parseFloat(potKW.toFixed(2));
  }

  let voltajeFF = (L1L2_VOL + L2L3_VOL + L3L1_VOL) / 3;
  if (L1L2_VOL !== undefined && L2L3_VOL !== undefined && L3L1_VOL !== undefined) {
    generador.alternador.voltaje_ff = Number.parseFloat(voltajeFF.toFixed(2));
  }

  let voltajeLN = (L1N_VOL + L2N_VOL + L3N_VOL) / 3;
  if (L1N_VOL !== undefined && L2N_VOL !== undefined && L3N_VOL !== undefined) {
    generador.voltaje = Number.parseFloat(voltajeLN.toFixed(2));
  }

  generador.motor.frecuencia = Number.parseFloat(FREQ?.toFixed(2));
  generador.motor.horas_uso = Number.parseFloat(ENG_RUN_TIME?.toFixed(2));
  generador.motor.pres_aceite = Number.parseFloat(OIL_PRESS?.toFixed(2));
  generador.motor.temp = Number.parseFloat(COOL_TEMP?.toFixed(2));
  generador.motor.voltaje_bat = Number.parseFloat(ENG_BATT_VOL?.toFixed(2));

  generador.estado = WARNING_ST === 1 || MODBUS_ST === 1 ? 'PELIGRO' : 'NORMAL';
  generador.boton_estado = WARNING_ST === 1 || MODBUS_ST === 1 ? estadoStyles.alarma : estadoStyles.ok;
  // -------------------------------------------------------------------
  // ---------------------------MODO CONTROL----------------------------
  // -------------------------------------------------------------------
  generador.modoControl.modo_manual = MANUAL_MODE === 0 ? modoControlStyles.Off : modoControlStyles.On;
  generador.modoControl.modo_auto = AUTO_MODE === 0 ? modoControlStyles.Off : modoControlStyles.On;
  generador.modoControl.modo_apagado = OFF_MODE === 0 ? modoControlStyles.Off : modoControlStyles.On;
  generador.modoControl.modo_encendido = STOP_MODE === 0 ? modoControlStyles.Off : modoControlStyles.On;
  // -------------------------------------------------------------------
  // -------------------------------------------------------------------
  generador.botones_Alarmas.paro_emergencia.trip = ES_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.paro_emergencia.sht = ES_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.paro_emergencia.war = ES_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.botones_Alarmas.falla_arranque.trip = FS_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.falla_arranque.sht = FS_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.falla_arranque.war = FS_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.botones_Alarmas.alto_volt_gen.trip = GHV_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.alto_volt_gen.sht = GHV_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.alto_volt_gen.war = GHV_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.botones_Alarmas.bajo_volt_gen.trip = GLV_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.bajo_volt_gen.sht = GLV_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.bajo_volt_gen.war = GLV_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.botones_Alarmas.baja_pres_aceite.trip = LOP_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.baja_pres_aceite.sht = LOP_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.baja_pres_aceite.war = LOP_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.botones_Alarmas.altas_revol.trip = OS_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.altas_revol.war = OS_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.altas_revol.sht = OS_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.botones_Alarmas.bajas_revol.trip = US_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.bajas_revol.sht = US_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.bajas_revol.war = US_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.botones_Alarmas.baja_temp.trip = HCT_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.baja_temp.war = HCT_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.botones_Alarmas.baja_temp.sht = HCT_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;

  console.log(generador);

  return generador;
};

export default dataGenerador;
