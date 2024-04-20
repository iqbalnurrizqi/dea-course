
import { CreateDiaryAction } from '@/actions/CreateDiaryAction';
import React from 'react'

export default function CreateDiaryForm() {

  return (
    <form
      action={CreateDiaryAction}
      className=" flex flex-col gap-4 max-w-xl m-auto"
    >
      <textarea
        placeholder="isi diary kamu disini "
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content"
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Create now
      </button>
    </form>
  );
}
