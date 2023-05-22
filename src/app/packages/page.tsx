import React from "react";
interface Ubicacion {
  id: number;
  nombre: string;
}

const GetPackages = () => {
  const ubicaciones: Ubicacion[] = [
    { id: 1, nombre: "Amenabar 2356, CABA" },
    { id: 1, nombre: "AV. Carabobo y Rivadavia, CABA" },
    { id: 1, nombre: "Melian 1242, CABA" }
  ];
  return (
    <>
      <div className="mx-auto max-w-md">
        <nav
          style={{
            borderBottom: "1px solid gray",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          {/* <Image
            src={logo}
            alt="logo"
            style={{ width: "51px", height: "32px" }}
          /> */}
        </nav>
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
            padding: "20px",
            width: "100%"
          }}
        >
          <h1 style={{ fontSize: "40px" }}>←</h1>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ width: "100%", marginBottom: "60px" }}>
              <h1 style={{ fontSize: "25px" }}>
                <strong>Obtener paquetes</strong>
              </h1>
              <h5 className="text-red">
                ¿Cuántos paquetes más vas a repartir hoy?
              </h5>
            </div>
            {ubicaciones.map((ubicacion: Ubicacion) => (
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "100%"
                }}
                key={ubicacion.id}
              >
                <h5>{ubicacion.nombre}</h5>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked
                      style={{
                        transform: "scale(2)",
                        marginRight: "10px",
                        marginLeft: "35px"
                      }}
                    />
                  </label>
                  <button
                    style={{
                      border: "1px solid black",
                      height: "26px",
                      width: "26px",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      margin: "30px"
                    }}
                  >
                    -
                  </button>
                  2
                  <button
                    style={{
                      border: "1px solid black",
                      height: "26px",
                      width: "26px",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      margin: "30px"
                    }}
                  >
                    +
                  </button>
                </div>
                <hr style={{ width: "100%", marginTop: "20px" }} />
              </div>
            ))}

            <button
              style={{
                marginTop: "50px",
                width: "100%",
                backgroundColor: "#217BCE",
                color: "white",
                borderRadius: "5px"
              }}
            >
              INICIAR JORNADA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPackages;
