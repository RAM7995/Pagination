var globalData = [];

var currPage = 0;

// H1
const h1Ele = document.createElement('h1');

h1Ele.innerText = 'Pagination';

h1Ele.id = 'title';

// paragraph
const pELe = document.createElement('p');

pELe.innerText = 'Pagincating 100 data for easy readability';

pELe.id = 'description';

// Main DIV
const mainDiv = document.createElement('div');

mainDiv.className = 'table-responsive';

// table
const tableEle = document.createElement('table');

tableEle.className = 'table table-bordered';
tableEle.id = 'table'

// thead
const theadEle = document.createElement('thead');
theadEle.className = 'table table-bordered table-dark';

// tr
const trEle = document.createElement('tr');

['Id', 'Email', 'Name'].forEach((columnName) => {
  // th
  const thEle = document.createElement('th');
  thEle.innerText = columnName;
  trEle.appendChild(thEle);
})

theadEle.appendChild(trEle);

// tbody
const tbodyEle = document.createElement('tbody');

tableEle.append(theadEle, tbodyEle);

mainDiv.appendChild(tableEle);

// btns DIV
const btnsDiv = document.createElement('div');

btnsDiv.className = 'd-flex justify-content-center';
btnsDiv.id = "buttons";

const prevBtn = document.createElement('button');
const oneBtn = document.createElement('button');
const twoBtn = document.createElement('button');
const threeBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.innerText = 'Previous';
oneBtn.innerText = '1';
twoBtn.innerText = '2';
threeBtn.innerText = '3';
nextBtn.innerText = 'Next';

btnsDiv.append(prevBtn,oneBtn,twoBtn,threeBtn,nextBtn,);

document.body.style.textAlign = 'center'
document.body.append(h1Ele, pELe, mainDiv, btnsDiv);



//logic
const request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');

request.send(null);

request.onload = () => {
  const data = JSON.parse(request.responseText);
  globalData = data;
  data.slice(currPage, 5).forEach(({ email, id, name }) => {
    // tr
    const innerTr = document.createElement('tr');

    // tds
    const innerTdId = document.createElement('td');
    innerTdId.innerText = id;
    const innerTdName = document.createElement('td');
    innerTdName.innerText = name;
    const innerTdEmail = document.createElement('td');
    innerTdEmail.innerText = email;

    innerTr.append(innerTdId, innerTdEmail, innerTdName);

    tbodyEle.appendChild(innerTr);
  })
};


// Core function Next Data
const showNextSetOfData = () => {

  tbodyEle.innerHTML = '';

  currPage++;

  const startIndex = currPage * 5;

  const endIndex = (currPage * 5) + 5;

  globalData.slice(startIndex, endIndex).forEach(({ email, id, name }) => {
    // tr
    const innerTr = document.createElement('tr');

    // tds
    const innerTdId = document.createElement('td');
    innerTdId.innerText = id;
    const innerTdName = document.createElement('td');
    innerTdName.innerText = name;
    const innerTdEmail = document.createElement('td');
    innerTdEmail.innerText = email;

    innerTr.append(innerTdId, innerTdEmail, innerTdName);

    tbodyEle.appendChild(innerTr);

  });
}

//Core Function Previous Data
const showPrevSetOfData = () => {

    tbodyEle.innerHTML = '';
  
    currPage--;
  
    const startIndex = currPage * 5;
  
    const endIndex = (currPage * 5) + 5;
  
    globalData.slice(startIndex, endIndex).forEach(({ email, id, name }) => {
      // tr
      const innerTr = document.createElement('tr');
  
      // tds
      const innerTdId = document.createElement('td');
      innerTdId.innerText = id;
      const innerTdName = document.createElement('td');
      innerTdName.innerText = name;
      const innerTdEmail = document.createElement('td');
      innerTdEmail.innerText = email;
  
      innerTr.append(innerTdId, innerTdEmail, innerTdName);
  
      tbodyEle.appendChild(innerTr);
  
    });
  }


  
//Core Function 1
const showOneData = () => {

    tbodyEle.innerHTML = '';
  
   
  
    const startIndex = 0;
  
    const endIndex = 5;
  
    globalData.slice(startIndex, endIndex).forEach(({ email, id, name }) => {
      // tr
      const innerTr = document.createElement('tr');
  
      // tds
      const innerTdId = document.createElement('td');
      innerTdId.innerText = id;
      const innerTdName = document.createElement('td');
      innerTdName.innerText = name;
      const innerTdEmail = document.createElement('td');
      innerTdEmail.innerText = email;
  
      innerTr.append(innerTdId, innerTdEmail, innerTdName);
  
      tbodyEle.appendChild(innerTr);
  
    });
  }

  //Core Function 2
const showTwoData = () => {

    tbodyEle.innerHTML = '';
  
   
  
    const startIndex = 5;
  
    const endIndex = 10;
  
    globalData.slice(startIndex, endIndex).forEach(({ email, id, name }) => {
      // tr
      const innerTr = document.createElement('tr');
  
      // tds
      const innerTdId = document.createElement('td');
      innerTdId.innerText = id;
      const innerTdName = document.createElement('td');
      innerTdName.innerText = name;
      const innerTdEmail = document.createElement('td');
      innerTdEmail.innerText = email;
  
      innerTr.append(innerTdId, innerTdEmail, innerTdName);
  
      tbodyEle.appendChild(innerTr);
  
    });
  }

  //Core Function 3
const showThreeData = () => {

    tbodyEle.innerHTML = '';
  
   
  
    const startIndex = 10;
  
    const endIndex = 15;
  
    globalData.slice(startIndex, endIndex).forEach(({ email, id, name }) => {
      // tr
      const innerTr = document.createElement('tr');
  
      // tds
      const innerTdId = document.createElement('td');
      innerTdId.innerText = id;
      const innerTdName = document.createElement('td');
      innerTdName.innerText = name;
      const innerTdEmail = document.createElement('td');
      innerTdEmail.innerText = email;
  
      innerTr.append(innerTdId, innerTdEmail, innerTdName);
  
      tbodyEle.appendChild(innerTr);
  
    });
  }
  
prevBtn.addEventListener('click',showPrevSetOfData);
oneBtn.addEventListener('click',showOneData);
twoBtn.addEventListener('click',showTwoData);
threeBtn.addEventListener('click',showThreeData);
nextBtn.addEventListener('click', showNextSetOfData);

