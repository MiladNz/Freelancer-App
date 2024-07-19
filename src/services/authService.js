import http from "./httpService";

function getOtp(data) {
  return http.post("/user/get-otp", data);
}
function checkOtp(data) {
  return http.post("/user/check-otp", data);
}
