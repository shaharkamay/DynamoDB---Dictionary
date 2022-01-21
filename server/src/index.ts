import config from './utils/config';
import app from './app';

(() => {
  app.listen(config.port, () => {
    console.log(`app started on port ${config.port}`);
  });
})();
