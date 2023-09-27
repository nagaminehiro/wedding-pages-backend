const allowedOrigins = ['https://sayuriemessias.com.br']; // Adicione suas origens permitidas aqui

function getCorsOptions() {
  return {
        origin: function (origin, callback) {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
  };
}

module.exports = getCorsOptions;
