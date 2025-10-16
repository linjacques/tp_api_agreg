import express from 'express';
import Pipeline from '../pipeline.mjs';

class Server {
  constructor() {
    this.app = express();
    new Pipeline(this.app);
  }

  run(port = 3000) {
    this.app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}

export default Server;
