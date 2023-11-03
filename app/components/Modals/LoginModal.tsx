"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Modal from "./Modal";
import Input from "../Inputs/Input";
import Button from "../buttons/Button";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { loginModalFunch } from "@/app/redux/modalSlice";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { loginModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const bodyElement = (
    <div>
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
        isOpen={loginModal}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => {
          dispatch(loginModalFunch());
        }}
        btnLabel="Giriş Yap"
        title="Giriş Yap"
      />
    </div>
  );
};

export default LoginModal;
