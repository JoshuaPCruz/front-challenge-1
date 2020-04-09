const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a class="logo" href="/">
            Empresa<span>.com</span>
          </a>
        </h1>
      </div>
      <div>
        <ul class="Header-nav" >
          <li><a class="active" href="#">Inicio</a></li>
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
       
      </div>
    </div>
  `;
  return view;
};

export default Header;
