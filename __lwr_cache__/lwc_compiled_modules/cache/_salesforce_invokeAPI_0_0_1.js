export default function invokeAPI(payload) {
  let xmlhttp = new XMLHttpRequest();
  let appServiceEndPoint = "https://ins-e3d-csm-api-x.azurewebsites.net/CustomerGoals";
  if (payload.type == "GET") {
    xmlhttp.open("GET", appServiceEndPoint);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
  } else if (payload.type == "POST") {
    xmlhttp.open("POST", appServiceEndPoint);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(payload.jsonRequest);
  } else if (payload.type == "DELETE") {
    appServiceEndPoint = "https://ins-e3d-csm-api-x.azurewebsites.net/CustomerGoals/12" + `${id}`;
    xmlhttp.open("DELETE", appServiceEndPoint);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
  }
  let gRes = new Promise((resolve, reject) => {
    xmlhttp.onload = () => {
      if (xmlhttp.status == 200) {
        console.log(xmlhttp);
        resolve(xmlhttp.responseText);
      } else {
        reject(xmlhttp.statusText);
      }
    };
  });
  return gRes;
}