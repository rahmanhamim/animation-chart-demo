import React, { useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

type Inputs = {
    name: string;
    mobile: string;
    email: string;
    jobTitle: string;
    companyName: string;
    message: string;
};

const contactFormValidationSchema = yup.object().shape({
    name: yup.string().trim().required("Name is required"),
    mobile: yup.string().trim(),
    email: yup.string().email("Invalid email").required("Email is required"),
    jobTitle: yup.string().trim(),
    companyName: yup.string().trim(),
    message: yup.string().trim().required("Message is required"),
});

interface IProps {
    blur: string;
}

const ContactFormBlock = ({ blur }: IProps) => {
    const defaultValues = useMemo(() => {
        return {
            name: "",
            mobile: "",
            email: "",
            jobTitle: "",
            companyName: "",
            message: "",
        };
    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, dirtyFields },
    } = useForm({
        resolver: yupResolver(contactFormValidationSchema),
        defaultValues: defaultValues,
    });

    const onSubmit = (data: any) => {
        console.log({ data });
        try {
        } catch (error) {}
    };

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="relative w-fit h-fit">
            <div
                className={`absolute -top-48 -right-20 blur-[${
                    blur || "10px"
                }]`}
            >
                <Image
                    src="/assets/icons/polygon-1.svg"
                    height={300}
                    width={300}
                    alt=""
                />
            </div>
            <div
                className={`absolute -top-48 -left-16 blur-[${blur || "10px"}]`}
            >
                <Image
                    src="/assets/icons/polygon-3.svg"
                    height={300}
                    width={300}
                    alt=""
                />
            </div>
            <div
                className={`absolute -bottom-48 -right-16 blur-[${
                    blur || "10px"
                }]`}
            >
                <Image
                    src="/assets/icons/polygon-2.svg"
                    height={300}
                    width={300}
                    alt=""
                />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 bg-stone-400 p-3 w-fit rounded-lg relative z-50"
            >
                <input
                    placeholder="Name*"
                    {...register("name")}
                    className="border text-slate-800 p-2 rounded-lg focus:outline-none"
                />
                {errors.name?.message && (
                    <p className="-mt-3 leading-[100%] text-red-600">
                        {errors.name?.message}
                    </p>
                )}

                <input
                    placeholder="Mobile"
                    {...register("mobile", { required: true })}
                    className="border text-slate-800 p-2 rounded-lg focus:outline-none"
                />
                <input
                    placeholder="Email*"
                    {...register("email", { required: true })}
                    className="border text-slate-800 p-2 rounded-lg focus:outline-none"
                />
                {errors.email?.message && (
                    <p className="-mt-3 leading-[100%] text-red-600">
                        {errors.email?.message}
                    </p>
                )}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        placeholder="Job Title"
                        {...register("jobTitle", { required: true })}
                        className="border text-slate-800 p-2 rounded-lg focus:outline-none"
                    />
                    <input
                        placeholder="Company Name"
                        {...register("companyName", { required: true })}
                        className="border text-slate-800 p-2 rounded-lg focus:outline-none"
                    />
                </div>
                <textarea
                    placeholder="Message*"
                    {...register("message", { required: true })}
                    rows={8}
                    cols={50}
                    className="border text-slate-800 p-2 rounded-lg focus:outline-none"
                />
                {errors.message?.message && (
                    <p className="-mt-3 leading-[100%] text-red-600">
                        {errors.message?.message}
                    </p>
                )}

                <input
                    type="submit"
                    className="w-fit mx-auto px-5 py-1 rounded-full bg-sky-500 cursor-pointer"
                />
            </form>
        </div>
    );
};

export default ContactFormBlock;
