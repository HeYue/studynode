const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'studyexpress', shell: true };
require('child_process').spawn('npm', args, opts);
