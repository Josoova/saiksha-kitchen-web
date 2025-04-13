
import { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const countryCodes = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'Australia' },
  { code: '+86', country: 'China' },
  { code: '+971', country: 'UAE' },
  { code: '+65', country: 'Singapore' },
  { code: '+60', country: 'Malaysia' },
];

export function PhoneInput({ value, onChange, className, disabled }: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState('+91');
  const [localNumber, setLocalNumber] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCountryCodeChange = (code: string) => {
    setCountryCode(code);
    updateFullNumber(code, localNumber);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only digits, restrict length to 10
    const numberValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setLocalNumber(numberValue);
    updateFullNumber(countryCode, numberValue);
  };

  const updateFullNumber = (code: string, number: string) => {
    onChange(`${code} ${number}`);
  };

  return (
    <div className={`flex ${className}`}>
      <Select 
        value={countryCode} 
        onValueChange={handleCountryCodeChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-[90px] flex-shrink-0 rounded-r-none border-r-0">
          <SelectValue placeholder="+91" />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.code} {country.country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        ref={inputRef}
        type="tel"
        placeholder="1234567890"
        value={localNumber}
        onChange={handleNumberChange}
        className="flex-grow rounded-l-none"
        disabled={disabled}
        maxLength={10}
      />
    </div>
  );
}
