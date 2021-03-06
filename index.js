const ApiBuilder = require('claudia-api-builder'),
AWS = require('aws-sdk');
const api = new ApiBuilder();
const axios = require('axios');

api.get('/', function (req) {
    return new Promise((resolve, resject) => {
      try{
            const {API_KEY} = process.env;

            const { action } = req.queryString;

            const url = `https://apiv2.apifootball.com/?action=${action}&APIkey=${API_KEY}`;

            axios

                  .get(url)
                  .then(function(res) {
                    resolve(res.data);
                  })
                  .catch(function(axiosError) {
                    reject({axiosError})
                  });

          } catch (trycatchError){
                reject({trycatchError});
          }
    })
});


module.exports = api;
