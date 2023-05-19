import Formulario from './Formulario';

const Order= () => {
  return (
      <>
      <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Has Tu Pedido aca!!</h1>
            <p className="py-6">Realiza tu compra rellenando los siguientes campos, luego de este paso nuestro equipo de trabajo le hara llegar su pedido super Rapido.</p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body">  
            <Formulario/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default Order;