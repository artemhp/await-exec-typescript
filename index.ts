import cp from 'child_process';

export default function Exec (command: string, options = { log: false, cwd: process.cwd() }) {
  if (options.log) console.log(command)

  return new Promise((done, failed) => {
    cp.exec(command, { ...options }, (err, stdout, stderr) => {
      if (err) {
        process.stdout.write(stdout)
        process.stderr.write(stderr);
        failed(err)
        return
      }

      done({ stdout, stderr })
    })
  })
}
