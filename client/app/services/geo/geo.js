class geoService {
  constructor($http, $q) {
    'ngInject'

    //INIT DEPENDENCIES
    this.$http = $http;
    this.$q = $q;
  }

  getData(url) {
    const defer = this.$q.defer();
    this.$http.get(url)
      .then((response) => {
        console.log("response: ", response);
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.status);
  });
    return defer.promise;
  }
}

export default geoService;