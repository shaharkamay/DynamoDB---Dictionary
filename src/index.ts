import config from './utils/config';
import app from './app';
import serverless from 'serverless-http';

const handler = serverless(app);

export { handler };

(() => {
  app.listen(config.port, () => {
    console.log(`app started on port ${config.port}`);
  });
})();
