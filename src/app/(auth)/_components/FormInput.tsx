interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export function FormInput({ icon, className, ...props }: FormInputProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50">{icon}</div>
      <input
        {...props}
        className={`w-full bg-white dark:bg-surface-dark-layer-5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500 ${className}`}
      />
    </div>
  );
}
