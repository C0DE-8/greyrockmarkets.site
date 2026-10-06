import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight, FiShield, FiCheck, FiLock } from "react-icons/fi";
import { api, session } from "../api/client";
import { Brand, Button, Field, Status } from "../components/UI";
import s from "./Auth.module.css";
import { LanguagePicker, useLanguage } from "../i18n";
export default function Auth({ register = false }) {
  const { t } = useLanguage();
  const [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const data = await api.post(
        register ? "/register" : "/login",
        Object.fromEntries(new FormData(e.currentTarget)),
      );
      if (!data.token)
        throw new Error(
          data.message ||
            "Unable to sign in. Please contact the platform administrator.",
        );
      session.set(data.token);
      navigate("/app");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className={s.page}>
      <aside>
        <Brand />
        <div>
          <span>{t("nextChapter")}</span>
          <h1>
            A little vision.
            <br />A bigger <em>future.</em>
          </h1>
          <p>
            {t("futureCopy")}
            <br />{t("nextCopy")}
          </p>
          <div className={s.art} aria-hidden="true">
            <div className={s.artOrbit} />
            <span><FiArrowUpRight /></span>
          </div>
          <div className={s.benefits}>
            <span><FiCheck /> One clear view of your portfolio</span>
            <span><FiCheck /> Market tools and account activity</span>
          </div>
        </div>
        <small>
          <FiShield /> {t("builtAround")}
        </small>
      </aside>
      <main>
        <div className={s.authTop}><Link to="/" className={s.back}>← {t("backHome")}</Link><LanguagePicker className={s.authLanguage} /></div>
        <div className={s.formWrap}>
          <div className={s.formIntro}>
          <span className={s.eyebrow}>
            {register ? t("start") : t("welcome")}
          </span>
          <h2>{register ? t("registerTitle") : t("loginTitle")}</h2>
          <p>
            {register
              ? t("registerCopy")
              : t("loginCopy")}
          </p>
          <div className={s.secureNote}><FiLock /> {t("secure")}</div>
          </div>
          <form onSubmit={submit} className={register ? s.register : ""}>
            {register ? (
              <>
                <Field
                  label={t("fullName")}
                  name="full_name"
                  autoComplete="name"
                  required
                />
                <Field
                  label={t("username")}
                  name="username"
                  autoComplete="username"
                  required
                />
                <Field
                  label={t("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Field
                  label={t("phone")}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </>
            ) : (
              <Field
                label={t("identifier")}
                name="identifier"
                autoComplete="username"
                required
              />
            )}
            <Field
              label={t("password")}
              name="password"
              type="password"
              minLength={register ? 8 : undefined}
              autoComplete={register ? "new-password" : "current-password"}
              required
            />
            <div className={s.full}>
              <Status error={error} />
              {register && (
                <>
                  <label className={s.consent}>
                    <input
                      name="risk_acknowledged"
                      type="checkbox"
                      value="yes"
                      required
                    />
                    <span>
                      {t("risk")}
                    </span>
                  </label>
                  <label className={s.consent}>
                    <input
                      name="terms_acknowledged"
                      type="checkbox"
                      value="yes"
                      required
                    />
                    <span>
                      {t("agree")}{" "}
                      <Link
                        to="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("terms")}
                      </Link>
                      , including responsible-use rules.
                    </span>
                  </label>
                </>
              )}
              <Button disabled={busy} type="submit">
                {busy
                  ? t("wait")
                  : register
                    ? t("create")
                    : t("signIn")}
                <FiArrowUpRight />
              </Button>
              <span className={s.formFootnote}><FiShield /> {t("secureFoot")}</span>
            </div>
          </form>
          <p className={s.switch}>
            {register
              ? t("already")
              : t("newHere")}{" "}
            <Link to={register ? "/login" : "/register"}>
              {register ? t("signIn") : t("switchRegister")}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
