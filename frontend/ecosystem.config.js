require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps : [{
    name   : "app",
    script : "./dist/app.js"
  }],
   deploy: {
      production: {
        key: '/c/Users/seave/.ssh/id_ed25519.pub',
        user: DEPLOY_USER,
        host: DEPLOY_HOST,
        ref: DEPLOY_REF,
        repo: 'git@github.com:ElenaSolov/web-plus-pm2-deploy.git',
        path: DEPLOY_PATH,
        'post-deploy': 'npm i && npm run build',
      },
    },
}
