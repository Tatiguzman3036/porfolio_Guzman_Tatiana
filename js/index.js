window.addEventListener("load", function () {
    this.document.getElementById("container-loader").classList.toggle("container-loader2")
  })
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
            video:'../images/Proyectos/Lorem Ipsum _ Home - Google Chrome 2023-08-24 21-20-03.mp4',
          },
          {
            title:'Eventos "Amazing Events"',
            video:'../images/Proyectos/Amazin Events_Home - Google Chrome 2023-08-24 22-24-45.mp4',
          },
          {
            title:'Homebanking "La Guzmi"',
            video:'../images/Proyectos/Bank _LA GUZMI__Home - Google Chrome 2023-08-26 01-28-32.mp4',
          },
          {
            title: 'GrowShop "Gozo"',
            video:'../images/Proyectos/GOZO GrowShop - Google Chrome 2023-08-26 01-07-27.mp4',
          }
        ],
        currentProject: {},
        correo:{
          nombre: "",
          email: "",
          mensaje:"",
        },
        idioma: false,
        idioma1: true
      }
    },
    methods:{
      openModal(project) {
        this.currentProject = project;
        $('#projectModal').modal('show'); // Mostrar el modal
      },
      enviar() {
        const asunto = encodeURIComponent(`Mensaje de ${this.correo.nombre}, correo : ${this.correo.email}`);
        const body = encodeURIComponent(this.correo.mensaje);
        const correoDestino = 'tatianaguadalupeguzmn@hotmail.com';
        const mailtoLink = `mailto:${correoDestino}?subject=${asunto}&body=${body}`;
        window.location.href = mailtoLink;
        this.correo.nombre = '';
        this.correo.email = '';
        this.correo.mensaje = '';
      },
      cambiarIdioma() {
        this.idioma = !this.idioma;
        window.location.href = "../pages/index2.html"
      },
      cambiarIdioma1(){
        this.idioma1 = !this.idioma1
        window.location.href = "../index.html";
      }
  },
  })
  .mount('#app')