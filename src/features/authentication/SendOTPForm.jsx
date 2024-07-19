import { useState } from "react";
import Textfield from "../../ui/Textfield";

function SendOTPForm() {
  const [phonenumber, setPhonenumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="space-y-10" onSubmit={sendOtpHandler}>
        <Textfield
          name="phonenumber"
          value={phonenumber}
          label="شماره موبایل"
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
