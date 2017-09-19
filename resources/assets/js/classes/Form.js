import Request from "./Request";

class Form extends Request {
  /**
     * Reset the form fields.
     */
  reset() {
    for (const field in this.originalData) {
      Vue.set(this, field, this.originalData[field]);
    }

    this.errors.clear();
  }

  empty() {
    for (const field in this.emptyData) {
      Vue.set(this, field, this.emptyData[field]);
    }

    this.errors.clear();
  }

  fill(data) {
    this.reset();

    for (const field in this.data()) {
      if (data[field]) {
        Vue.set(this, field, data[field]);
      }
    }
  }

  /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
  onSuccess(data) {
    if (this.resetData) {
      this.reset();
    }
    this.errors.clear();
  }

  diff() {
    return _.reduce(
      this.data(),
      (result, value, key) => {
        return _.isEqual(value, this.originalData[key])
          ? result
          : result.concat(key);
      },
      []
    );
  }
}

export default Form;
