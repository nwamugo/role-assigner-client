const teamLeadApiUrl = 'https://role-assigner.herokuapp.com/api/v1/team-lead';
const qaApiUrl = 'https://role-assigner.herokuapp.com/api/v1/qa';
const {
  body,
} = window.document;

const getTeamLead = async () => {

  await fetch(teamLeadApiUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((payload) => {
      if(payload.response){
        const { name } = payload.response;
        output = `<div class="tl__name">${name}</div>`;
        const teamLeadContainer = document.getElementById('team__lead--container');
        teamLeadContainer.innerHTML = output;
      }
    })
    .catch(err => err);
};

const getQa = async () => {

  await fetch(qaApiUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((payload) => {
      if(payload.uq){
        const qas = payload.uq;
        let output = '';

        qas.forEach((qa) => {
          output += `<li class="qa__select">${qa.name}</li>`;
        });

        const qaContainer = document.getElementById('qa--container');
        qaContainer.innerHTML = output;
      }
    })
    .catch(err => err);
};


body.addEventListener('load', getTeamLead());
body.addEventListener('load', getQa());