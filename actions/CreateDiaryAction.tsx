"use server"

import { redirect } from "next/navigation";

export const CreateDiaryAction = async (formData: FormData) => {
    const content = formData.get("content");
    console.log({ content });

    redirect("/Dashboard/my-diary");
}
