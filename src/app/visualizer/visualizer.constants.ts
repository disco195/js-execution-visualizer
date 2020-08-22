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
           code: `
function getEmpDetails(emp) {
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
console.log('EOF');
`,
           codeLines: [
             '1. function getEmpDetails(emp) {',
             '2.   return new Promise((resolve, reject) => {',
             "3.     console.log('getEmpDetails Start');",
             "4.     fetch('https://myorg.com/api/getEmpDetails/' + emp).then((data) => {",
             "5.       console.log('getEmpDetails request done');",
             '6.       resolve(data);',
             '7.     });',
             "8.     console.log('getEmpDetails EOF');",
             '9.   });',
             '10. }',
             '11. function getBasicPay(emp) {',
             '12.   return new Promise((resolve, reject) => {',
             "13.     console.log('getBasicPay Start');",
             "14.     fetch('https://myorg.com/api/getBasicPay/' + emp).then((data) => {",
             "15.       console.log('getBasicPay request done');",
             '16.       resolve(data);',
             '17.     });',
             "18.     console.log('getBasicPay EOF');",
             '19.   });',
             '20. }',
             '21. function getHra(emp) {',
             '22.   return new Promise((resolve, reject) => {',
             "23.     console.log('getHra Start');",
             "24.     fetch('https://myorg.com/api/getHra/' + emp).then((data) => {",
             "25.       console.log('getHra request done');",
             '26.       resolve(data);',
             '27.     });',
             "28.     console.log('getHra EOF');",
             '29.   });',
             '30. }',
             '31. let salary;',
             "32. getEmpDetails('emp').then((details) => {",
             "33.   console.log('getEmpDetails Done', details);",
             '34.   return Promise.all([getHra(details), getBasicPay(details)]);',
             '35. }).then((result) => {',
             "36.   console.log('Salary Done', result);",
             '37.   salary = result[0] + result[1];',
             '38. });',
             "39. console.log('EOF');",
           ],
           examples: [
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: [],
               log: [],
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: ["getEmpDetails('emp')"],
               log: [],
               highlightKey: 32,
             },
             {
               taskQueue: [],
               microTaskQueue: ["console.log('getEmpDetails Start');"],
               webApis: [],
               callStack: [],
               log: [],
               highlightKey: 3,
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: ["fetch('getEmpDetails)"],
               log: ['getEmpDetails Start'],
               highlightKey: 4,
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: ["fetch('getEmpDetails)"],
               callStack: [],
               log: ['getEmpDetails Start', 'getEmpDetails EOF'],
               highlightKey: 8,
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: ["fetch('getEmpDetails)"],
               callStack: ["console.log('EOF');"],
               log: ['getEmpDetails Start', 'getEmpDetails EOF'],
               highlightKey: 39,
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: ["fetch('getEmpDetails)"],
               callStack: ["console.log('getEmpDetails request done');"],
               log: ['getEmpDetails Start', 'getEmpDetails EOF', 'EOF'],
               highlightKey: 5,
             },
           ],
         },
         'async-await-exec': {
           imageSrc: '../../assets/code-snippets/async-await-exec.png',
           code: `
async function getEmpDetails(emp) {
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
console.log('EOF');
    `,
           examples: [
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: [],
               log: [],
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: ['console.log("Here I am");'],
               log: [],
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: [],
               log: ['Here I am'],
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: ['console.log("there I am");'],
               log: ['Here I am'],
             },
             {
               taskQueue: [],
               microTaskQueue: [],
               webApis: [],
               callStack: [],
               log: ['Here I am', 'there I am'],
             },
           ],
         },
       };
