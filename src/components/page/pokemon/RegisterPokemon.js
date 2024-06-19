import { useForm } from "react-hook-form";
// import "bulma/css/bulma.css";
// import "bulma/sass/base/_index.scss";
// import "bulma/sass/themes/_index.scss";
// import "bulma/sass/form/_index.scss";
// import "sass/_base.scss";
import TextField from "../../ui/TextField";
import TextareaField from "../../ui/TextareaField";
import Select from "../../ui/Select";
import CheckboxGroup from "../../ui/CheckboxGroup";
import RadioGroup from "../../ui/RadioGroup";
import "./RegisterPokemon.scss";

const RegisterPokemon = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="main">
      <h2 className="heading-primary">登録画面</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <TextField
          errors={errors}
          register={register}
          label="名前"
          name="name"
          placeholder="ここに入力して"
        />
        <CheckboxGroup
          errors={errors}
          register={register}
          label="名前"
          name="name"
          placeholder="ここに入力して"
        />
        <RadioGroup
          errors={errors}
          register={register}
          label="名前"
          name="name"
          placeholder="ここに入力して"
        />

        <Select
          errors={errors}
          register={register}
          label="名前"
          name="name"
          placeholder="ここに入力して"
        />

        <TextareaField
          errors={errors}
          register={register}
          label="備考"
          name="memo"
          placeholder="ここに入力して"
        />
        <div className="main__button-box">
          <button type="submit" className="btn btn--primary">
            登録
          </button>
        </div>
      </form>

      <div className="container">
        <section className="section">
          {/* <input type="text" className="input is-small is-danger" /> */}
          <div className="field">
            <label className="label">Label</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
            <p className="help">This is a help text</p>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" className="is-large" name="question" />
                Yes
              </label>
              <label className="radio">
                <input type="radio" name="question" />
                No
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </section>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">From</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input className="input" type="text" placeholder="Name"></input>
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="email"
                placeholder="Email"
                value="alex@smith.com"
              ></input>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field is-expanded">
            <div className="field has-addons">
              <p className="control">
                <a className="button is-static">+44</a>
              </p>
              <p className="control is-expanded">
                <input
                  className="input"
                  type="tel"
                  placeholder="Your phone number"
                ></input>
              </p>
            </div>
            <p className="help">Do not enter the first zero</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Department</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Already a member?</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <label className="radio">
                <input type="radio" name="member"></input>
                Yes
              </label>
              <label className="radio">
                <input type="radio" name="member"></input>
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input is-danger"
                type="text"
                placeholder="e.g. Partnership opportunity"
              />
            </div>
            <p className="help is-danger">This field is required</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Question</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Explain how we can help you"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          {/* <!-- Left empty for spacing --> */}
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPokemon;
