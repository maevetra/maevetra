"use client"
import {useSectionInView} from "@/lib/hooks";
import Heading from "../components/heading";
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";

export default function Contact() {
    const {ref} = useSectionInView("contact");
    const pending = false
    return (
        <motion.section
            ref={ref}
            id="contact"
            className="min-w-screen items-center justify-between px-36">
            <Heading
                number="04"
                title="Don't be a stranger"
                description="Let's connect!"
                width="4/5"/>
            <p className="text-gray-700 mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:maeve.ntra@gmail.com">
                    maeve.ntra@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-6 flex flex-col dark:text-black"
                action={async (formData) => {
                    //const {data, error} = await sendEmail(formData);

                }}>
                <input
                    className="h-12 px-4 outline dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required={true}
                    maxLength={500}
                    placeholder="Your email"/>
                <textarea
                    className="h-30 my-3 p-4 outline dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required={true}
                    maxLength={5000}/>
                <button
                    type="submit"
                    className="w-fit bg-nblue hover:scale-110 text-white font-bold whitespace-nowrap hover:bg-red-700 px-4 py-2 place-self-end"
                    disabled={pending}>
                      Submit{" "}
                </button>
            </form>
        </motion.section>
    )
}

function useFormStatus(): {
    pending: any;
} {
    throw new Error("Function not implemented.");
}
