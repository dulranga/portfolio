import { InputProps } from "@components/input";
import {
  Description,
  Mail,
  Person,
  Title,
  ViewQuilt,
} from "@material-ui/icons";
import { EMAIL_REGEX, TITLE_REGEX, USERNAME_REGEX } from "./regex";

const contactFields: InputProps[] = [
  {
    label: "What's your name?",
    id: "name",
    icon: <Person />,
    validator: (value) => ({
      valid: USERNAME_REGEX.test(value),
      message: "A Name cannot contain anything else but letters!",
    }),
    inputProps: {
      placeholder: "John snow",
      required: true,
    },
  },
  {
    label: "What's your email?",
    id: "email",
    icon: <Mail />,
    validator: (value) => ({
      valid: EMAIL_REGEX.test(value),
      message: "Looks like this is not an email",
    }),
    inputProps: {
      placeholder: "john@westeros.com",
      required: true,
    },
  },
  {
    label: "Project title?",
    id: "title",
    icon: <Title />,
    validator: (value) => ({
      valid: TITLE_REGEX.test(value),
      message: "Enter a valid title please",
    }),
    inputProps: {
      placeholder: "What's your amazing website is about",
      required: true,
    },
  },
  {
    label: "Has a UI?",
    id: "ui",
    icon: <ViewQuilt />,
    inputProps: {
      placeholder: "That's awesome if you got a UI already",
      type: "file",
    },
  },
  {
    label: "A brief description",
    id: "description",
    icon: <Description />,
    inputElement: <textarea cols={10} rows={5} />,
    validator: (value) => ({
      valid: EMAIL_REGEX.test(value),
      message: "This need to be a simple description",
    }),
    inputProps: {
      required: true,
      placeholder: "my website is all about ...",
    },
  },
];
export default contactFields;
