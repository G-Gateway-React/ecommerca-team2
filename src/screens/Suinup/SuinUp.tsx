import Nav from "../../Components/NavBar/Navbar";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store";
import { signupThunk } from "../../store/auth";
import { passwordValidation } from "../../utils/validation";
import toast from "react-hot-toast";

const Form = styled.form`
  display: flex;
  gap: 5px;
  flex-direction: column;
  border: 1px solid #000;
  width: 450px;
  border-radius: 14px;
  padding: 35px 50px;
`;

const ButtonSignup = styled(Button)`
  width: 100%;
  height: 50px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background: #000;
  color: #fff;
  margin: 40px 0 30px;
  &:hover {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("koss"),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().matches(
    passwordValidation.exp,
    passwordValidation.msg
  ),
});
export const SignUp = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useAppDispatch();

  const submitHandler = async (values: FormValues) => {
    const { firstName, lastName, password, email } = values;
    const name = firstName + lastName;
    const result = await dispatch(
      signupThunk({
        name,
        email,
        password,
      })
    );

    if (signupThunk.rejected.match(result)) {
      if (result.payload?.msg) {
        toast.error(result.payload.msg);
      }
    }
    if (signupThunk.fulfilled.match(result)) {
      toast.success("Signup success");
    }
  };
  return (
    <>
      <Nav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Typography
            sx={{
              marginBottom: "10px",
              letterSpacing: "0.03em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            CREATE ACCOUNT
          </Typography>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            error={errors.firstName?.message ? true : false}
            helperText={errors?.firstName?.message}
            {...register("firstName")}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            error={errors.lastName?.message ? true : false}
            helperText={errors?.lastName?.message}
            {...register("lastName")}
          />
          <TextField
            id="standard-basic"
            label="Email Address"
            type={"email"}
            variant="standard"
            error={errors.email?.message ? true : false}
            helperText={errors?.email?.message}
            {...register("email")}
          />
          <TextField
            id="standard-basic"
            type={"password"}
            label="Password"
            variant="standard"
            error={errors.password?.message ? true : false}
            helperText={errors?.password?.message}
            {...register("password")}
          />
          <Box sx={{ display: "flex", margin: "15px 0" }}>
            <Checkbox
              size="small"
              {...label}
              // defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
                margin: "0 10px 0 0",
                padding: "0",
                display: "inline",
              }}
            />

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.71rem",
              }}
            >
              Let's get personal! We'll send you only the good stuff: Exclusive
              early access to Sale, new arrivals and promotions. No nasties.
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.71rem",
              textAlign: "center",
              color: "#8C8C8C",
              "& span": {
                color: "#000",
                textDecoration: "underline",
              },
            }}
          >
            By signing up you agree to <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>
          </Typography>
          <ButtonSignup type="submit" variant="contained">
            REGISTER NOW
          </ButtonSignup>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              textAlign: "center",
              color: "#D1094B",
              textDecoration: "underline",
            }}
          >
            I HAVE AN ACCOUNT
          </Typography>
        </Form>
      </Box>
    </>
  );
};
