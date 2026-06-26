import { useState } from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "../animate-ui/components/radix/alert-dialog";
import { AlertDialogTitle } from "../animate-ui/primitives/radix/alert-dialog";
import { t } from "i18next";

type SliderInputWidgetProps = {
    title: string;
    description: string;
    info: string;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}



export default function SliderInputWidget({ title, description, info, total, setTotal }: SliderInputWidgetProps) {
    const [value, setValue] = useState(0);

    const disabled = total >= 100;


    return (
        <div className="card w-full h-full p-5">
            <div className="flex items-center justify-between w-full mb-2 gap-2">
                <label htmlFor="slider" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {title}
                </label>
                <AlertDialog>
                <AlertDialogTrigger className="nobg"><i className="bi bi-info-circle text-blue-500 cursor-pointer hover:text-blue-600" onClick={() => (document.getElementById('myDialog') as HTMLDialogElement)?.showModal()}></i></AlertDialogTrigger>
                <AlertDialogContent className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white border-0">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl">{title}</AlertDialogTitle>
                        <AlertDialogDescription className="text-md">{info}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="w-fit">{t('okay')}</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-start w-full mb-5">
                {description}
            </p>

            <input
                type="range"
                min={0}
                max={100}
                value={value}
                disabled={disabled}
                onChange={(e) => {
                    const newValue = Number(e.target.value);

                    setTotal(prev => prev - value + newValue);
                    setValue(newValue);
                }}
                className="w-full h-2 rounded-lg cursor-pointer"
            />
        </div>
    )
}