import { GET_USER_CONFIG } from "../../../types";
 
export function setUserConfig (userConfig) {
    console.log("ACTION")
    console.log(userConfig)
     return {
        type: GET_USER_CONFIG,
        payload: {
            userId: userConfig.usuarioid,
            name: userConfig.nombre,
            profileId: userConfig.perfilid,
            modulesAllowed: userConfig.modules
        }
    }         
}