
const CERTIFICATE_PATH = {
    //caBundle: "../../carlosmp_com.ca-bundle",
    clavePrivada: "../../encryption/private.key",
    certificado: "../..//encryption/mydomain.crt"
};

const URL_CONFIG = {
    protocol: "https",
    domain: "localhost",
    port: 4001
};

const HOME_URL = URL_CONFIG.protocol + "://" + URL_CONFIG.domain + (URL_CONFIG.port ? ":" + URL_CONFIG.port : "");
