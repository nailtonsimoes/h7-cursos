const PROXY_CONFIG = [
  {
    //faz com que oque esta acontecendo no contexto /api seja direcionado para localhost:8080
    context: ["/api"],
    target: "http://localhost:8080/",
    secure: false,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;
