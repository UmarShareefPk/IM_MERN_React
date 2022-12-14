import React,{useEffect, useState} from 'react'
import '../../../styles/kpibar.css'
import { GetKPI } from '../../../store/actions/dashboardActions';
import { connect } from 'react-redux';

function KPIBar({getKPIData, userId, kpiData}) {
 
  //console.log("kpiData",kpiData);
  
  useEffect(() => {    
    getKPIData(userId); 
  }, [])

  if(kpiData == null || kpiData === undefined)
  return <h2>Loading</h2>
 
    return (     
      <div className="row kpibar">       
        <KPI value={kpiData.New} text="NEW" color="new-color" />
        <KPI value={kpiData.InProgress} text="IN PROGRESS" color="inprogress-color" />
        <KPI value={kpiData.Closed} text="CLOSED" color="closed-color" />
        <KPI value={kpiData.Approved} text="APPROVED" color="approved-color" />
        <KPI value={kpiData.Late} text="LATE" color="late-color"/>
        <KPI value={kpiData.AssignedToMe} text="ASSINGED TO YOU" color="assignedToMe-color"/>        
    </div>
    );
}

function KPI({value, text, color}) {
  return (
    <div className="col l2 m6 s6">
      <div className={"kpi " + color}  >
        <div className="kpi-value">{value}</div>
        <div className="kpi-text">{text}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {        
  return{   
      userId :state.userLogin.userId,  // logged in User Id  
      kpiData: state.dashboard.KPIData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getKPIData : (userId) => dispatch(GetKPI(userId)),     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KPIBar);

