import { useEffect, useState } from 'react';
import SliderInputWidget from '../Widgets/SliderInputWidget';
// import ThemeToggle from '../Utilties/changeMode';
// import LanguageToggle from '../Utilties/changeLang';
// import t from "@/componants/Data/translation";
import NavBar from '../Modules/navBar';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../Utilties/changeMode';

export default function Main() {
    const { t, i18n } = useTranslation();

    // للتأكيد إن الاتجاه مظبوط مع أي تغيير للغة
    useEffect(() => {
        document.body.dir = i18n.language.startsWith('ar') ? 'rtl' : 'ltr';
    }, [i18n.language]);

    const [total, setTotal] = useState(0);

    const { theme } = useTheme();

    return (
        <main className="flex flex-1 w-full flex-col items-center py-22 md:pt-32 px-16 bg-white dark:bg-black not-sm:p-5 gap-5">
            <NavBar />
            <img
                key={theme}
                src="/images/logo.png"
                alt="Logo"
                className="w-30 h-auto makeStroke"
            />
            <h1 className='relative bottom-10 left-5 text-xl'>{t('tawlefty')}</h1>
            <h1>{total}%</h1>
            <div className="grid grid-cols-2 gap-4 w-full max-w-5xl">
                <SliderInputWidget title={t('arabica')} description={t('arabicaDesc')} info={t('arabicaInfo')} total={total} setTotal={setTotal} />
                <SliderInputWidget title={t('robusta')} description={t('robustaDesc')} info={t('robustaInfo')} total={total} setTotal={setTotal} />
                <SliderInputWidget title={t('ethiopian')} description={t('ethiopianDesc')} info={t('ethiopianInfo')} total={total} setTotal={setTotal} />
                <SliderInputWidget title={t('colombian')} description={t('colombianDesc')} info={t('colombianInfo')} total={total} setTotal={setTotal} />
                <SliderInputWidget title={t('brazilian')} description={t('brazilianDesc')} info={t('brazilianInfo')} total={total} setTotal={setTotal} />
                <SliderInputWidget title={t('yemeni')} description={t('yemeniDesc')} info={t('yemeniInfo')} total={total} setTotal={setTotal} />
            </div>
        </main>
    )
}
