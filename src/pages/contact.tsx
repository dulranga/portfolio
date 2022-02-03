import backend from "@common/axios";
import Input from "@components/input";
import { DownloadResume } from "@components/intro";
import contactFields from "@constants/contact-details";
import SubmitError, { SubmitErrorProps } from "@errors/submit-error";
import styles from "@styles/pages.module.scss";
import axios from "axios";
import Head from "next/head";
import { FC, FormEvent, useEffect, useState } from "react";

interface ContactPageProps {}

const getKeys = () => contactFields.map((field) => field.id);

type Key = ReturnType<typeof getKeys>[number];
type Info = {
  [key in Key]: string | Blob;
};

const DEFAULTS = {
  name: "",
  description: "",
  email: "",
  title: "",
  ui: "",
};

const ContactPage: FC<ContactPageProps> = () => {
  const [error, setError] = useState<SubmitErrorProps>({ show: false });
  const [info, setInfo] = useState<Info>(DEFAULTS);

  useEffect(() => {}, [info]);

  const updateInfo = (key: Key) => (value: string | Blob) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const submitInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      contactFields
        .filter((field) => field.inputProps?.required)
        .some((input) => !!info[input.id] === false)
    )
      return setError({ show: true, message: "Fill all required fields" });

    setError({ show: false });

    const fd = new FormData();

    Object.keys(info).forEach((key) => {
      fd.append(key, info[key]);
    });

    try {
      const req = await backend({
        url: "/contact.php",
        method: "POST",
        data: fd,
      });

      const res = await req.data;

      if (res.error) return setError({ show: true, message: res.error });
      if (res.success) {
        // @ts-ignore
        e.target.reset();
        setInfo(DEFAULTS);
        return setError({ success: true, show: true, message: res.message });
      }
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
