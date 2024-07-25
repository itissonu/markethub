import React, { forwardRef } from 'react';
import QRCode from 'qrcode.react';

type QRCodeProps = {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
};

const QRCodeComponent = forwardRef<HTMLDivElement, QRCodeProps>(
  ({ value, size = 128, bgColor = '#ffffff', fgColor = '#000000' }, ref) => {
    return (
      <div ref={ref}>
        <QRCode
          value={value}
          size={size}
          bgColor={bgColor}
          fgColor={fgColor}
        />
      </div>
    );
  }
);

export default QRCodeComponent;
