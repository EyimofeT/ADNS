# ADNS
Automated Deposit Notification System - a system that sends mobile notifications or emails to users when an automated deposit is missed due to insufficient funds in their primary money source (wallet).



## API Documentation

https://documenter.getpostman.com/view/15065406/2s93mATKTf

## installation
install required packages:
  ->  npm install 

to run server
    -> npm run start - starts up gateway service
    -> To run microservice apis, open a new terminal for each service, navigate to directory of service 
        e.g /src/apis/payment_gateway run "node server.js" 


## Database
 -> Find table sql exports in /table_export directory
 

## Setting Environment Variables
-> Create a env_config.json file in root directory
    
    { 
      "DB_HOST":"",
      "DB_USER":"",
      "DB_NAME":"",
      "DB_PASSWORD":"",
      "DB_PORT":"",
      "BASE_URL":"",
      "GATEWAY_PORT":"",

      "WALLET_API_PORT":"8081",
      "WALLET_API_URL":"http://localhost:8081/",

      "USER_API_PORT":"8082",
      "USER_API_URL":"http://localhost:8082/",

      "PAYMENT_API_PORT":"8083",
      "PAYMENT_API_URL":"http://localhost:8083/",

      "NOTIFICATION_API_PORT":"8084",
      "NOTIFICATION_API_URL":"http://localhost:8084/",

      "EMAIL_SERVICE":"gmail",
      "EMAIL_USERNAME":"",
      "EMAIL_PASSWORD":""
    }



