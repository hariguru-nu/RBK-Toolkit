process.env.NODE_ENV = 'production';
process.chdir(__dirname);

process.on('uncaughtException', (err) => console.error('uncaughtException', err));
process.on('unhandledRejection', (reason) => console.error('Unhandled Rejection - error message:', reason));

/**
 * Make sure to install both platforms to support local development and AWS lambda
  npm install --platform=linux --arch=x64 sharp
  npm rebuild --platform=darwin --arch=x64 sharp
 */
process.env.NEXT_SHARP_PATH = `${__dirname}/node_modules/sharp`;

const serverless = require('serverless-http');

const baseDir = process.env.NODE_ENV === 'development' ? '..' : './dist';
const NextServer = require(`${baseDir}/node_modules/next/dist/server/next-server`).default;
const { config } = require(`${baseDir}/.next/required-server-files.json`);

const server = new NextServer({
 dev: false,
 dir: `${__dirname}/${baseDir}`,
 customServer: false,
 conf: {
   ...(config),
   distDir: '.next',
 },
});
const nextHandler = server.getRequestHandler();
 
exports.handler = serverless(async (req, res) => {
  try {
    await nextHandler(req, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500
    res.end('internal server error - serverless')
  }
}, {
  binary: ['*/*']
});
