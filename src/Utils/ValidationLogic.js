const validate = (formData) => {
    const errors = {};

    Object.keys(formData).forEach(key => {
        if (!formData[key]) {
            errors[key] = `${key} cannot be empty`;
        }
    });

    return errors;
};

export default validate;