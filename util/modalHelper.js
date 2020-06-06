class ModalHelper {
    // https://mongoosejs.com/docs/api.html#schematype_SchemaType-required
    requiredMessage() {
        return '{PATH} is required!'
    }
}

module.exports = new ModalHelper;
