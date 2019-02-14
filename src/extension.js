const vscode = require('vscode')
var ps = require('ps-node')

function activate(context) {
  console.log('Activated')
  // A simple pid lookup
  ps.lookup(
    {
      command: 'OBS',
      psargs: 'ux'
    },
    function(err, resultList) {
      if (err) {
        throw new Error(err)
      }

      resultList.forEach(function(process) {
        if (process) {
          console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments)
        }
      })
    }
  )
  vscode.workspace.onDidOpenTextDocument(openedEvent => {
    console.log(openedEvent)
  })
  vscode.workspace.onDidChangeTextDocument(changedEvent => {
    console.log(changedEvent)
  })

  context.subscriptions.push('test')
}

exports.activate = activate

function deactivate() {}

module.exports = {
  activate,
  deactivate
}
