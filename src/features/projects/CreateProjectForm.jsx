import { useForm } from "react-hook-form";
import TextField from "../../ui/Textfield";
import { useState } from "react";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "تعداد کاراکتر عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary mt-2 w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
