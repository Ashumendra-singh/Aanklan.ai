import React, { useState } from 'react';

// Password Reset Component
const ResetPasswordScreen = ({ onPasswordReset }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validatePassword = () => {
    const newErrors = {};

    if (!newPassword) {
      newErrors.newPassword = 'Password is required';
    } else if (newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onReturnToLogin = () => {
    onPasswordReset();
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validatePassword()) {
      setIsSuccess(true);
    }
  };
  if(isSuccess){
    return (
    <div className="relative flex min-h-screen w-full flex-col items-center">
      <main className="flex w-full flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-white/5 p-6 sm:p-8">
          <div className="flex flex-col items-center text-center">
            {/* Success Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600 dark:text-green-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-black dark:text-white">
              Password Reset Successful!
            </h1>
            <p className="mt-3 text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
              Your password has been successfully reset. You can now log in with your new password.
            </p>

            {/* Return to Login Button */}
            <button
              onClick={onReturnToLogin}
              className="mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-[#135bec] px-6 text-base font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            >
              Return to Login
            </button>
          </div>
        </div>
      </main>
    </div>
    );
    }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center">
      <main className="flex w-full flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-white/5 p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-black dark:text-white">
              Reset Your Password
            </h1>
            <p className="mt-2 text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
              Create a new, strong password for your account.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* New Password Field */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium leading-normal text-black dark:text-white">
                New Password
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-input h-12 flex-1 resize-none overflow-hidden rounded-lg rounded-r-none border border-r-0 border-gray-300 bg-white p-3 pr-2 text-base font-normal leading-normal text-black placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-0 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-primary"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="flex items-center justify-center rounded-r-lg border border-l-0 border-gray-300 bg-white px-3 text-gray-500 hover:text-gray-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showNewPassword ? (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>
              )}
            </label>

            {/* Confirm Password Field */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium leading-normal text-black dark:text-white">
                Confirm New Password
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input h-12 flex-1 resize-none overflow-hidden rounded-lg rounded-r-none border border-r-0 border-gray-300 bg-white p-3 pr-2 text-base font-normal leading-normal text-black placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-0 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-primary"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="flex items-center justify-center rounded-r-lg border border-l-0 border-gray-300 bg-white px-3 text-gray-500 hover:text-gray-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showConfirmPassword ? (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </label>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="mt-2 flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              Reset Password
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}   


// Success Screen Component
// const SuccessScreen = ({ onReturnToLogin }) => {
//   return (
//     <div className="relative flex min-h-screen w-full flex-col items-center">
//       <main className="flex w-full flex-1 items-center justify-center p-4">
//         <div className="w-full max-w-md rounded-xl bg-white dark:bg-zinc-900/50 p-6 sm:p-8">
//           <div className="flex flex-col items-center text-center">
//             {/* Success Icon */}
//             <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-10 w-10 text-green-600 dark:text-green-400"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="20 6 9 17 4 12"/>
//               </svg>
//             </div>

//             {/* Success Message */}
//             <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-black dark:text-white">
//               Password Reset Successful!
//             </h1>
//             <p className="mt-3 text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
//               Your password has been successfully reset. You can now log in with your new password.
//             </p>

//             {/* Return to Login Button */}
//             <button
//               onClick={onReturnToLogin}
//               className="mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
//             >
//               Return to Login
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

export { ResetPasswordScreen };
