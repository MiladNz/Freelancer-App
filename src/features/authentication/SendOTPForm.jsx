import { useState } from "react";

function SendOTPForm() {
  const [phonenumber, setPhonenumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label className="mb-1" htmlFor="phonenumber">
            شماره موبایل
          </label>
          <input
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            id="phonenumber"
            className="textField__input"
            type="text"
          />
        </div>
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
