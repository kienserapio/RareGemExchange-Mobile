import { useCallback, useEffect, useRef, useState } from 'react';

interface UseOtpChannelOptions {
  onVerified: () => void;
}

const OTP_LENGTH = 6;
const SEND_DELAY_MS = 1000;
const VERIFY_DELAY_MS = 900;
const RESEND_COOLDOWN_SECONDS = 30;

/**
 * Simulated OTP channel (mobile or email) — no Twilio/backend wired up yet.
 * "Sending" and "verifying" are timed no-ops; any complete 6-digit code is
 * accepted. Swap `send`/`verify` for real API calls once a backend exists.
 */
export function useOtpChannel({ onVerified }: UseOtpChannelOptions) {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(0);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  const startCountdown = useCallback(() => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    setResendSeconds(RESEND_COOLDOWN_SECONDS);
    countdownRef.current = setInterval(() => {
      setResendSeconds((seconds) => {
        if (seconds <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current);
          return 0;
        }
        return seconds - 1;
      });
    }, 1000);
  }, []);

  const send = useCallback(() => {
    setError(null);
    setCode('');
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      startCountdown();
    }, SEND_DELAY_MS);
  }, [startCountdown]);

  const verify = useCallback(() => {
    if (code.length < OTP_LENGTH) {
      setError(`Enter the ${OTP_LENGTH}-digit code.`);
      return;
    }
    setError(null);
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onVerified();
    }, VERIFY_DELAY_MS);
  }, [code, onVerified]);

  return {
    code,
    setCode,
    error,
    isSending,
    isVerifying,
    resendSeconds,
    canResend: resendSeconds === 0 && !isSending,
    send,
    verify,
  };
}

export type OtpChannel = ReturnType<typeof useOtpChannel>;
