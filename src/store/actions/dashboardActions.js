import axios from 'axios';
import { dashboardUrls } from "../../api/apiURLs";

export const  GetKPI = (userId) => {
    return (dispatch, getState) => {  
      console.log("calling server")
      axios.defaults.headers = {'x-access-token': `${getState().userLogin.token + ""}`};
        const url = dashboardUrls.kpiUrl + userId;       
        axios.get(url)
          .then((response)=>{      
                
             const data = response.data;
             
              dispatch({ type: 'KPI', data });
          })
          .catch((err)=>{                 
                   console.log(err);
          });
    
    }
  }

  export const  GetOverallWidget = () => {
    return (dispatch, getState) => {  
      axios.defaults.headers = {'x-access-token': `${getState().userLogin.token + ""}`};
        const url = dashboardUrls.overallWidgetUrl ;      
        axios.get(url)
          .then((response)=>{      
             
             const data = response.data;
            // console.log(data);
              dispatch({ type: 'OVERALLWIDGET', data });
          })
          .catch((err)=>{                 
                   console.log(err);
          });    
    }
  }

  export const  GetLast5Incidents = () => {
    return (dispatch, getState) => {  
      axios.defaults.headers = {'x-access-token': `${getState().userLogin.token + ""}`};
        const url = dashboardUrls.last5IncidentsUrl ;      
        axios.get(url)
          .then((response)=>{      
               
             const data = response.data;
            // console.log(data);
              dispatch({ type: 'LAST5INCIDENTS', data });
          })
          .catch((err)=>{                 
                   console.log(err);
          });    
    }
  }
 

  export const  GetOldest5UnresolvedIncidents = () => {
    return (dispatch, getState) => {  
      axios.defaults.headers = {'x-access-token': `${getState().userLogin.token + ""}`};
        const url = dashboardUrls.oldest5UnresolvedIncidentsUrl ;      
        axios.get(url)
          .then((response)=>{      
              
             const data = response.data;
            // console.log(data);
              dispatch({ type: 'OLDEST5UNRESOLVEDINCIDENTS', data });
          })
          .catch((err)=>{                 
                   console.log(err);
          });    
    }
  }
 
  export const  GetMostAssignedToUsers = () => {
    return (dispatch, getState) => {  
      axios.defaults.headers = {'x-access-token': `${getState().userLogin.token + ""}`};
        const url = dashboardUrls.mostAssignedToUsersIncidentsUrl ;      
        axios.get(url)
          .then((response)=>{      
              
             const data = response.data;
            // console.log(data);
              dispatch({ type: 'MOSTASSIGNEDTOUSERS', data });
          })
          .catch((err)=>{                 
                   console.log(err);
          });    
    }
  }
