class HomepageHandler {
  constructor() {
    const addMemberForm = document.querySelector('#add-team-members');
    addMemberForm.addEventListener('submit', this.addMember);
  }

  addMember(e) {
    e.preventDefault();

    const membersList = document.querySelector('#membersList');
    const input = e.target.elements['new-member'];

    const template = `
    <a href="#" class="badge badge-secondary">
      <span name="member-name">${input.value}</span>
      <i class="fa fa-close"></i>
    </a>
    `;
    
    membersList.innerHTML += template;
    input.value = '';
  }
}

const Home = new HomepageHandler();

document.querySelector('#membersList .delete').addEventListener('click', (e) => {
  e.target = undefined;
  delete(e.target);
  console.log(e);
});