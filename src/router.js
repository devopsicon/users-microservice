class Router {

  constructor (app) {    
    this.app = app;

    this.mountRoutes();
  }

  mountRoutes() {
    const router = this.app;
    router.get('/', (req, res, next) => {
      return res.status(200).json({
        message: 'Hello World!'
      });
    });
    console.log('route init!');
  }

}

export default Router;