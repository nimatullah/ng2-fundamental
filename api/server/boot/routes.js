module.exports = function (app) {
  //get User model from the express app
  var UserModel = app.models.User;

  app.post('/login', function (req, res) {

    //parse user credentials from request body
    const userCredentials = {
      "email": req.body.email,
      "password": req.body.password
    }

    UserModel.login(userCredentials, 'user', function (err, result) {
      if (err) {
        //custom logger
        res.status(401).json({"error": "login failed"});
        return;
      }

      //transform response to only return the token and ttl
      res.json({
        "token": result.id,
        "ttl": result.ttl,
        "results" : result
      });
    });
  });

  app.post('/logout', function (req, res, next) {
    const access_token = req.query.access_token;
    if (!access_token) {
      res.status(400).json({"error": "access token required"});
      return;
    }
    UserModel.logout(access_token, function (err) {
      if (err) {
        Log.error({
          "error": err,
          "timestamp": new Date.getTime()
        });
        res.status(404).json({"error": "logout failed"});
        return;
      }
      res.status(204);
    });
  });
}
