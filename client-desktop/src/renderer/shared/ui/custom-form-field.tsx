import type { HTMLInputTypeAttribute } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
  Input,
} from '~shared/shadcn/components/ui';

type CustomFormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
  className?: string;
  type: HTMLInputTypeAttribute;
};

export const CustomFormField = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  type,
}: CustomFormFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className ? className : 'mb-3'}>
          <FormLabel>{label}</FormLabel>
          <FormDescription className="text-sm text-zinc-400">
            {description}
          </FormDescription>
          <FormControl>
            <Input type={type} placeholder={label} {...field} />
          </FormControl>
          <FormMessage className="text-sm text-red-400" />
        </FormItem>
      )}
    />
  );
};
