import React, { ChangeEvent } from 'react';
import { FileInput, CustomFileButton } from './Input.styles';
import { Loader } from '../Loader';

interface Props {
  label: string;
  isLoading: boolean;
  $backgroundColor?: string;
  $color?: string;
  $borderColor?: string;
  $width?: number;
  $height?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const File: React.FC<Props> = ({
  label,
  $backgroundColor,
  $color,
  $borderColor,
  $width,
  $height,
  onChange,
  isLoading,
}) => {
  return (
    <>
      <CustomFileButton
        htmlFor="fileInput"
        $backgroundColor={$backgroundColor}
        $color={$color}
        $borderColor={$borderColor}
        $width={$width}
        $height={$height}
      >
        {isLoading ? (
          <>
            <Loader $size={20} />
          </>
        ) : (
          label
        )}
      </CustomFileButton>
      <FileInput
        id="fileInput"
        type="file"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={onChange}
      />
    </>
  );
};

export default File;
