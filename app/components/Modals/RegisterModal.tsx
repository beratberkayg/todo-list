"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Modal from "./Modal";
import Input from "../Inputs/Input";
import Button from "../buttons/Button";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { registerModalFunc } from "@/app/redux/modalSlice";

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { registerModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

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

  const footerElement = (
    <div className="mt-3">
      <Button
        btnLabel="Google ile Giriş"
        outline
        icon={FcGoogle}
        onSubmit={() => {}}
      />
    </div>
  );
  return (
    <div>
      <Modal
        footerElement={footerElement}
        bodyElement={bodyElement}
        isOpen={registerModal}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => {
          dispatch(registerModalFunc());
        }}
        btnLabel="Kayıt Ol"
        title="Kayıt Ol"
      />
    </div>
  );
};

export default RegisterModal;
