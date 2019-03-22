class HomepageHandler {
  constructor() {
    const addMemberForm = document.querySelector('#add-team-members');
    addMemberForm.addEventListener('submit', this.addMember);

    const createBtn = document.querySelector('#create-team');
    createBtn.addEventListener('click', this.createTeam);

    HomepageHandler.deleteHandler();
  }

  /**
   * Add a member to list
   */
  addMember(e) {
    e.preventDefault();

    const membersList = document.querySelector('#membersList');
    const input = e.target.elements['new-member'];

    const template = `
    <a href="#" class="badge badge-secondary">
      <span id="member-name" name="member-name[]">${input.value}</span>
      <i class="fa fa-close delete"></i>
    </a>
    `;
    
    membersList.innerHTML += template;
    input.value = '';

    HomepageHandler.deleteHandler();
  }

  /**
   * Delete a member when the close button is clicked
   */
  static deleteHandler() {
    const currentMembers = document.querySelectorAll('#membersList .delete');
    
    currentMembers.forEach((member) => {
      member.addEventListener('click', (e) => {
        const targetMember = e.target.parentNode;
        targetMember.parentNode.removeChild(targetMember);
      });
    });
  }

  createTeam() {
    const teamName = document.querySelector('#team-name').value;
    const teamMembersList = [...document.querySelectorAll('#membersList #member-name')];

    const teamMembers = teamMembersList.map(item => item.innerText);
  }
}

const Home = new HomepageHandler();
