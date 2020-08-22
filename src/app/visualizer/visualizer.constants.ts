export const ROW_TITLES = {
  taskQueue: 'TASK QUEUE',
  microTaskQueue: 'MICRO TASK QUEUE',
  webApis: 'WEB API',
  callStack: 'CALL STACK',
  log: 'LOG'
};

export const VISUALISATION_EXAMPLES = {
  'promise-exec': {
    imageSrc: '../../assets/code-snippets/promises-exec.png',
    code: `function getEmpDetails(emp) {
      return new Promise((resolve, reject) => {
        console.log('getEmpDetails Start');
        fetch('https://myorg.com/api/getEmpDetails/' + emp).then((data) => {
          console.log('getEmpDetails request done');
          resolve(data);
        });
        console.log('getEmpDetails EOF');
      });
    }
    function getBasicPay(emp) {
      return new Promise((resolve, reject) => {
        console.log('getBasicPay Start');
        fetch('https://myorg.com/api/getBasicPay/' + emp).then((data) => {
          console.log('getBasicPay request done');
          resolve(data);
        });
        console.log('getBasicPay EOF');
      });
    }
    function getHra(emp) {
      return new Promise((resolve, reject) => {
        console.log('getHra Start');
        fetch('https://myorg.com/api/getHra/' + emp).then((data) => {
          console.log('getHra request done');
          resolve(data);
        });
        console.log('getHra EOF');
      });
    }
    let salary;
    getEmpDetails('emp').then((details) => {
      console.log('getEmpDetails Done', details);
      return Promise.all([getHra(details), getBasicPay(details)]);
    }).then((result) => {
      console.log('Salary Done', result);
      salary = result[0] + result[1];
    });
    console.log('EOF');`,
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
  },
  'async-await-exec': {
    imageSrc: '../../assets/code-snippets/async-await-exec.png',
    code: `async function getEmpDetails(emp) {
      console.log('getEmpDetails Start');
      const empDetails = await fetch('https://myorg.com/api/getEmpDetails/' + emp);
      console.log('getEmpDetails request done');
      console.log('getEmpDetails EOF');
      return empDetails;
    }
    async function getBasicPay(emp) {
      console.log('getBasicPay Start');
      const basicPay = await fetch('https://myorg.com/api/getBasicPay/' + emp);
      console.log('getBasicPay request done');
      console.log('getBasicPay EOF');
      return getBasicPay;
    }
    async function getHra(emp) {
      console.log('getHra Start');
      const basicPay = await fetch('https://myorg.com/api/getHra/' + emp);
      console.log('getHra request done');
      console.log('getHra EOF');
      return basicPay;
    }
    async function calcSalary() {
      const empDetails = await getEmpDetails('emp');
      console.log('getEmpDetails Done', empDetails);
      const [hra, bascicPay] = await Promise.all([getHra(details), getBasicPay(details)]);
      console.log('Salary Done', {hra, bascicPay});
      return hra + bascicPay;
    }
    calcSalary().then(totalSalary => console.log('Total Salary', totalSalary));
    console.log('EOF');`,
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
  },
};
