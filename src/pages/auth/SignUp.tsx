import { useFormik } from "formik";
import { Button } from "../../components/ui/buttons/Button";
import { Input } from "../../components/ui/inputs/Input";
import { AuthService } from "../../../generated/services/AuthService";
import * as yup from "yup";

export const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await AuthService.authControllerCreateUser(values);
        console.log("response", res);
      } catch (error) {
        console.log("error", error);
      }
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .email("Please add a valid email")
        .required("Email is required"),
      password: yup.string().min(8, "Password must be at least 8 characters"),
    }),
  });

  console.log("Initial values", formik.initialValues);
  console.log(" values", formik.values);
  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="flex flex-col gap-5 items-center py-10 px-24">
          <div className="font-serif text-3xl">Sign up with email</div>
          <Input
            value={formik.values.name}
            label="Name"
            error={formik.errors.name}
            touched={formik.touched.name}
            onBlur={formik.handleBlur}
            onChange={(e) => formik.setFieldValue("name", e.target.value)}
            type="text"
          />
          <Input
            value={formik.values.email}
            label="Email"
            error={formik.errors.email}
            touched={formik.touched.email}
            onBlur={formik.handleBlur}
            onChange={(e) => formik.setFieldValue("email", e.target.value)}
            type="email"
          />
          <Input
            value={formik.values.password}
            label="Password"
            error={formik.errors.password}
            touched={formik.touched.email}
            onBlur={formik.handleBlur}
            onChange={(e) => formik.setFieldValue("password", e.target.value)}
            type="password"
            placeholder="At least 8 characters"
          />
          <Button
            label="Continue"
            className="mt-2"
            onClick={() => {}}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};
