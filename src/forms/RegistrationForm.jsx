/* eslint-disable no-unused-vars */
import FiledSet from "../components/FiledSet";
import Field from "../components/Field.jsx";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import NumberInput from "./NumberInput.jsx";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const formSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col m-0 p-0  justify-center items-center ">
      <form onSubmit={handleSubmit(formSubmit)}>
        <FiledSet label="Enter info to Registration ">
          <Field label="FirstName :" error={errors.fname}>
            <input
              {...register("fname", {
                required: "first name is required",
                maxLength: {
                  value: 17,
                  message: "fist name is too large",
                },
              })}
              className={`p-2  border box-border   w-[400px] rounded-md 
                            focus:outline-none  ${
                              errors.fname
                                ? "border-red-700"
                                : "border-amber-400 focus:ring-2 focus:ring-amber-500"
                            }`}
              type="fname"
              id="fname"
              name="fname"
              placeholder="Enter first name"
            />
          </Field>
          <Field label="Last Name :" error={errors.lname}>
            <input
              {...register("lname", {
                required: "last name is required",
                maxLength: {
                  value: 17,
                  message: "last name is too large",
                },
              })}
              className={`p-2  border box-border   w-[400px] rounded-md 
                            focus:outline-none  ${
                              errors.lname
                                ? "border-red-700"
                                : "border-amber-400 focus:ring-2 focus:ring-amber-500"
                            }`}
              type="lname"
              id="lname"
              name="lname"
              placeholder="Enter last name"
            />
          </Field>
          {/* react by default form number data refers as a string but we need age is number.so make it extra component */}
          <Field label="Age" error={errors.age}>
            <Controller
              name="age"
              control={control}
              defaultValue={1}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  
                  className={`p-2 border box-border w-[400px] rounded-md ${
                    errors.age ? "border-red-500" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be between 0 and 100",
                },
              }}
            />
          </Field>

          <Field label="Email:" error={errors.email}>
            <input
              {...register("email", { required: "email is required" })}
              className={`p-2  border box-border   w-[400px] rounded-md 
                        focus:outline-none  ${
                          errors.email
                            ? "border-red-700"
                            : "border-amber-400 focus:ring-2 focus:ring-amber-500"
                        }`}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email address"
            />
          </Field>

          <Field label="Password:" error={errors.password}>
            <input
              {...register("password", {
                required: "password is required",
                maxLength: {
                  value: 16,
                  message: "password is too large",
                },
                minLength: {
                  value: 8,
                  message: "password at least 8 characters",
                },
              })}
              className={`p-2  border box-border   w-[400px] rounded-md 
                            focus:outline-none  ${
                              errors.password
                                ? "border-red-700"
                                : "border-amber-400 focus:ring-2 focus:ring-amber-500"
                            }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </Field>
          <Field label="Password:" error={errors.picture}>
            <input
              {...register("picture", {
                required: "picture is required"
              })}
              className={`p-2  border box-border   w-[400px] rounded-md 
                            focus:outline-none  ${
                              errors.password
                                ? "border-red-700"
                                : "border-amber-400 focus:ring-2 focus:ring-amber-500"
                            }`}
              type="file"
              id="picture"
              name="picture"
              placeholder="Enter picture file"
            />
          </Field>

        </FiledSet>

        <FiledSet label="Enter your social media">
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex gap-3  justify-between items-center w-max"
              >
                <Field label="Social Media Name :">
                  <input
                    className="p-2  border box-border   w-[300px] rounded-md 
                            focus:outline-none  focus:ring-2 focus:ring-amber-500"
                    type="text"
                    {...register(`socials[${index}].name`)}
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                  />
                </Field>
                <Field label="Social Url:">
                  <input
                    className="p-2  border box-border   w-[300px] rounded-md 
                            focus:outline-none   focus:ring-2 focus:ring-amber-500"
                    type="text"
                    {...register(`socials[${index}].url`)}
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                  />
                </Field>

                <button
                  className="  font-thin cursor-pointer rounded text-xl bg-red-600 text-white w-32 mx-auto"
                  onClick={() => remove(index)}
                >
                  X
                </button>
              </div>
            );
          })}

          <button
            className="p-2 my-3  cursor-pointer rounded text-xl font-thin bg-cyan-600 text-white w-32 "
            onClick={() => append({ name: "", url: "" })}
          >
            Add field
          </button>
        </FiledSet>

        <div className="text-red-700 mb-1 text-[18px]">
          {errors?.root?.random?.message}
        </div>
        <Field>
          <button className="p-3 cursor-pointer rounded text-xl bg-amber-600 font-thin text-white w-32 mx-auto">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
