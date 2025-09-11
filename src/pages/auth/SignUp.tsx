import { Input } from "../../components/ui/inputs/Input";

export const SignUp = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center py-10 px-24" >
        <div className="font-serif text-3xl">Sign up with email</div>
        <Input value="" label="Email" error="Please add the name" onChange={() => {}} type="text" />
        <Input
          value=""
          label="Password"
          error=""
          onChange={() => {}}
          type="password"
          placeholder="At least 8 characters"/>
      </div>
    </>
  );
};
