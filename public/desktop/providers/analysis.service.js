angular.module('fitGApp')

// 'analysisService' service manage the authentication function of the page with the server
    .factory('analysisService', function ($state, $http, API) {

        return {
            getAnalysis: getAnalysis
        };

        //send the login info to the server
        function getAnalysis() {
            return $http({
                method: 'GET',
                url: API.GET_BODY_ANALYSIS_ENDPOINT,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).then(successData => {
                return successData.data.analysis;
            }).catch(errorData => {
                throw new Error(errorData.data.message);
            });
        }
    });
