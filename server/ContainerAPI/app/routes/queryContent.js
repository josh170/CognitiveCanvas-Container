module.exports = (app) => {
  const api = app.ContainerAPI.app.api.queryContent;

  app.route('/api/queryContent')
     .get((req, res) => {
       console.log(req.query)
      api.queryContentsByLabel(req, res);
    });
}