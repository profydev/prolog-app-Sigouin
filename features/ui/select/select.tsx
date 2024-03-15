type SelectProps = {
  children?: React.ReactNode;
};

export function Select({ children }: SelectProps) {
  return (
    <div>
      <select>{children}</select>
    </div>
  );
}
