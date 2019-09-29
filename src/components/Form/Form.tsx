import React, { FormEvent, FormEventHandler, useCallback } from 'react';

interface IProps {
  children: any;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const Form: React.FunctionComponent<IProps> = ({
  children,
  onSubmit,
  className,
}) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    event => {
      event.preventDefault();
      onSubmit(event);
    },
    [onSubmit],
  );

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
