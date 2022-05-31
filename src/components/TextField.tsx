const TextField = () => {
  return (
    // <div
    //   tabIndex={0}
    //   className=" focus:border-primary  border rounded-md bg-white border-[#acabab]  hover:border-tertiary relative  h-14"
    // >
    //   <TextField
    //     outlined
    //     label="Nameegwq3g"
    //     leadingIcon={<i className="material-icons">favorite</i>}
    //     trailingIcon={<i className="material-icons">visibility</i>}
    //   >
    //     <Input
    //       value={this.state.value}
    //       onChange={(e) => this.setState({ value: e.currentTarget.value })}
    //     />
    //   </TextField>
    // </div>
    <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon mdc-text-field--with-trailing-icon">
      <i className="material-icons mdc-text-field__icon">favorite</i>
      <i className="material-icons mdc-text-field__icon">visibility</i>
      <input className="mdc-text-field__input" id="text-field-hero-input" />
      <div className="mdc-notched-outline">
        <div className="mdc-notched-outline__leading"></div>
        <div className="mdc-notched-outline__notch">
          <label htmlFor="text-field-hero-input" className="mdc-floating-label">
            Nameegwq3g
          </label>
        </div>
        <div className="mdc-notched-outline__trailing"></div>
      </div>
    </div>
  );
};

export default TextField;
