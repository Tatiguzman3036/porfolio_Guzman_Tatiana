/* window.addEventListener("load", function () {
    this.document.getElementById("container-loader").classList.toggle("container-loader2")
  }) */

  const myModal = document.getElementById('exampleModal');
  const myInput = myModal.querySelector('.modal-body');

  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus();
  });

  const {createApp} = Vue;
  createApp({
    data(){
      return{
        showModal: false,
        projects:[
          {
            title: 'PetShop "Lorem Ipsum"',
            video:'./images/Proyectos/Lorem Ipsum _ Home - Google Chrome 2023-08-24 21-20-03.mp4',
          },
          {
            title:'Eventos "Amazing Events"',
            video:'./images/Proyectos/Amazin Events_Home - Google Chrome 2023-08-24 22-24-45.mp4',
          },
          {
            title:'Homebanking "La Guzmi"',
            video:'./images/Proyectos/Bank _LA GUZMI__Home - Google Chrome 2023-08-26 01-28-32.mp4',
          },
          {
            title: 'GrowShop "Gozo"',
            video:'./images/Proyectos/GOZO GrowShop - Google Chrome 2023-08-26 01-07-27.mp4',
          }
        ],
        currentProject: {},
      }
    },
    methods:{
      openModal(project) {
        this.currentProject = project;
        $('#projectModal').modal('show'); // Mostrar el modal
      },
    }
  })
  .mount('#app')