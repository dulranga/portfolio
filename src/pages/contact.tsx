import Input from "@components/input";
import { DownloadResume } from "@components/intro";
import contactFields from "@constants/contact-details";
import SubmitError, { SubmitErrorProps } from "@errors/submit-error";
import styles from "@styles/pages.module.scss";
import axios from "axios";
import Head from "next/head";
import { FC, FormEvent, useState } from "react";

interface ContactPageProps {}

const getKeys = () => contactFields.map((field) => field.id);

type Key = ReturnType<typeof getKeys>[number];
type Info = {
  [key in Key]: string | Blob;
};

const ContactPage: FC<ContactPageProps> = () => {
  const [error, setError] = useState<SubmitErrorProps>({ show: false });
  const [info, setInfo] = useState<Info>({
    name: "",
    description: "",
    email: "",
    title: "",
    ui: "",
  });

  const updateInfo = (key: Key) => (value: string | Blob) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const submitInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      contactFields
        .filter((field) => field.inputProps?.required)
        .some((input) => !!info[input.id] == false)
    )
      return setError({ show: true, message: "Fill all required fields" });

    setError({ show: false });

    const fd = new FormData();

    Object.keys(info).forEach((key) => {
      fd.append(key, info[key]);
    });

    try {
      // const req = await backend.post("contact", new FormData(e.target));
      const req = await axios({
        method: "POST",
        url: "http://localhost:8000/contact.php",
        data: fd,
      });

      const res = await req.data;

      if (res.error) setError({ show: true, message: res.error });
    } catch (error: any) {
      setError({ show: true, message: error.message });
    }
  };

  return (
    <main className={styles.contact_page}>
      <Head>
        <title>Contact Me - Dulranga</title>
        <meta
          name="description"
          content="Contact me with a simple message. Hire me to build your Amazing website"
        />
      </Head>
      <h1>Say Hi !</h1>

      <div className="content">
        <form onSubmit={submitInfo}>
          {contactFields.map((field, i) => (
            <Input
              key={field.id}
              delay={i * 0.05}
              updateState={updateInfo(field.id)}
              {...field}
            />
          ))}
          <div>
            <button type="submit" className={styles.submit}>
              Send
            </button>
            <DownloadResume />
          </div>
        </form>
      </div>
      <SubmitError {...error} close={() => setError({ show: false })} />
    </main>
  );
};

export default ContactPage;
