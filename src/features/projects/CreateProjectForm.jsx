import { TbFilter } from "react-icons/tb";
import TextField from "../../ui/Textfield";
import { useState } from "react";

function CreateProjectForm() {
  const [title, setTitle] = useState("");
  return (
    <form className="">
      <TextField
        label="عنوان پروژه"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default CreateProjectForm;
