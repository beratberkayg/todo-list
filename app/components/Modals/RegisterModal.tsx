"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Modal from "./Modal";
import Input from "../Inputs/Input";

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  const bodyElement = (
    <div>
      <Input
        id="name"
        type="text"
        placeholder="Kullanıcı Adı"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        type="text"
        placeholder="E-mail"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        placeholder="Şifre"
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  return (
    <div>
      <Modal
        bodyElement={bodyElement}
        isOpen
        onSubmit={() => {}}
        onClose={() => {}}
        btnLabel="Kayıt Ol"
        title="Kayıt Ol"
      />
    </div>
  );
};

export default RegisterModal;
