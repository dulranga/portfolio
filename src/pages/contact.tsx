import Input, { InputProps } from "@components/input";
import {
  Description,
  Mail,
  Person,
  Title,
  ViewQuilt,
} from "@material-ui/icons";
import styles from "@styles/pages.module.scss";
import { FC, FormEvent, useState } from "react";

interface ContactPageProps {}

const fields = [
  {
    label: "What's your name?",
    id: "name",
    icon: <Person />,
    inputProps: {
      placeholder: "John snow",
    },
  },
  {
    label: "What's your email?",
    id: "email",
    icon: <Mail />,
    inputProps: {
      placeholder: "john@westeros.com",
    },
  },
  {
    label: "Project title?",
    id: "title",
    icon: <Title />,
    inputProps: {
      placeholder: "What's your amazing website is about",
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
    inputProps: {
      placeholder: "helo",
    },
  },
] as const;

const getKeys = () => fields.map((field) => field.id);

type Key = ReturnType<typeof getKeys>[number];
type Info = {
  [key in Key]?: any;
};

const ContactPage: FC<ContactPageProps> = () => {
  const [info, setInfo] = useState<Info>({
    name: "",
    description: "",
    email: "",
    title: "",
    ui: "",
  });

  const updateInfo = (key: Key) => (value: any) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const submitInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className={styles.contact_page}>
      <h1>Say Hi !</h1>

      <div className="content">
        <form onSubmit={submitInfo}>
          {fields.map((field, i) => (
            <Input
              key={field.id}
              delay={i * 0.05}
              updateState={updateInfo(field.id)}
              {...field}
            />
          ))}
          <button type="submit" className={styles.submit}>
            send
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
