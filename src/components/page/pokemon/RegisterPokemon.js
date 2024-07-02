import { useForm } from "react-hook-form";
// import "bulma/css/bulma.css";
// import "bulma/sass/base/_index.scss";
// import "bulma/sass/themes/_index.scss";
// import "bulma/sass/form/_index.scss";
// import "sass/_base.scss";
import Form from "../../ui/Form";
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
      {/* <form onSubmit={handleSubmit(onSubmit)} className="form"> */}
      <Form onSubmitHandler={handleSubmit(onSubmit)}>
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
          label="タイプ"
          name="type"
          elements={[
            { label: "くさ", value: "kusa" },
            { label: "みず", value: "mizu" },
            { label: "ほおの", value: "honoo" },
            { label: "こおり", value: "kori" },
          ]}
        />
        <RadioGroup
          errors={errors}
          register={register}
          label="性別"
          name="gender"
          elements={[
            { label: "オス", value: "male" },
            { label: "メス", value: "female" },
            { label: "特定不可", value: "other" },
          ]}
        />

        <Select
          errors={errors}
          register={register}
          label="所属"
          name="department"
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
        {/* </form> */}
      </Form>
    </div>
  );
};

export default RegisterPokemon;
