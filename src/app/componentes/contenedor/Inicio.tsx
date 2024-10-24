import ropa from "../../../assets/img/333.png";

export const Inicio = () => {
  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <div className="row col-md-8">
          <div className="col-md-6">
            <img
              src={ropa}
              alt="Descripción de la imagen"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Bienvenido a A&D</h2>
              <p>
                ¡Bienvenidos a nuestra tienda! Aquí encontrarás una amplia
                selección de camisetas y pantalones de alta calidad, diseñados
                para hombres y mujeres que buscan estilo y comodidad. Ya sea que
                prefieras un look casual, moderno o elegante, tenemos algo
                especial para ti. ¡Explora nuestras colecciones y descubre las
                prendas perfectas para expresar tu estilo único!
              </p>
              <button className="btn btn-outline-light" type="button">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
