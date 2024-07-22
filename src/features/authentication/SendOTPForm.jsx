// import { useState } from "react";
import Textfield from "../../ui/Textfield";
// import { useMutation } from "@tanstack/react-query";
// import { getOtp } from "../../services/authService";
// import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <Textfield
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
