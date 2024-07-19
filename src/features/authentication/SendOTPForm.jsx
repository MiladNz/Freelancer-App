import { useState } from "react";
import Textfield from "../../ui/Textfield";

function SendOTPForm() {
  const [phonenumber, setPhonenumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <Textfield
          name="phonenumber"
          value={phonenumber}
          label="شماره موبایل"
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
