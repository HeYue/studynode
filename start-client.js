const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'studyreact', shell: true };
require('child_process').spawn('npm', args, opts);
