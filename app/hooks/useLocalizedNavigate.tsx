import { useLocale } from "react-intlayer";
import { type NavigateOptions, type To, useNavigate } from "react-router";
import { localizeTo } from "~/components/localized-link";

export const useLocalizedNavigate = () => {
  const navigate = useNavigate();
  const { locale } = useLocale();

  const localizedNavigate = (to: To, options?: NavigateOptions) => {
    const localizedTo = localizeTo(to, locale);

    navigate(localizedTo, options);
  };

  return localizedNavigate;
};
