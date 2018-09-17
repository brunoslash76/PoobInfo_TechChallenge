function DaoError(errorCode, message) {
    this.errorCode = errorCode;
    this.message = message;
}

module.exports = DaoError;