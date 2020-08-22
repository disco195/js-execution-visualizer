export const ROW_TITLES = {
  taskQueue: 'TASK QUEUE',
  microTaskQueue: 'MICRO TASK QUEUE',
  webApis: 'WEB API',
  callStack: 'CALL STACK',
  log: 'LOG'
};

export const VISUALISATION_EXAMPLES = {
  'promise-exec': {
    imageSrc: '../../assets/code-snippets/promises.png',
    examples: [
      {
        taskQueue: [],
        microTaskQueue: [],
        webApis: [],
        callStack: [],
        log: []
      },
      {
        taskQueue: [],
        microTaskQueue: [],
        webApis: [],
        callStack: ['console.log("Here I am");'],
        log: []
      },
      {
        taskQueue: [],
        microTaskQueue: [],
        webApis: [],
        callStack: [],
        log: ['Here I am']
      },
      {
        taskQueue: [],
        microTaskQueue: [],
        webApis: [],
        callStack: ['console.log("there I am");'],
        log: ['Here I am']
      },
      {
        taskQueue: [],
        microTaskQueue: [],
        webApis: [],
        callStack: [],
        log: ['Here I am', 'there I am']
      },
    ]
  }
};
